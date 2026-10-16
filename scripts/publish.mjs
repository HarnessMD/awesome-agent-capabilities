// GENERATED: do not edit. This file is made from the Munder Difflin app's own
// catalog tools and item checker and copied here whole, so this list is checked
// by the very code the app runs before it is signed.
//
//   node scripts/publish.mjs --check   build the list from data/ and check every
//                                      item; write nothing; no key needed
//   node scripts/publish.mjs           the same, then write README.md and the pages
//                                      in listed/ and sign catalog-update.json
//                                      (the publish workflow, on every merge to main)

var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// tools/capabilities/awesome/publish.src.mjs
import crypto3 from "node:crypto";
import fs2 from "node:fs";
import path4 from "node:path";
import { fileURLToPath as fileURLToPath2 } from "node:url";

// src/shared/capCatalog.ts
var capCatalog_exports = {};
__export(capCatalog_exports, {
  CATALOG_CAN: () => CATALOG_CAN,
  CATALOG_ENGINE_NAME: () => CATALOG_ENGINE_NAME,
  CATALOG_FEATURED_MAX: () => CATALOG_FEATURED_MAX,
  CATALOG_FILTERS: () => CATALOG_FILTERS,
  CATALOG_ID_RE: () => CATALOG_ID_RE,
  CATALOG_KINDS: () => CATALOG_KINDS,
  CATALOG_VERSION: () => CATALOG_VERSION,
  ENGINES: () => ENGINES,
  INSTALL_PROGRAMS: () => INSTALL_PROGRAMS,
  agentInstallPrompt: () => agentInstallPrompt,
  agentUninstallPrompt: () => agentUninstallPrompt,
  canList: () => canList,
  catalogCounts: () => catalogCounts,
  catalogEntryProblem: () => catalogEntryProblem,
  catalogLetter: () => catalogLetter,
  catalogMatches: () => catalogMatches,
  catalogSections: () => catalogSections,
  cleanCatalogEntry: () => cleanCatalogEntry,
  cleanCatalogFile: () => cleanCatalogFile,
  filterOfKind: () => filterOfKind,
  installProblem: () => installProblem,
  riskOf: () => riskOf,
  stepLine: () => stepLine,
  stepProblem: () => stepProblem
});
var CATALOG_VERSION = 1;
var CATALOG_KINDS = ["mcp-server", "skill", "skill-pack", "plugin", "subagent-set", "hook-pack", "status-line", "tool", "agent", "app"];
var CATALOG_FILTERS = ["mcp", "skill", "plugin", "tool"];
function filterOfKind(kind) {
  if (kind === "mcp-server") return "mcp";
  if (kind === "skill" || kind === "skill-pack") return "skill";
  if (kind === "plugin" || kind === "subagent-set" || kind === "hook-pack" || kind === "status-line") return "plugin";
  return "tool";
}
var CATALOG_CAN = ["reads", "writes", "sends", "spends", "deletes"];
var RISK_ORDER = ["low", "medium", "high"];
var CATALOG_FEATURED_MAX = 48;
var CATALOG_ID_RE = /^[a-z0-9][a-z0-9-]{0,79}$/;
var ENGINES = ["claude", "codex", "antigravity", "cursor", "copilot", "opencode", "gemini", "grok", "any"];
var CATALOG_ENGINE_NAME = {
  claude: "Claude Code",
  codex: "Codex",
  antigravity: "Antigravity",
  cursor: "Cursor",
  copilot: "GitHub Copilot",
  opencode: "OpenCode",
  gemini: "Gemini CLI",
  grok: "Grok Build"
};
var INSTALL_PROGRAMS = ["claude", "codex", "npx", "npm", "pnpm", "bun", "uv", "uvx", "pipx", "pip", "brew", "gh", "cargo", "go"];
var STEP_WORD_RE = /^[A-Za-z0-9@+=:,.\/_-]{1,300}$/;
var SCRIPT_FLAGS = ["-e", "--eval", "-c", "--command", "--call", "-p", "--print", "--exec", "-x", "--shell", "--script-shell"];
var NPM_PKG_RE = /^(@[a-z0-9][a-z0-9._-]*\/)?[A-Za-z0-9][A-Za-z0-9._-]*(@[A-Za-z0-9][A-Za-z0-9._-]*)?$/;
var PY_PKG_RE = /^[A-Za-z0-9][A-Za-z0-9._-]*(==[A-Za-z0-9][A-Za-z0-9._-]*)?$/;
var UV_PKG_RE = /^[A-Za-z0-9][A-Za-z0-9._-]*((==|@)[A-Za-z0-9][A-Za-z0-9._-]*)?$/;
var BREW_RE = /^[a-z0-9][a-z0-9+._@-]*(\/[a-z0-9][a-z0-9+._@-]*){0,2}$/;
var REPO_RE = /^[A-Za-z0-9][A-Za-z0-9_.-]*\/[A-Za-z0-9][A-Za-z0-9_.-]*$/;
var CRATE_RE = /^[A-Za-z0-9][A-Za-z0-9_-]*(@[0-9][A-Za-z0-9._-]*)?$/;
var GO_RE = /^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}(\/[A-Za-z0-9][A-Za-z0-9._-]*)+@[A-Za-z0-9][A-Za-z0-9._-]*$/;
var PLUGIN_RE = /^[A-Za-z0-9][A-Za-z0-9_.-]*(@[A-Za-z0-9][A-Za-z0-9_.-]*)?$/;
var SERVER_NAME_RE = /^[A-Za-z0-9][A-Za-z0-9_-]{0,59}$/;
var HTTPS_WORD_RE = /^https:\/\/[A-Za-z0-9][A-Za-z0-9.-]*(:[0-9]{1,5})?(\/[A-Za-z0-9@+:,.\/_-]*)?$/;
var SCOPE_RE = /^(user|local|project)$/;
var ENV_NAME_RE = /^[A-Z][A-Z0-9_]{1,60}$/;
var GLOBAL = ["-g", "--global"];
var STEP_SHAPES = {
  claude: [
    { sub: ["plugin", "marketplace", "add"], args: [REPO_RE] },
    { sub: ["plugin", "install"], valued: { "--scope": SCOPE_RE, "-s": SCOPE_RE }, args: [PLUGIN_RE] }
  ],
  // A package for the person, never into the home folder as a project.
  npm: [{ sub: ["install"], flags: GLOBAL, need: GLOBAL, args: [NPM_PKG_RE] }, { sub: ["i"], flags: GLOBAL, need: GLOBAL, args: [NPM_PKG_RE] }],
  pnpm: [{ sub: ["add"], flags: GLOBAL, need: GLOBAL, args: [NPM_PKG_RE] }],
  bun: [{ sub: ["add"], flags: GLOBAL, need: GLOBAL, args: [NPM_PKG_RE] }, { sub: ["install"], flags: GLOBAL, need: GLOBAL, args: [NPM_PKG_RE] }],
  uv: [{ sub: ["tool", "install"], args: [UV_PKG_RE] }],
  pipx: [{ sub: ["install"], args: [PY_PKG_RE] }],
  pip: [{ sub: ["install"], flags: ["--user", "-U", "--upgrade"], args: [PY_PKG_RE] }],
  brew: [{ sub: ["install"], flags: ["--cask"], args: [BREW_RE] }, { sub: ["tap"], args: [REPO_RE] }],
  gh: [{ sub: ["extension", "install"], args: [REPO_RE] }],
  cargo: [{ sub: ["install"], flags: ["--locked"], args: [CRATE_RE] }],
  go: [{ sub: ["install"], args: [GO_RE] }]
};
function shapeProblem(shape, words) {
  const args = [];
  let needed = !shape.need;
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (shape.need?.includes(w)) needed = true;
    if (shape.flags?.includes(w)) continue;
    const value = shape.valued?.[w];
    if (value) {
      if (!value.test(words[i + 1] ?? "")) return `"${w}" is followed by a value an install step may not carry`;
      i++;
      continue;
    }
    if (w.startsWith("-")) return `"${w.slice(0, 40)}" is not a flag this step may carry`;
    args.push(w);
  }
  if (!needed) return `this step must carry ${shape.need.join(" or ")}`;
  if (args.length !== shape.args.length) return `this step names ${args.length} things where it may name ${shape.args.length}`;
  for (let i = 0; i < args.length; i++) if (!shape.args[i].test(args[i])) return `"${args[i].slice(0, 60)}" is not a name this step may install`;
  return null;
}
function tailProblem(words) {
  for (const w of words) {
    if (w.includes("=")) return `"${w.slice(0, 40)}" joins a flag and a value; an install step keeps them apart`;
    if (w.startsWith("-")) {
      if (SCRIPT_FLAGS.includes(w)) return `"${w}" would hand the program a script`;
      if (!/^(-[A-Za-z]|--[A-Za-z][A-Za-z0-9-]*)$/.test(w)) return `"${w.slice(0, 40)}" is not a flag an install step may carry`;
      continue;
    }
    if (/^[.\/]/.test(w) || w.split("/").includes("..")) return `"${w.slice(0, 40)}" is a path on this machine`;
    if (w.includes("://") && !HTTPS_WORD_RE.test(w)) return `"${w.slice(0, 40)}" is not an https address`;
  }
  return null;
}
function runnerProblem(argv) {
  const [program, ...rest] = argv;
  let i = 0;
  if (program === "npx") {
    while (rest[i] === "-y" || rest[i] === "--yes") i++;
    if (!NPM_PKG_RE.test(rest[i] ?? "")) return "npx must be followed by the name of a package";
  } else if (program === "uvx") {
    if (rest[i] === "--from") {
      if (!UV_PKG_RE.test(rest[i + 1] ?? "")) return "uvx --from must be followed by the name of a package";
      i += 2;
    }
    if (!UV_PKG_RE.test(rest[i] ?? "")) return "uvx must be followed by the name of a package";
  } else return `"${String(program).slice(0, 40)}" is not a program that may start a server`;
  return tailProblem(rest.slice(i + 1));
}
function mcpAddProblem(program, words) {
  const cut = words.indexOf("--");
  const head = cut < 0 ? words : words.slice(0, cut);
  const valued = program === "claude" ? { "--transport": /^(http|sse|stdio)$/, "--scope": SCOPE_RE, "-s": SCOPE_RE } : { "--url": HTTPS_WORD_RE, "--bearer-token-env-var": ENV_NAME_RE };
  const local = cut >= 0;
  const hostedByFlag = program === "codex" && head.includes("--url");
  const args = local || hostedByFlag ? [SERVER_NAME_RE] : [SERVER_NAME_RE, HTTPS_WORD_RE];
  if (program === "codex" && !local && !hostedByFlag) return "codex mcp add needs --url or a command after --";
  const problem = shapeProblem({ sub: [], valued, args }, head);
  if (problem) return problem;
  return local ? runnerProblem(words.slice(cut + 1)) : null;
}
function stepProblem(step) {
  if (!step || typeof step !== "object" || Array.isArray(step)) return "a step must be an object";
  const raw = step.argv;
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 24) return "a step needs 1 to 24 words";
  for (const w of raw) if (typeof w !== "string" || !STEP_WORD_RE.test(w)) return "a step holds a word a command line may not carry";
  const argv = raw;
  const program = argv[0];
  if (!INSTALL_PROGRAMS.includes(program)) return `"${program.slice(0, 40)}" is not a program an install step may start`;
  const label = step.label;
  if (label !== void 0 && (typeof label !== "string" || label.length > 120)) return "a step label must be text of at most 120 characters";
  if (program === "npx" || program === "uvx") return runnerProblem(argv);
  if ((program === "claude" || program === "codex") && argv[1] === "mcp" && argv[2] === "add") return mcpAddProblem(program, argv.slice(3));
  let last = `${program} may not be asked to do that in an install step`;
  for (const shape of STEP_SHAPES[program] ?? []) {
    if (!shape.sub.every((w, i) => argv[1 + i] === w)) continue;
    const problem = shapeProblem(shape, argv.slice(1 + shape.sub.length));
    if (!problem) return null;
    last = problem;
  }
  return last;
}
var GITHUB_TREE_RE = /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/tree\/[A-Za-z0-9_.-]+(\/[A-Za-z0-9_.-]+)+\/?$/;
function isGithubFolder(v) {
  if (typeof v !== "string" || !GITHUB_TREE_RE.test(v)) return false;
  const parts = v.replace(/\/$/, "").slice("https://github.com/".length).split("/");
  return !parts.some((s) => s === "." || s === "..") && !parts[parts.length - 1].startsWith(".");
}
var text = (v, max) => typeof v === "string" && v.trim() && v.trim().length <= max ? v.trim() : null;
var isHttps = (v) => typeof v === "string" && /^https:\/\/[^\s]{4,400}$/.test(v);
function installProblem(raw, wave) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return '"install" must be an object';
  const o = raw;
  if (o.door !== "mcp-local" && o.door !== "skill-folder" && o.door !== "command" && o.door !== "none") return '"install.door" is not one of the four doors';
  if (wave === 3 && o.door !== "none") return "an entry nobody reviewed may not have an install button";
  if (!Array.isArray(o.manual) || o.manual.length > 12 || o.manual.some((l) => text(l, 400) === null)) return '"install.manual" must be up to 12 short lines';
  if (o.door === "mcp-local" && (typeof o.ref !== "string" || !CATALOG_ID_RE.test(o.ref))) return `"install.ref" must name a server in the app's own list`;
  if (o.door === "skill-folder" && !isGithubFolder(o.url)) return '"install.url" must be a GitHub folder';
  if (o.door === "command") {
    if (!Array.isArray(o.steps) || o.steps.length === 0 || o.steps.length > 4) return '"install.steps" must hold 1 to 4 steps';
    for (const s of o.steps) {
      const p = stepProblem(s);
      if (p) return p;
    }
  }
  return null;
}
function catalogEntryProblem(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return "must be an object";
  const o = raw;
  if (typeof o.id !== "string" || !CATALOG_ID_RE.test(o.id)) return '"id" must be lower case letters, digits and dashes';
  if (text(o.name, 80) === null) return '"name" must be text of at most 80 characters';
  if (!CATALOG_KINDS.includes(o.kind)) return '"kind" is not a kind the catalog knows';
  if (!Array.isArray(o.purposes) || o.purposes.length > 6 || o.purposes.some((p) => typeof p !== "string" || !CATALOG_ID_RE.test(p))) return '"purposes" must be up to 6 purpose ids';
  if (text(o.maker, 120) === null) return '"maker" is missing';
  if (o.tier !== "first-party" && o.tier !== "vendor" && o.tier !== "community") return '"tier" must be first-party, vendor or community';
  if (!isHttps(o.source)) return '"source" must be an https address';
  if (text(o.what, 400) === null) return '"what" must be text of at most 400 characters';
  if (o.wave !== 1 && o.wave !== 2 && o.wave !== 3) return '"wave" must be 1, 2 or 3';
  if (!Array.isArray(o.worksWith) || o.worksWith.length > ENGINES.length || o.worksWith.some((e) => !ENGINES.includes(e))) return '"worksWith" names an engine the catalog does not know';
  if (o.can !== void 0) {
    const c = o.can;
    if (!c || typeof c !== "object" || CATALOG_CAN.some((k) => typeof c[k] !== "boolean")) return '"can" must say yes or no for reads, writes, sends, spends and deletes';
  }
  if (o.wave !== 3 && o.can === void 0) return 'a reviewed entry must say what it can do ("can")';
  if (o.riskFloor !== void 0 && !RISK_ORDER.includes(o.riskFloor)) return '"riskFloor" must be low, medium or high';
  return installProblem(o.install, o.wave);
}
function cleanCatalogEntry(raw) {
  if (catalogEntryProblem(raw) !== null) return null;
  const o = raw;
  const install = o.install;
  const signIn = o.signIn;
  const health = o.health;
  const str = (v) => typeof v === "string" && v.trim() ? v.trim().slice(0, 200) : null;
  const can = o.can;
  const ships = ["instructions", "scripts", "hooks", "bundled-server", "hosted-server", "binary", "unknown"].includes(o.ships) ? o.ships : void 0;
  return {
    id: o.id,
    name: o.name.trim(),
    kind: o.kind,
    purposes: [...new Set(o.purposes)],
    maker: o.maker.trim(),
    tier: o.tier,
    source: o.source,
    what: o.what.trim(),
    wave: o.wave,
    worksWith: [...new Set(o.worksWith)],
    ...str(o.licence) ? { licence: str(o.licence) } : {},
    ...signIn && (signIn.kind === "none" || signIn.kind === "key" || signIn.kind === "oauth") ? { signIn: { kind: signIn.kind, secretNames: Array.isArray(signIn.secretNames) ? signIn.secretNames.filter((n) => typeof n === "string" && /^[A-Za-z_][A-Za-z0-9_]{0,63}$/.test(n)).slice(0, 8) : [] } } : {},
    ...can ? { can: { reads: can.reads, writes: can.writes, sends: can.sends, spends: can.spends, deletes: can.deletes } } : {},
    ...o.canChecked === true ? { canChecked: true } : {},
    ...ships ? { ships } : {},
    ...health && typeof health === "object" ? { health: { archived: health.archived === true, lastRelease: str(health.lastRelease), lastReleaseAt: str(health.lastReleaseAt), lastPushAt: str(health.lastPushAt) } } : {},
    ...str(o.pinned) ? { pinned: str(o.pinned) } : {},
    ...typeof o.checkedAt === "string" && /^\d{4}-\d{2}-\d{2}$/.test(o.checkedAt) ? { checkedAt: o.checkedAt } : {},
    ...o.riskFloor ? { riskFloor: o.riskFloor } : {},
    ...text(o.riskNote, 240) ? { riskNote: text(o.riskNote, 240) } : {},
    install: {
      door: install.door,
      ...install.door === "mcp-local" ? { ref: install.ref } : {},
      ...install.door === "skill-folder" ? { url: install.url } : {},
      ...install.door === "command" ? { steps: install.steps.map((s) => ({ argv: [...s.argv], ...typeof s.label === "string" && s.label.trim() ? { label: s.label.trim() } : {} })) } : {},
      manual: install.manual.map((l) => l.trim())
    }
  };
}
function cleanCatalogFile(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const o = raw;
  if (o.version !== CATALOG_VERSION || !Array.isArray(o.entries)) return null;
  if (typeof o.checkedAt !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(o.checkedAt)) return null;
  const purposes = [];
  for (const p of Array.isArray(o.purposes) ? o.purposes : []) {
    const r = p;
    if (r && typeof r.id === "string" && CATALOG_ID_RE.test(r.id) && text(r.label, 60) && !purposes.some((x) => x.id === r.id)) purposes.push({ id: r.id, label: r.label.trim() });
  }
  const known = new Set(purposes.map((p) => p.id));
  const entries = [];
  const seen = /* @__PURE__ */ new Set();
  let dropped = 0;
  for (const row of o.entries) {
    const entry = cleanCatalogEntry(row);
    if (!entry || seen.has(entry.id)) {
      dropped++;
      continue;
    }
    seen.add(entry.id);
    entry.purposes = entry.purposes.filter((p) => known.has(p));
    entries.push(entry);
  }
  const featured = cleanFeatured(o.featured, seen);
  return { file: { version: CATALOG_VERSION, checkedAt: o.checkedAt, purposes, entries, ...featured ? { featured } : {} }, dropped };
}
function cleanFeatured(raw, ids) {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > CATALOG_FEATURED_MAX) return null;
  if (raw.some((id) => typeof id !== "string" || !ids.has(id))) return null;
  if (new Set(raw).size !== raw.length) return null;
  return [...raw];
}
function riskOf(e) {
  if (e.wave === 3) return "unreviewed";
  const can = e.can;
  const runsCode = e.ships === "scripts" || e.ships === "hooks" || e.ships === "bundled-server" || e.ships === "binary";
  let risk = "low";
  if (!can || can.spends || can.deletes || can.sends || e.tier === "community" && (e.ships === "scripts" || e.ships === "hooks")) risk = "high";
  else if (can.writes || e.signIn && e.signIn.kind !== "none" || runsCode || e.tier === "community" || e.canChecked !== true) risk = "medium";
  if (e.riskFloor && RISK_ORDER.indexOf(e.riskFloor) > RISK_ORDER.indexOf(risk)) risk = e.riskFloor;
  return risk;
}
function canList(e) {
  return e.can ? CATALOG_CAN.filter((k) => e.can?.[k]) : [];
}
function catalogMatches(e, query) {
  if (query.filter && query.filter !== "all" && filterOfKind(e.kind) !== query.filter) return false;
  if (query.purpose && !e.purposes.includes(query.purpose)) return false;
  if (query.engine && !(e.worksWith.includes(query.engine) || e.worksWith.includes("any"))) return false;
  if (query.reviewed && e.wave === 3) return false;
  if (query.risk && riskOf(e) !== query.risk) return false;
  const needle = (query.q ?? "").trim().toLowerCase();
  if (!needle) return true;
  return [e.name, e.what, e.maker, e.id, ...e.purposes].some((f) => f.toLowerCase().includes(needle));
}
function catalogLetter(name) {
  const first = name.trim().charAt(0).toUpperCase();
  return first >= "A" && first <= "Z" ? first : "#";
}
function catalogSections(entries) {
  const by = /* @__PURE__ */ new Map();
  for (const e of entries) {
    const l = catalogLetter(e.name);
    const list = by.get(l);
    if (list) list.push(e);
    else by.set(l, [e]);
  }
  return [...by.entries()].sort(([a], [b]) => a === "#" ? 1 : b === "#" ? -1 : a.localeCompare(b)).map(([letter, list]) => ({ letter, entries: list.sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }) || a.id.localeCompare(b.id)) }));
}
function catalogCounts(entries) {
  const out = { all: entries.length, mcp: 0, skill: 0, plugin: 0, tool: 0 };
  for (const e of entries) out[filterOfKind(e.kind)] += 1;
  return out;
}
function stepLine(step) {
  return step.argv.join(" ");
}
function agentInstallPrompt(e) {
  const kind = e.kind.replace(/-/g, " ");
  const steps = e.install.door === "command" && e.install.steps?.length ? e.install.steps.map(stepLine) : e.install.manual;
  const secrets = e.signIn && e.signIn.kind !== "none" ? e.signIn.kind === "oauth" ? "It needs a sign in. Stop and tell me when the sign in page opens; I will do that part." : `It needs a key${e.signIn.secretNames.length ? ` (${e.signIn.secretNames.join(", ")})` : ""}. Do not ask me to paste a key into this chat. Tell me the name to set and I will add it under Integrations, Keys and secrets.` : "";
  return [
    `Install "${e.name}" (${kind}) for me.`,
    `Source: ${e.source}`,
    ...steps.length ? ["Steps:", ...steps.map((s, i) => `${i + 1}. ${s}`)] : ["Read the install steps at the source and follow them."],
    ...secrets ? [secrets] : [],
    ...e.wave === 3 ? ["Nobody at Munder Difflin reviewed this entry. Read what it installs before you run anything, and tell me what it will run."] : [],
    "Run only what these steps need. When it is done, tell me what was installed and how to check that it works."
  ].join("\n");
}
function agentUninstallPrompt(e) {
  const kind = e.kind.replace(/-/g, " ");
  const ran = e.install?.door === "command" && e.install.steps?.length ? e.install.steps.map(stepLine) : [];
  return [
    `Uninstall "${e.name}" (${kind}) for me.`,
    ...e.source ? [`Source: ${e.source}`] : [],
    ...e.engine ? [`Engine: ${e.engine}`] : [],
    ...e.where ? [`Where it is on this machine: ${e.where}`] : [],
    ...ran.length ? ["It may have been installed with:", ...ran.map((s, i) => `${i + 1}. ${s}`)] : [],
    "First find out how it was installed here: a package manager, an engine's plugin or server list, or a folder. If it is not installed, stop and tell me.",
    "Remove only that. Do not delete or change anything else: no other package, folder, file, setting, server or agent.",
    "Leave every key and secret as it is, and do not ask me for one. If a key is no longer needed, tell me its name and I will remove it myself.",
    "When it is done, tell me exactly what you removed and where it was."
  ].join("\n");
}

