export type LabStep = {
  id: string;
  title: string;
  body: string[];
  checklist?: string[];
  codeBlocks?: { title?: string; code: string }[];
};

export type DayDetail = {
  day: number;
  slug: string;
  title: string;
  mentalModelLine: string;
  videoAnchor?: string;
  summary: string;
  outcomes: string[];
  steps: LabStep[];
  homework: string[];
};

export const cohort = {
  who: "A small, selected group of startups in the greater Seattle area",
  duration: "One intensive week (facilitator-led mornings + homework)",
  rhythm:
    "Typical cadence: 9:00–11:30 core lab, 11:30–12:00 share-out, afternoon homework + optional office hours.",
};

export const days: DayDetail[] = [
  {
    day: 1,
    slug: "day-1",
    title: "Canonical Obsidian vault (Raw → Ingest → Wiki → Query → Lint)",
    mentalModelLine: "Stand up the vault structure before any fancy automation—evidence first, synthesis second.",
    videoAnchor: "Align with the opening vault setup segment of the source workshop video",
    summary:
      "Complete the hands-on lab: install Obsidian, create a named vault, enable baseline plugins, create /raw, /wiki, /schema, /logs with README stubs, then drop messy artifacts.",
    outcomes: [
      "Everyone has a local-first vault with the canonical four folders.",
      "Dataview + capture path is enabled; Graph view is trusted for navigation.",
      "Each team has 5–10 unpolished artifacts in /raw (the pile of evidence).",
    ],
    steps: [
      {
        id: "install-obsidian",
        title: "Install Obsidian",
        body: [
          "Download Obsidian from the official site (free, local-first, macOS/Windows/Linux).",
          "Open Obsidian after installation—you will attach a new folder as your vault.",
        ],
        checklist: [
          "Obsidian launches without errors",
          "You know where installers live for your OS",
        ],
      },
      {
        id: "create-vault",
        title: "Create your new vault",
        body: [
          'In Obsidian, choose "Create new vault".',
          "Name it clearly, e.g. YourStartup-LLMWiki (replace with your project name).",
          "Pick a stable location (Documents or a dedicated folder). Remember: the vault is just Markdown files on disk.",
        ],
        checklist: ["Vault folder exists on disk", "You can open it again from Obsidian"],
      },
      {
        id: "enable-plugins",
        title: "Enable the required plugins",
        body: [
          "Settings → Community plugins → turn off Safe mode if needed → Browse.",
          "Install and enable Dataview (queries over your vault).",
          "Install Web Clipper or an equivalent capture workflow for saving articles and screenshots.",
          "Verify Graph view (built-in): open Graph, confirm backlinks / local graph settings make sense.",
        ],
        checklist: ["Dataview enabled", "Capture path chosen", "Graph view opened once"],
      },
      {
        id: "folder-structure",
        title: "Create the canonical folder structure + README stubs",
        body: [
          "Inside the vault, create four subfolders with lowercase names: raw, wiki, schema, logs.",
          "In each folder, add README.md with one sentence of purpose (stubs are enough on Day 1).",
        ],
        checklist: [
          "/raw exists with README.md",
          "/wiki exists with README.md",
          "/schema exists with README.md",
          "/logs exists with README.md",
        ],
        codeBlocks: [
          {
            title: "Example stub — /raw/README.md",
            code: `# /raw README

Drop raw, messy artifacts here (notes, screenshots, decks, research). Do not edit these files directly — the LLM will ingest them into /wiki.`,
          },
          {
            title: "Example stub — /wiki/README.md",
            code: `# /wiki README

Clean, interlinked Markdown pages synthesized from /raw. Edit here for clarity; keep citations to raw paths.`,
          },
          {
            title: "Example stub — /schema/README.md",
            code: `# /schema README

Master prompts, rules, CLAUDE.md / AGENTS.md, and lint contracts for your gardener.`,
          },
          {
            title: "Example stub — /logs/README.md",
            code: `# /logs README

Ingest history, change logs, and lint results.`,
          },
        ],
      },
      {
        id: "optional-alignment",
        title: "Optional: align to the facilitator template",
        body: [
          "If the cohort shares a template vault, mirror folder names and stub wording so screen shares line up.",
          "Optionally add a top-level README.md describing Raw → Wiki → Query → Lint in one screen.",
        ],
      },
      {
        id: "philosophy",
        title: "Why this structure matters (quick recap)",
        body: [
          "Raw: unfiltered evidence.",
          "Ingest: the LLM reads /raw and writes structured /wiki pages with citations.",
          "Wiki: human-editable, linked knowledge.",
          "Query: natural-language questions with grounded answers and links.",
          "Lint: periodic cleanup for duplicates, contradictions, and staleness.",
          "This stays editable and traceable—better default than brittle RAG-only experiments for founder speed.",
        ],
      },
      {
        id: "homework-artifacts",
        title: "Homework: gather messy artifacts (if not done yet)",
        body: [
          "Collect 5–10 messy artifacts: market research, customer interview bullets or transcripts, old pitch decks, competitor screenshots, random observations.",
          "Copy them into /raw. Leave them messy—no heroic renaming yet. Day 2 handles synthesis.",
        ],
        checklist: [
          "At least five files in /raw",
          "Mix of types (notes, images, decks, or PDFs) is ideal",
        ],
      },
    ],
    homework: [
      "Vault folders + README stubs complete; Graph trusted.",
      "5–10 artifacts copied into /raw.",
      'Post in cohort channel: "Vault done" + rough inventory (e.g., 3 customer notes, 4 screenshots, 2 decks).',
    ],
  },
  {
    day: 2,
    slug: "day-2",
    title: "Knowledge gardener + first ingest",
    mentalModelLine: "The schema file is the contract; ingestion is a batch job with citations.",
    videoAnchor: "Claude gardener / ingest segment of the workshop video",
    summary:
      "Author schema/CLAUDE.md (or AGENTS.md), run the first ingest manually, and land structured pages in /wiki with consistent frontmatter.",
    outcomes: [
      "A durable system prompt describes tone, folder guardrails, and citation rules.",
      "At least one ingest run turns /raw into /wiki pages with links back to sources.",
    ],
    steps: [
      {
        id: "schema-file",
        title: "Draft the gardener instructions",
        body: [
          "Create schema/CLAUDE.md or AGENTS.md with role, tone, allowed folders, and citation policy.",
          "Paste facilitator template text if provided—do not improvise security-sensitive rules.",
        ],
        checklist: ["File saved under /schema", "Citations required for claims"],
      },
      {
        id: "first-ingest",
        title: "Run the first ingest manually",
        body: [
          "In Claude (or your chosen tool with file access), run: read 1–2 /raw files → emit Markdown into /wiki.",
          "Ask for wikilinks, stubs for missing entities, and YAML frontmatter (type, tags, sources, confidence, dates).",
        ],
      },
      {
        id: "iterate",
        title: "Iterate until frontmatter is stable",
        body: [
          "Adjust the schema prompt if types/tags are noisy—aim for consistency for Dataview dashboards later.",
        ],
      },
    ],
    homework: ["Ingest remaining /raw files; target 10+ wiki pages with consistent frontmatter."],
  },
  {
    day: 3,
    slug: "day-3",
    title: "Continuous capture + batch ingests",
    mentalModelLine: "Make capture boring and ingests repeatable.",
    summary:
      "Operationalize web capture and batch ingests so new evidence lands quickly without breaking structure.",
    outcomes: ["Web Clipper workflow works for your team", "Batch ingest contract (outputs, filenames) is documented"],
    steps: [
      {
        id: "clipper",
        title: "Clip live sources",
        body: [
          "Install Obsidian Web Clipper (browser) and save 3–5 articles into /raw.",
          "Agree on filename hints or frontmatter for clips so ingests can batch cleanly.",
        ],
      },
      {
        id: "batch",
        title: "Batch ingest with an explicit output contract",
        body: [
          "Paste multiple clips into the LLM with a checklist: page list, wikilinks, citations, and confidence fields.",
          "Handle context limits: summarize-then-ingest for long PDFs when needed.",
        ],
      },
    ],
    homework: ["Build a public “knowledge seed” for your startup (site, deck, profiles) inside /raw."],
  },
  {
    day: 4,
    slug: "day-4",
    title: "Graphs, bridges, optional Graphify",
    mentalModelLine: "Clusters reveal themes; bridge notes connect pains to decisions.",
    summary:
      "Use Obsidian Graph intentionally and optionally run Graphify for large corpora—keep human review in the loop.",
    outcomes: ["Top clusters and bridge notes identified", "Optional Graphify artifacts reviewed as a team"],
    steps: [
      {
        id: "graph",
        title: "Graph hygiene",
        body: [
          "Open Graph view and narrate clusters as the wiki grows.",
          "Create bridge notes linking customer pain ↔ roadmap ↔ pricing hypotheses.",
        ],
      },
      {
        id: "graphify",
        title: "Optional Graphify CLI track",
        body: [
          "Install graphify tooling per current README.",
          "Run against ./raw with Obsidian export flags your facilitator specifies; review graph.html and GRAPH_REPORT.md together.",
        ],
      },
    ],
    homework: ["Ingest five additional internal artifacts (metrics, memos, investor feedback)."],
  },
  {
    day: 5,
    slug: "day-5",
    title: "Query mastery + local context",
    mentalModelLine: "Queries are decisions: scope, evidence, unknowns, next actions.",
    summary:
      "Practice the Query prompt contract on real founder questions; add Seattle-relevant public PDFs and re-ingest.",
    outcomes: ["Four query archetypes exercised with citations", "Seattle ecosystem stubs added where useful"],
    steps: [
      {
        id: "query-contract",
        title: "Teach the Query template",
        body: [
          "Each query states scope, cites wiki paths, lists unknowns, and proposes next actions.",
        ],
      },
      {
        id: "live-queries",
        title: "Run live exercises",
        body: [
          "Objections, competitor battle card, roadmap ideas, founder update—each grounded in /wiki with links.",
        ],
      },
    ],
    homework: ["Log 10 operational queries for the quarter; save outcomes + follow-ups in /logs."],
  },
  {
    day: 6,
    slug: "day-6",
    title: "Lint + maintenance systems",
    mentalModelLine: "Mechanical lint + semantic lint: formatting and truth both drift.",
    summary:
      "Use Linter on Markdown, run semantic lint prompts across /wiki, and publish a maintenance dashboard note.",
    outcomes: ["Lint prompts shared in cohort", "Owners + cadence documented"],
    steps: [
      {
        id: "lint-pass",
        title: "Run collaborative lint",
        body: [
          "Fix duplicates, stale claims, and orphan pages as a team; update graph after changes.",
        ],
      },
      {
        id: "dashboard",
        title: "Maintenance dashboard",
        body: [
          "Daily ingest, weekly lint, monthly archive—write the note in /wiki and link from Dashboard.md.",
        ],
      },
    ],
    homework: ["Publish Maintenance Dashboard wiki page with SLAs and named owners."],
  },
  {
    day: 7,
    slug: "day-7",
    title: "Demo day + 30-day scaling plan",
    mentalModelLine: "Ship the operating system, not a one-off hackathon.",
    summary:
      "Demo the live wiki, best queries, and one real decision influenced by evidence; plan exports and optional automation.",
    outcomes: ["10-minute demo delivered", "30-day continuation cadence agreed"],
    steps: [
      {
        id: "demos",
        title: "Final demos",
        body: [
          "Show live graph or key cluster, three killer queries, one concrete decision trail with citations.",
        ],
      },
      {
        id: "scale",
        title: "Scaling conversation",
        body: [
          "Discuss multi-vault strategy, exports to Notion/Slack, and when API automation is warranted.",
        ],
      },
    ],
    homework: ["Schedule first post-cohort lint + ingest review; assign DRI."],
  },
];

export function getDay(n: number) {
  return days.find((d) => d.day === n) ?? null;
}
