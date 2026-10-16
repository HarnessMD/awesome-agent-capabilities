# Awesome agent capabilities

MCP servers, skills, plugins and tools you can give an AI agent: Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI and Grok Build. 2346 items, 621 of them reviewed by us.

This list is what the Capabilities screen of [Munder Difflin](https://harnessmd.com) shows. The app reads it from this repository, so a change merged here reaches people with no new release of the app.

## How a change reaches the app

1. Each item is a row in one of the files in [data](data). A pull request changes them, and two checks run on it: `node scripts/check.mjs` reads every file against the schema, and `node scripts/publish.mjs --check` builds the whole list with the app's own check.
2. A merge into `main` is checked and signed automatically. A workflow builds the list from [data](data), runs the app's own check on every item, writes this README and the pages in [listed](listed), signs the list and commits it as `catalog-update.json` at the top of this repository. Nobody signs by hand.
3. Munder Difflin reads that file when its Capabilities screen opens and once an hour. It uses the list only when the signature is ours, every item passes the check, and the list is newer than the one it holds.

## Reviewed and listed

- **Reviewed:** a maintainer opened the source, checked what it can do and wrote how to install it. Where it is safe, the app installs it with one press, after showing each step.
- **Listed, not reviewed by us:** found in public directories and listed as written there. The app runs nothing for these; open the source and follow its own steps.

## Contents

- [MCP servers](#mcp-servers) (298)
- [Skills](#skills) (25)
- [Skill packs](#skill-packs) (58)
- [Plugins](#plugins) (109)
- [Subagent sets](#subagent-sets) (4)
- [Hook packs](#hook-packs) (6)
- [Status lines](#status-lines) (3)
- [Tools](#tools) (93)
- [Agents](#agents) (14)
- [Apps](#apps) (11)
- [Listed, not reviewed by us](#listed-not-reviewed-by-us) (1725)
  - [MCP servers](listed/mcp-server.md) (701)
  - [Skills](listed/skill.md) (61)
  - [Skill packs](listed/skill-pack.md) (57)
  - [Plugins](listed/plugin.md) (401)
  - [Subagent sets](listed/subagent-set.md) (16)
  - [Hook packs](listed/hook-pack.md) (12)
  - [Status lines](listed/status-line.md) (3)
  - [Tools](listed/tool.md) (328)
  - [Agents](listed/agent.md) (45)
  - [Apps](listed/app.md) (101)

## MCP servers

### Source control and CI

- [Azure DevOps MCP server](https://github.com/microsoft/azure-devops-mcp): Gives an agent access to Azure DevOps: projects, work items, repositories and pull requests, pipelines, test plans, wikis, search and Advanced Security alerts. Microsoft recommends its hosted remote server over the local one. Made by Microsoft. Works with any engine.
- [CircleCI MCP server](https://circleci.com/docs/guides/toolkit/connecting-to-the-circleci-mcp-server/): CircleCI's own hosted server. Lists runs, workflows and jobs, reads job logs, tests and artifacts, and can rerun or cancel a workflow. Made by CircleCI. Works with all engines.
- [Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git): Reads status, diffs, history and branches of a local Git repository, and can stage, commit, reset the index, create a branch and check one out. Twelve tools, no push. It works on the whole repository that holds the folder it is given. Made by Model Context Protocol project. Works with all engines.
- [GitHub MCP Server](https://github.com/github/github-mcp-server): GitHub's own server: repositories, issues, pull requests, Actions, code security, gists and notifications. Its tools include delete\_file and delete\_repository. A read only switch and tool groups narrow it. Made by GitHub. Works with all engines.
- [GitLab MCP server](https://docs.gitlab.com/user/model_context_protocol/mcp_server/): GitLab's own server, built into GitLab. Reads projects, merge requests, diffs, pipelines and work items, and can create issues, commits, branches, merge requests and reviews, merge a request and run pipelines. Made by GitLab. Works with all engines.
- [GitLab MCP server (zereight)](https://github.com/zereight/gitlab-mcp): Community GitLab server with 275 tools for projects, files, branches, merge requests, issues, pipelines, wiki, releases, tags, milestones, variables and webhooks, plus raw GraphQL and REST calls. Made by zereight. Works with any engine.

### Code review

- [SonarQube MCP Server](https://github.com/SonarSource/sonarqube-mcp-server): Lets an agent read SonarQube Server or Cloud data such as issues, security hotspots, quality gates, coverage and measures, analyze code, and change issue or hotspot status. Made by SonarSource. Works with any engine.

### Testing and QA

- [BrowserStack MCP server](https://github.com/browserstack/mcp-server): Runs and manages testing on BrowserStack: manual and automated web and app tests, accessibility scans, load tests, Percy visual tests, test management and reporting, mostly through a searchable catalog of capabilities. Made by BrowserStack. Works with any engine.
- [Currents MCP server](https://github.com/currents-dev/currents-mcp): Gives an agent CI test results from Currents: runs, spec files, test results, errors and performance, plus management of actions, webhooks, Jira issues and share links. Made by Currents. Works with any engine.
- [k6 MCP server](https://github.com/grafana/mcp-k6): Validates and runs k6 load test scripts on the local machine and browses the k6 documentation. Made by Grafana Labs. Works with any engine.
- [Qase MCP server](https://github.com/qase-tms/qase-mcp-server): Reads and writes Qase test management data: test cases, runs, results, defects, suites, milestones, plans and reviews, with QQL search and a raw REST call tool. Made by Qase. Works with any engine.
- [Sauce Labs API MCP server](https://github.com/saucelabs/sauce-api-mcp): Two local servers for Sauce Labs. One reads accounts, devices, jobs, builds, storage and tunnels and uploads app files. The other controls real devices: sessions, app install, shell commands, files and network capture. Made by Sauce Labs. Works with any engine.
- [SmartBear MCP server](https://github.com/SmartBear/smartbear-mcp): One server for SmartBear products: BugSnag errors and performance, Reflect and BearQ test runs, Swagger, PactFlow contract testing, QMetry, QTM4J and Zephyr test management, and Collaborator reviews. Made by SmartBear. Works with any engine.

### Developer tools

- [ast-grep MCP Server](https://github.com/ast-grep/ast-grep-mcp): Searches a codebase by syntax structure instead of plain text, using patterns and YAML rules, tests a rule against a code snippet, and prints the syntax tree of a snippet. Made by ast-grep. Works with any engine.
- [Buildkite MCP server](https://github.com/buildkite/buildkite-mcp-server): Exposes Buildkite pipelines, builds, jobs, logs and tests to an agent, and can retry jobs. Made by Buildkite. Works with any engine.
- [Code Index MCP](https://github.com/johnhuang316/code-index-mcp): Indexes a code repository on the machine and lets an agent search code, find files by glob pattern and get a summary of a file's functions, imports and complexity. Made by johnhuang316. Works with any engine.
- [codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp): Indexes code repositories on the machine into a local knowledge graph and lets an agent search it, trace call paths, map a git diff to affected symbols and read code snippets. Needs no hosted service or API key. Made by DeusData. Works with any engine.
- [Dart and Flutter MCP server](https://github.com/dart-lang/ai): Exposes Dart and Flutter developer tools to an agent: analyze code, run pub commands, search pub.dev, run tests, hot reload, read runtime errors, inspect widgets and launch Flutter apps. Made by Dart team (dart-lang). Works with any engine.
- [Desktop Commander MCP](https://github.com/wonderwhy-er/DesktopCommanderMCP): Lets an agent run terminal commands and long running processes on the machine, and read, search, write, edit and move files, including Excel and PDF files. Made by wonderwhy-er. Works with any engine.
- [Docker Hub MCP server](https://github.com/docker/hub-mcp): Searches Docker Hub, lists namespaces, repositories and tags, finds hardened images, and can create a repository or update its information. Made by Docker. Works with any engine.
- [Harness MCP server](https://github.com/harness/mcp-server): Gives an agent access to the Harness platform through 11 generic tools over 261 resource types: list, get, create, update, delete and execute on pipelines, services, environments, feature flags, cost data and more. Made by Harness. Works with any engine.
- [Homebrew MCP Server](https://docs.brew.sh/MCP-Server): Ships inside Homebrew. Gives an agent tools for brew search, install, uninstall and upgrade, plus the style, typecheck and test commands for formula authors. Made by Homebrew. Works with any engine.
- [LaunchDarkly local MCP server](https://github.com/launchdarkly/mcp-server): Lets an agent list, create, update and delete LaunchDarkly feature flags and AI Configs, and read environments, audit log entries and code reference repositories. Self managed server meant for EU and Federal instances. Made by LaunchDarkly. Works with any engine.
- [Nx MCP Server](https://github.com/nrwl/nx-console): Gives an agent Nx documentation and the status and output of running Nx tasks, and with a flag the workspace project graph, project details and generators. With Nx Cloud it reads CI results and can apply or reject a self healing CI fix. Made by Nx (nrwl). Works with any engine.
- [Octocode MCP](https://github.com/bgauryy/octocode): Code research tools: search code, repositories, pull requests, issues and commits on GitHub, read GitHub files, and look up npm packages. Flags add local code search, file reads, language server lookups and cloning a repository into a local cache. Made by bgauryy (Octocode). Works with any engine.
- [Serena](https://github.com/oraios/serena): Finds and edits code by symbol through language servers, with refactoring that includes safe delete, a file search and replace, project memory, and a tool that runs shell commands. Made by Oraios AI. Works with all engines.
- [SSH MCP Server](https://github.com/tufantunc/ssh-mcp): Gives an agent SSH access to remote hosts: run commands, run commands with sudo, keep sessions open, send signals to processes and move files over SFTP. Commands are classified and checked against roles, with approval prompts and an audit log. Made by tufantunc. Works with any engine.

### Frontend and UI

- [21st MCP (was Magic MCP)](https://github.com/21st-dev/magic-mcp): Lets an agent search the 21st.dev catalog of React and Tailwind components, themes and logos, fetch component code, and generate UI with hosted 21st AI when the account has it. Made by 21st.dev. Works with any engine.
- [Angular CLI MCP server](https://angular.dev/ai/mcp): Ships inside the Angular command line. Gives best practices and documentation search, lists projects, starts and stops the dev server and runs build and test targets. Made by Google (Angular team). Works with any engine.
- [Chakra UI MCP server](https://github.com/chakra-ui/chakra-ui): Gives an agent the Chakra UI component list, component props, usage examples, theme tokens, migration help from v2 to v3, and Chakra UI Pro blocks and templates. Made by Chakra UI. Works with any engine.
- [MUI MCP](https://mui.com/material-ui/getting-started/mcp/): Fetches MUI's own documentation for the package a question is about, so answers quote real docs. Two tools, both read. Made by MUI. Works with any engine.
- [Next.js DevTools MCP](https://github.com/vercel/next-devtools-mcp): Connects an agent to a running Next.js 16 or newer dev server to read live errors, routes, logs and project metadata. Also points the agent at the docs bundled with Next.js and at the agent browser CLI. Made by Vercel. Works with any engine.
- [shadcn MCP server](https://ui.shadcn.com/docs/mcp): Ships inside the shadcn command line. Lets an agent browse and search component registries and install components into the project. Made by shadcn. Works with all engines.
- [Storybook MCP addon](https://storybook.js.org/docs/ai/mcp/overview): An addon that makes a running Storybook serve MCP. An agent can list component docs, preview and find stories, run story tests and push a review. In preview. Made by Storybook. Works with all engines.
- [Webflow MCP server](https://github.com/webflow/mcp-server): Lets an agent work with Webflow sites: read and change CMS collections and items, pages and site settings, publish sites, and edit designs on the live canvas through a companion Designer app. Made by Webflow. Works with any engine.

### Backend and APIs

- [Apollo MCP Server](https://github.com/apollographql/apollo-mcp-server): Exposes the GraphQL operations of your own graph as MCP tools, so an agent can call your APIs. Optional built in tools let the agent inspect the schema and run ad hoc GraphQL operations. Made by Apollo GraphQL. Works with any engine.
- [Appwrite MCP server](https://github.com/appwrite/mcp): Lets an agent work with an Appwrite backend: databases, users, functions, teams, storage and more. It exposes a few tools that search and call a large internal catalog of Appwrite API methods. Made by Appwrite. Works with any engine.
- [Convex MCP server](https://docs.convex.dev/ai/convex-mcp-server): Ships inside the Convex command line. Reads tables, data, logs and function specs of a deployment, runs deployed functions and can set or remove environment variables. Made by Convex. Works with any engine.
- [Firebase MCP Server](https://github.com/firebase/firebase-tools): Lets an agent work with Firebase projects: create projects and apps, manage Auth users, read and write Firestore and Realtime Database data, read Crashlytics and Cloud Functions logs, update Remote Config, and send Cloud Messaging push notifications. Made by Firebase (Google). Works with any engine.
- [Postman MCP Server](https://github.com/postmanlabs/postman-mcp-server): Connects an agent to a Postman account: workspaces, collections, specs, environments, mocks and monitors. It can create, update, run and delete these, and generate client code from API definitions. Made by Postman. Works with any engine.
- [Rails MCP Server](https://github.com/maquina-app/rails-mcp-server): Lets an agent explore Rails projects on the local machine: browse files, view routes, inspect models and the database schema, analyse controllers and views, and load Rails, Turbo, Stimulus and Kamal guides. Every analyzer only reads. Made by Maquina (Mario Alberto Chávez Cárdenas). Works with any engine.
- [Tidewave Phoenix](https://github.com/tidewave-ai/tidewave_phoenix): Runs inside a Phoenix app in development and lets an agent evaluate Elixir code in the running app, run SQL on the development database, read logs, find source locations and read docs for the exact package versions in use. Made by Tidewave (Dashbit). Works with any engine.

### Mobile

- [agent-device](https://github.com/callstack/agent-device): Lets an agent inspect, control and verify apps on iOS, Android and other targets: read accessibility snapshots, tap, fill, scroll, wait, and capture screenshots, logs and other evidence. Made by Callstack. Works with any engine.
- [Android MCP](https://github.com/CursorTouch/Android-MCP): Lets an agent control an Android device or emulator over ADB: read screen state, click, long click, type, swipe, drag, press keys, read notifications and run shell commands. Made by CursorTouch. Works with any engine.
- [Bitrise MCP server](https://github.com/bitrise-io/bitrise-mcp): Manages Bitrise mobile CI: apps, builds, pipelines, artifacts, cache, webhooks, workspaces and members, release management, CodePush and build insights. Made by Bitrise. Works with any engine.
- [Expo MCP Server](https://docs.expo.dev/eas/ai/mcp/): Expo's own hosted server. Reads Expo docs, builds, workflows and store reviews, and can install libraries, start, submit and cancel builds, and reply to store reviews in public. Made by Expo. Works with all engines.
- [iOS Simulator MCP server](https://github.com/joshuayoes/ios-simulator-mcp): Lets an agent work with iOS simulators: describe the screen, tap, type, swipe, take screenshots, record video, and install, launch and terminate apps. Made by joshuayoes. Works with any engine.
- [Maestro MCP](https://github.com/mobile-dev-inc/Maestro): Lets an agent drive a mobile app on an emulator, simulator or Android device with Maestro: inspect the screen, take screenshots, run Maestro flows, and submit flows to Maestro Cloud. Made by mobile.dev. Works with any engine.
- [MCP Appium](https://github.com/appium/appium-mcp): Lets an agent automate Android and iOS apps through Appium: manage sessions, find elements, tap and type, take screenshots, install and uninstall apps, and generate locators and test code. Made by Appium. Works with any engine.
- [Mobile MCP](https://github.com/mobile-next/mobile-mcp): Lets an agent automate iOS and Android devices, simulators and emulators: list screen elements, tap, swipe, type, take screenshots, install and uninstall apps, read logs and crashes, and reserve cloud devices. Made by Mobile Next. Works with any engine.
- [MobileBuildMCP (was XcodeBuildMCP)](https://github.com/getsentry/MobileBuildMCP): Gives an agent tools for iOS and macOS projects: build, run and test with Xcode on simulators, devices and macOS, manage simulators, drive the simulator UI, debug with LLDB and scaffold projects. Made by Sentry. Works with any engine.

### Databases

- [Airtable MCP server](https://support.airtable.com/docs/using-the-airtable-mcp-server): Airtable's own hosted server. Searches and reads bases, creates and updates records, creates bases, interfaces and draft automations, and can delete an automation that is switched off. Made by Airtable. Works with any engine.
- [Airtable MCP server](https://github.com/domdomegg/airtable-mcp-server): Lets an agent read and write Airtable bases: list bases and tables, read, search, create, update and delete records, create and update tables and fields, and read and add comments on records. Made by domdomegg. Works with any engine.
- [Anyquery](https://github.com/julien040/anyquery): A SQL query engine that lets an agent run SQL over files, databases and apps through plugins. Its MCP mode offers three tools to list tables, describe a table and run SELECT, INSERT, UPDATE or DELETE queries. Made by julien040. Works with any engine.
- [Astra DB MCP Server](https://github.com/datastax/astra-db-mcp): Lets an agent work with an Astra DB database: create, read, update and delete collections, documents, tables and keyspaces, and run vector and hybrid search. Made by DataStax. Works with any engine.
- [ClickHouse MCP Server](https://github.com/ClickHouse/mcp-clickhouse): Runs SQL queries on a ClickHouse cluster and lists databases and tables. Queries are read only unless write access is switched on. An optional chDB tool queries files, URLs and databases with an embedded engine. Made by ClickHouse. Works with any engine.
- [CockroachDB MCP Server](https://github.com/cockroachdb/cockroachdb-mcp-server): Lets an agent list databases, tables and cluster details in CockroachDB and run SELECT, EXPLAIN and SHOW statements. Write tools for creating databases and tables and changing rows are off by default. Made by cockroachdb (GitHub organisation). Works with any engine.
- [Couchbase MCP Server](https://github.com/couchbase/mcp-server-couchbase): Lets an agent inspect a Couchbase cluster, run SQL++ and search queries, read documents and analyze query performance. Read only mode is on by default; turning it off adds document, index, scope and collection writes. Made by Couchbase. Works with any engine.
- [DBHub](https://github.com/bytebase/dbhub): A small database server for PostgreSQL, MySQL, MariaDB, SQL Server, Oracle and SQLite. Two tools by default: run SQL and search the schema. It has a read only mode, row limits and a query timeout. Made by Bytebase. Works with all engines.
- [DuckDB / MotherDuck Local MCP Server](https://github.com/motherduckdb/mcp-server-motherduck): Runs DuckDB SQL on local database files, in memory databases, S3 hosted databases and MotherDuck, and lists databases, tables and columns. Read only unless started with the read write flag. Made by MotherDuck. Works with any engine.
- [InfluxDB 3 MCP Server](https://github.com/influxdata/influxdb3_mcp_server): Lets an agent query InfluxDB 3 with SQL or InfluxQL, list databases and tables, write line protocol data, create, update or delete databases, and manage tokens. Made by InfluxData. Works with any engine.
- [MCP MariaDB Server](https://github.com/MariaDB/mcp): Lets an agent list MariaDB databases and tables, read schemas and run SQL, read only by default. Optional vector store tools create, fill, search and delete embedding tables. Made by MariaDB. Works with any engine.
- [MCP Server for Milvus](https://github.com/zilliztech/mcp-server-milvus): Lets an agent search a Milvus vector database by text, vector or both, query with filters, create, load and release collections, insert data and delete entities. Made by Zilliz. Works with any engine.
- [MCP Server for MySQL](https://github.com/benborla/mcp-server-mysql): Lets an agent inspect MySQL schemas and run SQL queries. Read only by default; insert, update and delete are switched on with environment flags. Made by benborla. Works with any engine.
- [MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox): Google's database server with ready made tool sets for many engines. The app starts the PostgreSQL set: one tool runs any SQL, the rest list tables, views, indexes, locks, settings and statistics. Made by Google. Works with all engines.
- [MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server): Lets an agent query and change MongoDB databases and manage MongoDB Atlas: find, aggregate, insert, update and delete documents, create or drop collections, and create Atlas clusters, users and stream processing. Made by MongoDB. Works with any engine.
- [Neo4j MCP](https://github.com/neo4j/mcp): Lets an agent read the schema of a Neo4j graph database and run read or write Cypher queries. Write queries can be switched off. Made by Neo4j. Works with any engine.
- [Neon MCP Server](https://github.com/neondatabase/mcp-server-neon): Lets an agent manage Neon Postgres: create and delete projects, branches and compute endpoints, run SQL and migrations, tune queries, and manage Neon Auth, Data API, functions and storage. Made by Neon. Works with any engine.
- [OpenSearch MCP Server](https://github.com/opensearch-project/opensearch-mcp-server-py): Lets an agent search OpenSearch indices, read mappings, shards and cluster health, and call any OpenSearch API endpoint. Tool groups that are off by default add agent memory, PPL queries and search relevance tools. Made by OpenSearch project. Works with any engine.
- [Pinecone Developer MCP Server](https://github.com/pinecone-io/pinecone-mcp): Searches the Pinecone documentation, lists and describes indexes, creates an index, upserts records and searches or reranks records. Only indexes with integrated inference are supported. Made by Pinecone. Works with any engine.
- [PlanetScale MCP server](https://planetscale.com/docs/connect/mcp): PlanetScale's own hosted server. Lists databases, branches, schema, insights and invoices and runs read queries. One tool runs INSERT, UPDATE, DELETE and schema changes. Made by PlanetScale. Works with all engines.
- [Postgres MCP Pro](https://github.com/crystaldba/postgres-mcp): Lets an agent run SQL on a Postgres database, list schemas and objects, explain queries, check database health and get index recommendations. Restricted mode limits it to read only transactions. Made by Crystal DBA. Works with any engine.
- [Prisma MCP server](https://www.prisma.io/docs/postgres/integrations/mcp-server): Prisma's own hosted server for Prisma Postgres. Manages databases, runs SQL, restores backups, manages object storage and searches Prisma docs. Made by Prisma. Works with all engines.
- [Redis MCP Server](https://github.com/redis/mcp-redis): Lets an agent read and write data in Redis: strings, hashes, lists, sets, sorted sets, streams, JSON documents and pub/sub messages, plus vector index search and a Redis documentation search. Made by Redis. Works with any engine.
- [Supabase MCP](https://github.com/supabase/mcp): Lists and queries a Supabase project, runs SQL and migrations, deploys edge functions, manages branches and storage settings, and can create, pause and restore projects. A read only switch and a single project scope are set in the address. Made by Supabase. Works with all engines.
- [Upstash MCP Server](https://github.com/upstash/mcp-server): Lets an agent manage and debug Upstash resources: Redis databases and backups, QStash messages and schedules, Workflow runs, and Upstash Box remote containers where it can read and write files and run commands. Made by Upstash. Works with any engine.

### Data and analytics

- [Amplitude MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp): Amplitude's own hosted server. Queries product data, charts, cohorts, experiments, flags and session replays, and can create or edit charts, dashboards, notebooks, experiments, flags and the tracking plan. It can share items with people. Made by Amplitude. Works with all engines.
- [BigQuery MCP server](https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp): Google's own hosted server for BigQuery. Lists datasets and tables, reads their details and runs SQL. One tool is read only and one can change data. Made by Google. Works with any engine.
- [Confluent MCP Server](https://github.com/confluentinc/mcp-confluent): Lets an agent work with Confluent Cloud, Confluent Platform or plain Apache Kafka: manage topics, produce and consume messages, run Flink SQL statements, and manage connectors, schemas and Tableflow. Made by Confluent. Works with any engine.
- [Data Commons MCP server](https://github.com/datacommonsorg/agent-toolkit): Lets an agent fetch public statistics from the Data Commons knowledge graph: search for indicators and get observations for places and variables. Made by Data Commons. Works with any engine.
- [dbt MCP Server](https://github.com/dbt-labs/dbt-mcp): Lets an agent read dbt project metadata, lineage and Semantic Layer metrics, run dbt CLI commands such as build, run and test, run SQL, and trigger or inspect dbt Platform jobs. Made by dbt Labs. Works with any engine.
- [Fivetran MCP Server](https://github.com/fivetran/fivetran-mcp): Lets an agent call the Fivetran API. Read only by default. Raising FIVETRAN\_SCOPE unlocks write and delete tools for connections, destinations, users, teams and more. Made by Fivetran. Works with any engine.
- [Google Analytics MCP Server](https://github.com/googleanalytics/google-analytics-mcp): Lets an agent read Google Analytics account and property details and run standard, funnel and realtime reports through the Admin and Data APIs. Read only. Made by Google Analytics. Works with any engine.
- [Jupyter MCP Server](https://github.com/datalayer/jupyter-mcp-server): Lets an agent work in Jupyter notebooks in real time: read, insert, edit and delete cells, run cells or arbitrary code, and optionally launch code sandboxes. Made by Datalayer. Works with any engine.
- [Keboola MCP Server](https://github.com/keboola/mcp-server): Lets an agent work with a Keboola project: query storage tables, create and update component configs, SQL transformations, flows and data apps, and run jobs. Made by Keboola. Works with any engine.
- [Mixpanel MCP server](https://docs.mixpanel.com/docs/mcp): Mixpanel's own hosted server. Runs queries and reads reports, and can create, update and delete dashboards, cohorts and tags, edit events and properties, and create experiments and feature flags. Made by Mixpanel. Works with all engines.
- [PostHog MCP](https://posthog.com/docs/model-context-protocol): Reads and writes across PostHog: analytics queries and SQL, feature flags, experiments, dashboards, error tracking, data pipelines and support tickets. Hundreds of tools, with many delete tools, ticket replies and broadcasts. Made by PostHog. Works with all engines.
- [Power BI Authoring MCP Server](https://github.com/microsoft/powerbi-modeling-mcp): Lets an agent read and change Power BI semantic models in Power BI Desktop, Fabric workspaces or PBIP files: tables, columns, measures, relationships and roles, plus running DAX queries. Made by Microsoft. Works with any engine.
- [Prefect MCP server](https://github.com/PrefectHQ/prefect-mcp-server): Gives an agent read only tools to inspect Prefect Cloud or self hosted Prefect: dashboards, deployments, flow runs, task runs, logs, events, work pools and automations, plus Prefect docs search. Made by Prefect. Works with any engine.
- [Tableau MCP](https://github.com/tableau/tableau-mcp): Lets an agent query Tableau data sources, explore workbooks, views, flows and Pulse metrics, and publish, move or delete content on Tableau Cloud or Tableau Server. Made by Tableau. Works with any engine.

### Cloud and infrastructure

- [AKS-MCP](https://github.com/Azure/aks-mcp): Lets an agent work with Azure Kubernetes Service clusters by running az, kubectl, helm, cilium and hubble commands as the signed in user, plus tools for network details, monitoring, node logs, diagnostics and Fleet. Read only by default. Made by Microsoft Azure. Works with any engine.
- [Argo CD MCP server](https://github.com/argoproj-labs/mcp-for-argocd): Lists, creates, updates, deletes and syncs Argo CD applications, runs resource actions, and reads resource trees, workload logs and events. Made by argoproj-labs (first written and donated by Akuity). Works with any engine.
- [AWS MCP Server](https://docs.aws.amazon.com/agent-toolkit/latest/userguide/getting-started-aws-mcp-server.html): AWS's managed server: makes any authenticated AWS API call, runs scripts in a sandbox, and searches and reads AWS documentation. It can do whatever the signed in identity is allowed to do. Made by AWS. Works with all engines.
- [Azure MCP Server](https://github.com/microsoft/mcp): Azure MCP Server from Microsoft. Lets an agent read and manage Azure resources across 45 plus service areas such as Storage, Key Vault, Compute, SQL and Monitor. This repository also builds the Fabric MCP server and lists other Microsoft servers. Made by Microsoft. Works with any engine.
- [Cloud Run MCP server](https://github.com/GoogleCloudPlatform/cloud-run-mcp): Lets an agent deploy code to Google Cloud Run from a local folder or from file contents, list services, read service details and logs, and list or create Google Cloud projects. Made by Google Cloud. Works with any engine.
- [Cloudflare API MCP Server](https://github.com/cloudflare/mcp): Three tools cover the whole Cloudflare API, about 2,500 endpoints: search the docs, search the API description, and run code that calls any endpoint. What it may change is set by the permissions chosen at sign in. Made by Cloudflare. Works with all engines.
- [DigitalOcean MCP server (App Platform address)](https://github.com/digitalocean-labs/mcp-digitalocean): Lets an agent manage DigitalOcean resources through one server per service: App Platform apps, droplets, databases, Kubernetes clusters, networking, storage, functions, AI inference and more, plus documentation search. Made by DigitalOcean (digitalocean-labs). Works with any engine.
- [Docker MCP server](https://github.com/ckreiling/mcp-server-docker): Lets an agent manage Docker on the local machine or on a remote host over SSH: list, create, run, stop and remove containers, pull, build, push and remove images, and manage networks and volumes. Made by ckreiling. Works with any engine.
- [gcloud MCP Server](https://github.com/googleapis/gcloud-mcp): Lets an agent run gcloud CLI commands against Google Cloud. The same repository ships three more servers: observability (logs, metrics, traces), storage (buckets and objects) and Backup and DR. Made by Google Cloud (googleapis). Works with any engine.
- [Heroku Platform MCP Server](https://github.com/heroku/heroku-mcp-server): Lets an agent manage Heroku apps, dynos, add ons, pipelines and Heroku Postgres through the Heroku CLI. It can create and scale apps, run code on one off dynos and run SQL. Made by Heroku. Works with any engine.
- [Kubernetes MCP Server](https://github.com/containers/kubernetes-mcp-server): Lets an agent work with a Kubernetes or OpenShift cluster through the Kubernetes API: list, read, create, update and delete any resource, read pod logs, run commands in pods, start pods, and manage Helm releases. Optional tool sets cover Kiali, KubeVirt, Tekton and more. Made by containers (GitHub organisation). Works with any engine.
- [MCP Server Kubernetes](https://github.com/Flux159/mcp-server-kubernetes): Lets an agent manage a Kubernetes cluster through kubectl and Helm: get, describe, create, apply, patch, scale and delete resources, read logs, run commands in pods, forward ports, and install or remove Helm charts. Made by Flux159. Works with any engine.
- [Netlify MCP Server](https://github.com/netlify/netlify-mcp): Lets an agent create, deploy and manage Netlify projects, forms, environment variables, extensions and access controls through the Netlify API and CLI. Made by Netlify. Works with any engine.
- [Railway MCP server](https://docs.railway.com/reference/mcp-server): Railway's own hosted server. Lists projects and services, creates a project, redeploys, accepts staged deploys and sets or deletes feature flags. A wider local server ships in the Railway command line. Made by Railway. Works with any engine.
- [Runpod MCP server](https://github.com/runpod/runpod-mcp): Lets an agent manage a Runpod account: Pods, Serverless endpoints, templates, network volumes, registries and jobs. It can create, update, start, stop and delete these resources. Made by Runpod. Works with any engine.
- [Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server): Looks up providers, modules and policies in the Terraform Registry with no sign in. With a token and the terraform tool group it reads and changes HCP Terraform workspaces, variables and runs, including plan, apply and a safe workspace delete. Made by HashiCorp. Works with all engines.
- [Vercel MCP](https://vercel.com/docs/agent-resources/vercel-mcp): Reads projects, deployments, logs and analytics, creates and cancels deployments, edits projects, domains and environment variables, and can buy domains, credits, add ons and the Pro plan. Made by Vercel. Works with all engines.

### Monitoring and errors

- [Axiom MCP Server](https://axiom.co/docs/console/intelligence/mcp-server): Axiom's own hosted server. Lets an agent query your Axiom data with the Axiom Processing Language. Made by Axiom. Works with all engines.
- [Datadog MCP Server](https://docs.datadoghq.com/mcp_server/setup/): Datadog's own hosted server. Searches logs, metrics, traces, monitors and incidents, and can create or edit notebooks, dashboards, monitors, cases and feature flags. Some tools delete dashboards and rules. Made by Datadog. Works with all engines.
- [Grafana MCP server](https://github.com/grafana/mcp-grafana): Lets an agent search and change Grafana dashboards, datasources, alert rules, incidents and annotations, and run queries against Prometheus, Loki, Tempo, SQL and other datasources through a Grafana instance. Made by Grafana Labs. Works with any engine.
- [Honeybadger MCP server](https://github.com/honeybadger-io/honeybadger-mcp-server): Lets an agent read Honeybadger projects, faults, notices, Insights data, dashboards, alarms and check ins. With writes switched on it can also create, update and delete them and comment on faults. Made by Honeybadger. Works with any engine.
- [Honeycomb MCP server](https://docs.honeycomb.io/integrations/mcp/configuration-guide/): Honeycomb's own hosted server. Runs queries, reads traces, boards, triggers and SLOs, and can create or update boards, triggers, SLOs and alert recipients. One tool sends feedback to Honeycomb's team. Made by Honeycomb. Works with all engines.
- [New Relic MCP server](https://docs.newrelic.com/docs/agentic-ai/mcp/setup/): New Relic's own hosted server. Turns a question into a query, reports on alerts, user impact and deployments, and searches traces. Made by New Relic. Works with all engines.
- [Opik MCP server](https://github.com/comet-ml/opik-mcp): Lets an agent read Opik traces, spans, prompts, datasets and experiments, and write to an Opik workspace: log traces and spans, add scores and comments, save prompt versions, and manage datasets and experiments. Made by Comet. Works with any engine.
- [PagerDuty MCP server](https://support.pagerduty.com/main/docs/pagerduty-mcp-server): PagerDuty's own hosted server. Reads incidents, services, schedules and teams, and can create and update incidents, add responders, change schedules and post to status pages. It can delete teams and alert grouping settings. Made by PagerDuty. Works with all engines.
- [Prometheus MCP server](https://github.com/pab1it0/prometheus-mcp-server): Lets an agent run PromQL instant and range queries against a Prometheus server and list its metrics, metric metadata and scrape targets. Made by pab1it0. Works with any engine.
- [Rollbar MCP server](https://github.com/rollbar/rollbar-mcp-server): Lets an agent read Rollbar items, occurrences, deployments, versions, item history and session replays, update an item's status, level or assignee, and post comments on items. Made by Rollbar. Works with any engine.
- [Rootly MCP server](https://github.com/rootlyhq/rootly-mcp-server): Lets an agent read and manage Rootly incidents, alerts, on call schedules, services, teams and workflows, and get on call and incident summaries. Rootly runs a hosted server; it can also run locally with an API token. Made by Rootly. Works with any engine.
- [Sentry MCP](https://github.com/getsentry/toolkit): Searches errors, traces and logs, reads issues, events, releases and docs, and creates or deletes projects, teams, keys, alert rules and monitors. Hosted by Sentry. Made by Sentry. Works with all engines.
- [SigNoz MCP server](https://github.com/SigNoz/signoz-mcp-server): Lets an agent query SigNoz metrics, logs and traces, and list, create, update and delete alerts, dashboards, saved views and notification channels. Works with SigNoz Cloud or a self hosted SigNoz. Made by SigNoz. Works with any engine.
- [VictoriaMetrics MCP server](https://github.com/VictoriaMetrics/mcp-victoriametrics): Lets an agent query a VictoriaMetrics instance with PromQL or MetricsQL, list metrics, labels and series, view alerts and rules, check cardinality and query statistics, and search the bundled VictoriaMetrics documentation. Made by VictoriaMetrics. Works with any engine.

### Security

- [Auth0 MCP server](https://github.com/auth0/auth0-mcp-server): Manages an Auth0 tenant through the Management API: applications, resource servers, client grants, actions, forms and logs. Can save app credentials to a local .env file. Made by Auth0. Works with any engine.
- [Bitwarden MCP server](https://github.com/bitwarden/mcp-server): Reads and manages a Bitwarden vault through the Bitwarden CLI and administers an organization through the Bitwarden Public API. For local use only. Made by Bitwarden. Works with any engine.
- [Burp Suite MCP server](https://github.com/PortSwigger/mcp-server): Burp Suite extension that lets an agent read proxy history and scanner issues, send HTTP requests, create Repeater tabs, send requests to Intruder and edit Burp settings. Made by PortSwigger. Works with any engine.
- [CrowdStrike Falcon MCP server](https://github.com/CrowdStrike/falcon-mcp): Connects an agent to the CrowdStrike Falcon platform: detections, hosts, threat intelligence, vulnerabilities, cloud security, policies, exclusions, SIEM queries and more, split into modules. Made by CrowdStrike. Works with any engine.
- [GitGuardian MCP server](https://github.com/GitGuardian/ggmcp): Scans code for leaked secrets, lists and triages GitGuardian incidents, creates honeytokens and opens code fix requests. Made by GitGuardian. Works with any engine.
- [IDA Pro MCP](https://github.com/mrexodia/ida-pro-mcp): Lets an agent reverse engineer binaries in IDA Pro: decompile, disassemble, search, rename, comment, set types, patch bytes, drive the debugger and run Python inside IDA. Made by mrexodia. Works with any engine.
- [Infisical MCP server](https://github.com/Infisical/infisical-mcp-server): Creates, reads, updates and deletes secrets in Infisical, creates projects, environments and folders, and invites members to a project. Made by Infisical. Works with any engine.
- [Okta MCP server](https://github.com/okta/okta-mcp-server): Manages an Okta org through the Admin Management APIs: users, groups, applications, policies, device assurance, system logs, brands, themes, custom pages, email templates and domains. Made by Okta. Works with any engine.
- [OSV MCP server](https://github.com/StacklokLabs/osv-mcp): Queries the OSV open source vulnerability database for a package version or commit, one at a time or in batches, and fetches a vulnerability by ID. Made by Stacklok. Works with any engine.
- [Semgrep MCP server](https://github.com/semgrep/semgrep/tree/develop/cli/src/semgrep/mcp): Scans code for security problems, runs custom rules and supply chain scans, and reads findings from the Semgrep platform when a token is set. For Claude Code it comes as the Semgrep Guardian plugin: the server, hooks that scan what an agent writes, and skills. Made by Semgrep. Works with all engines.
- [Snyk Studio MCP](https://github.com/snyk/studio-mcp): Runs Snyk security scans from an agent: open source dependencies, code, infrastructure as code, containers, SBOM files and secrets, plus package health checks. Ships inside the Snyk CLI. Made by Snyk. Works with any engine.
- [Socket MCP server](https://github.com/SocketDev/socket-mcp): Looks up Socket security scores and metadata for packages on npm, PyPI, cargo, Maven, NuGet, RubyGems and Go, and reads organization alerts, the threat feed and package files. Made by Socket. Works with any engine.
- [Vault MCP server](https://github.com/hashicorp/vault-mcp-server): Manages HashiCorp Vault mounts, reads, writes and deletes KV secrets, and runs PKI tasks such as creating roles and issuing certificates. Made by HashiCorp. Works with any engine.

### Sandboxes and code execution

- [Container Use](https://github.com/dagger/container-use): Gives each coding agent its own container and git branch to work in. The agent opens an environment, runs commands in it, and reads, writes and deletes files there. The person reviews the work as a branch. Made by Dagger. Works with any engine.
- [LLM Sandbox MCP server](https://github.com/vndee/llm-sandbox): Lets an agent run code in an isolated Docker, Podman or Kubernetes container and get back the output and any plots. Supports Python, JavaScript, Java, C++, Go, R and Ruby. Made by vndee. Works with any engine.
- [OpenSandbox MCP server](https://github.com/opensandbox-group/OpenSandbox): Lets an agent create sandboxes on an OpenSandbox server that the person runs, run commands inside them, and read, write, move and delete files there. Made by OpenSandbox. Works with any engine.

### Browsers and scraping

- [AgentQL MCP Server](https://github.com/tinyfish-io/agentql-mcp): Gives an agent one tool that extracts structured data from a web page, given the page address and a description of the fields wanted. Made by TinyFish (AgentQL). Works with any engine.
- [Apify MCP Server](https://github.com/apify/apify-mcp-server): Lets an agent find and run Apify Actors (ready made scrapers and crawlers) to pull data from websites, search engines and social media, read run results and storage, and manage tasks, schedules and builds. Actor runs are paid. Made by Apify. Works with any engine.
- [Bright Data MCP](https://github.com/brightdata/brightdata-mcp): Gives an agent web search, page scraping to Markdown or HTML, structured data from over 1,200 ready made scrapers, and a remote browser it can click and type in. Usage beyond the free monthly quota is paid. Made by Bright Data. Works with any engine.
- [BrowserTools MCP](https://github.com/AgentDeskAI/browser-tools-mcp): Shows an agent what is happening in the person's real Chrome tab: console logs, network requests, the selected element, screenshots, browser storage, and Lighthouse audits for accessibility, performance and SEO. Made by AgentDesk. Works with any engine.
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp): Controls and inspects a live Chrome: input, navigation, network and console, performance traces, Lighthouse audits, heap snapshots, and installing or removing extensions. Made by Google (Chrome DevTools team). Works with all engines.
- [Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch): Fetches a web address and returns the page as markdown. One tool. Its maker warns that it can reach local and internal addresses. Made by Model Context Protocol project. Works with all engines.
- [Firecrawl](https://github.com/firecrawl/firecrawl-mcp-server): Scrapes, crawls, maps and searches the web, drives pages by clicking and typing, and runs scheduled page monitors that can alert by webhook or email. Calls draw Firecrawl credits. Made by Firecrawl. Works with all engines.
- [Firefox DevTools MCP](https://github.com/mozilla/firefox-devtools-mcp): Lets an agent drive a local Firefox: open and navigate pages, take snapshots and screenshots, click and type, read console messages and network requests, run JavaScript in the page, and install or remove extensions. Made by Mozilla. Works with any engine.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp): Drives a real browser: opens pages, clicks, types, fills forms, uploads files, runs page scripts, takes screenshots and saves PDFs. It can clear cookies and stored site data. Made by Microsoft. Works with all engines.
- [Playwriter](https://github.com/remorses/playwriter): Lets an agent control the person's own running Chrome through a browser extension, with existing logins and cookies. The agent runs Playwright code snippets against tabs the person has enabled. Made by remorses. Works with any engine.
- [ScrapeGraph MCP Server](https://github.com/ScrapeGraphAI/scrapegraph-mcp): Lets an agent use the ScrapeGraph AI API: scrape a page to markdown or other formats, extract structured data with a prompt, search the web, crawl sites, and create scheduled monitors. Calls use ScrapeGraph credits. Made by ScrapeGraphAI. Works with any engine.
- [Steel MCP Server](https://github.com/steel-dev/steel-mcp-server): Gives an agent a real Chrome browser in the Steel cloud: read pages that block plain fetches, take screenshots and PDFs, click, type and fill forms in a session, and hand the browser to a person for sign in or a CAPTCHA. Made by Steel. Works with any engine.

### Web search

- [Brave Search](https://github.com/brave/brave-search-mcp-server): Web, local, place, image, video and news search plus a summariser, through the Brave Search API. Every tool is a search. Made by Brave. Works with all engines.
- [DuckDuckGo MCP server](https://github.com/nickclyde/duckduckgo-mcp-server): Lets an agent search the web with DuckDuckGo and fetch a web page as cleaned text. No account or key is needed. Made by nickclyde. Works with any engine.
- [Exa](https://github.com/exa-labs/exa-mcp-server): Web search and page reading, hosted by Exa. Two tools by default, with an advanced search tool and an agent run tool that can be switched on. Made by Exa. Works with all engines.
- [Jina AI MCP server](https://github.com/jina-ai/MCP): Lets an agent read web pages and PDFs as Markdown, take page screenshots, search the web, arXiv, SSRN and images, rerank documents, and extract figures and tables from PDFs through the server Jina AI runs. Made by Jina AI. Works with any engine.
- [Kagi MCP server](https://github.com/kagisearch/kagimcp): Lets an agent search the web, news, videos, podcasts and images with Kagi and fetch a page's full content as Markdown. Needs a Kagi API key. Made by Kagi. Works with any engine.
- [Linkup MCP server](https://github.com/LinkupPlatform/linkup-mcp-server): Lets an agent search the web through Linkup, start a long running research task and poll for its result, and fetch the content of a web page. Made by Linkup. Works with any engine.
- [Meilisearch MCP Server](https://github.com/meilisearch/meilisearch-mcp): Lets an agent manage a Meilisearch instance: create and delete indexes, add documents, search, change settings, manage API keys and check tasks and health. Made by Meilisearch. Works with any engine.
- [Open-WebSearch](https://github.com/Aas-ee/open-webSearch): Lets an agent search the web through several engines (Bing, DuckDuckGo, Brave, Baidu, Exa and others) without API keys, and fetch page content, GitHub READMEs and articles from CSDN and Juejin. Made by Aas-ee. Works with any engine.
- [Parallel Search MCP](https://github.com/parallel-web/search-mcp): Lets an agent search the web and read web pages through the server Parallel runs. The free tier needs no account or API key and has rate limits. Made by Parallel. Works with any engine.
- [Perplexity MCP server](https://github.com/perplexityai/modelcontextprotocol): Web search, quick answers, deep research and reasoning through the Perplexity API. Made by Perplexity. Works with any engine.
- [SearXNG MCP server](https://github.com/ihor-sokoliuk/mcp-searxng): Lets an agent search the web through a SearXNG instance the person runs or trusts, get query suggestions, inspect the instance, and read a URL as text or Markdown. Made by ihor-sokoliuk. Works with any engine.
- [SerpApi MCP server](https://github.com/serpapi/serpapi-mcp): Runs searches on Google, Bing, YouTube, Amazon, eBay and other engines through SerpApi and returns the results as JSON or Markdown. Made by SerpApi. Works with any engine.
- [Tavily MCP server](https://github.com/tavily-ai/tavily-mcp): Web search, page extraction, site mapping, crawling and research through the Tavily API. Made by Tavily. Works with any engine.
- [You.com MCP bridge](https://github.com/youdotcom-oss/mcp): Local stdio bridge to the hosted You.com MCP server. Gives web search, page contents, discovery and an account balance check, plus finance and research tools on request. Made by You.com. Works with any engine.

### Research

- [arXiv MCP server](https://github.com/blazickjp/arxiv-mcp-server): Lets an agent search arXiv, download papers to local disk as Markdown, read them by section or as original LaTeX, export BibTeX, follow citations and keep saved topic watches. Made by blazickjp. Works with any engine.
- [BioMCP](https://github.com/genomoncology/biomcp): Lets an agent search and fetch biomedical records such as genes, variants, drugs, diseases, trials and articles from about 70 public sources including PubMed, ClinVar and ClinicalTrials.gov. All tools are read only. Made by GenomOncology. Works with any engine.
- [Paper Search MCP](https://github.com/openags/paper-search-mcp): Lets an agent search academic papers across arXiv, PubMed, bioRxiv, Semantic Scholar, Crossref, OpenAlex and about twenty other sources, download PDFs to local disk and read their text. Made by openags. Works with any engine.
- [Zotero MCP](https://github.com/54yyyu/zotero-mcp): Lets an agent search a Zotero library, read item metadata, full text and PDF pages, read and create annotations and notes, add papers by DOI, URL, ISBN or file, and manage collections and tags. Made by 54yyyu. Works with any engine.

### Documents and office files

- [Anytype MCP server](https://github.com/anyproto/anytype-mcp): Lets an agent work with an Anytype knowledge base through the Anytype API: search, and create, read, update and delete spaces, objects, lists, properties, tags and types. Made by Anytype (Any association). Works with any engine.
- [Docling MCP](https://github.com/docling-project/docling-mcp): Converts PDF and other documents into structured Docling documents, exports them to Markdown, and builds or edits documents step by step. Conversion goes through a Docling Serve API by default, or runs locally with an extra install. Made by Docling project. Works with any engine.
- [Excel MCP Server](https://github.com/haris-musa/excel-mcp-server): Creates, reads and edits Excel files without Microsoft Excel: cells, formulas, tables, charts, PivotTables, formatting and sheets. Can read VBA code; writing VBA is off unless a flag is set. Made by haris-musa. Works with any engine.
- [MCP server for Obsidian](https://github.com/MarkusPfundstein/mcp-obsidian): Lets an agent work with an Obsidian vault through the Local REST API plugin: list files, read file contents, search, append or patch content, and delete files. Made by MarkusPfundstein. Works with any engine.
- [mcp-pandoc](https://github.com/vivekVells/mcp-pandoc): Converts documents between formats with pandoc: Markdown, HTML, DOCX, ODT, RST, LaTeX, EPUB, ipynb and TXT in both directions, plus PDF and PPTX as output. Reads an input file and can write the result to a file. Made by vivekVells. Works with any engine.
- [Obsidian MCP server (cyanheads)](https://github.com/cyanheads/obsidian-mcp-server): Lets an agent read, search, write and edit notes in an Obsidian vault through the Local REST API plugin, manage tags and frontmatter, delete notes, and optionally run command palette commands. Made by cyanheads. Works with any engine.

### Documentation

- [AWS Documentation MCP Server](https://github.com/awslabs/mcp/tree/main/src/aws-documentation-mcp-server): Searches AWS documentation, reads pages as markdown and recommends related pages. Needs no AWS account. Made by AWS (awslabs). Works with any engine.
- [AWS Knowledge MCP Server](https://github.com/awslabs/mcp/tree/main/src/aws-knowledge-mcp-server): AWS's own hosted server. Searches and reads AWS documentation, lists regions, says where a service is available and fetches AWS agent skills. No sign in. Made by AWS. Works with any engine.
- [Cloudflare Documentation MCP server](https://github.com/cloudflare/mcp-server-cloudflare): Cloudflare's own hosted server for its documentation. No sign in. The same repository documents more hosted servers, each at its own address, for containers, browser runs and other products. Made by Cloudflare. Works with any engine.
- [Context7](https://github.com/upstash/context7): Looks up current documentation and code examples for a library, so an agent does not answer from memory. Two tools: find the library, then query its docs. Made by Upstash. Works with all engines.
- [GitMCP](https://github.com/idosal/git-mcp): Free remote server that turns any public GitHub repository or GitHub Pages site into a documentation source: fetch its documentation, search the documentation and code, and fetch linked URLs. Made by idosal. Works with any engine.
- [Google Developer Knowledge MCP server](https://developers.google.com/knowledge/mcp): Google's own hosted server for its developer documentation. Searches documents, fetches them and answers questions from them. Made by Google. Works with all engines.
- [Grounded Docs MCP Server](https://github.com/arabold/docs-mcp-server): Builds a local index of documentation from websites, GitHub, npm, PyPI and local files, and lets an agent search it by library and version, read pages and fetch a URL as Markdown. Made by arabold. Works with any engine.
- [Microsoft Learn MCP Server](https://github.com/MicrosoftDocs/mcp): Searches Microsoft's official documentation and code samples and fetches a documentation page as Markdown. Made by Microsoft. Works with any engine.
- [Notion MCP](https://developers.notion.com/docs/get-started-with-mcp): Searches and reads a Notion workspace, creates, updates, moves and duplicates pages and databases, adds comments, and moves pages and databases to Trash. Hosted by Notion. Made by Notion. Works with all engines.
- [OpenTofu MCP Server](https://github.com/opentofu/opentofu-mcp-server): Lets an agent search the OpenTofu Registry and read details and documentation for providers, modules, resources and data sources. Read only. Made by OpenTofu. Works with any engine.
- [pg-aiguide](https://github.com/timescale/pg-aiguide): Searches the PostgreSQL, TimescaleDB and PostGIS manuals and serves curated Postgres best practice guides (skills) to the agent. Made by Tiger Data (Timescale). Works with any engine.
- [Ref MCP](https://github.com/ref-tools/ref-tools-mcp): Searches technical documentation for APIs, services and libraries, on the public web, GitHub and private sources such as repositories and PDFs, and reads a URL as Markdown. Made by Ref (ref.tools). Works with any engine.
- [Shopify Dev MCP server](https://shopify.dev/docs/apps/build/devmcp): Connects an agent to Shopify's developer resources. Runs on your machine and needs no sign in. Made by Shopify. Works with all engines.

### Design

- [Canva MCP server](https://github.com/canva-sdks/canva-skills/tree/main/plugins/canva): Canva's hosted server. Its registry record says it creates, searches, edits and exports designs and assets. Canva's setup page refused an automated read, so its tool list was not read. Made by Canva. Works with all engines.
- [draw.io MCP Server](https://github.com/jgraph/drawio-mcp): Creates draw.io diagrams from XML, CSV or Mermaid and opens them in the draw.io editor or shows them inline in chat. Also searches the draw.io shape libraries and can read or replace pages of a local .drawio file. Made by JGraph (draw.io). Works with any engine.
- [Draw.io MCP server (lgazo)](https://github.com/lgazo/drawio-mcp-server): Lets an agent build and edit a Draw.io diagram live: add, edit and delete shapes and edges, manage pages and layers, and import or export diagrams. Works through a built in editor in the browser or a browser extension. Made by lgazo. Works with any engine.
- [Excalidraw MCP Server (yctimlin)](https://github.com/yctimlin/mcp_excalidraw): Gives an agent a live local Excalidraw canvas: create, read, update and delete elements, align and group them, take screenshots, convert Mermaid, and export or import .excalidraw files. Made by yctimlin. Works with any engine.
- [Figma MCP server](https://github.com/figma/mcp-server-guide): Reads design context, variables, screenshots and Code Connect maps from Figma files. The hosted server also writes to the canvas: use\_figma creates, edits and deletes objects, and image generation uses Figma AI credits. Made by Figma. Works with all engines.
- [Framelink MCP for Figma](https://github.com/GLips/Figma-Context-MCP): Fetches layout and styling data for a Figma file, frame or group through the Figma API, simplified for a coding agent, and downloads images from the file to a local folder. Made by GLips (Framelink). Works with any engine.
- [MCP Mermaid](https://github.com/hustcc/mcp-mermaid): Renders Mermaid diagram code to an image, SVG or a public mermaid.ink link, and can save the PNG to disk. Made by hustcc. Works with any engine.
- [MCP Server Chart](https://github.com/antvis/mcp-server-chart): Generates charts, diagrams and maps (26 tools, for example line, bar, pie, sankey, mind map) from data the agent passes in. By default the data is sent to AntV's chart generation service, which returns an image URL. Made by AntV. Works with any engine.
- [Talk to Figma MCP](https://github.com/grab/cursor-talk-to-figma-mcp): Lets an agent read and change a Figma document through a Figma plugin and a local WebSocket server: read nodes and the selection, create frames, shapes and text, set layout and styles, add annotations, export images and delete nodes. Made by Grab. Works with any engine.

### Video, audio and images

- [Ableton MCP](https://github.com/ahujasid/ableton-mcp): Lets an agent control Ableton Live: read session, track and clip information, create tracks and clips, add or clear MIDI notes, load instruments and effects, set tempo and control playback. Made by ahujasid. Works with any engine.
- [Cartesia MCP server](https://github.com/cartesia-ai/cartesia-mcp): Gives an agent Cartesia voice tools: text to speech, speech to text, list, clone, update, localize and delete voices, and manage pronunciation dictionaries. Made by Cartesia. Works with any engine.
- [DaVinci Resolve MCP server](https://github.com/samuelgursky/davinci-resolve-mcp): Lets an agent control DaVinci Resolve through its scripting API: projects, media pool, timelines, markers, color grading, Fusion, audio and render jobs, plus media analysis. Made by samuelgursky. Works with any engine.
- [ElevenLabs hosted MCP server](https://elevenlabs.io/docs/agents-platform/operate/hosted-mcp): ElevenLabs' own hosted server. Creates, updates, duplicates and deletes voice agents, reads their conversations, runs tests, manages branches and deployments, and generates speech audio from text. Made by ElevenLabs. Works with any engine.
- [Higgsfield MCP server](https://higgsfield.ai/mcp): Higgsfield's own hosted server. Makes images and videos from a prompt or a photo with the image and video models on Higgsfield: video ads, restyled photos, animated stills and narrated explainers. Each generation uses Higgsfield credits. Made by Higgsfield AI. Works with all engines.
- [MCP for Blender](https://github.com/ahujasid/mcp-for-blender): Lets an agent control Blender: run Python code in the live Blender session, view the scene, read scene information, generate 3D models with outside services and import assets from Poly Haven, Sketchfab and Poly Pizza. Made by ahujasid. Works with any engine.
- [MCP for Unity](https://github.com/CoplayDev/unity-mcp): Lets an agent control the Unity Editor: manage scenes, GameObjects, components, assets, prefabs, materials and scripts, run C\# code and menu items, run tests and builds, and generate assets with outside providers. Made by Coplay (Aura). Works with any engine.
- [MiniMax MCP](https://github.com/MiniMax-AI/MiniMax-MCP): Lets an agent call MiniMax generation APIs: text to speech, voice cloning and voice design, video generation and image generation. Made by MiniMax. Works with any engine.
- [YouTube Transcript server](https://github.com/kimtaeyoon83/mcp-server-youtube-transcript): Fetches transcripts of YouTube videos with language choice, optional timestamps and ad filtering. An optional tool analyzes a video file URL with TwelveLabs. Made by kimtaeyoon83. Works with any engine.

### Memory and knowledge

- [Basic Memory](https://github.com/basicmachines-co/basic-memory): Gives an agent a persistent knowledge base stored as local Markdown files: write, read, edit, move, delete and search notes, build context from linked notes, and manage projects. Made by Basic Machines. Works with any engine.
- [Cognee MCP server](https://github.com/topoteretes/cognee): Runs the cognee memory engine as an MCP server: remember data in session or permanent graph memory, recall it by search, forget datasets, and query an indexed code graph. Made by Topoteretes (cognee). Works with any engine.
- [Graphiti MCP server](https://github.com/getzep/graphiti): Gives an agent a temporal knowledge graph memory built on Graphiti: add episodes and facts, search nodes and facts, build communities, and delete episodes, edges or a whole graph. Made by Zep. Works with any engine.
- [Hindsight MCP server](https://github.com/vectorize-io/hindsight): Gives an agent long term memory in Hindsight memory banks: retain facts, recall and reflect on them, and manage mental models, directives, documents, banks and knowledge base pages. Made by Vectorize. Works with any engine.
- [MCP Memory Service](https://github.com/doobidoo/mcp-memory-service): A memory service an agent can run locally: store, search, update and delete memories, with a knowledge graph, consolidation, quality scoring and a web dashboard. Made by doobidoo. Works with any engine.
- [Memory (knowledge graph)](https://github.com/modelcontextprotocol/servers/tree/main/src/memory): The reference memory server. Keeps a small knowledge graph of entities, relations and observations in a file on the machine, and can read, search, add to and delete from it. Made by Model Context Protocol project. Works with any engine.
- [Qdrant MCP Server](https://github.com/qdrant/mcp-server-qdrant): Stores pieces of information in a Qdrant collection and finds them again by meaning. Acts as a semantic memory layer on top of a Qdrant database. Made by Qdrant. Works with any engine.
- [Supermemory MCP server](https://github.com/supermemoryai/supermemory): Gives an agent persistent memory in Supermemory: save and forget memories, search memories, read the user profile, list documents and spaces. Made by Supermemory. Works with any engine.

### Reasoning

- [Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking): One tool that lets an agent write down and revise its reasoning step by step. It touches nothing outside itself. Made by Model Context Protocol project. Works with all engines.
- [Vibe Check MCP](https://github.com/PV-Bhat/vibe-check-mcp-server): Gives an agent a second opinion on its plan. The agent sends its goal and plan, a second LLM replies with questions and warnings, and the agent can log mistakes and set rules for a session. Made by PV-Bhat. Works with any engine.

### Planning and project tracking

- [Asana MCP server](https://developers.asana.com/docs/connecting-mcp-clients-to-asanas-v2-server): Asana's own hosted server. Searches and reads tasks, projects and portfolios, and can create and update tasks and projects, comment, post a status update and delete a task. Made by Asana. Works with all engines.
- [Atlassian MCP Server](https://github.com/atlassian/atlassian-mcp-server): Reads, searches and writes Jira, Confluence, Bitbucket, Loom, Goals, Projects, Teams and Compass. Jira delete and manage tool groups exist and stay off until an admin turns them on. Made by Atlassian. Works with all engines.
- [ClickUp MCP server](https://developer.clickup.com/docs/connect-an-ai-assistant-to-clickups-mcp-server): ClickUp's own hosted server. Searches the workspace, creates and updates tasks, lists, folders and docs, tracks time and sends chat messages. One tool deletes a task. Made by ClickUp. Works with any engine.
- [Linear MCP](https://linear.app/docs/mcp): Finds, creates and updates issues, projects, comments and other objects in Linear. Hosted by Linear. A read only address exists. Made by Linear. Works with all engines.
- [MCP Atlassian](https://github.com/sooperset/mcp-atlassian): Lets an agent search, read, create, update and delete Jira issues and Confluence pages, add comments and worklogs, and manage sprints, links, attachments and versions. Works with Atlassian Cloud and with Server or Data Center. Made by sooperset. Works with any engine.
- [monday.com MCP server](https://github.com/mondaycom/mcp): Lets an agent work with monday.com boards: create, change, move and delete items, post updates on items, create boards, groups and columns, look up users and teams, and create forms. An optional beta tool runs any GraphQL query. Made by monday.com. Works with any engine.
- [Plane MCP server](https://github.com/makeplane/plane-mcp-server): Lets an agent read and manage Plane projects, work items, cycles, modules, releases, pages, customers and more. Each of the 30 tools covers one resource and takes an action such as list, create, update or delete. Made by Plane. Works with any engine.
- [Todoist MCP server](https://github.com/Doist/todoist-mcp): Lets an agent read and change a Todoist account: find, add, update, complete and reschedule tasks, and manage projects, sections, labels, filters, comments and reminders. Doist runs a hosted server with browser sign in. Made by Doist. Works with any engine.
- [Trello MCP server](https://github.com/delorenj/mcp-server-trello): Lets an agent work with Trello boards: read and create cards and lists, move, update and archive cards, manage checklists, comments, attachments and custom fields, and switch the active board or workspace. Made by delorenj. Works with any engine.

### Chat and email

- [AgentMail MCP](https://github.com/agentmail-to/agentmail-mcp): Gives an agent email inboxes on AgentMail. It can create inboxes, read threads and messages, write drafts, and send, reply to and forward email. Made by AgentMail. Works with any engine.
- [Discord MCP](https://github.com/SaseQ/discord-mcp): Lets an agent act as a Discord bot. It can read and send messages, manage channels, roles, webhooks, invites, events and emojis, and kick, ban or time out members. Made by SaseQ. Works with any engine.
- [Gmail MCP server](https://developers.google.com/workspace/guides/configure-mcp-servers): Google's hosted Gmail server: searches and reads threads, creates drafts and adds or removes labels. Google lists ten tools and no send tool. Part of the Google Workspace Developer Preview Program. Made by Google. Works with all engines.
- [Google Workspace MCP Server](https://github.com/taylorwilsdon/google_workspace_mcp): Lets an agent work with Gmail, Drive, Calendar, Docs, Sheets, Slides, Forms, Tasks, Contacts, Chat, Custom Search and Apps Script in a Google account, using your own Google OAuth client. Made by Taylor Wilsdon. Works with any engine.
- [LINE Bot MCP Server](https://github.com/line/line-bot-mcp-server): Lets an agent send text and flex messages to one user or all followers of a LINE Official Account, read profiles and message quota, and create or delete rich menus. Made by LINE. Works with any engine.
- [Mailgun MCP Server](https://github.com/mailgun/mailgun-mcp-server): Lets an agent send email through Mailgun, read stats, logs, suppressions and domain settings, and create or update webhooks, routes, mailing lists and templates. No delete operations are exposed. Made by Mailgun. Works with any engine.
- [Mailtrap MCP Server](https://github.com/mailtrap/mailtrap-mcp): Lets an agent send transactional and bulk email through Mailtrap, test messages in the Email Sandbox, and manage templates, contacts, campaigns, sending domains, webhooks and API tokens. Made by Mailtrap. Works with any engine.
- [Microsoft 365 MCP Server](https://github.com/Softeria/ms-365-mcp-server): Lets an agent work with Microsoft 365 through the Graph API: Outlook mail, calendar, OneDrive, Excel, OneNote, To Do, Planner, contacts and, in organization mode, Teams and SharePoint. Made by Softeria. Works with any engine.
- [Postmark MCP Server](https://github.com/ActiveCampaign/postmark-mcp): Lets an agent send single, batch and template emails through Postmark, manage templates, suppressions and webhooks, and read message history, bounces and delivery stats. Made by ActiveCampaign (Postmark). Works with any engine.
- [Resend MCP Server](https://github.com/resend/resend-mcp): Lets an agent send and read email through Resend and manage contacts, broadcasts, templates, domains, segments, topics, webhooks and API keys. Made by Resend. Works with any engine.
- [Slack MCP server](https://docs.slack.dev/ai/mcp-server/): Slack's hosted server: searches messages, files, users and channels, reads channels and threads, sends and schedules messages, adds reactions, and creates and updates canvases. For Claude Code it comes inside Slack's plugin. Made by Slack. Works with all engines.
- [Telegram MCP server](https://github.com/chigwell/telegram-mcp): Lets an agent act as your own Telegram account through Telethon. It can read and search chats, send, edit and delete messages and files, and manage groups, contacts, folders and profile settings. Made by chigwell. Works with any engine.

### Calendar and meetings

- [Calendly MCP server](https://developer.calendly.com/docs/mcp/supported-tools): Calendly's own hosted server. Lists event types, free times and scheduled events. It can create event types and single use links, book an invitee, cancel an event and invite people to the organisation. Made by Calendly. Works with any engine.
- [Fireflies MCP server](https://docs.fireflies.ai/getting-started/mcp-configuration): Searches and reads meeting transcripts, summaries, soundbites, contacts and analytics, and can create soundbites, rename or move a meeting, and share a meeting by email or take that access back. 19 tools. Made by Fireflies.ai. Works with all engines.
- [Google Calendar MCP server](https://developers.google.com/workspace/guides/configure-mcp-servers): Google's hosted Calendar server: lists calendars and events, creates, updates and deletes events, answers invitations and suggests meeting times. Nine tools. Part of the Google Workspace Developer Preview Program. Made by Google. Works with all engines.
- [Google Calendar MCP Server](https://github.com/nspady/google-calendar-mcp): Lets an agent work with Google Calendar across one or more accounts: list and search events, check free and busy times, create, update and delete events, and respond to invitations. Made by nspady (Nate Spady). Works with any engine.
- [Granola MCP](https://docs.granola.ai/help-center/sharing/integrations/mcp): Granola's own hosted server. Lists and searches your meeting notes, folders, attachments and transcripts. One tool switches the active workspace and one signs the agent out. Made by Granola. Works with all engines.

### Files and storage

- [Box MCP server](https://developer.box.com/guides/box-mcp/remote/): Box's own hosted server. Searches and reads files and folders, asks Box AI about them, uploads files, creates folders, comments and hubs. Tools that share links or invite people are off until an admin switches them on. Made by Box. Works with any engine.
- [Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem): Reads, writes, edits, moves and searches files inside the folders it is allowed. Under Claude Code those are the launch folder and every additional working directory, whatever folder the command names. Made by Model Context Protocol project. Works with all engines.
- [Google Drive MCP server](https://developers.google.com/workspace/guides/configure-mcp-servers): Google's hosted Drive server: searches, reads and downloads files, reads file details and permissions, and creates or copies files. Google lists eight tools and no delete tool. Part of the Google Workspace Developer Preview Program. Made by Google. Works with all engines.

### Automation and workflows

- [gotoHuman MCP server](https://github.com/gotohuman/gotohuman-mcp-server): Lets an agent ask a person to review or approve its output through gotoHuman. It lists the review forms in the account, fetches a form's schema, and sends a review request that lands in the gotoHuman inbox. Made by gotoHuman. Works with any engine.
- [Home Assistant MCP Server (ha-mcp)](https://github.com/homeassistant-ai/ha-mcp): Lets an agent control and configure a Home Assistant smart home: search entities, call services, read history and logs, and create, edit or delete automations, scripts, dashboards, helpers, areas and more. Made by homeassistant-ai. Works with any engine.
- [Make MCP server](https://developers.make.com/mcp-server): Make's own hosted server. Your scenarios become tools an agent can run. On paid plans it can also view and change scenarios, connections, webhooks and data stores. Made by Make. Works with any engine.
- [n8n instance MCP server](https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server/): Built into n8n. Lets an agent search the workflows you switched on for MCP, run them, and build or edit workflows and data tables. Made by n8n. Works with any engine.
- [n8n-MCP](https://github.com/czlonkowski/n8n-mcp): Gives an agent searchable documentation for n8n nodes and workflow templates and validates workflows. With an n8n API key it can also create, update, run and delete workflows, credentials, folders and data tables on an n8n instance. Made by Romuald Członkowski (czlonkowski). Works with any engine.
- [Windows-MCP](https://github.com/CursorTouch/Windows-MCP): Lets an agent operate a Windows desktop: click, type, scroll, take screenshots, open apps, run PowerShell commands, and read or change files, the clipboard, processes and the Registry. Made by CursorTouch. Works with any engine.
- [Zapier MCP](https://github.com/zapier/zapier-mcp): One hosted server that runs the Zapier actions a person switches on, across thousands of apps: send messages, pull data, trigger workflows. There is no fixed tool list. Made by Zapier. Works with all engines.

### Marketing and SEO

- [Contentful MCP server](https://github.com/contentful/contentful-mcp-server): Lets an agent manage a Contentful space through the Management API: content types, entries, assets, locales, environments, releases, tags and AI actions, including publish and delete. Made by Contentful. Works with any engine.
- [DataForSEO MCP server](https://github.com/dataforseo/mcp-server-typescript): Lets an agent browse the DataForSEO API documentation and make authenticated requests to the DataForSEO API. Made by DataForSEO. Works with any engine.
- [Google Ads MCP server](https://github.com/googleads/google-ads-mcp): Lets an agent read Google Ads data through the Google Ads API: run search queries on an account, read resource metadata and list accessible customers. Made by Google (googleads). Works with any engine.
- [Google Search Console MCP server](https://github.com/AminForou/mcp-gsc): Connects an agent to Google Search Console: list properties, read search analytics, compare periods, inspect URL indexing, and list, submit or delete sitemaps. Made by AminForou. Works with any engine.
- [Klaviyo MCP server](https://developers.klaviyo.com/en/docs/connect_to_the_klaviyo_mcp_server): Klaviyo's own hosted server, with about 270 tools over campaigns, flows, profiles, lists, templates, catalogs and coupons. It can send a campaign to its audience and delete most of what it can create. Made by Klaviyo. Works with any engine.
- [Meta Ads MCP (Pipeboard)](https://github.com/pipeboard-co/meta-ads-mcp): Lets an agent run Meta ads on Facebook and Instagram through Pipeboard: read accounts, campaigns, ad sets, ads and insights, create and update campaigns, ad sets, ads and creatives, upload images and search targeting options. Made by Pipeboard. Works with any engine.
- [Semrush MCP](https://developer.semrush.com/api/v4/introduction/semrush-mcp/): Semrush's own hosted server. Runs Semrush reports on domains, keywords, backlinks, traffic and paid search, and reads projects. It only reads, and every report uses API units from your Semrush plan. Made by Semrush. Works with all engines.
- [WordPress MCP Adapter](https://github.com/WordPress/mcp-adapter): Exposes abilities registered on a WordPress site as MCP tools. The default server gives three tools to discover abilities, read their details and execute them. Made by WordPress. Works with any engine.

### Sales and CRM

- [Attio MCP server](https://docs.attio.com/mcp/overview): Attio's own hosted server. Searches records, notes, emails, meetings and call recordings, and can create and update records, lists, notes, tasks and comments. It can delete a task or a comment. Made by Attio. Works with any engine.
- [Close MCP Server](https://help.close.com/docs/mcp-server): Close's own hosted server. Searches leads, contacts, opportunities, calls and emails. It can create and update them, draft emails, arrange calls by a voice agent, and delete leads, contacts and opportunities. Made by Close. Works with all engines.
- [HubSpot MCP server](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/integrate-with-the-remote-hubspot-mcp-server): Searches and reads CRM records, conversations, owners and reports, and creates or updates CRM records, campaigns, marketing email drafts, segments and properties. It can create, edit and publish landing pages, site pages and blog posts. Made by HubSpot. Works with all engines.
- [ZoomInfo MCP](https://docs.gtm.ai/docs/connect-to-zoominfo-mcp): ZoomInfo's own hosted server. Searches companies, contacts, intent and news, and enriches them. Enrich tools use data credits and the research tools are billed as AI actions. Made by ZoomInfo. Works with all engines.

### Customer support

- [DevRev MCP server](https://support.devrev.ai/en-US/devrev/article/ART-21859-remote-mcp-server): DevRev's own hosted server. Connects an agent to your DevRev tickets, issues and other work items. Made by DevRev. Works with all engines.
- [Freshdesk MCP server](https://github.com/effytech/freshdesk_mcp): Works with Freshdesk support data: creates, updates, deletes and searches tickets, replies and adds notes, and manages agents, contacts and companies. Made by effytech. Works with any engine.
- [Intercom MCP server](https://github.com/intercom/intercom-mcp-server): Searches and reads Intercom conversations, contacts, companies and Help Center articles, adds internal notes to conversations, and creates and updates articles, which it can publish. 14 tools. US and EU workspaces. Made by Intercom. Works with all engines.
- [Pylon MCP](https://docs.usepylon.com/pylon-docs/integrations/pylon-mcp): Pylon's own hosted server. Searches issues, accounts, contacts and help articles. It can create and update issues, reply to customers, publish articles, save triggers and macros and delete a task. Made by Pylon. Works with any engine.
- [Zendesk MCP server (reminia)](https://github.com/reminia/zendesk-mcp-server): Reads Zendesk tickets, comments and attachments, creates and updates tickets, posts ticket comments, and exposes Help Center articles as a knowledge base. Made by reminia. Works with any engine.

### Payments and commerce

- [Adyen MCP server](https://github.com/Adyen/adyen-mcp): Lets an agent call Adyen APIs: create payment sessions and payment links, cancel and refund payments, list merchant accounts, manage terminals and their settings, and read webhooks, users and API credentials. Made by Adyen. Works with any engine.
- [Paddle MCP server](https://github.com/PaddleHQ/paddle-mcp-server): Lets an agent work with Paddle Billing: products, prices, discounts, customers, transactions, adjustments, subscriptions, notifications, simulations and reports. It can create and update these and charge a subscription. Made by Paddle. Works with any engine.
- [Razorpay MCP server](https://github.com/razorpay/razorpay-mcp-server): Lets an agent work with Razorpay: fetch and capture payments, create payment links, orders, refunds and QR codes, send payment links by SMS or email, and read settlements and payouts. Made by Razorpay. Works with any engine.
- [Stripe MCP](https://docs.stripe.com/mcp): Reads and writes the Stripe API: customers, invoices, subscriptions, refunds, payment links and more, plus Treasury tools that send and transfer money. One tool can call any write method of the API. Made by Stripe. Works with all engines.

### Accounting and finance

- [Alpaca MCP Server](https://github.com/alpacahq/alpaca-mcp-server): Trades stocks, ETFs, crypto and options on an Alpaca account (paper trading by default), manages orders, positions and watchlists, and reads market data, news and Alpaca documentation. Made by Alpaca. Works with any engine.
- [Alpha Vantage MCP Server](https://github.com/alphavantage/alpha_vantage_mcp): Reads stock, options, forex, crypto, commodity and economic data, company fundamentals, news sentiment and technical indicators from the Alpha Vantage API. Made by Alpha Vantage. Works with any engine.
- [Massive.com MCP Server](https://github.com/massive-com/mcp_massive): Reaches the Massive.com financial market data API through three tools: search the endpoint index, call any Massive.com REST endpoint, and run SQL on results kept in an in memory SQLite database. Made by Massive.com. Works with any engine.
- [Mercury MCP](https://docs.mercury.com/docs/connecting-mercury-mcp): Mercury's own hosted server. Reads accounts, transactions, cards, recipients and invoices. It can create payment and transfer requests, which still need approval in Mercury, and edit categories and transaction notes. Made by Mercury. Works with all engines.
- [QuickBooks Online MCP Server](https://github.com/intuit/quickbooks-online-mcp-server): Creates, reads, updates, deletes and searches records in a QuickBooks Online company, such as customers, invoices, bills and payments, and runs financial reports such as balance sheet and profit and loss. Made by Intuit. Works with any engine.
- [Twelve Data MCP server](https://github.com/twelvedata/mcp): Gives an agent market data from the Twelve Data API: real time and historical prices, technical indicators, fundamentals, earnings, dividends, funds, news and filings. Made by Twelve Data. Works with any engine.
- [Xero MCP server](https://github.com/XeroAPI/xero-mcp-server): Lets an agent read and change Xero accounting data: contacts, invoices, quotes, credit notes, payments, bank transactions, manual journals, reports and payroll timesheets. Made by Xero. Works with any engine.

### HR and recruiting

- [Dice MCP Server](https://www.dice.com/career-advice/how-to-connect-the-dice-mcp-server-to-your-ai-assistant): Dice's own hosted server. One tool searches public tech job listings by keyword, place, workplace type and posting date. No sign in, and it does not reach a Dice account. Made by Dice. Works with any engine.
- [Workable MCP server](https://help.workable.com/hc/en-us/articles/39415735712407-Using-the-Workable-MCP-server-to-connect-to-AI-assistant): Workable's own hosted server, with over 90 tools. Reads jobs, candidates, employees and time off. It can move and disqualify candidates, approve offers and requisitions, invite or remove members and approve time off. Made by Workable. Works with any engine.

### Legal and compliance

- [CourtListener MCP server](https://wiki.free.law/c/courtlistener/help/api/mcp/model-context-protocol-mcp-server-for-agentic-access): Free Law Project's own hosted server for CourtListener. Searches case law, court filings, oral arguments and judges, follows citations and checks that a citation is real. It can set up alerts. Made by Free Law Project. Works with all engines.
- [DocuSeal MCP server (self hosted)](https://www.docuseal.com/guides/integrate-with-ai-agents-using-mcp): Built into a self hosted DocuSeal. Searches templates and signed or pending documents, creates a template from a PDF or DOCX, and sends a template to signers, who each get an email with a signing link. Made by DocuSeal. Works with any engine.
- [PandaDoc MCP server](https://developers.pandadoc.com/docs/getting-started-with-mcp): PandaDoc's own hosted server. Finds and filters documents, tracks signature status, creates and updates documents and templates, and can send reminder emails to people who have not signed. Made by PandaDoc. Works with all engines.

### AI models and ML

- [Hugging Face MCP Server](https://github.com/huggingface/hf-mcp-server): Connects an agent to the Hugging Face Hub and to Gradio Spaces: repository search, repository details and creation, a Hub file system tool, Jobs, sandboxes, and Spaces used as tools. Made by Hugging Face. Works with any engine.
- [MLflow MCP server](https://mlflow.org/docs/latest/genai/mcp/): Ships inside MLflow. Searches and reads traces, tags them, logs feedback and expectations, and can delete traces, tags and assessments. Made by MLflow. Works with all engines.
- [W&B MCP Server](https://github.com/wandb/wandb-mcp-server): Lets an agent query Weights & Biases experiment runs, metrics, artifacts, registries and Weave traces, search the W&B docs, and create reports or log analysis results back to W&B. Made by Weights & Biases. Works with any engine.
- [ZenML MCP Server](https://github.com/zenml-io/mcp-zenml): Lets an agent read a ZenML server: pipelines, runs, steps, logs, stacks, models, deployments and more. With the default write policy it can also create, update and delete resources and trigger pipeline runs. Made by ZenML. Works with any engine.

### Agent engines

- [Codex MCP Server](https://github.com/tuannvm/codex-mcp-server): Lets an agent call OpenAI's Codex CLI for code analysis, code generation, review of local changes and web search. Codex can be run in full auto mode with write access to the workspace. Made by tuannvm. Works with any engine.
- [Consult7](https://github.com/szeider/consult7): Lets an agent send a set of local files and a question to a large context model through OpenRouter and get the answer back, or save it to a file. Each call is billed to the person's OpenRouter account. Made by szeider. Works with any engine.
- [Gemini MCP Tool](https://github.com/jamubc/gemini-mcp-tool): Lets an agent hand questions and large files to Google's Gemini CLI, now the Antigravity CLI (agy), and get the answer back. It can also ask Gemini to run code in its sandbox mode. Made by jamubc. Works with any engine.

### Usage and cost

- [AWS Billing and Cost Management MCP Server](https://github.com/awslabs/mcp/tree/main/src/billing-cost-management-mcp-server): Reads AWS cost and usage: Cost Explorer, budgets, anomalies, Savings Plans and reservation advice, invoices and credits. One tool runs Athena queries over S3 Storage Lens data. Made by AWS (awslabs). Works with any engine.
- [AWS Pricing MCP Server](https://github.com/awslabs/mcp/tree/main/src/aws-pricing-mcp-server): Looks up current AWS prices and writes cost reports for an architecture. AWS says the pricing calls are free of charge. Made by AWS (awslabs). Works with any engine.

### Time and utilities

- [DeepL MCP server](https://github.com/DeepL/deepl-mcp-server): Translates text and document files with DeepL, rephrases text, and reads glossaries and style rules. Made by DeepL. Works with any engine.
- [Google Maps Grounding Lite](https://developers.google.com/maps/ai/grounding-lite): Google's own hosted server for Maps. Searches places, looks up weather, computes routes and resolves place names and Maps links. Billed per request. Made by Google. Works with all engines.
- [Google Maps MCP server (cablate)](https://github.com/cablate/mcp-google-map): 18 read only Google Maps tools: place search and details, geocoding, directions, distance matrix, route planning, elevation, timezone, weather, air quality, static maps and local rank tracking. Made by cablate. Works with any engine.
- [Mapbox MCP server](https://github.com/mapbox/mcp-server): Geocoding, place and category search, directions, travel time matrix, isochrones, map matching, route optimization, static map images, interactive map previews and offline geometry calculations through Mapbox. Made by Mapbox. Works with any engine.
- [Time](https://github.com/modelcontextprotocol/servers/tree/main/src/time): Gives the current time in a time zone and converts a time between time zones. Made by Model Context Protocol project. Works with all engines.
- [TomTom Maps MCP server](https://github.com/tomtom-international/tomtom-maps-mcp): Geocoding, place and POI search, routing, traffic incidents, EV charger search and interactive maps through TomTom services. Made by TomTom. Works with any engine.

## Skills

### Testing and QA

- [Playwright Skill](https://github.com/lackeyjb/playwright-skill): A skill that lets the agent write and run its own Playwright scripts to test pages, fill forms and take screenshots in a real browser. Made by lackeyjb. Works with all engines.
- [Webapp Testing](https://github.com/anthropics/skills/tree/main/skills/webapp-testing): Tests a web app running on this machine with Playwright: check that the interface works, read browser logs, take screenshots. Ships four Python scripts. Made by Anthropic. Works with all engines.

### Developer tools

- [MCP Builder](https://github.com/anthropics/skills/tree/main/skills/mcp-builder): A guide for building a good MCP server in Python or TypeScript, with two Python scripts for testing one. Made by Anthropic. Works with all engines.
- [Skill creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator): Guides writing a new skill or improving one, runs evals against it and benchmarks the results. Ships Python scripts and three helper agents. Made by Anthropic. Works with all engines.

### Frontend and UI

- [shadcn/ui skill](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn): The shadcn/ui project's own skill. It teaches the agent to find, add and compose shadcn components the right way with the shadcn command line. Made by shadcn. Works with any engine.
- [Web Artifacts Builder](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder): Builds larger HTML artifacts with React, Tailwind and shadcn/ui and bundles them into one file. Ships two shell scripts. Made by Anthropic. Works with all engines.

### Backend and APIs

- [Temporal developer skill](https://github.com/temporalio/skill-temporal-developer): Temporal's own skill for building durable workflows with its SDKs. Written guidance and references, no scripts. Made by Temporal. Works with all engines.

### Mobile

- [iOS Simulator Skill](https://github.com/conorluddy/ios-simulator-skill): Lets the agent build, launch and drive an app in the iOS Simulator: tap, type, read the screen through accessibility, take screenshots. About 40 Python scripts. Mac with Xcode only. Made by conorluddy. Works with all engines.
- [SwiftUI Expert Skill](https://github.com/AvdLee/SwiftUI-Agent-Skill): One skill with deep SwiftUI guidance: state, layout, navigation, performance, new system APIs. Ships Python scripts. Made by Antoine van der Lee. Works with all engines.

### Cloud and infrastructure

- [Terraform skill](https://github.com/antonbabenko/terraform-skill): One written skill for Terraform and OpenTofu: module design, testing, CI, security and production patterns. No scripts. Made by Anton Babenko. Works with all engines.

### Monitoring and errors

- [Langfuse skill](https://github.com/langfuse/skills/tree/main/skills/langfuse): Langfuse's skill for its platform: read traces, manage prompts and add tracing to an app through the Langfuse command line and API. Written guidance, no scripts. Made by Langfuse. Works with all engines.

### Documents and office files

- [Frontend Slides](https://github.com/zarazhangrui/frontend-slides): Makes slide decks as web pages, using the agent's frontend skills. Made by zarazhangrui. Works with all engines.
- [PDF skill](https://github.com/anthropics/skills/tree/main/skills/pdf): Reads and extracts text and tables from PDF files, merges, splits and rotates them, fills forms, adds watermarks, encrypts, and creates new PDFs. Ships Python scripts. Made by Anthropic. Works with all engines.
- [PowerPoint skill](https://github.com/anthropics/skills/tree/main/skills/pptx): Creates, reads and edits PowerPoint files and templates. Ships Python scripts and the Office XML schemas. Made by Anthropic. Works with all engines.
- [Spreadsheet skill](https://github.com/anthropics/skills/tree/main/skills/xlsx): Opens, edits, fixes and creates spreadsheets (xlsx, xlsm, csv, tsv), with formulas, formatting and charts. Ships Python scripts. Made by Anthropic. Works with all engines.
- [Word document skill](https://github.com/anthropics/skills/tree/main/skills/docx): Creates, reads and edits Word files and templates. Ships Python scripts and the Office XML schemas. Made by Anthropic. Works with all engines.

### Documentation

- [Humanizer](https://github.com/blader/humanizer): One skill that finds the usual signs of machine written text and rewrites the passage to read as if a person wrote it. One small Python script. Made by blader. Works with all engines.

### Design

- [Algorithmic Art](https://github.com/anthropics/skills/tree/main/skills/algorithmic-art): Makes generative art in p5.js with seeded randomness and controls to explore it. Guidance and one JavaScript template. Made by Anthropic. Works with all engines.
- [Canvas Design](https://github.com/anthropics/skills/tree/main/skills/canvas-design): Makes posters and other still visual pieces as PNG or PDF, working from a written design philosophy. Guidance plus a set of fonts; no scripts. Made by Anthropic. Works with all engines.
- [Superdesign skill](https://github.com/superdesigndev/superdesign-skill): One written design skill that aims to turn interfaces with a generated look into tasteful frontend you can ship. Made by Superdesign. Works with all engines.
- [Theme Factory](https://github.com/anthropics/skills/tree/main/skills/theme-factory): Applies one of ten ready made themes of colours and fonts to slides, documents or pages, or makes a new theme. Written guidance and theme files only. Made by Anthropic. Works with all engines.

### Video, audio and images

- [Slack GIF Creator](https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator): Makes animated GIFs sized for Slack, with Python helpers that build and check them. Made by Anthropic. Works with all engines.

### Reasoning

- [Karpathy guidelines](https://github.com/multica-ai/andrej-karpathy-skills): One short skill, also given as a CLAUDE.md file, with four rules that cut common agent coding mistakes: think first, keep it simple, change only what is asked, work to a checkable goal. Made by forrestchang (now under multica-ai). Works with all engines.

### Chat and email

- [Internal Comms](https://github.com/anthropics/skills/tree/main/skills/internal-comms): Writes company internal messages in set formats: status reports, leadership updates, newsletters, FAQs, incident reports. Written guidance only. Made by Anthropic. Works with all engines.

### AI models and ML

- [Claude API](https://github.com/anthropics/skills/tree/main/skills/claude-api): A reference for building with the Claude API and the Anthropic SDKs: model ids, parameters, streaming, tool use, caching, agents. Mostly written reference, with a few code files. Made by Anthropic. Works with all engines.

## Skill packs

### Code review

- [Sentry team skills](https://github.com/getsentry/skills): The skills Sentry's own engineers use for development work. 28 skills, seven with Python scripts. They are about engineering practice, not the Sentry product. Made by Sentry. Works with all engines.

### Testing and QA

- [Cypress AI Toolkit](https://github.com/cypress-io/ai-toolkit): Cypress's own five skills for working with Cypress tests. The plugin form also names a server. Made by Cypress. Works with all engines.
- [TestMu AI agent skills](https://github.com/LambdaTest/agent-skills): 74 skills for writing tests in the common frameworks: Selenium, Playwright, Cypress, Appium, Jest and more, each with patterns for running on the vendor's cloud grid. Made by TestMu AI (formerly LambdaTest). Works with all engines.

### Developer tools

- [Awesome Copilot](https://github.com/github/awesome-copilot): GitHub's collection of instructions, agents, skills and plugins for Copilot, written by the community. 447 skills and 226 agents; some ship scripts and hooks. Made by GitHub and community contributors. Works with all engines.

### Frontend and UI

- [Angular skills](https://github.com/angular/skills): The Angular team's two skills: a full developer guide for current Angular, and a guide for starting a new app. Written guidance only. Made by Angular team at Google. Works with all engines.
- [antfu skills](https://github.com/antfu/skills): Anthony Fu's picked skills for Vue, Vite, Nuxt, pnpm, UnoCSS and related tools. 11 skills, almost all written guidance. Made by Anthony Fu. Works with any engine.
- [GSAP skills](https://github.com/greensock/gsap-skills): GreenSock's own eight skills that teach an agent to use the GSAP animation library correctly, with its best practices. No scripts. Made by GreenSock. Works with all engines.
- [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance): The Chrome team's guides on current web platform features, packed as a skill the agent can search, so it stops writing outdated HTML, CSS and JavaScript. Written guides only. Made by Google Chrome. Works with all engines.
- [Vercel agent skills](https://github.com/vercel-labs/agent-skills): Vercel's nine skills, among them React best practices, web design guidelines, and a deploy skill that puts your project on Vercel and gives back a link you can claim. Made by Vercel. Works with any engine.
- [Vue skills](https://github.com/vuejs-ai/skills): Eight written skills for Vue 3: best practices, debugging guides, Pinia, Vue Router, testing and composables. No scripts. Made by vuejs-ai. Works with all engines.
- [Web Quality Skills](https://github.com/addyosmani/web-quality-skills): Six skills for web quality based on Lighthouse: performance, Core Web Vitals, accessibility, SEO and best practices. One small shell script. Made by Addy Osmani. Works with all engines.

### Backend and APIs

- [.NET skills](https://github.com/dotnet/skills): The .NET team's 16 plugins and 112 skills for C\# and .NET work: core guidance, data access, diagnostics, MSBuild, NuGet, upgrades and MAUI. A few ship scripts. Made by Microsoft. Works with all engines.
- [Fullstack Dev Skills](https://github.com/Jeffallan/claude-skills): 67 written skills for full stack work, one per language, framework or practice, plus ten commands. No scripts inside the skills. Made by Jeffallan. Works with all engines.
- [WordPress agent skills](https://github.com/WordPress/agent-skills): 19 skills from the WordPress project: blocks, themes, plugin development, the REST API, WP-CLI, performance and Playground. A few ship scripts. Made by WordPress contributors. Works with all engines.

### Mobile

- [Android skills](https://github.com/android/skills): Google's 25 skills for Android work: the build system, camera, on device AI, sign in, Compose, testing and more. Five ship Python scripts. Made by Google. Works with all engines.
- [Callstack React Native skills](https://github.com/callstackincubator/agent-skills): 13 written skills for React Native from Callstack: performance, upgrades, testing, device automation, CI and moving an app to React Native. No scripts in the skills. Made by Callstack. Works with all engines.

### Databases

- [ClickHouse agent skills](https://github.com/ClickHouse/agent-skills): ClickHouse's 11 skills: schema and query best practices, architecture advice, chDB, and troubleshooting its JavaScript client. Ships JavaScript helper files. Made by ClickHouse. Works with all engines.
- [Elastic agent skills](https://github.com/elastic/agent-skills): Elastic's five plugins and 52 skills for Elasticsearch, Kibana, Observability, Security and Elastic Cloud. Many ship scripts that call your cluster's APIs. Made by Elastic. Works with all engines.
- [PlanetScale database skills](https://github.com/planetscale/database-skills): Four written skills from PlanetScale for agents that work with databases. No scripts. Made by PlanetScale. Works with any engine.
- [Prisma skills](https://github.com/prisma/skills): Prisma's ten written skills: the command line, client API, database setup, Prisma Postgres, and upgrade guides. No scripts. Made by Prisma. Works with any engine.
- [Redis agent skills](https://github.com/redis/agent-skills): Redis's own 16 written skills for building with Redis. No scripts. Made by Redis. Works with all engines.

### Cloud and infrastructure

- [Docker skills](https://github.com/docker/skills): Docker's 11 skills for building, testing, debugging and tuning containerized apps. A few helper scripts. Made by Docker. Works with all engines.
- [Google skills](https://github.com/google/skills): Google's own skills for its products: Google Cloud, BigQuery, Cloud SQL, AlloyDB, Firebase, Ads, Analytics and more. 163 skills and 17 plugins, many with scripts. Made by Google. Works with all engines.
- [HashiCorp agent skills](https://github.com/hashicorp/agent-skills): HashiCorp's 20 skills in two plugins, one for Terraform and one for Packer. Made by HashiCorp. Works with all engines.
- [Microsoft skills](https://github.com/microsoft/skills): Microsoft's skills, agents and plugins that ground a coding agent in the Azure SDKs for Python, .NET, TypeScript, Java and Rust. 210 skills in 12 plugins. Made by Microsoft. Works with all engines.
- [Pulumi agent skills](https://github.com/pulumi/agent-skills): Pulumi's 17 skills: write infrastructure code, move from Terraform, CloudFormation or CDK, and hand work to Pulumi Neo. Made by Pulumi. Works with all engines.

### Monitoring and errors

- [Datadog agent skills](https://github.com/datadog-labs/agent-skills): Datadog's skills for its pup command line: search logs and traces, check monitors, set up APM and agent observability. 52 skills, some with Python scripts. Made by Datadog. Works with all engines.
- [Grafana skills](https://github.com/grafana/skills): Grafana Labs' seven plugins and 52 skills: Grafana itself, Grafana Cloud, Loki, Tempo and Mimir, k6 load tests, data sources and plugin building. Many ship scripts. Made by Grafana Labs. Works with all engines.

### Security

- [Cybersecurity Skills (mukul975)](https://github.com/mukul975/Anthropic-Cybersecurity-Skills): 818 security skills mapped to MITRE ATT&CK and NIST: detection, forensics, cloud security, and offensive testing. Ships about 1,100 Python scripts. Made by mukul975. Works with all engines.
- [Semgrep skills](https://github.com/semgrep/skills): Three written skills from Semgrep: secure coding rules by language, security for apps that use language models, and how to run and write Semgrep rules. Made by Semgrep. Works with any engine.
- [Trail of Bits skills](https://github.com/trailofbits/skills): A security firm's marketplace of 44 plugins and 85 skills: audit context building, differential review, static analysis, fuzzing, smart contract scanners, constant time checks and more. Three plugins ship hooks; one redirects GitHub fetches to the gh command. Made by Trail of Bits. Works with all engines.

### Browsers and scraping

- [Apify agent skills](https://github.com/apify/agent-skills): Apify's skills: a scraper skill that picks and runs ready made Apify Actors for sites such as Instagram, Maps or Amazon, plus skills for building your own Actors. Made by Apify. Works with all engines.
- [Browserbase skills](https://github.com/browserbase/skills): Browserbase's skills for web access: drive a local or a remote Browserbase browser from the command line, deploy browser functions, and copy cookies from your Chrome to a remote session. Made by Browserbase. Works with all engines.

### Web search

- [Brave Search skills](https://github.com/brave/brave-search-skills): Brave's 13 written skills for using the Brave Search API from an agent. No scripts. Made by Brave. Works with all engines.
- [Tavily skills](https://github.com/tavily-ai/skills): Tavily's eight written skills for its command line: search the web, extract pages, crawl and map a site, and run deeper research. Made by Tavily. Works with all engines.

### Research

- [Scientific Agent Skills](https://github.com/K-Dense-AI/scientific-agent-skills): 177 skills for scientific work, from data analysis and figures to field specific tools. Ships over 500 Python scripts. Made by K-Dense. Works with all engines.

### Documentation

- [Obsidian skills](https://github.com/kepano/obsidian-skills): Six written skills from Obsidian's chief executive that teach an agent Obsidian's formats and command line: Markdown notes, Bases, JSON Canvas. The agent then reads and edits your vault. Made by Steph Ango (kepano). Works with all engines.

### Design

- [Adobe skills](https://github.com/adobe/skills): Adobe's marketplace of 15 plugins and 175 skills: Experience Manager, Edge Delivery, Adobe Analytics, Customer Journey Analytics, App Builder and Creative Cloud. Several connect to hosted Adobe servers. Made by Adobe. Works with all engines.
- [Emil Kowalski skills](https://github.com/emilkowalski/skills): 15 written skills on interface craft: animation, motion timing, component detail and polish. No scripts. Made by Emil Kowalski. Works with any engine.
- [Stitch skills](https://github.com/google-labs-code/stitch-skills): 16 skills for Google Stitch: make designs from a prompt, turn Stitch screens into React components, build a design system. They work through the Stitch MCP server. Made by Google Labs. Works with all engines.

### Video, audio and images

- [ElevenLabs skills](https://github.com/elevenlabs/skills): ElevenLabs' 11 written skills for building with its voice and audio API. Made by ElevenLabs. Works with any engine.
- [Remotion skills](https://github.com/remotion-dev/skills): Remotion's 12 skills for making video with React: compositions, animation, audio, captions, rendering. Ships example code files. Made by Remotion. Works with all engines.

### Planning and project tracking

- [Addy Osmani agent skills](https://github.com/addyosmani/agent-skills): 25 skills that carry senior engineering practice through a whole change: spec, plan, build in small steps, test first, review, simplify, ship. Also nine commands, four agents and optional hook scripts you wire yourself. Made by Addy Osmani. Works with all engines.
- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD): An agile method for agent work: analyst, product manager, architect, developer and tester roles as 37 skills that take an idea from brief to shipped stories. Ships Python and JavaScript scripts. Made by BMad Code. Works with all engines.
- [gstack](https://github.com/garrytan/gstack): Garry Tan's Claude Code setup: about 65 skills that act as CEO, designer, engineering manager, QA and release manager, from plan review to ship, with its own headless browser. Hooks enforce its safety skills. Made by Garry Tan. Works with all engines.
- [Matt Pocock skills](https://github.com/mattpocock/skills): 38 small skills for careful engineering: grill a plan, write a spec, implement it, test first, diagnose bugs, review code, design a codebase. Almost all written guidance; three small shell scripts, one a git guard you can switch on. Made by Matt Pocock. Works with all engines.
- [PM Skills](https://github.com/phuryn/pm-skills): Nine plugins with 69 written skills for product work: discovery, strategy, execution, market research, analytics, go to market and growth. No scripts in the skills. Made by Pawel Huryn. Works with all engines.

### Chat and email

- [Resend skills](https://github.com/resend/resend-skills): Resend's five skills for sending and receiving email through its API. Made by Resend. Works with all engines.

### Files and storage

- [Box skills](https://github.com/box/skills): Box's nine written skills: work with files in Box, build on the Box SDK, and legal workflows such as contract review. The plugin form names Box's hosted server. Made by Box. Works with all engines.

### Marketing and SEO

- [alirezarezvani claude-skills](https://github.com/alirezarezvani/claude-skills): A marketplace of 99 plugins with 846 skills: engineering, marketing, product, finance, executive advice, compliance and more. It ships about 700 Python scripts. Made by alirezarezvani. Works with all engines.
- [Marketing Skills](https://github.com/coreyhaines31/marketingskills): 50 marketing skills: conversion work, copywriting, SEO and AI search, paid ads, email, pricing, launches, analytics. It also ships about 170 small command files, one per marketing service, that call those services with your keys. Made by Corey Haines. Works with all engines.
- [Semrush skills](https://github.com/semrush/skills): Semrush's nine written playbooks for its MCP server: technical audits, keyword research, competitor and backlink analysis. They need the Semrush server and account. Made by Semrush. Works with all engines.
- [SuperSEO skills](https://github.com/inhouseseo/superseo-skills): 11 written SEO skills: page audits, content briefs, article writing, link building, expertise and trust audits, gap analysis. No scripts. Made by InhouseSEO. Works with all engines.

### Sales and CRM

- [Salesforce skills](https://github.com/forcedotcom/sf-skills): Salesforce's 19 plugins and 400 skills for building on its platform: Apex, Lightning components, Agentforce, Commerce, DevOps. Ships hundreds of scripts. Made by Salesforce. Works with all engines.

### AI models and ML

- [Agent Skills for Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering): Skills that teach an agent how to manage its own context: compression, memory systems, tool design, multi agent patterns and evaluation. Ships example scripts. Made by muratcankoylan. Works with all engines.
- [AI Research Skills](https://github.com/Orchestra-Research/AI-Research-SKILLs): 98 skills in 23 plugins on machine learning work: model design, fine tuning, evaluation, inference, safety, distributed training, paper writing. Almost all written guidance. Made by Orchestra Research. Works with all engines.
- [Gemini API skills](https://github.com/google-gemini/gemini-skills): Three skills that teach an agent to write code against the Gemini API, the Live API and the Omni Flash API. One ships four Python scripts. Made by Google. Works with all engines.
- [Hugging Face skills](https://github.com/huggingface/skills): Hugging Face's 26 skills: the hf command line for models, datasets and Spaces, plus training, evaluation and dataset skills that start paid jobs on its infrastructure. Made by Hugging Face. Works with all engines.

## Plugins

### Source control and CI

- [Commit Commands](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands): Three commands for git work: commit with a written message, commit then push and open a pull request, and clean up branches whose remote is gone. Prompts only; the agent runs git and gh. Made by Anthropic. Works with Claude Code.

### Code review

- [Code review](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review): One command that reviews a pull request. It is allowed to read the pull request and issues through the gh program and to post a comment on the pull request. Made by Anthropic. Works with Claude Code.
- [Code Simplifier](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-simplifier): One agent that goes over code you just changed and makes it clearer and more consistent without changing what it does. A prompt only. Made by Anthropic. Works with Claude Code.
- [CodeRabbit](https://github.com/coderabbitai/skills): Runs a CodeRabbit review on your local changes from inside the agent and can apply the fixes it suggests. Needs the CodeRabbit command line and an account. Made by CodeRabbit. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Codex plugin for Claude Code](https://github.com/openai/codex-plugin-cc): Lets Claude Code call Codex to review code or take over a task. Needs the Codex command line installed and signed in. Ships one hook. Made by OpenAI. Works with Claude Code, Codex.
- [Engineering role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/engineering): Standups, code review, architecture decisions, incident response and technical docs. 10 skills. Sets up 10 hosted connectors: Slack, Linear, Asana, Atlassian, Notion, GitHub, PagerDuty, Datadog, Google Calendar and Gmail. Made by Anthropic. Works with Claude Code.
- [PR Review Toolkit](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pr-review-toolkit): Six review agents for a pull request, each on one thing: comments, test coverage, error handling, type design, code quality and simplification. Prompts only. Made by Anthropic. Works with Claude Code.

### Developer tools

- [clangd-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/clangd-lsp): C and C++ (clangd) language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: clangd --background-index. Made by Anthropic. Works with Claude Code.
- [csharp-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/csharp-lsp): C\# language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: csharp-ls. Made by Anthropic. Works with Claude Code.
- [ECC](https://github.com/affaan-m/ECC): A very large all in one pack: over a thousand skills, 310 agents, 452 commands, hooks on tool use and a local browser server. The hooks run Node scripts on every shell command. Made by affaan-m. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [gopls-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/gopls-lsp): Go (gopls) language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: gopls. Made by Anthropic. Works with Claude Code.
- [jdtls-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/jdtls-lsp): Java (Eclipse JDT.LS) language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: jdtls. Made by Anthropic. Works with Claude Code.
- [kotlin-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/kotlin-lsp): Kotlin language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: kotlin-lsp --stdio. Made by Anthropic. Works with Claude Code.
- [lua-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/lua-lsp): Lua language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: lua-language-server. Made by Anthropic. Works with Claude Code.
- [MCP Server Dev](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-server-dev): Three skills for designing and building an MCP server: choose how it is deployed, design the tools and sign in, and build interactive MCP apps. Written guidance only. Made by Anthropic. Works with Claude Code.
- [php-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/php-lsp): PHP (Intelephense) language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: intelephense --stdio. Made by Anthropic. Works with Claude Code.
- [pyright-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pyright-lsp): Python (Pyright) language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: pyright-langserver --stdio. Made by Anthropic. Works with Claude Code.
- [ruby-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ruby-lsp): Ruby language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: ruby-lsp. Made by Anthropic. Works with Claude Code.
- [rust-analyzer-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/rust-analyzer-lsp): Rust (rust-analyzer) language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: rust-analyzer. Made by Anthropic. Works with Claude Code.
- [swift-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/swift-lsp): Swift (SourceKit-LSP) language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: sourcekit-lsp. Made by Anthropic. Works with Claude Code.
- [typescript-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/typescript-lsp): TypeScript and JavaScript language server for Claude Code. The plugin only holds the launch setting. You install the server program yourself; it starts as: typescript-language-server --stdio. Made by Anthropic. Works with Claude Code.

### Frontend and UI

- [Frontend design](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design): One skill of written guidance on visual design for user interfaces: direction, typography and avoiding templated defaults. No code. Made by Anthropic. Works with Claude Code.

### Backend and APIs

- [Code Modernization](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-modernization): Guided work on a legacy codebase: an assessment, a map, the business rules mined from the code, a plan you approve, then the upgrade or rewrite with proof the new code behaves like the old. Many scripts and hooks. Made by Anthropic. Works with Claude Code.

### Mobile

- [Expo skills](https://github.com/expo/skills): Expo's own plugin: 26 skills for building, upgrading and shipping Expo and React Native apps with EAS, plus a hook and the Expo server. Made by Expo. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode.

### Databases

- [DuckDB skills](https://github.com/duckdb/duckdb-skills): DuckDB's nine skills for Claude Code, built on the DuckDB command line, for querying and reading data files. Made by DuckDB. Works with Claude Code.
- [MongoDB agent skills](https://github.com/mongodb/agent-skills): MongoDB's skills for schema design, queries, search and performance. The mongodb-atlas plugin also connects the hosted Atlas server with sign in. Made by MongoDB. Works with Claude Code, Codex, Cursor, GitHub Copilot.
- [Neon agent skills](https://github.com/neondatabase/agent-skills): Neon's skills for its serverless Postgres, with the Neon server set up. Through that server an agent can create and remove projects and branches and run SQL. Made by Neon. Works with Claude Code, Cursor.
- [Supabase agent skills](https://github.com/supabase/agent-skills): Supabase's two skills: how to build on Supabase, and Postgres best practices. The plugin also connects Supabase's hosted server limited to its documentation tools. Made by Supabase. Works with Claude Code, Cursor, GitHub Copilot.

### Data and analytics

- [BigQuery Data Analytics plugin](https://github.com/GoogleCloudPlatform/bigquery-data-analytics-plugin): Google Cloud's plugin for BigQuery: a skill for its AI and ML functions and a server that works on BigQuery in your project. Made by Google Cloud. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, Gemini CLI.
- [Data role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/data): Data analysis work against a warehouse and analytics tools. Not the plugin named data in the official list, which is Astronomer's. 10 skills and Python scripts. Sets up 8 hosted connectors: Snowflake, Databricks, BigQuery, Hex, Amplitude (two regions), Atlassian and Definite. Made by Anthropic. Works with Claude Code.
- [Databricks agent skills](https://github.com/databricks/databricks-agent-skills): Databricks' plugin for building on Databricks: 171 skill files, with hooks that route Databricks prompts into the skills and hint when sign in fails. Made by Databricks. Works with Claude Code, Codex, Cursor, GitHub Copilot.
- [dbt agent skills](https://github.com/dbt-labs/dbt-agent-skills): dbt Labs' three plugins and 17 skills that help an agent understand and run dbt workflows, with a migration set. A few Python scripts. Made by dbt Labs. Works with Claude Code, Codex, Cursor, GitHub Copilot.

### Cloud and infrastructure

- [Agent Plugins for AWS](https://github.com/awslabs/agent-plugins): Eight AWS Labs plugins: deploy on AWS, serverless, Amplify, databases, SageMaker, location, code transformation and docs. They ship hooks and start local AWS servers. Made by AWS Labs. Works with Claude Code, Codex, Cursor.
- [Agent Toolkit for AWS](https://github.com/aws/agent-toolkit-for-aws): The AWS supported plugins: aws-core, agents, data analytics, DevSecOps and a startup advisor. 187 skills, the AWS MCP server and a hook that guards secrets. Made by Amazon Web Services. Works with Claude Code, Codex, Cursor.
- [Azure skills](https://github.com/microsoft/azure-skills): Microsoft's plugin for Azure work: 91 skills plus the Azure MCP server, started on this machine with npx. It can create, change and remove Azure resources in your account. Made by Microsoft. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Cloudflare skills](https://github.com/cloudflare/skills): Cloudflare's 18 skills for building on Cloudflare, with Cloudflare's hosted server connected. Made by Cloudflare. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode.
- [Firebase agent skills](https://github.com/firebase/agent-skills): Firebase's 13 skills with the Firebase server started on this machine through npx. Through it an agent can set up and change your Firebase project. Made by Firebase (Google). Works with Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI.
- [Railway skills](https://github.com/railwayapp/railway-skills): Railway's skill for deploying and running services on Railway through its command line and API. It ships a hook that approves its own Railway API calls without asking. Made by Railway. Works with Claude Code, Codex, Antigravity, Cursor.
- [Vercel plugin](https://github.com/vercel/vercel-plugin): Vercel's plugin: 49 skills across its products, three agents, hooks that load the right skill as you work, and the hosted Vercel server, which can read and write to your teams. Made by Vercel. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode.

### Monitoring and errors

- [Dynatrace for AI](https://github.com/Dynatrace/dynatrace-for-ai): Dynatrace's 34 skills for working with production data in Dynatrace: queries, problems, logs, traces. The plugin connects your environment's hosted server with a platform token. Made by Dynatrace. Works with Claude Code, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Honeycomb agent skill](https://github.com/honeycombio/agent-skill): Honeycomb's plugin: 11 skills for queries, production investigation, SLOs and triggers, and OpenTelemetry setup, with a hook and Honeycomb's hosted server. Made by Honeycomb. Works with Claude Code, Codex, Cursor, GitHub Copilot.

### Security

- [Auth0 agent skills](https://github.com/auth0/agent-skills): Auth0's skill for adding sign in to an app in any major framework, with reference guides and a few helper scripts that use the Auth0 command line. Made by Auth0 (Okta). Works with Claude Code, Codex, Cursor, GitHub Copilot.
- [Claude Security](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security): A team of agents that scans your own code for security holes inside your session, challenges every finding before reporting it, and can write patch files for you to apply. Ships scripts and hooks. Made by Anthropic. Works with Claude Code.
- [Security extension for Gemini CLI](https://github.com/gemini-cli-extensions/security): Adds /security:analyze to Gemini CLI. It reviews the changes on the current branch for security holes and checks dependencies with OSV Scanner. Starts two local servers. Made by Google. Works with Gemini CLI.
- [Security guidance](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/security-guidance): Hooks that warn on about 25 risky code patterns at edit time, then send each finished turn's diff and file contents to a model for a security review and feed the findings back. Made by Anthropic. Works with Claude Code.
- [SonarQube plugin](https://github.com/SonarSource/sonarqube-agent-plugins): Brings SonarQube code quality and security findings into the agent: nine skills, a hook and the SonarQube server, signed in through the sonar command line. Made by SonarSource. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, Gemini CLI.

### Browsers and scraping

- [Superpowers Chrome](https://github.com/obra/superpowers-chrome): Lets Claude Code drive a Chrome browser through the DevTools protocol: open pages, click, type, read content, take screenshots. One skill and a local server. Made by Jesse Vincent (obra). Works with Claude Code, Codex.

### Web search

- [Enterprise search role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/enterprise-search): One search across a company's email, chat, documents and wikis. 5 skills. Sets up 7 hosted connectors: Slack, Notion, Guru, Atlassian, Asana, Google Calendar and Gmail. Made by Anthropic. Works with Claude Code.

### Research

- [Bio research role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/bio-research): Preclinical research: literature search, genomics analysis and target prioritisation. 6 skills and 25 Python scripts. Sets up 11 hosted connectors: PubMed, BioRender, bioRxiv, Consensus, ClinicalTrials, ChEMBL, Synapse, Wiley, Owkin, Open Targets and Benchling. Made by Anthropic. Works with Claude Code.
- [Claude for Life Sciences](https://github.com/anthropics/life-sciences): A marketplace of 21 life science plugins. Most connect a research source such as PubMed, bioRxiv, ChEMBL or ClinicalTrials; six are skills that ship Python scripts. Made by Anthropic. Works with Claude Code.
- [last30days](https://github.com/mvanhorn/last30days-skill): Researches what people said about a topic in the last 30 days across Reddit, X, YouTube, Hacker News, Polymarket and the web, then writes a sourced summary. About 130 scripts. Made by Matt Van Horn. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

### Documentation

- [Avoid AI Writing](https://github.com/conorbronsdon/avoid-ai-writing): Audits a draft for machine writing patterns, scores it and rewrites it. Ships a JavaScript detector that can also run as a check on its own. Made by Conor Bronsdon. Works with Claude Code, Codex, Cursor, GitHub Copilot.
- [CLAUDE.md Management](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management): Keeps a project's CLAUDE.md file useful: a skill that audits it against the codebase and a command that writes what a session learned back into it. Prompts only. Made by Anthropic. Works with Claude Code.
- [Visual Explainer](https://github.com/nicobailon/visual-explainer): Has the agent write a styled HTML page or slide deck in place of terminal text: diagrams, diff reviews, plan audits, tables, project recaps. Ships scripts and a small local server. Made by Nico Bailon. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

### Design

- [Design role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/design): Design critique, design systems, UX writing, accessibility audits, research synthesis and handoff. 7 skills. Sets up 9 hosted connectors: Slack, Figma, Linear, Asana, Atlassian, Notion, Intercom, Google Calendar and Gmail. Made by Anthropic. Works with Claude Code.
- [Impeccable](https://github.com/pbakaus/impeccable): A design language for agents: skills and commands that audit, polish and rework an interface, with hooks and a helper program. Made by Paul Bakaus. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Taste Skill](https://github.com/Leonxlnx/taste-skill): 14 skills that push an agent toward a real art direction: reference images, layout and type rules, and a browser check of the result. Ships a few scripts. Made by Leonxlnx. Works with Claude Code, Codex, Cursor.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): A design reference the agent can search: styles, colour palettes, font pairs, chart types and rules per stack, looked up by Python scripts. Made by nextlevelbuilder. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

### Video, audio and images

- [HyperFrames](https://github.com/heygen-com/hyperframes): Video made from HTML: the agent writes a composition as a web page with a timeline and HyperFrames renders it to video. 40 skills and a command line, with many scripts. Made by HeyGen. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

### Memory and knowledge

- [claude-mem](https://github.com/thedotmack/claude-mem): Memory across sessions: hooks record what the agent does, a background service on this machine compresses it with a model and stores it, and the useful parts are put back into later sessions. Has a local web viewer and four search tools. Made by Alex Newman (thedotmack). Works with Claude Code, Codex, Antigravity, Cursor, OpenCode.
- [Context Mode](https://github.com/mksglu/context-mode): Keeps large tool output out of the context window by running it in a sandbox and passing back a summary, and saves session state across compaction. Hooks on every tool call plus a local server. Made by Mert Koseoglu. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Episodic Memory](https://github.com/obra/episodic-memory): Indexes your past agent conversations on this machine and lets the agent search them. A hook syncs at session start and a local server answers searches. Made by Jesse Vincent (obra). Works with Claude Code, Codex.
- [Supermemory for Claude Code](https://github.com/supermemoryai/claude-supermemory): Gives Claude Code a memory kept in Supermemory's cloud. Hooks recall context at session start and save the new part of each conversation when it ends. Made by Supermemory. Works with Claude Code.

### Planning and project tracking

- [Compound Engineering](https://github.com/EveryInc/compound-engineering-plugin): Every's plan, work, review and compound loop as a plugin: 43 skills and 41 review and research agents, with scripts. Made by Every. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Feature dev](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/feature-dev): One command and three helper agents (explorer, architect, reviewer) that walk a feature from reading the codebase to design to review. Markdown only. Made by Anthropic. Works with Claude Code.
- [Operations role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/operations): Vendor management, process docs, change management, capacity planning and compliance tracking. 9 skills. Sets up 6 hosted connectors: Slack, Google Calendar, Gmail, Notion, Atlassian and Asana. Made by Anthropic. Works with Claude Code.
- [Planning with Files](https://github.com/OthmanAdi/planning-with-files): Keeps a plan, findings and progress in Markdown files so a long task survives a cleared or compacted session. Hooks reload the plan at session start and before tool use. Made by OthmanAdi. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Plannotator](https://github.com/backnotprop/plannotator): Opens an agent's plan or a code diff in a local browser page where you mark it up, then sends your notes back to the agent. A plan can be shared as a link; large shares are encrypted and uploaded to a paste service. Made by backnotprop. Works with Claude Code, Codex, GitHub Copilot, OpenCode, Gemini CLI.
- [Product management role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/product-management): Feature specs, roadmaps, research synthesis and stakeholder updates. 8 skills. Sets up 16 hosted connectors, among them Slack, Linear, Asana, monday, ClickUp, Atlassian, Notion, Figma, Amplitude, Pendo, Intercom, Fireflies and Gmail. Made by Anthropic. Works with Claude Code.
- [Productivity role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity): Task management, day planning and a memory of work context. 4 skills. Sets up 9 hosted connectors: Slack, Notion, Asana, Linear, Atlassian, monday, ClickUp, Google Calendar and Gmail. Made by Anthropic. Works with Claude Code.
- [Superpowers](https://github.com/obra/superpowers): A development method as 15 skills (brainstorm, plan, test first, review, git worktrees) with a session start hook that loads it into every session. Ships shell and JavaScript files. Made by Jesse Vincent (obra). Works with Claude Code, Codex, GitHub Copilot, OpenCode, Gemini CLI.

### Specs and requirements

- [Conductor](https://github.com/gemini-cli-extensions/conductor): Spec driven development as a plugin: it writes product context, a spec and a plan into the repository, then works through the plan track by track. Made by Google. Works with Claude Code, Antigravity, Gemini CLI.
- [GSD Core](https://github.com/open-gsd/gsd-core): GSD Core: a light spec driven development system with 72 skills, 67 agents and hooks that run Node scripts at session start and on tool use. Made by Open GSD. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode.

### Chat and email

- [Google Workspace extension for Gemini CLI](https://github.com/gemini-cli-extensions/workspace): Gives Gemini CLI your Google Workspace: Docs, Sheets, Slides, Drive, Gmail, Chat and Calendar. The README says it can read, change and delete your data. Made by Google. Works with Gemini CLI.
- [Slack plugin and developer skills](https://github.com/slackapi/slack-skills-plugin): Slack's plugin: connects Slack's hosted server with sign in, so the agent can search and post in your workspace, plus nine skills for building Slack apps. Made by Slack. Works with Claude Code, Codex, Cursor, OpenCode, Gemini CLI.

### Calendar and meetings

- [Zoom skills](https://github.com/zoom/skills): Zoom's 61 skills for building with its SDKs and APIs, with Zoom's hosted servers for meetings, whiteboards and more connected. Made by Zoom. Works with Claude Code, Codex, Cursor.

### Files and storage

- [Google Cloud Storage plugin](https://github.com/GoogleCloudPlatform/google-cloud-storage-plugin): Google Cloud's plugin for Cloud Storage: six skills to manage buckets and objects, move data and review bucket security, with Python scripts and a storage server. Made by Google Cloud. Works with Claude Code, Codex, Antigravity, Gemini CLI.

### Automation and workflows

- [n8n skills](https://github.com/n8n-io/skills): n8n's own plugin: 14 skills and a connection to your n8n instance, so the agent can build, change and run workflows there. Hooks run at session start and before tool use. Made by n8n. Works with Claude Code, Codex, Cursor, OpenCode.
- [n8n skills (czlonkowski)](https://github.com/czlonkowski/n8n-skills): 15 skills that teach an agent to build correct n8n workflows: node setup, expressions, validation, code nodes. Hooks run shell scripts at session start and before tool use. Works with the n8n-mcp server. Made by Romuald Czlonkowski. Works with Claude Code, Codex.

### Marketing and SEO

- [Claude SEO](https://github.com/AgriciDaniel/claude-seo): A full SEO kit: site audits, technical checks, content quality, schema, local and AI search, with 35 skills, 22 agents, a hook that checks edits and about 140 Python scripts. Made by AgriciDaniel. Works with Claude Code, Codex.
- [Marketing role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing): Content, campaign plans, brand voice, competitor tracking and performance reports. 8 skills. Sets up 13 hosted connectors, among them Slack, Canva, Figma, HubSpot, Amplitude, Notion, Ahrefs, Similarweb, Klaviyo, Supermetrics and Gmail. Made by Anthropic. Works with Claude Code.
- [Typefully skill](https://github.com/typefully/agent-skills): Typefully's skill for drafting, scheduling and publishing social posts to X, LinkedIn, Threads, Bluesky, Mastodon and Substack Notes through its API. Ships a small JavaScript command. Made by Typefully. Works with Claude Code, Cursor.

### Sales and CRM

- [Apollo plugin](https://github.com/apolloio/apollo-mcp-plugin): Apollo's plugin: five skills and its hosted server for sales prospecting. Made by Apollo.io. Works with Claude Code, Cursor, GitHub Copilot.
- [Clay agent plugins](https://github.com/clay-run/agent-plugins): Clay's plugin: 35 skills and the clay command line to find companies and people, enrich them and build lists. It ships two hooks that approve its own commands and skills without asking. Made by Clay. Works with Claude Code, Codex, Cursor.
- [HubSpot plugins](https://github.com/HubSpot/hubspot-mcp-plugins): HubSpot's two plugins for Claude Code, one for sales teams and one for partners: 12 skills over the hosted HubSpot server, which can read and change CRM records. Made by HubSpot. Works with Claude Code.
- [Hunter plugin](https://github.com/hunter-io/claude-plugin): Hunter's plugin: 13 skills and its hosted server to find and verify work email addresses, search contacts by domain and enrich company data. Made by Hunter. Works with Claude Code.
- [Sales role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/sales): Call prep and follow up, account research, deal and pipeline review, forecasts. 36 skills. Sets up 23 hosted connectors, among them Slack, HubSpot, Salesforce, Close, Clay, ZoomInfo, Apollo, Outreach, Gong, Zoom, Calendly, Notion and Gmail. Made by Anthropic. Works with Claude Code.

### Customer support

- [Customer support role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/customer-support): Ticket triage, reply drafts, escalations and knowledge base articles. 5 skills. Sets up 8 hosted connectors: Slack, Intercom, HubSpot, Guru, Atlassian, Notion, Google Calendar and Gmail. Made by Anthropic. Works with Claude Code.
- [Intercom plugin](https://github.com/intercom/claude-plugin-external): Intercom's plugin for Claude Code: four skills and its hosted server. Made by Intercom. Works with Claude Code.

### Payments and commerce

- [PayPal AI Toolkit](https://github.com/paypal/AI-Toolkit): PayPal's plugin: best practice skills for PayPal integrations, a hook that reminds the agent to read them, and PayPal's sandbox server for test orders and invoices. Made by PayPal. Works with Claude Code, Codex, Cursor.
- [Shopify AI Toolkit](https://github.com/Shopify/Shopify-AI-Toolkit): Shopify's plugin: 23 skills for building on Shopify. Its hooks report each skill use to Shopify, and on Claude Code they include your latest prompt. Made by Shopify. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot.
- [Stripe plugin](https://github.com/stripe/ai): Stripe's plugin: skills for building with Stripe, hooks, and its hosted server. Through the server an agent can read and change objects in your Stripe account. Made by Stripe. Works with Claude Code, Codex, Cursor, Gemini CLI.

### Accounting and finance

- [Carta plugins](https://github.com/carta/plugins): Carta's three plugins: query cap tables, grants, SAFEs and valuations; investor data; and its CRM. They ship hooks and many scripts. Made by Carta. Works with Claude Code.
- [Claude for Financial Services](https://github.com/anthropics/financial-services): A marketplace of 19 finance plugins: financial analysis, investment banking, equity research, private equity, fund admin and more. Several set up hosted data connectors from partners. Made by Anthropic. Works with Claude Code.
- [Finance role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/finance): Journal entries, reconciliation, financial statements, variance analysis and close. 8 skills. Sets up 6 hosted connectors: Snowflake, Databricks, BigQuery, Slack, Google Calendar and Gmail. Made by Anthropic. Works with Claude Code.
- [QuickBooks plugin](https://github.com/intuit/quickbooks-claude-plugin): Intuit's ten skills for QuickBooks: a business health check, payroll questions and changes, chasing overdue invoices by email, turning an email into an estimate or invoice. It works through the QuickBooks connector of your Claude account. Made by Intuit. Works with Claude Code.
- [Small business role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/small-business): Ready made workflows for running a small business. 44 skills. Sets up 35 hosted connectors, among them Stripe, PayPal, Square, Ramp, Gusto, QuickBooks, Xero, Shopify, HubSpot, Mailchimp, DocuSign, Slack, Gmail and Zapier. Made by Anthropic. Works with Claude Code.

### HR and recruiting

- [Human resources role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/human-resources): Recruiting, onboarding, performance reviews, compensation analysis and policy guidance. 9 skills. Sets up 5 hosted connectors: Slack, Google Calendar, Gmail, Notion and Atlassian. Made by Anthropic. Works with Claude Code.

### Legal and compliance

- [Claude for Legal](https://github.com/anthropics/claude-for-legal): A marketplace of 13 legal plugins: commercial, privacy, product, corporate, employment, regulatory, litigation and more. Most set up hosted connectors and ship hooks. Made by Anthropic. Works with Claude Code.
- [Legal role plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/legal): Contract review, NDA triage, compliance workflows and legal briefs. 9 skills. Sets up 7 hosted connectors: Slack, Box, Egnyte, Atlassian, DocuSign, Google Calendar and Gmail. Made by Anthropic. Works with Claude Code.
- [Vanta plugin](https://github.com/VantaInc/vanta-mcp-plugin): Vanta's plugin for compliance work: three skills to list failing tests and fix them in code, with Vanta's hosted server. Made by Vanta. Works with Claude Code, Cursor.

### AI models and ML

- [Agent SDK Dev](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/agent-sdk-dev): Starts a new Claude Agent SDK app in Python or TypeScript and checks an existing one against the documented patterns. One command and two checking agents. Prompts only. Made by Anthropic. Works with Claude Code.

### Running many agents

- [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode): Turns Claude Code into a team: 48 skills and 21 agents that plan, split, run and verify work in parallel. Hooks run a script on every prompt, and a local server is started. Made by Yeachan Heo. Works with Claude Code, Codex, Antigravity, Cursor, OpenCode, Gemini CLI.
- [Ralph Loop](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop): Runs Claude in a loop on the same prompt until the task is done. A stop hook blocks the session from ending and feeds the prompt back in. Made by Anthropic. Works with Claude Code.
- [Ruflo](https://github.com/ruvnet/ruflo): A large agent harness, once called Claude Flow: 46 plugins for swarms, loops, memory and audits, with hundreds of hooks and thousands of script files. Made by ruvnet. Works with Claude Code, Codex.

### Usage and cost

- [Caveman](https://github.com/JuliusBrussee/caveman): Makes the agent answer in very short words to cut output tokens. A skill, hooks that switch it on each session, and an optional proxy. Made by Julius Brussee. Works with Claude Code, Codex, GitHub Copilot, OpenCode, Gemini CLI.

### Time and utilities

- [Hookify](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/hookify): Make your own guard rules without editing hook files: describe a behaviour to stop, and it writes a small rule file that its Python hooks check on each tool call, prompt and stop. Made by Anthropic. Works with Claude Code.
- [Plugin Dev](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev): A toolkit for writing Claude Code plugins: seven skills on hooks, MCP, commands, agents, skills, settings and structure, three helper agents and some checking scripts. Made by Anthropic. Works with Claude Code.
- [VoiceMode](https://github.com/mbailey/voicemode): Talk with Claude Code by voice. A plugin with a hook and a local server that listens and speaks, using local speech models or OpenAI's. Made by Mike Bailey. Works with Claude Code.

## Subagent sets

### Backend and APIs

- [VoltAgent subagents for Claude Code](https://github.com/VoltAgent/awesome-claude-code-subagents): More than 100 subagents for Claude Code in ten plugins: core development, languages, infrastructure, quality and security, data and AI, and business roles. Markdown files only. Made by VoltAgent. Works with Claude Code.
- [VoltAgent subagents for Codex](https://github.com/VoltAgent/awesome-codex-subagents): More than 130 subagents for Codex, each a small TOML file, sorted by role. No scripts. Made by VoltAgent. Works with Codex.
- [wshobson agents](https://github.com/wshobson/agents): A marketplace of 94 plugins holding 202 agents, 184 skills and 105 commands across languages, testing, infrastructure, security, data and business work. Two plugins ship hooks and about 70 Python files are included. Made by Seth Hobson. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode.

### Marketing and SEO

- [Agency Agents](https://github.com/msitarzewski/agency-agents): A large roster of ready made agent personas across engineering, design, marketing, product, support and more, each a Markdown file. Shell scripts convert and copy them into each agent's format. Made by Michael Sitarzewski. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

## Hook packs

### Testing and QA

- [TDD Guard](https://github.com/nizos/tdd-guard): Hooks that stop the agent from writing code before a failing test exists, and from writing more than the test asks for. A model judges each edit. Made by nizos. Works with Claude Code, Codex, GitHub Copilot.

### Security

- [CC Safety Net](https://github.com/kenryu42/cc-safety-net): A guard that reads each command or file access before the agent runs it and blocks destructive ones (for example rm -rf and hard git resets) and reads of secrets such as SSH keys and .env files. Its installer writes the hook into the agent's settings. Made by kenryu42. Works with Claude Code, Codex, Antigravity, GitHub Copilot, OpenCode, Gemini CLI.
- [claude-code-hooks](https://github.com/karanb192/claude-code-hooks): A marketplace of 22 small hook plugins for Claude Code: block dangerous commands, protect secret files, guard settings, track cost and context use. Made by karanb192. Works with Claude Code.
- [Destructive Command Guard (dcg)](https://github.com/Dicklesworthstone/destructive_command_guard): A fast hook that reads each shell command before the agent runs it and blocks the destructive ones, such as hard git resets and recursive deletes, with a reason and a safer way. Made by Jeffrey Emanuel. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Dippy](https://github.com/ldayton/Dippy): A hook that approves shell commands it can prove are safe, so the agent stops asking, and still asks for anything that writes or destroys. Made by ldayton. Works with Claude Code.

### Time and utilities

- [peon-ping](https://github.com/PeonPing/peon-ping): Plays game voice lines and shows desktop notifications when the agent finishes, needs input or hits an error, so you can stop watching the terminal. Made by PeonPing. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

## Status lines

### Usage and cost

- [ccstatusline](https://github.com/sirmalloc/ccstatusline): A status line for Claude Code that is set up in a terminal menu: model, git branch, token and context use, with themes. It keeps its settings in ~/.config/ccstatusline/settings.json. Made by sirmalloc. Works with Claude Code.
- [Claude HUD](https://github.com/jarrodwatts/claude-hud): A status line for Claude Code that shows context use, the tools running, active subagents and todo progress. Made by Jarrod Watts. Works with Claude Code.
- [Claude Powerline](https://github.com/Owloops/claude-powerline): A powerline style status line for Claude Code: folder, git state, model, session cost, context and usage limits, with themes. Made by Owloops. Works with Claude Code.

## Tools

### Source control and CI

- [act](https://github.com/nektos/act): Runs your GitHub Actions workflows on this machine in Docker, so an agent can check a workflow before pushing. Made by nektos. Works with any engine.
- [Claude Code Action](https://github.com/anthropics/claude-code-action): A GitHub Action that runs Claude Code on pull requests and issues. It answers mentions, reviews code and can push changes to a branch. Made by Anthropic. Works with Claude Code.
- [GitHub CLI (gh)](https://github.com/cli/cli): GitHub from the terminal: pull requests, issues, releases, workflow runs, secrets, gists, codespaces and raw API calls. Its repo commands include create, archive and delete. Made by GitHub. Works with any engine.
- [Jujutsu (jj)](https://github.com/jj-vcs/jj): A version control system that works on top of git repositories, with no staging area and easy undo. Some agent workflows use it for many parallel changes. Made by Jujutsu project. Works with any engine.
- [lazygit](https://github.com/jesseduffield/lazygit): A terminal screen for git: stage lines, commit, rebase, resolve conflicts and browse history with a few keys. Made by Jesse Duffield. Works with any engine.
- [pre-commit](https://github.com/pre-commit/pre-commit): Runs checks before each git commit from a list kept in the repository. It downloads and runs the checks that list names. Made by pre-commit project. Works with any engine.
- [workmux](https://github.com/raine/workmux): Pairs each git worktree with a tmux window, so one command gives an agent a fresh branch, folder and terminal, and another merges and removes it. Made by raine. Works with Claude Code, Codex, Antigravity, GitHub Copilot, OpenCode, Gemini CLI.
- [Worktrunk (wt)](https://github.com/max-sixty/worktrunk): A command line for git worktrees built for running agents in parallel: make a worktree and start an agent in it, list them all, merge and clean up. Made by Maximilian Roos. Works with Claude Code, Codex.

### Code review

- [difit](https://github.com/yoshiko-pg/difit): Shows a git diff in a local web page that looks like the files changed view on GitHub. You comment on lines and copy the comments as a prompt for the agent. Made by yoshiko-pg. Works with Claude Code, Codex.
- [Open Code Review (ocr)](https://github.com/alibaba/open-code-review): A code review command line tool from Alibaba that mixes fixed checks with a model, tuned to report fewer false findings. Also ships skills and a plugin so an agent can call it. Made by Alibaba. Works with Claude Code, Codex, Cursor, OpenCode.
- [PR Agent](https://github.com/The-PR-Agent/pr-agent): The open source pull request reviewer: it describes, reviews and suggests improvements on a pull request and posts them as comments. Runs as a GitHub Action, in Docker or from the command line. Made by PR Agent community. Works with any engine.
- [reviewdog](https://github.com/reviewdog/reviewdog): Takes the output of any linter and posts it as review comments on a pull request, or filters it to the changed lines on your machine. Made by reviewdog. Works with any engine.
- [roborev](https://github.com/kenn-io/roborev): Reviews every commit in the background with a coding agent and keeps the findings in a local database. roborev init adds a git hook that runs after each commit. Made by kenn.io. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [tuicr](https://github.com/agavra/tuicr): A terminal screen for reviewing an agent's changes like a pull request: read the diff, leave comments, and hand them back to the agent as a prompt. Made by agavra. Works with Codex, Cursor.

### Developer tools

- [ast-grep](https://github.com/ast-grep/ast-grep): Searches and rewrites code by its structure, not by text, across many languages. Agents use it for safe large edits. Made by ast-grep. Works with any engine.
- [Bun](https://github.com/oven-sh/bun): JavaScript runtime, package manager, bundler and test runner in one program. Adds and removes packages, runs scripts, publishes packages, and runs tools with bunx. Made by Oven. Works with any engine.
- [fd](https://github.com/sharkdp/fd): A fast, simple way to find files by name. It skips hidden and ignored files by default. Made by David Peter. Works with any engine.
- [fzf](https://github.com/junegunn/fzf): A fuzzy finder for the command line: pipe in any list and pick from it by typing a few letters. Made by Junegunn Choi. Works with any engine.
- [just](https://github.com/casey/just): A command runner: keep a project's commands in a justfile and run them by name. Agents read it to learn how to build and test. Made by Casey Rodarmor. Works with any engine.
- [Node.js](https://github.com/nodejs/node): JavaScript runtime. Agents and MCP servers installed with npm or started with npx need it. It runs whatever script it is handed. Made by Node.js project (OpenJS Foundation). Works with any engine.
- [Repomix](https://github.com/yamadashy/repomix): Packs a whole repository, local or a remote one given by address, into a single file an agent can read. Made by yamadashy. Works with Claude Code.
- [ripgrep (rg)](https://github.com/BurntSushi/ripgrep): Searches files under a folder for a pattern, fast, and respects ignore files. It only reads. Made by Andrew Gallant (BurntSushi). Works with any engine.
- [Ruff](https://github.com/astral-sh/ruff): A very fast Python linter and formatter. It can fix many of the problems it finds. Made by Astral. Works with any engine.
- [ShellCheck](https://github.com/koalaman/shellcheck): Finds bugs and bad habits in shell scripts and explains each one. Made by Vidar Holen. Works with any engine.
- [tmux](https://github.com/tmux/tmux): A terminal multiplexer: many terminal sessions that keep running after you close the window. Most tools that run several agents are built on it. Made by tmux project. Works with any engine.
- [uv](https://github.com/astral-sh/uv): Python package and project manager. Installs Python versions, packages and tools, makes environments, and runs tools straight from the package index with uvx. Many MCP servers start through it. Made by Astral. Works with any engine.
- [yq](https://github.com/mikefarah/yq): Reads and edits YAML, JSON, XML, CSV and TOML from the command line, like jq for more formats. Made by Mike Farah. Works with any engine.

### Frontend and UI

- [Lighthouse](https://github.com/GoogleChrome/lighthouse): Audits a web page in Chrome for performance, accessibility, SEO and best practices and writes a report. Made by Google Chrome. Works with any engine.

### Data and analytics

- [jq](https://github.com/jqlang/jq): Filters and reshapes JSON on the command line. It reads its input and prints the result. Made by jq project (jqlang). Works with any engine.

### Cloud and infrastructure

- [AWS CLI](https://github.com/aws/aws-cli): The command line for Amazon Web Services. An agent that can run it can read, create, change and remove anything your AWS sign in allows. Made by Amazon Web Services. Works with any engine.
- [flyctl](https://github.com/superfly/flyctl): The command line for Fly.io: launch, deploy, scale and remove apps and machines. Made by Fly.io. Works with any engine.
- [Vercel CLI](https://github.com/vercel/vercel): The command line for Vercel: link a project, deploy it, manage domains, settings and logs. The repository also holds a skill that teaches an agent the commands. Made by Vercel. Works with any engine.

### Security

- [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner): Scans agent skills for prompt injection, data theft and harmful code, with fixed rules first and optional model, VirusTotal and Cisco AI Defense checks. Made by Cisco. Works with Claude Code, Codex, Cursor.
- [Codex Security](https://github.com/openai/codex-security): A command line tool that scans a codebase for security holes, checks which ones are real and proposes fixes. It sends code to OpenAI models. Made by OpenAI. Works with Codex.
- [Gitleaks](https://github.com/gitleaks/gitleaks): Finds passwords, keys and tokens in a git repository, its history, or plain files. Made by Gitleaks. Works with any engine.
- [REA (Reverse Engineer Anything)](https://github.com/morluto/rea): Tools for an agent to take software apart and explain how it works: native binaries through Hopper, Ghidra or IDA, JavaScript and Electron apps, .NET, Android packages, network captures, firmware. A command line, a local MCP server and a skill. Made by morluto. Works with Claude Code, Codex, Cursor, Gemini CLI.
- [SkillSpector](https://github.com/NVIDIA/SkillSpector): Scans agent skills for security problems before you install them: hidden instructions, data leaks, risky scripts. A model can be used for deeper checks. Made by NVIDIA. Works with Claude Code, Codex, OpenCode, Gemini CLI.
- [Snyk Agent Scan](https://github.com/snyk/agent-scan): Scans the agents, MCP servers and skills set up on this machine for prompt injection, tool poisoning and other known attacks. Made by Snyk. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Tirith](https://github.com/sheeki03/tirith): Checks commands and pasted text in the terminal for lookalike addresses, pipes into a shell, hidden characters and other tricks, for people and for agents. It hooks into your shell. Made by sheeki03. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Trivy](https://github.com/aquasecurity/trivy): Scans code, container images, Kubernetes and cloud setups for known holes, bad settings, leaked secrets and licence problems. Made by Aqua Security. Works with any engine.
- [TruffleHog](https://github.com/trufflesecurity/trufflehog): Finds leaked credentials in git history, files and many services, and checks each one against its service to see if it still works. Made by Truffle Security. Works with any engine.

### Sandboxes and code execution

- [Agent Safehouse](https://github.com/eugene1g/agent-safehouse): A sandbox wrapper for local agents, so an agent can read and write only what it needs. Made by eugene1g. Works with any engine.
- [Claude Code devcontainer (Trail of Bits)](https://github.com/trailofbits/claude-code-devcontainer): A ready made dev container for running Claude Code with permission checks off, safely, when reviewing code you do not trust. A template and a small devc helper script. Made by Trail of Bits. Works with Claude Code.
- [container (Apple)](https://github.com/apple/container): Apple's tool for running Linux containers on a Mac, each in its own light virtual machine. Needs macOS 26 on Apple silicon. Ships a skill that teaches an agent the commands. Made by Apple. Works with any engine.
- [Dev Container CLI](https://github.com/devcontainers/cli): Builds and starts a development container from a devcontainer.json file and runs commands inside it. A common way to give an agent an isolated place to work. Made by Dev Containers project. Works with any engine.
- [Docker](https://github.com/docker/cli): Builds, pulls, pushes, runs and removes containers and images. Several servers in this list start as a docker run command. Made by Docker. Works with any engine.
- [E2B](https://github.com/e2b-dev/E2B): Cloud sandboxes for running code an agent wrote: an SDK starts an isolated machine in E2B's cloud, runs code or commands there and returns the result. Made by E2B. Works with any engine.
- [nono](https://github.com/nolabs-ai/nono): Runs a coding agent inside a sandbox that limits what it can reach on this machine, with no setup. Made by nolabs. Works with Claude Code, Codex, GitHub Copilot, OpenCode.
- [Sandbox Runtime (srt)](https://github.com/anthropics/sandbox-runtime): Runs any command with file and network limits set at the operating system level, with no container. The command line is srt. Made by Anthropic. Works with any engine.

### Browsers and scraping

- [agent-browser](https://github.com/vercel-labs/agent-browser): A browser command line built for agents: open pages, read a compact snapshot of the page, click, type and take screenshots, with skills that teach the commands. Made by Vercel Labs. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Browser Use](https://github.com/browser-use/browser-use): A Python library and command line that lets a model drive a browser to finish a task on the web. It can use a local browser or the company's paid cloud browsers. Made by Browser Use. Works with Claude Code, Codex, Cursor.
- [dev-browser](https://github.com/SawyerHood/dev-browser): Gives an agent a web browser to use. One command and one small skill. Made by Sawyer Hood. Works with Claude Code, Codex.
- [Playwright CLI](https://github.com/microsoft/playwright-cli): Drives a browser from the command line, built for coding agents: open pages, click, type, take snapshots and screenshots, with a skill that teaches the agent the commands. Made by Microsoft. Works with Claude Code, Cursor, GitHub Copilot.

### Web search

- [Agent Reach](https://github.com/Panniantong/Agent-Reach): One command line and one skill that let an agent read and search the web and 16 platforms: X, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu, LinkedIn and more. It picks and checks the helper tool for each platform. Reading only; it does not post. Made by Panniantong. Works with Claude Code, Cursor.
- [Firecrawl CLI](https://github.com/firecrawl/cli): Firecrawl from the command line: search the web, scrape a page to clean text, crawl a site, and drive a remote browser. Comes with 13 skills for agents. Made by Firecrawl. Works with Claude Code, Codex, Cursor, OpenCode.
- [qmd](https://github.com/tobi/qmd): A small search engine for your own Markdown notes, docs and transcripts, run fully on this machine with local models. Agents call it to find passages. Made by Tobias Lutke. Works with Claude Code, Cursor.

### Documents and office files

- [Docling](https://github.com/docling-project/docling): Parses PDF, Office files, HTML and images into structured Markdown or JSON, with layout, tables and reading order kept. Runs on this machine. Made by Docling project. Works with any engine.
- [MarkItDown](https://github.com/microsoft/markitdown): Turns PDF, Word, PowerPoint, Excel, images, audio and web pages into Markdown an agent can read. Made by Microsoft. Works with any engine.
- [Pandoc](https://github.com/jgm/pandoc): Converts documents between formats: Markdown, HTML, Word, LaTeX, EPUB, PDF and dozens more. Made by John MacFarlane. Works with any engine.
- [Typst](https://github.com/typst/typst): A typesetting system: write markup, get a laid out PDF fast. Agents use it to produce reports and papers. Made by Typst. Works with any engine.

### Documentation

- [D2](https://github.com/d2lang/d2): A diagram language: write the boxes and arrows as text and D2 lays out and draws the diagram. Made by Terrastruct. Works with any engine.
- [Glow](https://github.com/charmbracelet/glow): Renders Markdown files nicely in the terminal. Made by Charm. Works with any engine.
- [Mermaid CLI](https://github.com/mermaid-js/mermaid-cli): Turns Mermaid diagram text into SVG, PNG or PDF files from the command line. The command is mmdc. Made by Mermaid. Works with any engine.

### Design

- [DESIGN.md](https://github.com/google-labs-code/design.md): A file format that tells a coding agent a product's visual identity: colours, type, spacing, components. The command line checks a DESIGN.md file and compares two versions. Made by Google Labs. Works with any engine.

### Video, audio and images

- [FFmpeg](https://github.com/FFmpeg/FFmpeg): The standard command line tool for video and audio: convert, cut, join, resize, extract frames and sound. Many media skills call it. Made by FFmpeg project. Works with any engine.
- [ImageMagick](https://github.com/ImageMagick/ImageMagick): Creates, edits and converts images from the command line: resize, crop, compose, change format, across more than 200 formats. Made by ImageMagick Studio. Works with any engine.
- [VHS](https://github.com/charmbracelet/vhs): Records a terminal session from a short script and writes it as a GIF or video, for demos and docs. Made by Charm. Works with any engine.
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp): Runs OpenAI's Whisper speech to text model on this machine, with no cloud call. Turns audio files into text and subtitles. Made by ggml. Works with any engine.
- [yt-dlp](https://github.com/yt-dlp/yt-dlp): Downloads video and audio, with subtitles and metadata, from YouTube and thousands of other sites. Made by yt-dlp project. Works with any engine.

### Memory and knowledge

- [Graphify](https://github.com/Graphify-Labs/graphify): Turns a codebase with its docs, schemas and PDFs into a knowledge graph the agent can query. Code is parsed on this machine; documents and media use a model only if you set one up. Made by Graphify Labs. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [MemPalace](https://github.com/MemPalace/mempalace): A memory system that keeps what was said word for word on this machine and finds it again by search, with no model calls. Its plugin adds hooks that save at session end and before compaction, and a local server. Made by MemPalace. Works with Claude Code, Codex, Antigravity, Cursor, Gemini CLI.

### Planning and project tracking

- [Backlog.md](https://github.com/MrLesk/Backlog.md): A task board kept as Markdown files inside the git repository, with a terminal board, a web view and commands an agent can call to create, move and complete tasks. Made by MrLesk. Works with Claude Code, Codex, Cursor, Gemini CLI.
- [Beads (bd)](https://github.com/gastownhall/beads): An issue tracker built for coding agents, stored in a versioned database beside the code. Agents file, link and close issues so work carries across sessions. bd setup writes hooks into the agent. Made by Gas Town Hall. Works with Claude Code, Codex, Cursor, GitHub Copilot.

### Specs and requirements

- [cc-sdd](https://github.com/gotalab/cc-sdd): Installs a spec driven workflow into a project as 17 skills: requirements, design, tasks, then long autonomous implementation. Claude Code and Codex are stable; six more agents are in beta. Made by gotalab. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [OpenSpec](https://github.com/Fission-AI/OpenSpec): Spec driven development for coding agents. openspec init in a project writes the commands for your agent; each change then gets a proposal, a spec and a task list before any code. Made by Fission AI. Works with any engine.
- [Spec Kit](https://github.com/github/spec-kit): Sets up spec driven development in a project: after install, specify init writes commands, templates and scripts for the chosen agent, then the agent works from spec to plan to tasks. Made by GitHub. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

### Chat and email

- [Google Workspace CLI (gws)](https://github.com/googleworkspace/cli): One command line for Gmail, Calendar, Drive, Docs, Sheets, Chat and Admin, with 95 skills for agents. It can send mail, change events and delete files as you. Made by Google Workspace developers. Works with any engine.
- [ntfy](https://github.com/binwiederhier/ntfy): Sends a push notification to your phone or desktop with one HTTP call. Agents and hooks use it to say a long task is done. Made by Philipp Heckel. Works with any engine.

### Automation and workflows

- [GitHub Agentic Workflows (gh aw)](https://github.com/github/gh-aw): An extension for the gh command. You write repository automation in Markdown and it compiles it into a GitHub Actions workflow that runs a coding agent, read only by default with checked writes. Made by GitHub. Works with Claude Code, Codex, GitHub Copilot, Gemini CLI.

### Payments and commerce

- [Stripe CLI](https://github.com/stripe/stripe-cli): The command line for Stripe: listen to webhooks on this machine, trigger test events, tail logs, and call any Stripe API in test or live mode. Made by Stripe. Works with any engine.

### AI models and ML

- [Claude Code Router](https://github.com/musistudio/claude-code-router): A local router that sits between a coding agent and model providers, so Claude Code and others can run on different models, with rules for which request goes where. Made by musistudio. Works with Claude Code, Codex, OpenCode.
- [llm](https://github.com/simonw/llm): Talks to language models from the command line: run a prompt, pipe in a file, keep a log of every call, add models and tools through plugins. Made by Simon Willison. Works with any engine.
- [Ollama](https://github.com/ollama/ollama): Downloads and runs open models on this machine and serves them on a local address, so an agent can use a local model with no cloud call. Made by Ollama. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode.
- [promptfoo](https://github.com/promptfoo/promptfoo): Tests prompts, agents and retrieval pipelines against test cases, compares models side by side, and red teams an AI app for weak spots. Each run calls the models you name. Made by Promptfoo. Works with any engine.

### Running many agents

- [Claude Squad](https://github.com/smtg-ai/claude-squad): A terminal app that runs several agents at once, each in its own tmux session and git worktree, and lets you switch between them and review their diffs. Made by smtg-ai. Works with Claude Code, Codex, OpenCode, Gemini CLI.
- [Ralph for Claude Code](https://github.com/frankbria/ralph-claude-code): Runs Claude Code in a loop on a task list until the work is done, with exit detection, rate limits and a circuit breaker. A set of shell scripts. Made by Frank Bria. Works with Claude Code, Codex, GitHub Copilot, OpenCode.

### Usage and cost

- [ccusage](https://github.com/ccusage/ccusage): Reads the session logs coding agents keep on the machine and reports token use and cost by day, week, month and session. Made by ryoppippi (ccusage organisation). Works with Claude Code, Codex, GitHub Copilot, OpenCode, Gemini CLI.
- [Claude Code Usage Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor): A terminal screen that shows your Claude Code token use live, how fast you are burning it and when you will hit the limit. Made by Maciek-roboblog. Works with Claude Code.
- [Headroom](https://github.com/headroomlabs-ai/headroom): Compresses tool output, logs and files before they reach the model, as a library or as a local proxy between the agent and the model provider. Made by Headroom Labs. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode.
- [RTK](https://github.com/rtk-ai/rtk): Sits in front of common developer commands and trims their output before the agent reads it, to save tokens. A hook rewrites the agent's commands to go through it. Made by RTK AI. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

### Time and utilities

- [rulesync](https://github.com/dyoshikawa/rulesync): Keeps one set of rules, commands, MCP settings and skills and writes them out in the format of each coding agent you use. Made by dyoshikawa. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Skill Seekers](https://github.com/yusufkaraaslan/Skill_Seekers): Builds an agent skill from a documentation site, a GitHub repository or a PDF: it scrapes the source, sorts it and packs it as a skill. Made by Yusuf Karaaslan. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode.
- [skills (npx skills)](https://github.com/vercel-labs/skills): The command most skill packs name for installing. npx skills add owner/repo copies skills from a GitHub repository into the folders of the agents you pick. Made by Vercel. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

## Agents

### Agent engines

- [Aider](https://github.com/Aider-AI/aider): Pair programming in the terminal: it edits files in your git repository with almost any model and commits each change. Made by Aider.
- [Claude Code](https://github.com/anthropics/claude-code): Anthropic's coding agent for the terminal. It reads the codebase, edits files, runs commands and handles git work from plain requests. Made by Anthropic. Works with Claude Code.
- [Cline](https://github.com/cline/cline): An open source coding agent that runs as an editor extension, a command line tool or an SDK, with the model provider of your choice. Made by Cline.
- [Codex CLI](https://github.com/openai/codex): OpenAI's coding agent for the terminal. It reads the codebase, edits files and runs commands inside a sandbox. Made by OpenAI. Works with Codex.
- [Crush](https://github.com/charmbracelet/crush): Charm's coding agent for the terminal, with many model providers. Made by Charm.
- [Gemini CLI](https://github.com/google-gemini/gemini-cli): Google's open source coding agent for the terminal. Google replaced it with Antigravity CLI for free and Google One accounts on 18 June 2026; paid and API key use still works. Made by Google. Works with Gemini CLI.
- [GitHub Copilot CLI](https://github.com/github/copilot-cli): GitHub's coding agent for the terminal. It edits files, runs commands and works with GitHub issues and pull requests. Needs a Copilot plan. Made by GitHub. Works with GitHub Copilot.
- [goose](https://github.com/aaif-goose/goose): An open source agent with a desktop app, a command line and an API, for code and other work, with any model. Made by goose project (Agentic AI Foundation).
- [Kilo Code](https://github.com/Kilo-Org/kilocode): An open source coding agent with a command line, a VS Code extension and a JetBrains plugin, and its own marketplace of skills and modes. Made by Kilo.
- [Mistral Vibe](https://github.com/mistralai/mistral-vibe): Mistral's small coding agent for the terminal, built for its own models. Made by Mistral AI.
- [opencode](https://github.com/anomalyco/opencode): An open source coding agent for the terminal, with a desktop app. It works with many model providers and local models. Made by Anomaly. Works with OpenCode.
- [OpenHands](https://github.com/OpenHands/OpenHands): An open source coding agent, now shipped with Agent Canvas: a local app that runs the OpenHands agent or others such as Claude Code and Codex, on this machine, in Docker or on a remote host. Made by OpenHands. Works with Claude Code, Codex, OpenCode, Gemini CLI.
- [Pi](https://github.com/earendil-works/pi): A small, hackable coding agent for the terminal with one API over many model providers, extended by its own extensions and skills. Made by Earendil Works.
- [Qwen Code](https://github.com/QwenLM/qwen-code): An open source coding agent for the terminal from the Qwen team. You pick a provider and key inside it with /auth. Made by Alibaba (Qwen).

## Apps

### AI models and ML

- [CC Switch](https://github.com/farion1231/cc-switch): A desktop app that switches model providers for Claude Code, Codex, opencode and others in one click, and manages their MCP servers, skills and prompts by editing their config files. Made by farion1231. Works with Claude Code, Codex, OpenCode, Gemini CLI.

### Agent engines

- [Warp](https://github.com/warpdotdev/warp): A terminal turned into a place to run agents: its own agent plus Claude Code, Codex and Gemini CLI side by side, with blocks, code review and bundled skills. Made by Warp. Works with Claude Code, Codex, Gemini CLI.

### Running many agents

- [Emdash](https://github.com/generalaction/emdash): An open source desktop app that runs several coding agents in parallel on tasks, each in its own worktree, with any provider. Made by General Action. Works with Claude Code, Codex, Cursor, GitHub Copilot, OpenCode.
- [Happy](https://github.com/slopus/happy): Run Claude Code, Codex and Grok sessions from your phone or the web as well as the desk, with traffic between your devices encrypted end to end. Made by slopus. Works with Claude Code, Codex.
- [Orca](https://github.com/stablyai/orca): A desktop app for running many coding agents at once, each in its own git worktree, with your own subscriptions. Has a phone companion. Made by Stably AI. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode.
- [Paperclip](https://github.com/paperclipai/paperclip): A local server and web screen that runs a team of agents on a business: you bring the agents, set goals and track work and cost in one place. Made by Paperclip. Works with Claude Code, Codex, Cursor, OpenCode, Gemini CLI.
- [Paseo](https://github.com/getpaseo/paseo): Runs and watches many coding agents from a desktop app, a phone app or the command line, through a small service on your machine. Made by Mohamed Boudra. Works with Claude Code, Codex, Antigravity, GitHub Copilot, OpenCode.
- [Superset](https://github.com/superset-sh/superset): A desktop app for running many coding agents in parallel, each in its own worktree, with your own subscriptions. Made by Superset. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [Symphony](https://github.com/openai/symphony): Watches a project board and starts a coding agent in its own workspace for each task, then reports proof of work. Published as a spec with one reference build in Elixir. Made by OpenAI. Works with Codex.

### Usage and cost

- [agentsview](https://github.com/kenn-io/agentsview): Indexes the session logs of Claude Code, Codex and more than 20 other agents on this machine and gives you search, analytics and token use in a local app. Made by kenn.io. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.
- [CodexBar](https://github.com/steipete/CodexBar): A macOS menu bar app that shows how much of your Codex, Claude Code and other agent limits you have used and when they reset. Made by Peter Steinberger. Works with Claude Code, Codex, Antigravity, Cursor, GitHub Copilot, OpenCode, Gemini CLI.

## Listed, not reviewed by us

1725 more items, found in public directories and listed as written there. Nobody here has opened these; read the source before you install one. One page a kind:

- [MCP servers](listed/mcp-server.md) (701)
- [Skills](listed/skill.md) (61)
- [Skill packs](listed/skill-pack.md) (57)
- [Plugins](listed/plugin.md) (401)
- [Subagent sets](listed/subagent-set.md) (16)
- [Hook packs](listed/hook-pack.md) (12)
- [Status lines](listed/status-line.md) (3)
- [Tools](listed/tool.md) (328)
- [Agents](listed/agent.md) (45)
- [Apps](listed/app.md) (101)

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). This file, the pages in [listed](listed) and `catalog-update.json` are made from the data files on every merge into `main`: do not edit them by hand.

## License

The list is dedicated to the public domain under [CC0 1.0](LICENSE). Each item belongs to its maker and keeps its own licence.