// src/shared/capCatalogUpdate.ts
var capCatalogUpdate_exports = {};
__export(capCatalogUpdate_exports, {
  CATALOG_UPDATE_FILE: () => CATALOG_UPDATE_FILE,
  CATALOG_UPDATE_FIRST_MS: () => CATALOG_UPDATE_FIRST_MS,
  CATALOG_UPDATE_FOLDER: () => CATALOG_UPDATE_FOLDER,
  CATALOG_UPDATE_FORMAT: () => CATALOG_UPDATE_FORMAT,
  CATALOG_UPDATE_LOOK_MS: () => CATALOG_UPDATE_LOOK_MS,
  CATALOG_UPDATE_MAX_BYTES: () => CATALOG_UPDATE_MAX_BYTES,
  CATALOG_UPDATE_POLL_MS: () => CATALOG_UPDATE_POLL_MS,
  CATALOG_UPDATE_PUBLIC_KEY: () => CATALOG_UPDATE_PUBLIC_KEY,
  CATALOG_UPDATE_SCREEN_MS: () => CATALOG_UPDATE_SCREEN_MS,
  CATALOG_UPDATE_TIMEOUT_MS: () => CATALOG_UPDATE_TIMEOUT_MS,
  CATALOG_UPDATE_URL: () => CATALOG_UPDATE_URL,
  CATALOG_UPDATE_URL_ENV: () => CATALOG_UPDATE_URL_ENV,
  catalogUpdateEnvelopeOf: () => catalogUpdateEnvelopeOf,
  catalogUpdateText: () => catalogUpdateText,
  catalogUpdateUrlFrom: () => catalogUpdateUrlFrom
});
var CATALOG_UPDATE_PUBLIC_KEY = "MCowBQYDK2VwAyEApta6kKqiZ3WfCC2p6MP5yoWze/6Mw77PH4l/aJGx0vE=";
var CATALOG_UPDATE_URL = "https://raw.githubusercontent.com/HarnessMD/awesome-agent-capabilities/main/catalog-update.json";
var CATALOG_UPDATE_URL_ENV = "MD_CATALOG_UPDATE_URL";
var LOOPBACK_HOSTS = ["127.0.0.1", "localhost", "[::1]"];
function catalogUpdateUrlFrom(env) {
  const raw = (env[CATALOG_UPDATE_URL_ENV] ?? "").trim();
  if (!raw) return CATALOG_UPDATE_URL;
  let u;
  try {
    u = new URL(raw);
  } catch {
    return CATALOG_UPDATE_URL;
  }
  if (u.username || u.password) return CATALOG_UPDATE_URL;
  if (u.protocol === "https:") return u.toString();
  if (u.protocol === "http:" && LOOPBACK_HOSTS.includes(u.hostname)) return u.toString();
  return CATALOG_UPDATE_URL;
}
var CATALOG_UPDATE_FORMAT = "munder-difflin/catalog-update@1";
var CATALOG_UPDATE_FIRST_MS = 2e4;
var CATALOG_UPDATE_POLL_MS = 60 * 6e4;
var CATALOG_UPDATE_LOOK_MS = 5 * 6e4;
var CATALOG_UPDATE_SCREEN_MS = 5 * 6e4;
var CATALOG_UPDATE_TIMEOUT_MS = 3e4;
var CATALOG_UPDATE_MAX_BYTES = 8 * 1024 * 1024;
var CATALOG_UPDATE_FOLDER = "capabilities";
var CATALOG_UPDATE_FILE = "catalog-update.json";
function catalogUpdateText(issuedAt, catalogSha256) {
  return [CATALOG_UPDATE_FORMAT, issuedAt, catalogSha256].join("\n");
}
var ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
var SIGNATURE = /^[A-Za-z0-9+/]{86}==$/;
function isIsoTime(v) {
  if (!ISO.test(v)) return false;
  const ms = Date.parse(v);
  return Number.isFinite(ms) && new Date(ms).toISOString() === v;
}
function catalogUpdateEnvelopeOf(body) {
  if (typeof body !== "object" || body === null || Array.isArray(body)) return null;
  const b = body;
  if (b.format !== CATALOG_UPDATE_FORMAT) return null;
  if (typeof b.issuedAt !== "string" || !isIsoTime(b.issuedAt)) return null;
  if (typeof b.catalog !== "string" || b.catalog.length === 0 || b.catalog.length > CATALOG_UPDATE_MAX_BYTES) return null;
  if (typeof b.signature !== "string" || !SIGNATURE.test(b.signature)) return null;
  return { format: CATALOG_UPDATE_FORMAT, issuedAt: b.issuedAt, catalog: b.catalog, signature: b.signature };
}

