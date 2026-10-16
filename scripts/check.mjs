#!/usr/bin/env node
// The pull request check for this list. Plain Node 20 or later, no packages.
//
//   node scripts/check.mjs
//
// It reads catalog.schema.json and every file in data/, and says, for each
// item that is wrong, which file, which item and what is wrong. It also checks
// what one schema cannot: each file holds the wave its name says, an id is
// used once among the reviewed items and once among the listed ones, and every
// featured id is an item of the list.
//
// Passing here is not the last word. On a merge to main the list goes through
// the full check of the Munder Difflin app before it is signed; an item that
// fails that check is left out of the signed list.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SCHEMA = JSON.parse(fs.readFileSync(path.join(ROOT, 'catalog.schema.json'), 'utf8'));
const DATA = path.join(ROOT, 'data');
const MAX_SHOWN = 200;

/* ---- a small JSON Schema reader: the keywords catalog.schema.json uses ---------- */

const typeOf = (v) => (v === null ? 'null' : Array.isArray(v) ? 'array' : Number.isInteger(v) ? 'integer' : typeof v);
const isType = (v, t) => (t === 'number' ? typeof v === 'number' : t === 'integer' ? Number.isInteger(v) : typeOf(v) === t);
const resolve = (ref) => {
  if (!ref.startsWith('#/$defs/')) throw new Error(`unknown $ref ${ref}`);
  const s = SCHEMA.$defs[ref.slice('#/$defs/'.length)];
  if (!s) throw new Error(`unknown $ref ${ref}`);
  return s;
};
const show = (v) => { const t = JSON.stringify(v); return t === undefined ? String(v) : t.length > 60 ? `${t.slice(0, 57)}...` : t; };

/** Every way `value` breaks `schema`, as { at, why }. `at` is a JSON pointer. */
function problems(schema, value, at = '') {
  if (schema === true) return [];
  if (schema === false) return [{ at, why: 'is not allowed here' }];
  if (schema.$ref) return problems(resolve(schema.$ref), value, at);
  const out = [];
  if (schema.type) {
    const types = [].concat(schema.type);
    if (!types.some((t) => isType(value, t))) return [{ at, why: `must be ${types.join(' or ')}` }];
  }
  if ('const' in schema && JSON.stringify(value) !== JSON.stringify(schema.const)) out.push({ at, why: `must be ${show(schema.const)}` });
  if (schema.enum && !schema.enum.some((e) => JSON.stringify(e) === JSON.stringify(value))) out.push({ at, why: `must be one of ${schema.enum.map(show).join(', ')}` });
  if (typeof value === 'string') {
    if (schema.minLength !== undefined && value.length < schema.minLength) out.push({ at, why: `must be at least ${schema.minLength} characters` });
    if (schema.maxLength !== undefined && value.length > schema.maxLength) out.push({ at, why: `must be at most ${schema.maxLength} characters` });
    if (schema.pattern && !new RegExp(schema.pattern, 'u').test(value)) out.push({ at, why: `${show(value)} does not have the right form` });
  }
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined && value.length < schema.minItems) out.push({ at, why: `must hold at least ${schema.minItems}` });
    if (schema.maxItems !== undefined && value.length > schema.maxItems) out.push({ at, why: `must hold at most ${schema.maxItems}` });
    if (schema.uniqueItems && new Set(value.map((v) => JSON.stringify(v))).size !== value.length) out.push({ at, why: 'names something twice' });
    const head = schema.prefixItems ?? [];
    value.forEach((v, i) => {
      const s = i < head.length ? head[i] : schema.items;
      if (s !== undefined) out.push(...problems(s, v, `${at}/${i}`));
    });
  }
  if (typeOf(value) === 'object') {
    for (const k of schema.required ?? []) if (!(k in value)) out.push({ at, why: `needs "${k}"` });
    for (const [k, v] of Object.entries(value)) {
      if (schema.properties && k in schema.properties) out.push(...problems(schema.properties[k], v, `${at}/${k}`));
      else if (schema.additionalProperties === false) out.push({ at: `${at}/${k}`, why: 'is not a field this list knows' });
      else if (typeof schema.additionalProperties === 'object') out.push(...problems(schema.additionalProperties, v, `${at}/${k}`));
    }
  }
  for (const s of schema.allOf ?? []) out.push(...problems(s, value, at));
  if (schema.anyOf && !schema.anyOf.some((s) => problems(s, value, at).length === 0)) out.push({ at, why: 'matches none of the allowed forms' });
  if (schema.if) {
    const holds = problems(schema.if, value, at).length === 0;
    if (holds && schema.then) out.push(...problems(schema.then, value, at));
    if (!holds && schema.else) out.push(...problems(schema.else, value, at));
  }
  return out;
}

