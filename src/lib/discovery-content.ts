/**
 * Parallel track: messy market/customer artifacts → structured synthesis → AI-assisted workflows.
 * Designed for the same 1-week Seattle cohort as the main LLM Wiki curriculum.
 */

export type DiscoveryDayPlan = {
  day: number;
  title: string;
  summary: string;
  wikiAlignment: string;
  morning: string[];
  handsOn: string[];
  cohort?: string[];
  deliverables: string[];
  homework: string[];
  timeBudget?: string;
};

export const discoveryAudience =
  "Selected greater Seattle startups (small cohort): founders + operators who need evidence-based decisions from chaotic research.";

export const artifactPrimer = {
  definition:
    "Artifacts are raw, unpolished evidence—notes, screenshots, transcripts, rough decks—not cleaned summaries. The mess is intentional; synthesis comes later.",
  examples: [
    "Market research: competitor links, pricing tables, long unformatted notes",
    "Customer notes: transcripts, bullet scribbles, voice memo exports, photo of handwritten notes",
    "Decks: half-finished slides with placeholders",
    "Screenshots: apps, Slack/email threads, app store reviews, errors",
    "Other: PDFs, CSV exports, Loom transcripts, Miro exports, Figma comments",
  ],
  folderRule:
    "Keep a lowercase `/raw` folder at the project root (or vault root). Do not rename or polish files before synthesis—single source of truth for unfiltered reality.",
};

export const synthesisProcessSteps = [
  {
    phase: "Preparation",
    detail: "Skim `/raw` without deep reading; optional Miro/Notion/FigJam board for moving pieces.",
  },
  {
    phase: "Deconstruct / tag",
    detail:
      "Pull quotes, pains, competitor notes, metrics, ideas. Tag: Pain, Need/JTBD, Positive, Competitor, Idea, Question.",
  },
  {
    phase: "Cluster (affinity)",
    detail: "Group similar items; name clusters; watch for repeated signals vs one-off noise.",
  },
  {
    phase: "Themes & insights",
    detail:
      "Turn clusters into insights: go beyond “what” to “so what” and “now what.” Note contradictions and gaps.",
  },
  {
    phase: "Outputs",
    detail:
      "Affinity map, insight list with evidence, personas, journey map, problem statements, opportunity tree, assumptions update.",
  },
  {
    phase: "Validate",
    detail: "Share with teammate or advisor; revisit `/raw` when signals conflict.",
  },
];

export const aiToolsGeneral = [
  { name: "Claude", note: "Long-context uploads; tagging, clustering, insight statements with citations." },
  { name: "ChatGPT (Projects / Advanced Data Analysis)", note: "Batch processing, tables, quick theme passes." },
  { name: "Gemini", note: "Multimodal (screenshots + text); Deep Research for external validation when appropriate." },
  {
    name: "NotebookLM",
    note: "Grounded synthesis from uploaded sources; audio overview / briefing docs; lower hallucination risk.",
  },
];

export const aiToolsSpecialized = [
  "Dovetail, Looppanel, Marvin, Notably, Condens — interview repos, auto-tags, highlight reels",
  "Miro AI — sticky clustering, summaries",
  "Thematic, Insight7, Kapiche — theme/sentiment at scale",
  "NVivo / ATLAS.ti — rigorous qualitative coding when methodology matters",
];

export const ADVANCED_SYNTHESIS_PROMPT = `You are a world-class product discovery strategist specializing in qualitative synthesis and opportunity mapping.

Context: I have dropped 5–10 messy artifacts into /raw, including customer notes, competitor screenshots, old decks, and market scribbles for my startup/product.

Task: Perform advanced thematic synthesis.

Step-by-step reasoning (show your work):
1. Extract and code all key elements with sources.
2. Cluster using affinity principles.
3. Identify themes, contradictions, and gaps.
4. Generate insights and opportunity areas.

Output format:
- Section 1: Key Codes Table (Quote | Source | Code)
- Section 2: Themes (Name | Description | Supporting Quotes | Frequency)
- Section 3: Insights (What | So what | Now what)
- Section 4: Recommended Next Steps / Validation Questions

Constraints: Cite every claim to specific artifacts. Stay grounded in provided data only. Prioritize actionable insights for a lean startup. Limit to 6–8 themes.

Begin.`;