// src/shared/capFeatured.ts
var FEATURED_IDS = [
  // The six in the section, in the founder's order.
  "higgsfield-mcp",
  //   content creation: images and videos from a prompt (Higgsfield)
  "superpowers",
  //      engineering: plan, test first, review, worktrees
  "apollo-plugin",
  //    distribution: sales prospecting (Apollo.io, not Apollo GraphQL)
  "remotion-skills",
  //  motion graphics: video made with React
  "humanizer",
  //        creative writing: rewrites text so a person wrote it
  "kw-productivity",
  //  personal assistant: tasks, day planning, work memory
  // More of the same mix, for the Featured filter.
  "canva",
  //            content creation
  "github",
  //           engineering
  "typefully-skill",
  //  distribution: social posts drafted, scheduled, published
  "hyperframes",
  //      motion graphics: video made from HTML
  "marketingskills",
  //  writing: copywriting and the rest of marketing
  "google-calendar",
  //  personal assistant
  "canvas-design",
  //    content creation: posters and still pieces
  "playwright",
  //       engineering
  "google-gmail"
  //      personal assistant
];

// tools/capabilities/catalogBuild.mjs
import fs from "node:fs";
import path2 from "node:path";

// tools/capabilities/lib.mjs
import crypto from "node:crypto";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
var require2 = createRequire(import.meta.url);
var REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
var DATA_DIR = path.join(REPO_ROOT, "tools", "capabilities", "data");
var SHIPPED_FILE = path.join(REPO_ROOT, "resources", "capabilities", "catalog.json");
var CHECKED_AT = "2026-10-14";
function loadChecker() {
  return require2(path.join(REPO_ROOT, "test", "load-ts.cjs"))("src/shared/capCatalog.ts");
}
var PURPOSES = [
  { id: "source-control", label: "Source control and CI" },
  { id: "code-review", label: "Code review" },
  { id: "testing", label: "Testing and QA" },
  { id: "devtools", label: "Developer tools" },
  { id: "frontend", label: "Frontend and UI" },
  { id: "backend", label: "Backend and APIs" },
  { id: "mobile", label: "Mobile" },
  { id: "databases", label: "Databases" },
  { id: "data", label: "Data and analytics" },
  { id: "cloud", label: "Cloud and infrastructure" },
  { id: "observability", label: "Monitoring and errors" },
  { id: "security", label: "Security" },
  { id: "sandboxes", label: "Sandboxes and code execution" },
  { id: "browsers", label: "Browsers and scraping" },
  { id: "search", label: "Web search" },
  { id: "research", label: "Research" },
  { id: "documents", label: "Documents and office files" },
  { id: "docs", label: "Documentation" },
  { id: "design", label: "Design" },
  { id: "media", label: "Video, audio and images" },
  { id: "memory", label: "Memory and knowledge" },
  { id: "reasoning", label: "Reasoning" },
  { id: "planning", label: "Planning and project tracking" },
  { id: "specs", label: "Specs and requirements" },
  { id: "communication", label: "Chat and email" },
  { id: "calendar", label: "Calendar and meetings" },
  { id: "files", label: "Files and storage" },
  { id: "automation", label: "Automation and workflows" },
  { id: "marketing", label: "Marketing and SEO" },
  { id: "sales", label: "Sales and CRM" },
  { id: "support", label: "Customer support" },
  { id: "payments", label: "Payments and commerce" },
  { id: "finance", label: "Accounting and finance" },
  { id: "hr", label: "HR and recruiting" },
  { id: "legal", label: "Legal and compliance" },
  { id: "ai", label: "AI models and ML" },
  { id: "agents", label: "Agent engines" },
  { id: "orchestration", label: "Running many agents" },
  { id: "usage", label: "Usage and cost" },
  { id: "utilities", label: "Time and utilities" }
];
var PURPOSE_IDS = new Set(PURPOSES.map((p) => p.id));
var ROOT_FILE_RE = /^(readme|license|licence|changelog)(\.[a-z]+)?$/;
var FOLDER_FILE_RE = /\/(readme|skill|plugin)\.(md|json)$/;
function sourceKey(raw) {
  if (typeof raw !== "string") return null;
  let u;
  try {
    u = new URL(raw.trim());
  } catch {
    return null;
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return null;
  const host = u.hostname.toLowerCase().replace(/^www\./, "");
  let pathname = u.pathname;
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
  }
  const seg = pathname.split("/").filter(Boolean);
  if (host === "github.com" && seg.length >= 2) {
    const owner = seg[0].toLowerCase();
    const repo = seg[1].toLowerCase().replace(/\.git$/, "");
    let sub = "";
    if ((seg[2] === "tree" || seg[2] === "blob") && seg.length > 4) {
      sub = seg.slice(4).join("/").toLowerCase();
      if (ROOT_FILE_RE.test(sub)) sub = "";
      sub = sub.replace(FOLDER_FILE_RE, "");
    }
    return `github:${owner}/${repo}${sub ? `:${sub}` : ""}`;
  }
  return `web:${host}${seg.length ? `/${seg.join("/").toLowerCase()}` : ""}`;
}
var hash8 = (s) => crypto.createHash("sha1").update(s).digest("hex").slice(0, 8);
function idWithHash(id, key) {
  return `${id.slice(0, 71).replace(/-+$/, "")}-${hash8(key)}`;
}
function secretsIn(entry) {
  const out = [];
  for (const [field, value] of Object.entries(entry ?? {})) {
    for (const text2 of stringsIn(value)) {
      const why = secretShape(text2, { pin: field === "pinned" });
      if (why) out.push(`${field}: ${why}`);
    }
  }
  return out;
}
var KEY_PREFIXES = [
  /\bsk-[A-Za-z0-9_-]{20,}/,
  /\bsk_(live|test)_[A-Za-z0-9]{10,}/,
  /\b[rp]k_(live|test)_[A-Za-z0-9]{10,}/,
  /\bgh[pousr]_[A-Za-z0-9]{30,}/,
  /\bgithub_pat_[A-Za-z0-9_]{20,}/,
  /\bglpat-[A-Za-z0-9_-]{16,}/,
  /\bxox[abeprs]-[A-Za-z0-9-]{10,}/,
  /\b(AKIA|ASIA)[0-9A-Z]{16}\b/,
  /\bAIza[0-9A-Za-z_-]{30,}/,
  /\bya29\.[A-Za-z0-9_-]{20,}/,
  /\beyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}/,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
  /\bnpm_[A-Za-z0-9]{30,}/,
  /\bwhsec_[A-Za-z0-9]{20,}/,
  /\bhf_[A-Za-z0-9]{30,}/,
  /\bSG\.[A-Za-z0-9_-]{16,}\.[A-Za-z0-9_-]{16,}/,
  /\bshp(at|ss|ca)_[A-Fa-f0-9]{20,}/
];
var KEY_ASSIGN_RE = /(?:api[_-]?key|access[_-]?token|auth[_-]?token|secret|password|passwd|bearer)\s*[=:]\s*["']?([A-Za-z0-9+/_-]{16,})/i;
var PLACEHOLDER_RE = /your|example|placeholder|xxxx|changeme|token_here|key_here/i;
var COMMIT_PIN_RE = /(\/(?:tree|blob|commit|raw)\/|[@#]|sha256:)(?:[a-f0-9]{64}|[a-f0-9]{40})(?![a-f0-9])/gi;
var count = (s, re) => (s.match(re) ?? []).length;
function secretShape(value, opts = {}) {
  if (typeof value !== "string" || value.length < 16) return null;
  for (const re of KEY_PREFIXES) if (re.test(value)) return "a known key prefix";
  const set = KEY_ASSIGN_RE.exec(value);
  if (set && count(set[1], /[0-9]/g) >= 2 && /[A-Za-z]/.test(set[1]) && !PLACEHOLDER_RE.test(set[1])) return "a name set to a long value";
  if (opts.pin) return null;
  const rest = value.replace(COMMIT_PIN_RE, "$1");
  for (const run of rest.match(/[a-f0-9]{32,}/gi) ?? []) {
    if (/[0-9]/.test(run) && /[a-f]/i.test(run)) return "a long run of hex";
  }
  for (const run of rest.match(/[A-Za-z0-9]{24,}/g) ?? []) {
    if (count(run, /[0-9]/g) >= 2 && count(run, /[A-Z]/g) >= 2 && count(run, /[a-z]/g) >= 2) return "a long run of mixed letters and digits";
  }
  for (const run of rest.match(/[A-Za-z0-9_-]{40,}/g) ?? []) {
    if (run.split(/[-_]/).filter((part) => /^[A-Za-z]{2,}$/.test(part)).length >= 4) continue;
    if (count(run, /[0-9]/g) >= 4 && count(run, /[A-Z]/g) >= 4 && count(run, /[a-z]/g) >= 4) return "a long run of mixed letters and digits";
  }
  return null;
}
function* stringsIn(value) {
  if (typeof value === "string") yield value;
  else if (Array.isArray(value)) for (const v of value) yield* stringsIn(v);
  else if (value && typeof value === "object") for (const v of Object.values(value)) yield* stringsIn(v);
}

// tools/capabilities/catalogBuild.mjs
var CatalogStop = class extends Error {
  constructor() {
    super("The catalog was not built.");
    this.name = "CatalogStop";
  }
};
function buildCatalog({ C, dataDir, featuredFile = null, appFeatured, rel = (p) => p, log = console.log, err = console.error }) {
  const bump = (map, key, n = 1) => map.set(key, (map.get(key) ?? 0) + n);
  const tally = (list, key) => {
    const m = /* @__PURE__ */ new Map();
    for (const x of list) bump(m, key(x));
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  };
  const line = (pairs) => pairs.map(([k, n]) => `${k} ${n}`).join(", ");
  const stop = (...lines) => {
    for (const l of lines) err(l);
    throw new CatalogStop();
  };
  function waveFiles() {
    if (!fs.existsSync(dataDir)) return [];
    const names = fs.readdirSync(dataDir).filter((n) => n.endsWith(".json")).sort();
    const out = [];
    for (const n of names) {
      const wave = n === "wave1.json" ? 1 : /^wave2-[a-z0-9-]+\.json$/.test(n) ? 2 : n === "wave3.json" ? 3 : 0;
      if (wave) out.push({ name: n, wave, file: path2.join(dataDir, n) });
      else if (n !== "featured.json") log(`  (not a wave file, not read: ${n})`);
    }
    return out.sort((a, b) => a.wave - b.wave || a.name.localeCompare(b.name));
  }
  function rowsOf(f) {
    let raw;
    try {
      raw = JSON.parse(fs.readFileSync(f.file, "utf8"));
    } catch (e) {
      stop(`${f.name} is not JSON: ${e.message}`);
    }
    const rows = Array.isArray(raw) ? raw : raw?.entries;
    if (!Array.isArray(rows)) stop(`${f.name} must hold { "entries": [...] }.`);
    return rows;
  }
  function addressesOf(row) {
    const out = /* @__PURE__ */ new Set();
    const add = (u) => {
      const k = sourceKey(u);
      if (k) out.add(k);
    };
    add(row.source);
    if (row.install?.url) add(row.install.url);
    for (const step of row.install?.steps ?? []) {
      const words = Array.isArray(step?.argv) ? step.argv : [];
      if (words.includes("mcp") && words.includes("add")) {
        for (const word of words) if (/^https:\/\//.test(word)) add(word);
      }
    }
    for (const u of Array.isArray(row.also) ? row.also : []) add(u);
    return out;
  }
  const nameKey = (e) => `${C.filterOfKind(e.kind)}|${String(e.name).toLowerCase().replace(/\([^)]*\)/g, " ").replace(/[^a-z0-9]+/g, "")}`;
  const EVERY_ENGINE = C.ENGINES.filter((e) => e !== "any");
  const BY_STANDARD = { "mcp-server": EVERY_ENGINE, skill: EVERY_ENGINE, "skill-pack": EVERY_ENGINE };
  function withStandard(kind, listed) {
    const add = BY_STANDARD[kind];
    if (!add) return listed;
    const all = /* @__PURE__ */ new Set([...listed, ...add]);
    return C.ENGINES.filter((e) => all.has(e));
  }
  const SAME_AS_REVIEWED = {
    "context7-com-docs-overview": "context7",
    "semgrep-semgrep": "semgrep",
    "anthropics-claude-code-plugins-security-guidance": "security-guidance"
  };
  const files = waveFiles();
  if (!files.length) stop(`No wave file in ${rel(dataDir)}. Run extract-pool.mjs first.`);
  const report = /* @__PURE__ */ new Map();
  const kept = [];
  const reviewedAddress = /* @__PURE__ */ new Map();
  const reviewedIds = /* @__PURE__ */ new Map();
  const twice = [];
  const strayPurposes = /* @__PURE__ */ new Map();
  const renamed = [];
  for (const f of files) {
    const r = { read: 0, kept: 0, dropped: /* @__PURE__ */ new Map() };
    report.set(f.name, r);
    const drop = (why) => bump(r.dropped, why);
    const rows = rowsOf(f);
    const mine = [];
    const idsHere = /* @__PURE__ */ new Set();
    for (const row of rows) {
      r.read++;
      if (row && typeof row === "object" && row.wave !== f.wave) {
        drop(`says wave ${JSON.stringify(row.wave)} in a wave ${f.wave} file`);
        continue;
      }
      const problem = C.catalogEntryProblem(row);
      if (problem) {
        drop(`fails the check: ${problem}`);
        continue;
      }
      const secrets = secretsIn(row);
      if (secrets.length) {
        drop(`holds a string shaped like a key (${secrets[0]})`);
        continue;
      }
      const entry = C.cleanCatalogEntry(row);
      for (const p of entry.purposes) if (!PURPOSE_IDS.has(p)) bump(strayPurposes, p);
      entry.purposes = entry.purposes.filter((p) => PURPOSE_IDS.has(p));
      const listed = entry.worksWith;
      entry.worksWith = withStandard(entry.kind, listed);
      const addresses = addressesOf(row);
      if (f.wave < 3) {
        if (reviewedIds.has(entry.id)) {
          twice.push(`${entry.id} (${reviewedIds.get(entry.id)} and ${f.name})`);
          drop("an id used twice inside waves 1 and 2");
          continue;
        }
        const lower = [...addresses].map((a) => reviewedAddress.get(a)).find((hit) => hit && hit.wave < f.wave);
        if (lower) {
          drop("the same source as a row of a lower wave");
          continue;
        }
        const beside = [...addresses].map((a) => reviewedAddress.get(a)).find((hit) => hit && hit.wave === f.wave && hit.file !== f.name);
        if (beside) {
          drop(`the same source as ${beside.id} in ${beside.file}`);
          continue;
        }
        reviewedIds.set(entry.id, f.name);
      } else {
        const lower = [...addresses].map((a) => reviewedAddress.get(a)).find(Boolean);
        if (lower) {
          drop(sourceKey(entry.source) && reviewedAddress.has(sourceKey(entry.source)) ? "the same source as a reviewed row" : "an address a reviewed row already installs");
          continue;
        }
        if (reviewedIds.has(SAME_AS_REVIEWED[entry.id])) {
          drop("the same thing as a reviewed row, at another address");
          continue;
        }
        if (idsHere.has(entry.id)) {
          drop("an id used twice in the pool");
          continue;
        }
        if (reviewedIds.has(entry.id)) {
          const to = idWithHash(entry.id, sourceKey(entry.source) ?? entry.source);
          renamed.push(`${entry.id} -> ${to}`);
          entry.id = to;
        }
      }
      idsHere.add(entry.id);
      mine.push({ entry, wave: f.wave, file: f.name, addresses, listed });
      r.kept++;
    }
    if (f.wave < 3) {
      for (const k of mine) for (const a of k.addresses) if (!reviewedAddress.has(a)) reviewedAddress.set(a, { id: k.entry.id, wave: f.wave, file: f.name });
    }
    kept.push(...mine);
  }
  kept.sort((a, b) => a.wave - b.wave || a.entry.id.localeCompare(b.entry.id));
  const entries = kept.map((k) => k.entry);
  function featuredAsked() {
    if (featuredFile) {
      let list;
      try {
        list = JSON.parse(fs.readFileSync(featuredFile, "utf8"));
      } catch (e) {
        stop(`STOP. ${rel(featuredFile)} is not JSON: ${e.message}`);
      }
      if (!Array.isArray(list) || list.some((id) => typeof id !== "string")) stop(`STOP. ${rel(featuredFile)} must be a JSON list of catalog ids.`);
      return { from: rel(featuredFile), list };
    }
    return { from: "src/shared/capFeatured.ts", list: [...appFeatured()] };
  }
  const asked = featuredAsked();
  const held = new Set(entries.map((e) => e.id));
  const featured = [...new Set(asked.list)].filter((id) => held.has(id)).slice(0, C.CATALOG_FEATURED_MAX);
  const featuredMissing = asked.list.filter((id) => !held.has(id));
  const catalog = { version: C.CATALOG_VERSION, checkedAt: CHECKED_AT, purposes: PURPOSES, entries, ...featured.length ? { featured } : {} };
  log("THE SHIPPED CATALOG\n");
  for (const f of files) {
    const r = report.get(f.name);
    const dropped = [...r.dropped.values()].reduce((a, b) => a + b, 0);
    log(`  wave ${f.wave}  ${f.name.padEnd(18)} ${String(r.read).padStart(5)} rows read, ${String(r.kept).padStart(5)} kept, ${String(dropped).padStart(4)} left out`);
    for (const [why, n] of [...r.dropped.entries()].sort((a, b) => b[1] - a[1])) log(`            ${String(n).padStart(5)}  ${why}`);
  }
  for (const w of [1, 2, 3]) if (!files.some((f) => f.wave === w)) log(`  wave ${w}  (no file yet)`);
  const allDropped = /* @__PURE__ */ new Map();
  for (const r of report.values()) for (const [why, n] of r.dropped) bump(allDropped, why.replace(/^fails the check: /, "fails the check: "), n);
  const byCheck = [...allDropped.entries()].filter(([why]) => why.startsWith("fails the check"));
  log(`
Left out by the check: ${byCheck.reduce((a, [, n]) => a + n, 0)}.`);
  for (const [why, n] of byCheck.sort((a, b) => b[1] - a[1])) log(`  ${String(n).padStart(5)}  ${why.replace("fails the check: ", "")}`);
  log(`
Entries: ${entries.length}. By wave: ${line(tally(entries, (e) => `wave ${e.wave}`).sort((a, b) => a[0].localeCompare(b[0])))}.`);
  log(`By filter: ${line(tally(entries, (e) => C.filterOfKind(e.kind)))}.`);
  log(`By kind: ${line(tally(entries, (e) => e.kind))}.`);
  log(`By tier: ${line(tally(entries, (e) => e.tier))}.`);
  log(`By door: ${line(tally(entries, (e) => e.install.door))}.`);
  log(`No purpose: ${entries.filter((e) => e.purposes.length === 0).length}.`);
  const engineCount = (lists) => C.ENGINES.map((x) => [x, lists.filter((l) => l.includes(x)).length]);
  const asListed = engineCount(kept.map((k) => k.listed));
  const asShipped = engineCount(entries.map((e) => e.worksWith));
  log(`Engines, as listed and as shipped (MCP servers and skills named for every engine): ${asListed.map(([x, n], i) => `${x} ${n} to ${asShipped[i][1]}`).join(", ")}.`);
  log(`No engine named: ${kept.filter((k) => k.listed.length === 0).length} as listed, ${entries.filter((e) => e.worksWith.length === 0).length} as shipped.`);
  log(`Featured: ${featured.length}, from ${asked.from}.${featuredMissing.length ? ` Not in the list, left out: ${featuredMissing.join(", ")}.` : ""}`);
  if (strayPurposes.size) log(`Purposes that are not on the list, taken off the rows that named them: ${line([...strayPurposes.entries()])}.`);
  if (renamed.length) {
    log(`Pool ids that met a reviewed id and took a suffix: ${renamed.length}.`);
    for (const x of renamed.slice(0, 20)) log(`  ${x}`);
  }
  const reviewedNames = new Map(kept.filter((k) => k.wave < 3).map((k) => [nameKey(k.entry), k.entry.id]));
  const echoes = kept.filter((k) => k.wave === 3 && reviewedNames.has(nameKey(k.entry)));
  if (echoes.length) {
    log(`
Pool rows that share a name with a reviewed row but not an address (kept, look at them): ${echoes.length}.`);
    for (const k of echoes.slice(0, 40)) log(`  ${k.entry.id} "${k.entry.name}"  beside reviewed ${reviewedNames.get(nameKey(k.entry))}`);
  }
  if (twice.length) {
    stop("\nSTOP. An id is used twice inside waves 1 and 2:", ...twice.map((t) => `  ${t}`), "Nothing was written. Give each reviewed row its own id and run again.");
  }
  const checked = C.cleanCatalogFile(JSON.parse(JSON.stringify(catalog)));
  const ids = new Set(entries.map((e) => e.id));
  const wrong = [];
  if (!checked) wrong.push("the checker does not read it as a catalog file");
  else {
    if (checked.dropped !== 0) wrong.push(`the checker drops ${checked.dropped} rows`);
    if (checked.file.entries.length !== entries.length) wrong.push("the checker keeps a different number of rows");
    if (checked.file.purposes.length !== PURPOSES.length) wrong.push("the purpose list did not survive the check");
    if ((checked.file.featured ?? []).length !== featured.length) wrong.push("the featured list did not survive the check");
  }
  if (ids.size !== entries.length) wrong.push("an id is used twice");
  if (entries.some((e) => e.wave === 3 && e.install.door !== "none")) wrong.push("a Wave 3 row has a door other than none");
  if (wrong.length) stop(`
STOP. The merged file is not right: ${wrong.join("; ")}. Nothing was written.`);
  const featuredText = featured.length ? `  "featured": ${JSON.stringify(featured)},
` : "";
  const text2 = `{
  "version": ${catalog.version},
  "checkedAt": ${JSON.stringify(catalog.checkedAt)},
  "purposes": [
${PURPOSES.map((p) => `    ${JSON.stringify(p)}`).join(",\n")}
  ],
${featuredText}  "entries": [
${entries.map((e) => `    ${JSON.stringify(e)}`).join(",\n")}
  ]
}
`;
  const bytes = Buffer.byteLength(text2);
  log(`
Size: ${(bytes / 1024).toFixed(0)} KB (the limit the test holds is 4 MB).`);
  const leftOut = [];
  for (const f of files) for (const [why, n] of report.get(f.name).dropped) leftOut.push({ file: f.name, why, n });
  return { text: text2, catalog, entries, featured, bytes, leftOut };
}

// tools/capabilities/awesomePages.mjs
var APP_URL = "https://harnessmd.com";
var LISTED_TITLE = "Listed, not reviewed by us";
var README_LIMIT = 400 * 1024;
var KIND_TITLE = {
  "mcp-server": "MCP servers",
  skill: "Skills",
  "skill-pack": "Skill packs",
  plugin: "Plugins",
  "subagent-set": "Subagent sets",
  "hook-pack": "Hook packs",
  "status-line": "Status lines",
  tool: "Tools",
  agent: "Agents",
  app: "Apps"
};
var listedPage = (kind) => `listed/${kind}.md`;
var md = (s) => String(s).replace(/\s+/g, " ").trim().replace(/([\\`*_[\]<>|#])/g, "\\$1");
var href = (u) => String(u).replace(/[()<>\s]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")}`);
var sentence = (s) => {
  const t = String(s).replace(/\s+/g, " ").trim();
  return /[.!?]$/.test(t) ? t : `${t}.`;
};
var byName = (a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }) || a.id.localeCompare(b.id);
function awesomePages({ C, file }) {
  for (const k of C.CATALOG_KINDS) if (!KIND_TITLE[k]) throw new Error(`STOP. The kind ${k} has no title here.`);
  const NAMED_ENGINES = C.ENGINES.filter((e) => e !== "any");
  const entries = file.entries;
  const featured = file.featured ?? [];
  const purposeLabel = new Map(PURPOSES.map((p) => [p.id, p.label]));
  function engines(e) {
    if (e.worksWith.includes("any")) return "Works with any engine.";
    const named = NAMED_ENGINES.filter((x) => e.worksWith.includes(x));
    if (!named.length) return "";
    if (named.length === NAMED_ENGINES.length) return "Works with all engines.";
    return `Works with ${named.map((x) => C.CATALOG_ENGINE_NAME[x]).join(", ")}.`;
  }
  const item = (e) => `- [${md(e.name)}](${href(e.source)}): ${md(sentence(e.what))} Made by ${md(e.maker)}. ${engines(e)}`.trimEnd();
  const used = /* @__PURE__ */ new Map();
  function anchor(title) {
    const base = title.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, "").trim().replace(/\s/g, "-");
    const n = used.get(base) ?? 0;
    used.set(base, n + 1);
    return n === 0 ? base : `${base}-${n}`;
  }
  function sections(list) {
    const out = [];
    for (const kind of C.CATALOG_KINDS) {
      const ofKind = list.filter((e) => e.kind === kind);
      if (!ofKind.length) continue;
      const groups = [];
      for (const p of PURPOSES) {
        const inP = ofKind.filter((e) => e.purposes[0] === p.id).sort(byName);
        if (inP.length) groups.push({ title: p.label, entries: inP });
      }
      const other = ofKind.filter((e) => !e.purposes.length || !purposeLabel.has(e.purposes[0])).sort(byName);
      if (other.length) groups.push({ title: "Other", entries: other });
      out.push({ kind, title: KIND_TITLE[kind], count: ofKind.length, groups });
    }
    return out;
  }
  const reviewed = entries.filter((e) => e.wave !== 3);
  const listed = entries.filter((e) => e.wave === 3);
  const reviewedSections = sections(reviewed);
  const listedSections = sections(listed);
  function readme() {
    used.clear();
    const L = [];
    const engineNames = NAMED_ENGINES.map((x) => C.CATALOG_ENGINE_NAME[x]);
    L.push("# Awesome agent capabilities", "");
    L.push(`MCP servers, skills, plugins and tools you can give an AI agent: ${engineNames.slice(0, -1).join(", ")} and ${engineNames.at(-1)}. ${entries.length} items, ${reviewed.length} of them reviewed by us.`, "");
    L.push(`This list is what the Capabilities screen of [Munder Difflin](${APP_URL}) shows. The app reads it from this repository, so a change merged here reaches people with no new release of the app.`, "");
    L.push("## How a change reaches the app", "");
    L.push("1. Each item is a row in one of the files in [data](data). A pull request changes them, and two checks run on it: `node scripts/check.mjs` reads every file against the schema, and `node scripts/publish.mjs --check` builds the whole list with the app's own check.");
    L.push("2. A merge into `main` is checked and signed automatically. A workflow builds the list from [data](data), runs the app's own check on every item, writes this README and the pages in [listed](listed), signs the list and commits it as `catalog-update.json` at the top of this repository. Nobody signs by hand.");
    L.push("3. Munder Difflin reads that file when its Capabilities screen opens and once an hour. It uses the list only when the signature is ours, every item passes the check, and the list is newer than the one it holds.", "");
    L.push("## Reviewed and listed", "");
    L.push("- **Reviewed:** a maintainer opened the source, checked what it can do and wrote how to install it. Where it is safe, the app installs it with one press, after showing each step.");
    L.push(`- **${LISTED_TITLE}:** found in public directories and listed as written there. The app runs nothing for these; open the source and follow its own steps.`, "");
    L.push("## Contents", "");
    const toc = [];
    for (const s of reviewedSections) toc.push(`- [${s.title}](#${anchor(s.title)}) (${s.count})`);
    toc.push(`- [${LISTED_TITLE}](#${anchor(LISTED_TITLE)}) (${listed.length})`);
    for (const s of listedSections) toc.push(`  - [${s.title}](${listedPage(s.kind)}) (${s.count})`);
    used.clear();
    L.push(...toc, "");
    for (const s of reviewedSections) {
      anchor(s.title);
      L.push(`## ${s.title}`, "");
      for (const g of s.groups) {
        L.push(`### ${g.title}`, "");
        for (const e of g.entries) L.push(item(e));
        L.push("");
      }
    }
    anchor(LISTED_TITLE);
    L.push(`## ${LISTED_TITLE}`, "");
    L.push(`${listed.length} more items, found in public directories and listed as written there. Nobody here has opened these; read the source before you install one. One page a kind:`, "");
    for (const s of listedSections) L.push(`- [${s.title}](${listedPage(s.kind)}) (${s.count})`);
    L.push("");
    L.push("## Contributing", "");
    L.push("Read [CONTRIBUTING.md](CONTRIBUTING.md). This file, the pages in [listed](listed) and `catalog-update.json` are made from the data files on every merge into `main`: do not edit them by hand.", "");
    L.push("## License", "");
    L.push("The list is dedicated to the public domain under [CC0 1.0](LICENSE). Each item belongs to its maker and keeps its own licence.", "");
    return L.join("\n");
  }
  function listedMarkdown(s) {
    const L = [`# ${s.title}: ${LISTED_TITLE.toLowerCase()}`, ""];
    L.push(`${s.count} items, found in public directories and listed as written there. Nobody here has opened these; read the source before you install one. The reviewed ones are in the [README](../README.md).`, "");
    for (const g of s.groups) {
      L.push(`## ${g.title}`, "");
      for (const e of g.entries) L.push(item(e));
      L.push("");
    }
    return L.join("\n");
  }
  const files = /* @__PURE__ */ new Map();
  files.set("README.md", readme());
  for (const s of listedSections) files.set(listedPage(s.kind), listedMarkdown(s));
  if (Buffer.byteLength(files.get("README.md")) > README_LIMIT) {
    throw new Error(`STOP. README.md is over ${README_LIMIT / 1024} KiB; GitHub would cut it off. Move a group to its own page.`);
  }
  return { files, entries, reviewed, listed, featured, reviewedSections, listedSections };
}

// tools/capabilities/catalogSign.mjs
import crypto2 from "node:crypto";
import path3 from "node:path";
import { createRequire as createRequire2 } from "node:module";
var require3 = createRequire2(import.meta.url);
function loadFormat() {
  return require3(path3.join(REPO_ROOT, "test", "load-ts.cjs"))("src/shared/capCatalogUpdate.ts");
}
function publicHalf(privateKey) {
  return crypto2.createPublicKey(privateKey).export({ format: "der", type: "spki" }).toString("base64");
}
var sha256 = (text2) => crypto2.createHash("sha256").update(Buffer.from(text2, "utf8")).digest("hex");
var megabytes = (n) => `${(n / (1024 * 1024)).toFixed(2)} MB`;
function signCatalog({ catalogText, privateKey, issuedAt = (/* @__PURE__ */ new Date()).toISOString(), shippedCheckedAt = "", builtInKey = "", F = loadFormat(), C = loadChecker() }) {
  const warnings = [];
  if (!(privateKey instanceof crypto2.KeyObject) || privateKey.type !== "private" || privateKey.asymmetricKeyType !== "ed25519") {
    throw new Error("The key is not an Ed25519 private key. Nothing was signed.");
  }
  const mine = publicHalf(privateKey);
  if (builtInKey) {
    if (!Buffer.from(builtInKey, "base64").equals(Buffer.from(mine, "base64"))) {
      throw new Error("This private key is not the one whose public half is in CATALOG_UPDATE_PUBLIC_KEY. Every app would refuse the list. Nothing was signed.");
    }
  } else {
    warnings.push("CATALOG_UPDATE_PUBLIC_KEY is empty in this checkout, so an app built from it has the feature off and will not ask for this list.");
  }
  const catalog = String(catalogText).replace(/^\ufeff/, "");
  let raw;
  try {
    raw = JSON.parse(catalog);
  } catch {
    throw new Error("The catalog file is not JSON. Nothing was signed.");
  }
  const clean = C.cleanCatalogFile(raw);
  if (!clean) throw new Error("The catalog file is not a capabilities catalog: its version, its checkedAt or its entries are wrong. Nothing was signed.");
  if (clean.dropped > 0) {
    throw new Error(`${clean.dropped} ${clean.dropped === 1 ? "row does" : "rows do"} not pass the check of the app, and an app would leave ${clean.dropped === 1 ? "it" : "them"} out. Build the catalog again (node tools/capabilities/build-catalog.mjs) and sign that. Nothing was signed.`);
  }
  if (clean.file.entries.length === 0) throw new Error("The catalog has no entry. Nothing was signed.");
  if (shippedCheckedAt && clean.file.checkedAt < shippedCheckedAt) {
    throw new Error(`This catalog was put together on ${clean.file.checkedAt}. The list this checkout ships is from ${shippedCheckedAt}, so an app built from it would refuse the update as older. Nothing was signed.`);
  }
  if (typeof issuedAt !== "string" || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(issuedAt)) {
    throw new Error("issuedAt must be a time as toISOString writes it. Nothing was signed.");
  }
  const signature = crypto2.sign(null, Buffer.from(F.catalogUpdateText(issuedAt, sha256(catalog)), "utf8"), privateKey).toString("base64");
  const envelope = { format: F.CATALOG_UPDATE_FORMAT, issuedAt, catalog, signature };
  const body = `${JSON.stringify(envelope)}
`;
  const bytes = Buffer.byteLength(body, "utf8");
  if (bytes > F.CATALOG_UPDATE_MAX_BYTES) {
    throw new Error(`The signed list is ${megabytes(bytes)}. An app reads at most ${megabytes(F.CATALOG_UPDATE_MAX_BYTES)}. Nothing was written.`);
  }
  let good = false;
  try {
    const back = F.catalogUpdateEnvelopeOf(JSON.parse(body));
    good = !!back && crypto2.verify(null, Buffer.from(F.catalogUpdateText(back.issuedAt, sha256(back.catalog)), "utf8"), crypto2.createPublicKey(privateKey), Buffer.from(back.signature, "base64"));
  } catch {
    good = false;
  }
  if (!good) throw new Error("The signed list did not verify when it was read back. Nothing was written.");
  return { body, envelope, bytes, publicKey: mine, checkedAt: clean.file.checkedAt, entries: clean.file.entries.length, catalogSha256: sha256(catalog), warnings };
}

// tools/capabilities/awesome/publish.src.mjs
var SHIPPED_CHECKED_AT = true ? "2026-10-14" : "";
var APP_PUBLIC_KEY = CATALOG_UPDATE_PUBLIC_KEY;
var SIGNED_FILE = "catalog-update.json";
var KEY_ENV = "CATALOG_SIGNING_KEY";
var sha2562 = (text2) => crypto3.createHash("sha256").update(Buffer.from(text2, "utf8")).digest("hex");
var sameKey = (a, b) => !!a && !!b && Buffer.from(a, "base64").equals(Buffer.from(b, "base64"));
function appWouldRefuse(bytes, { publicKey = APP_PUBLIC_KEY, shippedCheckedAt = SHIPPED_CHECKED_AT } = {}) {
  if (!publicKey) return "no app key is built into this publisher";
  if (bytes.length > CATALOG_UPDATE_MAX_BYTES) return "it is larger than an app reads";
  let body;
  try {
    body = JSON.parse(bytes.toString("utf8").replace(/^﻿/, ""));
  } catch {
    return "it is not JSON";
  }
  const envelope = catalogUpdateEnvelopeOf(body);
  if (!envelope) return "it is not a signed list";
  let good = false;
  try {
    const key = crypto3.createPublicKey({ key: Buffer.from(publicKey, "base64"), format: "der", type: "spki" });
    good = crypto3.verify(null, Buffer.from(catalogUpdateText(envelope.issuedAt, sha2562(envelope.catalog)), "utf8"), key, Buffer.from(envelope.signature, "base64"));
  } catch {
    good = false;
  }
  if (!good) return "its signature does not verify against the app's key";
  let raw;
  try {
    raw = JSON.parse(envelope.catalog);
  } catch {
    return "its list is not JSON";
  }
  let clean = null;
  try {
    clean = cleanCatalogFile(raw);
  } catch {
    clean = null;
  }
  if (!clean || clean.file.entries.length === 0) return "its list is not a capabilities catalog";
  if (clean.dropped) return `${clean.dropped} of its items fail the app's check`;
  if (shippedCheckedAt && clean.file.checkedAt < shippedCheckedAt) return "its list is older than the one the app ships";
  return null;
}
function prepare({ root, log, err }) {
  const dataDir = path4.join(root, "data");
  const featuredFile = fs2.existsSync(path4.join(dataDir, "featured.json")) ? path4.join(dataDir, "featured.json") : null;
  const rel = (p) => path4.relative(root, p) || p;
  const built = buildCatalog({ C: capCatalog_exports, dataDir, featuredFile, appFeatured: () => FEATURED_IDS, rel, log, err });
  if (built.leftOut.length) {
    err("\nSTOP. These items would be left out of the list, so it is not signed. Fix them in data/:");
    for (const x of built.leftOut) err(`  data/${x.file}: ${x.n} ${x.n === 1 ? "item" : "items"}: ${x.why}`);
    throw new CatalogStop();
  }
  const clean = cleanCatalogFile(JSON.parse(built.text));
  let pages;
  try {
    pages = awesomePages({ C: capCatalog_exports, file: clean.file });
  } catch (e) {
    err(e.message);
    throw new CatalogStop();
  }
  return { built, pages };
}
function checkList({ root, log = console.log, err = console.error }) {
  const { built } = prepare({ root, log, err });
  log(`
Checked ${built.entries.length} items: every one passes the app's check, and the list can be signed as it is. Nothing was written.`);
  return { entries: built.entries.length };
}
function put(file, text2) {
  if (fs2.existsSync(file) && fs2.readFileSync(file, "utf8") === text2) return false;
  fs2.mkdirSync(path4.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  try {
    fs2.writeFileSync(tmp, text2);
    fs2.renameSync(tmp, file);
  } catch (e) {
    try {
      fs2.rmSync(tmp, { force: true });
    } catch {
    }
    throw e;
  }
  return true;
}
function publishList({ root, privateKeyPem, builtInKey = APP_PUBLIC_KEY, issuedAt, log = console.log, err = console.error }) {
  const stop = (line) => {
    err(line);
    throw new CatalogStop();
  };
  if (!builtInKey) stop("STOP. No app key is built into this publisher, so no app would use what it signs. Nothing was signed.");
  let privateKey;
  try {
    privateKey = crypto3.createPrivateKey(privateKeyPem);
  } catch {
    privateKey = null;
  }
  if (!privateKey || privateKey.asymmetricKeyType !== "ed25519") stop(`STOP. ${KEY_ENV} does not hold an Ed25519 private key. Nothing was signed.`);
  if (!sameKey(publicHalf(privateKey), builtInKey)) {
    stop(`STOP. The key in ${KEY_ENV} is not the one whose public half the app is built with. Every app would refuse a list it signs. Nothing was signed.`);
  }
  const { built, pages } = prepare({ root, log, err });
  const signedFile = path4.join(root, SIGNED_FILE);
  let held = null;
  try {
    const bytes = fs2.readFileSync(signedFile);
    if (appWouldRefuse(bytes, { publicKey: builtInKey }) === null) held = catalogUpdateEnvelopeOf(JSON.parse(bytes.toString("utf8").replace(/^﻿/, "")));
  } catch {
    held = null;
  }
  let body = null;
  if (!held || held.catalog !== built.text) {
    let signed;
    try {
      signed = signCatalog({ catalogText: built.text, privateKey, issuedAt: issuedAt ?? (/* @__PURE__ */ new Date()).toISOString(), shippedCheckedAt: SHIPPED_CHECKED_AT, builtInKey, F: capCatalogUpdate_exports, C: capCatalog_exports });
    } catch (e) {
      stop(`STOP. ${e instanceof Error ? e.message : "The list was not signed."}`);
    }
    const why = appWouldRefuse(Buffer.from(signed.body, "utf8"), { publicKey: builtInKey });
    if (why) stop(`STOP. An app would refuse the signed list: ${why}. Nothing was written.`);
    body = signed.body;
  }
  const changed = [];
  for (const [name, text2] of pages.files) if (put(path4.join(root, name), text2)) changed.push(name);
  const listedDir = path4.join(root, "listed");
  if (fs2.existsSync(listedDir)) {
    for (const n of fs2.readdirSync(listedDir).sort()) {
      if (n.endsWith(".md") && !pages.files.has(`listed/${n}`)) {
        fs2.rmSync(path4.join(listedDir, n));
        changed.push(`listed/${n} (removed)`);
      }
    }
  }
  if (body) {
    put(signedFile, body);
    const why = appWouldRefuse(fs2.readFileSync(signedFile), { publicKey: builtInKey });
    if (why) stop(`STOP. The signed list on disk would be refused: ${why}.`);
    changed.push(SIGNED_FILE);
  }
  log("");
  log(changed.length ? `Written: ${changed.join(", ")}.` : "Nothing changed.");
  log(body ? `Signed ${built.entries.length} items (list sha256 ${sha2562(built.text)}). An app takes it within an hour, or when its Capabilities screen opens.` : `${SIGNED_FILE} already holds this list, signed. Not signed again.`);
  return { signed: !!body, changed, entries: built.entries.length };
}
function isMain() {
  try {
    return !!process.argv[1] && fs2.realpathSync(process.argv[1]) === fs2.realpathSync(fileURLToPath2(import.meta.url));
  } catch {
    return false;
  }
}
if (isMain()) {
  const argv = process.argv.slice(2);
  const root = path4.resolve(path4.dirname(fileURLToPath2(import.meta.url)), "..");
  const unknown = argv.filter((a) => a !== "--check");
  if (unknown.length) {
    console.error(`"${unknown[0]}" is not something this script knows.
Usage: node scripts/publish.mjs [--check]`);
    process.exit(2);
  }
  try {
    if (argv.includes("--check")) checkList({ root });
    else {
      const pem = process.env[KEY_ENV] ?? "";
      delete process.env[KEY_ENV];
      if (!pem.trim()) {
        console.error(`STOP. ${KEY_ENV} is not set, so nothing can be signed. The publish workflow sets it from the catalog-signing environment. To check the list without signing: node scripts/publish.mjs --check`);
        process.exit(1);
      }
      publishList({ root, privateKeyPem: pem });
    }
  } catch (e) {
    if (!(e instanceof CatalogStop)) console.error(e instanceof Error ? e.message : "The list was not published.");
    process.exit(1);
  }
}
export {
  APP_PUBLIC_KEY,
  KEY_ENV,
  SHIPPED_CHECKED_AT,
  SIGNED_FILE,
  appWouldRefuse,
  checkList,
  publishList
};
