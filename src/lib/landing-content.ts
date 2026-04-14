import { SITE, SOURCE_VIDEO_URL } from "@/lib/constants";

export type LandingRouteCard = {
  href: string;
  title: string;
  description: string;
  accent: "emerald" | "violet" | "cyan" | "amber" | "rose" | "fuchsia";
  badge?: string;
};

export const landingRouteCards: LandingRouteCard[] = [
  {
    href: "/curriculum",
    title: "7-Day Curriculum",
    description: "Day-by-day labs, vault layout, Obsidian plugins, and Demo Day arc.",
    accent: "emerald",
    badge: "Core",
  },
  {
    href: "/discovery",
    title: "Discovery & Synthesis",
    description: "Messy /raw artifacts → affinity themes → grounded AI → advanced prompts.",
    accent: "violet",
    badge: "Parallel track",
  },
  {
    href: "/graphify",
    title: "Graphify Track",
    description: "Optional CLI path for graphs and large-corpus visualization.",
    accent: "cyan",
  },
  {
    href: "/logistics",
    title: "Logistics & Prep",
    description: "Prerequisites, venues, cohort selection, and recording policy.",
    accent: "amber",
  },
  {
    href: "/facilitators",
    title: "Facilitator Runbook",
    description: "Checklists, trackers, and production notes for live sessions.",
    accent: "rose",
  },
  {
    href: SOURCE_VIDEO_URL,
    title: "Source Workshop Video",
    description: "Canonical walkthrough that anchors the curriculum (opens YouTube).",
    accent: "fuchsia",
    badge: "External",
  },
];

export type LandingFeature = {
  id: string;
  title: string;
  description: string;
  icon: string;
  /** Long-form copy shown when the card is expanded (~10× the teaser). */
  expandedParagraphs: string[];
  /** Optional bullets after paragraphs. */
  expandedBullets?: string[];
};

