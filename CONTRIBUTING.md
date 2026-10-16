# Adding or changing an item

Every item lives in a file in [data](data). README.md and `catalog-update.json` are made from those files when a change is merged, so change the data, never those two.

## What belongs here

Something a person can give an AI agent: an MCP server, a skill or a pack of skills, a plugin, a set of subagents, a pack of hooks, a status line, a command line tool, an agent or an app. Not a list of other things, a guide, a directory or a feature built into an engine.

## Which file

- `data/wave3.json`: **listed, not reviewed by us.** Add a new item here. Its install door is always `"none"` and its manual steps say where to start; the app runs nothing for it.
- `data/wave1.json` and `data/wave2-*.json`: **reviewed.** A maintainer moves an item here after opening its source, checking what it can do and writing its install steps.
- `data/featured.json`: the featured items, by id, in the order the app shows them (the first six sit under the banner). Maintainers only.

## The fields

| Field | What it holds |
|---|---|
| `id` | Lower case letters, digits and dashes. Unique in the list. Never change an id once it is merged. |
| `name` | The name its maker uses, at most 80 characters. |
| `kind` | One of: `mcp-server`, `skill`, `skill-pack`, `plugin`, `subagent-set`, `hook-pack`, `status-line`, `tool`, `agent`, `app`. |
| `purposes` | Up to 6 ids from the purpose list below. Leave it empty rather than guess. |
| `maker` | Who makes it. |
| `tier` | `first-party` (the engine's own maker), `vendor` (the service's own maker) or `community`. |
| `source` | The https address the facts were read from: its repository or its own page. |
| `what` | One or two plain sentences on what it does, at most 400 characters. No marketing words. |
| `wave` | 1 or 2 for reviewed items, 3 for listed ones. It must match the file. |
| `worksWith` | The engines its source names: `claude`, `codex`, `antigravity`, `cursor`, `copilot`, `opencode`, `gemini`, `grok`, `any`. `any` is an ordinary command line tool. |
| `licence` | Its licence, as the source states it. |
| `signIn` | How it signs in: `kind` is `none`, `key` or `oauth`; `secretNames` names the variables it reads, never their values. |
| `can` | Reviewed items: whether it `reads`, `writes`, `sends` (to people), `spends` (money) and `deletes`, each true or false. |
| `canChecked` | True when `can` was read from its tool list or files, not guessed. |
| `ships` | What comes in the box: `instructions`, `scripts`, `hooks`, `bundled-server`, `hosted-server`, `binary` or `unknown`. |
| `health` | Whether it is archived, and its last release and push, as the source shows them. |
| `pinned` | The version or commit that was reviewed. |
| `checkedAt` | The day it was last checked, `YYYY-MM-DD`. |
| `riskNote` | One line a person should know before installing it. |
| `install` | How to install it: `door`, and `manual`, up to 12 lines a person can follow by hand. See below. |
| `also` | Other addresses of the same thing, so a twin is found. |

## Install steps

The `door` says what the app may do when someone presses Install:

- `none`: nothing. The person follows `manual`.
- `command`: up to 4 `steps`, each one program and its arguments in `argv`, never a shell line. The program is one of `claude`, `codex`, `npx`, `npm`, `pnpm`, `bun`, `uv`, `uvx`, `pipx`, `pip`, `brew`, `gh`, `cargo`, `go`. The app shows every step before it runs it.
- `skill-folder`: `url` is the GitHub folder of a skill, copied into the person's skills folder. Only where its licence allows a copy.
- `mcp-local`: `ref` names a server the app already carries.

Install steps are reviewed by a maintainer before they are merged. The app checks the exact form of every step again before the list is signed, and leaves out an item whose steps it would not run.

## Purposes

- `source-control`: Source control and CI
- `code-review`: Code review
- `testing`: Testing and QA
- `devtools`: Developer tools
- `frontend`: Frontend and UI
- `backend`: Backend and APIs
- `mobile`: Mobile
- `databases`: Databases
- `data`: Data and analytics
- `cloud`: Cloud and infrastructure
- `observability`: Monitoring and errors
- `security`: Security
- `sandboxes`: Sandboxes and code execution
- `browsers`: Browsers and scraping
- `search`: Web search
- `research`: Research
- `documents`: Documents and office files
- `docs`: Documentation
- `design`: Design
- `media`: Video, audio and images
- `memory`: Memory and knowledge
- `reasoning`: Reasoning
- `planning`: Planning and project tracking
- `specs`: Specs and requirements
- `communication`: Chat and email
- `calendar`: Calendar and meetings
- `files`: Files and storage
- `automation`: Automation and workflows
- `marketing`: Marketing and SEO
- `sales`: Sales and CRM
- `support`: Customer support
- `payments`: Payments and commerce
- `finance`: Accounting and finance
- `hr`: HR and recruiting
- `legal`: Legal and compliance
- `ai`: AI models and ML
- `agents`: Agent engines
- `orchestration`: Running many agents
- `usage`: Usage and cost
- `utilities`: Time and utilities

## The check

Run `node scripts/check.mjs` (Node 20 or later, nothing to install). It runs on every pull request and says which file, which item and what is wrong. Never put a key, a token or a password in a file here.

## License

By sending a change you dedicate it to the public domain under [CC0 1.0](LICENSE).