/* ---- the files ------------------------------------------------------------------- */

const errors = [];
const say = (file, where, why) => errors.push(`${file}${where ? ` ${where}` : ''}: ${why}`);
const waveOfName = (n) => (n === 'wave1.json' ? 1 : /^wave2-[a-z0-9-]+\.json$/.test(n) ? 2 : n === 'wave3.json' ? 3 : 0);

const names = fs.existsSync(DATA) ? fs.readdirSync(DATA).filter((n) => n.endsWith('.json')).sort() : [];
if (!names.length) say('data/', '', 'there are no data files');
const reviewedIds = new Map();
const listedIds = new Map();
let items = 0;
for (const name of names) {
  const file = `data/${name}`;
  if (name === 'featured.json') continue;
  const wave = waveOfName(name);
  if (!wave) { say(file, '', 'is not a file this list reads: name it wave1.json, wave2-<topic>.json or wave3.json'); continue; }
  let body;
  try { body = JSON.parse(fs.readFileSync(path.join(DATA, name), 'utf8')); } catch (e) { say(file, '', `is not JSON (${e.message})`); continue; }
  for (const p of problems({ $ref: '#/$defs/dataFile' }, body)) if (!/^\/entries\/\d+/.test(p.at)) say(file, p.at || '', p.why);
  const rows = Array.isArray(body?.entries) ? body.entries : [];
  rows.forEach((row, i) => {
    items++;
    const label = `item ${i + 1}${row && typeof row.id === 'string' ? ` (${row.id})` : ''}`;
    for (const p of problems({ $ref: '#/$defs/entry' }, row)) say(file, `${label}${p.at}`, p.why);
    if (row && row.wave !== wave) say(file, label, `is wave ${show(row?.wave)} in a file of wave ${wave}`);
    if (row && typeof row.id === 'string') {
      const seen = wave === 3 ? listedIds : reviewedIds;
      if (seen.has(row.id)) say(file, label, `uses an id already used in ${seen.get(row.id)}`);
      else seen.set(row.id, file);
    }
  });
}

const featuredFile = path.join(DATA, 'featured.json');
if (fs.existsSync(featuredFile)) {
  let list;
  try { list = JSON.parse(fs.readFileSync(featuredFile, 'utf8')); } catch (e) { say('data/featured.json', '', `is not JSON (${e.message})`); }
  if (list !== undefined) {
    for (const p of problems({ $ref: '#/$defs/featured' }, list)) say('data/featured.json', p.at, p.why);
    for (const id of Array.isArray(list) ? list : []) {
      if (typeof id === 'string' && !reviewedIds.has(id) && !listedIds.has(id)) say('data/featured.json', show(id), 'is not an item of the list');
    }
  }
}

if (errors.length) {
  console.error(`${errors.length} problem${errors.length === 1 ? '' : 's'} in ${items} items:`);
  for (const e of errors.slice(0, MAX_SHOWN)) console.error(`  ${e}`);
  if (errors.length > MAX_SHOWN) console.error(`  and ${errors.length - MAX_SHOWN} more`);
  process.exit(1);
}
console.log(`Checked ${items} items in ${names.length} files: no problems.`);