export const discoveryPlans: DiscoveryDayPlan[] = [
  {
    day: 1,
    title: "Create `/raw` and run the artifact hunt",
    summary:
      "Single folder, zero polishing. Teams collect 5–10 messy files that prove real customer and market work happened.",
    wikiAlignment: "Aligns with main Day 1 vault setup and first `/raw` drop—here we specify what “messy” means and how to hunt.",
    morning: [
      "Define artifacts vs polished deliverables; show examples from facilitator (redacted) `/raw` folder",
      "Walk through acceptable file types: docs, screenshots, decks, exports—mix formats",
    ],
    handsOn: [
      "Create `raw/` in repo or Obsidian vault root; add empty `.gitkeep` if using git for non-binary placeholders",
      "5-minute scavenger hunt: each startup pulls from Downloads, Desktop, phone screenshots folder, recent Docs/Notion exports",
      "Drag-drop into `raw/` without renaming; facilitator spot-checks count (5–10 files per team)",
    ],
    cohort: ["Gallery walk: one file per team, 30s—what makes it “messy but real”?"],
    deliverables: ["`raw/` with ≥5 files per startup", "Slack post: “dump complete” screenshot optional"],
    homework: [
      "If under 5 files, add more before Day 2 (interview notes, competitor grab, old deck page)",
      "Do not clean or summarize yet—resist the urge to organize subfolders",
    ],
    timeBudget: "Morning 90m + 30m homework buffer",
  },
  {
    day: 2,
    title: "Prep skim + deconstruct / open coding",
    summary:
      "Fast orientation of the pile, then extract quotable evidence and first-pass tags—no themes yet.",
    wikiAlignment: "Pairs with main Day 2 gardener prompts: same quotes will later feed wiki ingests.",
    morning: [
      "Skim every artifact once; list filenames on a whiteboard or shared sheet",
      "Introduce tagging vocabulary: Pain, Need/JTBD, Positive, Competitor, Idea, Question/Uncertainty",
    ],
    handsOn: [
      "Create a working sheet (Google Sheet, Notion, or print): columns Quote | Source file | Tag | Notes",
      "Each person codes 10–15 lines from different files; swap rows for cross-check",
      "Optional: OCR pass for handwriting/screenshots (phone or free OCR) pasted next to image reference",
    ],
    cohort: ["Read one surprising quote aloud; facilitator logs recurring words on board"],
    deliverables: ["Tagged excerpt list (≥30 rows per team)", "List of open questions surfaced"],
    homework: [
      "Finish tagging coverage for all `/raw` files at least once",
      "Flag duplicates and contradictions explicitly (“File A vs File B”)",
    ],
    timeBudget: "Morning lab 2h",
  },
  {
    day: 3,
    title: "Affinity clusters + working theme names",
    summary:
      "Move lines into clusters on a wall or digital board; argue about borders until clusters feel stable.",
    wikiAlignment: "Feeds bridge notes and graph edges on main Day 4.",
    morning: [
      "Affinity rules: move sticky rows; similar pains together; name clusters with short verbs+nouns",
      "Differentiate cluster title vs insight (title = bucket; insight = interpretation)",
    ],
    handsOn: [
      "Physical: sticky notes + markers. Remote: Miro/FigJam with timer boxes",
      "Merge tiny clusters; split overloaded ones; capture “misc” explicitly",
    ],
    cohort: ["Cluster critique: rotate two people to another team’s board for 10m"],
    deliverables: ["Photo or export of affinity map", "6–10 cluster titles + line counts per cluster"],
    homework: ["Refine cluster names for clarity; no new files in `/raw` unless critical gap"],
    timeBudget: "Morning 2h + optional evening polish",
  },
  {
    day: 4,
    title: "From clusters to insights + contradiction log",
    summary:
      "Write insight statements with evidence; document where sources disagree.",
    wikiAlignment: "Matches main Day 5 query practice—insights become query seeds.",
    morning: [
      "Template: What → So what → Now what (one paragraph each, max)",
      "Contradictions are assets: split insight or add confidence label (high/med/low)",
    ],
    handsOn: [
      "Draft 5–8 insights; each must cite ≥2 distinct artifacts or one very strong repeated signal",
      "Create “Contradictions / gaps” section with next validation questions",
    ],
    cohort: ["Paired review: challenge weakest cited insight"],
    deliverables: ["Insight doc draft (markdown or doc)", "Contradiction/gap list"],
    homework: ["Tighten wording; ensure file names in citations match `/raw` exactly"],
    timeBudget: "Morning 2h",
  },
  {
    day: 5,
    title: "Synthesis outputs for decisions",
    summary:
      "Package insights into artifacts teams actually use: one-pager, persona sketch, opportunity areas.",
    wikiAlignment: "Supports main Day 5 Seattle context queries—insight doc is query fuel.",
    morning: [
      "Pick two deliverables minimum: (1) prioritized opportunity areas, (2) persona or JTBD snapshot",
      "Optional: journey map skeleton with pain callouts",
    ],
    handsOn: [
      "Build `/synthesis` or `/insights` folder next to `/raw`; keep polished outputs here only",
      "Export affinity snapshot (PNG/PDF) for decks",
    ],
    cohort: ["3-min share: top opportunity + evidence"],
    deliverables: ["`/synthesis` folder with dated insight summary", "Updated assumptions list (known vs unknown)"],
    homework: ["Share doc with advisor peer; collect one piece of feedback to log"],
    timeBudget: "Morning 2h",
  },
  {
    day: 6,
    title: "AI-assisted synthesis workflow (grounded)",
    summary:
      "Use LLMs and notebooks as accelerators—never as replacements for traceability to `/raw`.",
    wikiAlignment: "Complements main Day 6 lint mindset: verify AI output like you lint wiki pages.",
    morning: [
      "Privacy check: redact PII before third-party uploads; prefer tools with clear data policies",
      "Workflow: text extract → first-pass themes in Claude/ChatGPT → optional NotebookLM grounded brief",
    ],
    handsOn: [
      "Run one tool on the same excerpt set; compare theme list to manual Day 3–4 results",
      "Document deltas: what AI missed, what it invented (should be empty if grounded)",
      "Optional: paste Graphify or wiki links if teams sync synthesis into vault",
    ],
    cohort: ["Compare tool outputs: vote on most accurate theme list"],
    deliverables: ["AI run log: tool used, prompt shape, mismatches vs manual synthesis"],
    homework: ["Refine final insight doc using only vetted AI-assisted additions"],
    timeBudget: "Morning 2h",
  },
  {
    day: 7,
    title: "Advanced prompts + demo of evidence chain",
    summary:
      "Apply CORE + CoT + chaining; demo shows raw file → tags → themes → decision artifact.",
    wikiAlignment: "Demo Day alongside main program: “evidence chain” slide is required.",
    morning: [
      "Teach CORE framework: Role, Context, Task, Format, Constraints",
      "Prompt chains: extract → cluster → insight → validation questions as separate steps",
    ],
    handsOn: [
      "Run ADVANCED_SYNTHESIS_PROMPT (or tailored variant) on a subset of `/raw` text exports",
      "Self-critique pass: ask model to list weak evidence; revise manually",
    ],
    cohort: ["Final demo: 8 min—show `/raw` folder, one cluster, one insight, one decision output"],
    deliverables: [
      "Final synthesis package in `/synthesis`",
      "Prompt appendix (saved prompts used during the week)",
    ],
    homework: [
      "Schedule monthly refresh: add new `/raw` drops quarterly; re-run synthesis lite",
      "Post cohort retro link in shared chat",
    ],
    timeBudget: "Morning 2h + demo block",
  },
];
