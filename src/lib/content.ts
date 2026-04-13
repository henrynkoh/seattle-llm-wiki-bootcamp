export type DayPlan = {
  day: number;
  title: string;
  videoAnchor?: string;
  summary: string;
  morning: string[];
  handsOn: string[];
  group?: string[];
  homework: string[];
};

export const audience = {
  cohort: "6–10 startups from the greater Seattle area",
  attendees: "Founders plus 1–2 key operators each",
  sectors: ["AI", "SaaS", "biotech", "climate tech", "deep tech"],
};

export const format = {
  hybrid:
    "Hybrid-friendly; in-person strongly recommended for pair debugging and graph reviews.",
  daily: [
    "9:00–11:30 — Core hands-on lab (Seattle coworking or rotating host office)",
    "11:30–12:00 — Group share + troubleshooting",
    "Afternoon — 1–2 hr homework + optional evening office hours (Zoom)",
  ],
  goal:
    "By Day 7, each team ships a live LLM Wiki: raw inputs → structured wiki → queryable answers → linted, linked knowledge—with Graphify-generated graphs where teams adopt the CLI track.",
};

export const prerequisites = [
  "Laptop (macOS, Windows, or Linux)",
  "Obsidian installed + ability to create a new vault (obsidian.md)",
  "Claude.ai account (Pro recommended for long-context ingests)",
  "Comfort editing Markdown (headings, lists, wikilinks)",
  "5–10 raw knowledge artifacts ready (PDFs, notes, articles, transcripts)",
  "For Graphify track (Day 4 onward): Python 3.10+, terminal access, Claude API key",
];

export const vaultLayout = [
  { path: "/raw/", purpose: "Drop every unstructured artifact here" },
  { path: "/wiki/", purpose: "AI-gardened markdown pages + cross-links" },
  { path: "/schema/", purpose: "Master prompts, lint rules, CLAUDE.md / AGENTS.md" },
  { path: "/logs/", purpose: "Ingest history + changelog notes" },
];

export const obsidianPlugins = [
  "Dataview (structured tables over your wiki)",
  "Graph / local graph tools (built-in Graph view + backlinks)",
  "Obsidian Web Clipper or equivalent capture workflow",
  "Optional: community plugins aligned with your facilitator template vault",
];

export const successMetrics = [
  { label: "Vault scaffold", detail: "Folders, prompts, and naming conventions committed" },
  { label: "Wiki depth", detail: "≥30 markdown wiki pages with citations to /raw/" },
  { label: "Graph richness", detail: "≥50 connected nodes in Obsidian graph or Graphify output" },
  { label: "Operational queries", detail: "≥5 real founder questions answered with wiki citations" },
  { label: "Team autonomy", detail: "Each attendee can run Ingest → Query → Lint solo" },
];

export const logistics = {
  venues: [
    "WeWork Pioneer Square",
    "Impact Hub Seattle",
    "Member-hosted offices (rotate nightly social lab)",
  ],
  selection:
    "Prioritize teams drowning in unstructured knowledge: call transcripts, investor notes, competitor PDFs, Slack exports.",
  recordings:
    "Record screen + audio every morning block; share privately with absent teammates within 24h.",
  cost: "Software stack is free/low-cost; optional sponsored coffee or lunch.",
};