export const landingFeatures: LandingFeature[] = [
  {
    id: "ai-second-brain",
    icon: "🧠",
    title: "AI second brain",
    description: "Raw → Wiki → Query → Lint — a repeatable operating system for founders.",
    expandedParagraphs: [
      "This bootcamp treats company knowledge as a pipeline, not a pile of documents. Raw is where you drop transcripts, decks, screenshots, and half-finished notes without guilt. Ingest is when an LLM (with your schema in /schema) reads those files and writes structured pages into /wiki, with explicit links back to sources so nothing is “magic memory.”",
      "Wiki is the human-editable layer: founders fix wording, merge duplicates, and tighten claims while the graph and backlinks stay intact. Query is how you turn the vault into decisions: scoped questions, answers that cite wiki paths, and an honest list of unknowns. Lint is both mechanical (YAML, formatting) and semantic: contradictions, stale metrics, and orphaned pages get pruned on a cadence you own.",
      "Compared to one-off RAG demos, this workflow stays editable and auditable—critical when investors, customers, or your own team ask “where did that number come from?” The curriculum walks a greater Seattle cohort through the same arc for a week so the habit sticks after Demo Day.",
    ],
    expandedBullets: [
      "Use `/curriculum` for the day-by-day arc and homework that compounds.",
      "Pair with `/discovery` when your bottleneck is messy market and customer artifacts.",
      "Align terminology with the workshop video linked from the site so facilitators stay in sync.",
    ],
  },
  {
    id: "obsidian-vault",
    icon: "📁",
    title: "Obsidian-native vault",
    description: "Portable markdown, backlinks, and local-first control of your knowledge.",
    expandedParagraphs: [
      "Obsidian is the spine because your vault is just files on disk—portable, diff-friendly, and easy to back up. Day 1 has everyone scaffold /raw, /wiki, /schema, and /logs with README stubs so screen shares line up across startups. Plugins like Dataview turn frontmatter into dashboards; Templater standardizes new wiki pages after ingest; Linter keeps YAML predictable so queries do not break.",
      "Local-first does not mean “offline only.” It means you choose sync (Obsidian Sync, Syncthing, Git, etc.) instead of being locked into a vendor’s opaque database. Backlinks and the graph view make tacit connections visible—especially after the first ingest pass adds cross-links between customer pains, roadmap bets, and competitor notes.",
      "The optional Bootcamp Lab app in this repo (seattle-llm-wiki-bootcamp-lab) mirrors the same folder story with click-through day steps and playbooks if you want a second screen beside the vault.",
    ],
    expandedBullets: [
      "See `/logistics` for prerequisites (Obsidian install, Markdown comfort, artifact prep).",
      "Use `/playbooks`-style notes in the Lab app for Dataview / DataviewJS snippets you can paste.",
      "Keep heavy binaries out of Git if you version the vault—`.gitignore` patterns are in the repo docs.",
    ],
  },
  {
    id: "evidence-chain",
    icon: "📎",
    title: "Evidence chain",
    description: "Discovery track links messy artifacts to insight statements with citations.",
    expandedParagraphs: [
      "The Discovery & Synthesis week (/discovery) is for teams drowning in qualitative noise: interview bullets, Slack exports, grant PDFs, and competitor screenshots. The workflow pushes you to affinity-map themes before you let an LLM summarize—so the model is compressing your groupings, not inventing structure from thin air.",
      "Every synthesized statement should point to evidence paths: which /raw files, which quotes, which dates. That is how you keep trust when AI is in the loop. The site’s discovery content includes prompts and guardrails you can paste into Claude or Cursor runs, plus suggestions for chunking when context windows bite.",
      "When ingest runs, ask for explicit sources arrays in frontmatter so Dataview tables can show “low confidence” or “single-source” pages that need another interview or data pull.",
    ],
    expandedBullets: [
      "Open `/discovery` for the parallel seven-day plan and deliverable ideas.",
      "Log ingest runs in `/logs` so the team knows what changed between workshops.",
      "Re-ingest after big customer weeks rather than letting the wiki drift silently.",
    ],
  },
  {
    id: "graphs",
    icon: "🔗",
    title: "Graphs",
    description: "Graphify optional path for graph HTML and merged wiki updates.",
    expandedParagraphs: [
      "Obsidian’s built-in graph is enough for many cohorts: you see clusters around pricing, onboarding, or a competitor name and narrate them live. For larger corpora or automated merges, the Graphify track (/graphify) points to the CLI workflow: generate HTML reports, bridge notes, and optional merges into /wiki with human review.",
      "Graphs are not vanity—they are QA for your ontology. Surprising edges often mean duplicate concepts or a missing bridge note between “customer pain” and “roadmap.” The curriculum’s middle days have each team project their graph and name “god nodes” worth an extra interview or experiment.",
      "Treat graph outputs as inputs to lint: if two clusters say opposite things about pricing, that is a lint ticket, not something to hide under prettier layout.",
    ],
    expandedBullets: [
      "Visit `/graphify` for install flags and links to upstream docs (verify against latest README).",
      "Capture screenshots of graphs for board decks—fast social proof of rigor.",
      "Prefer small, labeled clusters over hairballs; split vaults only when teams truly split contexts.",
    ],
  },
  {
    id: "facilitator-ready",
    icon: "🧭",
    title: "Facilitator-ready",
    description: "Logistics, runbooks, and day cards you can copy into slides or Notion.",
    expandedParagraphs: [
      "Logistics (/logistics) covers venues, hybrid options, selection criteria for startups, and recording policy so absent teammates can catch up. Facilitators (/facilitators) holds production checklists: AV, breakout timing, homework reminders, and how to keep one canonical URL so materials do not fork per cohort.",
      "The 7-Day Curriculum page is written to be copy-pasted: day titles, morning blocks, hands-on labs, optional cohort exercises, and homework that stacks toward Demo Day. Facilitators can mirror the same section headings in Notion or Slides without rewriting structure.",
      "Screen-share tip: keep the Features section (this page) visible for “why are we doing this?” moments, then jump into /curriculum for execution. Use the GitHub Pages hub under docs/index.html if you want a repo-wide map in another tab.",
    ],
    expandedBullets: [
      "Bookmark `/facilitators` before week one and assign a DRI for recordings upload.",
      "Use cohort Slack/Discord with one pinned link to the live Vercel site.",
      "After each day, capture top blockers in `/logs` so office hours stay targeted.",
    ],
  },
  {
    id: "claude-code-cheat",
    icon: "📟",
    title: "Claude Code cheat sheet",
    description: "Korean quick-reference on this same page — Plan Mode, slash commands, WAT.",
    expandedParagraphs: [
      "The home page includes an integrated Claude Code reference in Korean: setup, context hygiene, Plan Mode, slash commands, practical workflows, and the WAT framework. It is there so engineering-heavy founders can adopt agentic coding without losing afternoons to scattered blog posts.",
      "Plan → Review → Execute shows up as a recurring rhythm: agree on scope before burning tokens, paste raw errors instead of summaries when debugging, and keep sessions focused on one feature at a time. Slash commands are grouped so you can screenshot a block for your team’s Notion.",
      "This is intentionally on the same landing page as the bootcamp story so “LLM for knowledge” and “LLM for shipping code” feel like one toolchain—not two religions. Link bilingual teammates here first, then send them to /curriculum for vault work.",
    ],
    expandedBullets: [
      "Scroll to the Claude Code 200% 활용 치트시트 sections on / for the full cheat sheet blocks.",
      "Pair with `/schema` prompts so Claude Code and your wiki gardener share tone and citation rules.",
      "Hotkey the browser find box to jump between Korean section headings during live workshops.",
    ],
  },
];

export type NavGroup = {
  label: string;
  items: { id: string; label: string }[];
};

export const landingNavGroups: NavGroup[] = [
  {
    label: SITE.name,
    items: [
      { id: "hub", label: "Welcome" },
      { id: "explore", label: "Explore routes" },
      { id: "spotlight", label: "Features" },
    ],
  },
  {
    label: "Claude Code 치트시트",
    items: [
      { id: "overview", label: "치트시트 개요" },
      { id: "setup", label: "1) 초기 설정 & claude.md" },
      { id: "shortcuts", label: "2) 단축키 & 네비게이션" },
      { id: "slash-commands", label: "3) 필수 슬래시 명령어" },
      { id: "memory", label: "4) 컨텍스트 관리 실전" },
      { id: "workflow", label: "5) 워크플로우 & 코딩 철학" },
      { id: "wat-framework", label: "6) WAT 프레임워크" },
    ],
  },
  {
    label: "More",
    items: [
      { id: "quick-reference", label: "한눈에 보기" },
      { id: "series-note", label: "시리즈 안내" },
    ],
  },
];

/** Flat list of section ids for scroll-spy (order matters) */
export const landingSectionIds = landingNavGroups.flatMap((g) => g.items.map((i) => i.id));