export const dailyPlans: DayPlan[] = [
  {
    day: 1,
    title: "Concept + Obsidian Vault Setup",
    videoAnchor: "≈ 0:00–10:18 in the source workshop video",
    summary:
      "Ground the cohort in Karpathy’s Raw → Ingest → Wiki → Query → Lint mental model, then stand up the canonical vault structure.",
    morning: [
      "Live walkthrough: why LLM Wiki beats brittle RAG experiments for founder knowledge",
      "Translate the video’s philosophy into startup language (speed, trust, editability)",
    ],
    handsOn: [
      "Install Obsidian and create `YourStartup-LLMWiki` vault",
      "Enable Dataview + Web Clipper (or equivalent) and verify local graph settings",
      "Create `/raw`, `/wiki`, `/schema`, `/logs` with README stubs in each folder",
    ],
    group: [
      "Lightning round: one knowledge-system pain per startup (missed insights, doc sprawl, etc.)",
    ],
    homework: [
      "Drop 5–10 messy artifacts into `/raw` (market research, customer notes, decks, screenshots)",
    ],
  },
  {
    day: 2,
    title: "Master Prompt & Claude Gardener",
    videoAnchor: "Claude Code / gardener section in the source video",
    summary:
      "Author the persistent “knowledge gardener” instructions and run the first ingest cycles manually so teams feel chunking + linking behavior.",
    morning: [
      "Draft `schema/CLAUDE.md` (or `AGENTS.md`) with role, tone, folder guardrails, citation policy",
      "Paste the full system prompt from the facilitator template vault (provided at kickoff)",
    ],
    handsOn: [
      "Claude.ai dry run: “You are now my LLM Wiki gardener…” with vault context pasted intentionally",
      "Ingest prompt: feed 1–2 `/raw` files, capture structured markdown in `/wiki`",
      "Demonstrate automatic cross-links + new stub pages for missing concepts",
    ],
    homework: [
      "Ingest remaining `/raw` files; target 10+ wiki pages with consistent frontmatter",
    ],
  },
  {
    day: 3,
    title: "Ingest Automation + Web Capture",
    videoAnchor: "Web clipper + batch ingest portion of the source video",
    summary:
      "Operationalize continuous capture from the public web and batch ingests for fast coverage.",
    morning: [
      "Install Obsidian Web Clipper (browser extension) and clip 3–5 live sources",
      "Batch ingest: paste multiple clips into Claude with explicit output contract (page list, wikilinks, citations)",
    ],
    handsOn: [
      "Startup Knowledge Swap: clip a public article for another cohort company’s domain",
      "Triage context limits: chunking strategy, summarization-first pass, PDF/image handling",
    ],
    homework: [
      "Build “Company Knowledge Seed”: public artifacts about your own startup (site, deck, LinkedIn, recent calls)",
    ],
  },
  {
    day: 4,
    title: "Graphs, Bridges, and Graphify CLI",
    videoAnchor: "Graph visualization + Graphify workflow from the source video",
    summary:
      "Blend manual Obsidian graph hygiene with optional Graphify automation for large corpora.",
    morning: [
      "Teach bridge notes that connect customer pain ↔ roadmap ↔ pricing hypotheses",
      "Graphify track: install `graphifyy`, run `graphify install`, prep Claude Code / Cursor hooks",
    ],
    handsOn: [
      "Open Obsidian Graph view; narrate clusters as they appear while wiki grows",
      "Graphify lab: `graphify ./raw --obsidian --obsidian-dir <vault-path>` (adjust flags per latest README)",
      "Review `graph.html`, `GRAPH_REPORT.md`, and merged `/wiki` updates as a team",
    ],
    group: [
      "Each startup projects graph + names top “god nodes” and surprising edges for Q3 planning",
    ],
    homework: [
      "Ingest five additional internal artifacts (metrics snapshots, roadmap memos, investor feedback)",
    ],
  },
  {
    day: 5,
    title: "Query Mastery + Seattle Context",
    summary:
      "Move from passive storage to active decision support using the video’s Query prompt templates.",
    morning: [
      "Teach the Query prompt contract: scope, evidence, unknowns, next actions",
      "Run four live exercises on real vaults (objections, competitor battle card, roadmap ideas, founder update)",
    ],
    handsOn: [
      "Add Seattle ecosystem knowledge (Madrona essays, Pioneer Square grants, WA incentive PDFs) into `/raw` and re-ingest",
    ],
    homework: [
      "Log 10 operational queries you would run this quarter; paste outcomes + follow-ups into `/logs`",
    ],
  },
  {
    day: 6,
    title: "Lint + Maintenance Systems",
    videoAnchor: "Lint / gardener cleanup portion of the source video",
    summary:
      "Institutionalize pruning: duplicates, stale claims, missing links, and graph debt.",
    morning: [
      "Run the Lint prompt across `/wiki` summaries or Graphify’s `GRAPH_REPORT.md`",
      "Apply fixes collaboratively while watching Obsidian graph + Graphify HTML refresh",
    ],
    handsOn: [
      "Lint Party: each team shares one Lint output; cohort co-edits prompts for clarity",
      "Draft maintenance dashboard note (daily ingest, weekly lint, monthly archive policy)",
    ],
    homework: [
      "Execute full lint pass and publish “Maintenance Dashboard” wiki page with owners + SLAs",
    ],
  },
  {
    day: 7,
    title: "Integration, Demo Day, Scaling",
    summary:
      "Celebrate operational systems and plan the 30-day continuation cadence.",
    morning: [
      "Advanced ops: multi-vault strategy, exports to Notion/Slack, embedding graph screenshots in decks",
      "Optional: discuss API/automation when teams outgrow manual ingests",
    ],
    handsOn: [
      "Final demos (10 min): live graph, three killer queries, one concrete decision influenced by the wiki",
    ],
    group: [
      "Group retro + photo of graphs on screen",
      "Distribute resource pack (prompts, plugin settings, template vault download, community chat invite)",
    ],
    homework: [
      "Commit to five ingests per week + Sunday lint for the next month; schedule 30-day alumni call",
    ],
  },
];

export const facilitatorChecklist = [
  {
    title: "T-7 days",
    items: [
      "Send prerequisites + template vault + Google Sheet tracker",
      "Confirm venue Wi-Fi, power strips, and screen mirroring adapters",
    ],
  },
  {
    title: "Each morning",
    items: [
      "Post agenda + Zoom bridge in cohort chat",
      "Start recording (OBS / QuickTime) before welcome slide",
      "Capture attendance + blockers in shared tracker",
    ],
  },
  {
    title: "Each afternoon",
    items: [
      "Upload homework recap + timestamps to cohort drive",
      "Office hours: rotate 2 startups per night for deep debugging",
    ],
  },
  {
    title: "Post-program",
    items: [
      "Package recordings + prompt bundle within 48h",
      "Schedule 30-day follow-up call + async lint review",
    ],
  },
];

export const trackerColumns = [
  "Startup",
  "Vault URL (private)",
  "Wiki page count",
  "Graph node count",
  "Queries logged",
  "Lint completed (Y/N)",
  "Demo readiness score (1-5)",
];
