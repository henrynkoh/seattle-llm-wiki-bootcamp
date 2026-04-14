export type PlaybookSection = {
  heading: string;
  paragraphs?: string[];
  codeBlocks?: { title?: string; code: string }[];
  bullets?: string[];
};

export type Playbook = {
  slug: string;
  title: string;
  summary: string;
  sections: PlaybookSection[];
};

export const playbooks: Playbook[] = [
  {
    slug: "dataview",
    title: "Dataview for your LLM Wiki",
    summary:
      "Turn the vault into a live database: lists and tables over /raw and /wiki once frontmatter exists.",
    sections: [
      {
        heading: "Setup",
        paragraphs: [
          "Install and enable Dataview (Community plugins).",
          "Ask your ingest prompt to emit consistent YAML frontmatter on /wiki pages (type, tags, sources, dates, confidence).",
        ],
        codeBlocks: [
          {
            title: "Example frontmatter target",
            code: `---
type: insight
tags: [pain-point, onboarding]
sources: ["raw/customer-note-sarah.md"]
ingested: 2026-04-14
confidence: medium
updated: 2026-04-14
---`,
          },
        ],
      },
      {
        heading: "Core queries",
        paragraphs: ["Create Dashboard.md in the vault root and paste blocks like these:"],
        codeBlocks: [
          {
            title: "Artifacts in /raw",
            code: '```dataview\nLIST FROM "raw"\nSORT file.mtime DESC\n```',
          },
          {
            title: "Wiki table",
            code:
              '```dataview\nTABLE file.mtime AS "Last Modified", file.size AS "Size"\nFROM "wiki"\nSORT file.mtime DESC\n```',
          },
          {
            title: "Recent changes (7 days)",
            code:
              '```dataview\nTABLE type, confidence, sources\nFROM "wiki"\nWHERE updated >= date(today) - dur(7 days)\nSORT updated DESC\n```',
          },
        ],
      },
      {
        heading: "Grouped views",
        paragraphs: ["Group synthesized pages by type to see coverage at a glance."],
        codeBlocks: [
          {
            title: "Group by type",
            code:
              '```dataview\nTABLE WITHOUT ID file.link AS "Page", type, confidence\nFROM "wiki"\nGROUP BY type\nSORT type\n```',
          },
        ],
      },
    ],
  },
  {
    slug: "dataviewjs",
    title: "DataviewJS dashboards",
    summary: "JavaScript-powered tables, gap analysis between /raw and /wiki, and simple health metrics.",
    sections: [
      {
        heading: "Health by type",
        paragraphs: ["After ingest, summarize average sources and low-confidence share."],
        codeBlocks: [
          {
            title: "Knowledge base health",
            code: `\`\`\`dataviewjs
const wikiPages = dv.pages('"wiki"').where((p) => p.type);
const grouped = wikiPages.groupBy((p) => p.type);

dv.header(2, "Knowledge Base Health by Type");

dv.table(["Type", "Count", "Avg Sources", "Low Confidence %"],
  grouped.map((group) => {
    const count = group.rows.length;
    const totalSources = group.rows.reduce((sum, p) => sum + (p.sources?.length || 0), 0);
    const lowConf = group.rows.filter((p) => p.confidence === "low").length;
    return [
      group.key,
      count,
      count ? (totalSources / count).toFixed(1) : "0",
      count ? ((lowConf / count) * 100).toFixed(0) + "%" : "0%",
    ];
  })
);
\`\`\``,
          },
        ],
      },
      {
        heading: "Raw → wiki gap (simple)",
        paragraphs: [
          "Tune matching logic as your sources field evolves—start with filename mentions and backlinks.",
        ],
        codeBlocks: [
          {
            title: "Unreferenced raw files",
            code: `\`\`\`dataviewjs
const rawFiles = dv.pages('"raw"');
const wikiPages = dv.pages('"wiki"');

const unreferenced = rawFiles.where((raw) => {
  return !wikiPages.some((w) =>
    w.file.outlinks?.some((link) => link.path === raw.file.path) ||
    (w.sources && w.sources.some((s) => s.includes(raw.file.name)))
  );
});

dv.header(2, "Raw Artifacts Awaiting Ingest");
dv.list(unreferenced.map((r) => r.file.link));
\`\`\``,
          },
        ],
      },
    ],
  },
  {
    slug: "templater",
    title: "Templater for consistent pages",
    summary: "Automate creation-time structure so Dataview queries stay reliable.",
    sections: [
      {
        heading: "Install",
        paragraphs: [
          "Community plugins → Templater → set a templates folder (e.g., /templates or /schema/templates).",
          "Consider triggering templates on new files for /wiki once your team agrees on naming.",
        ],
      },
      {
        heading: "Wiki page skeleton",
        paragraphs: ["Use prompts for type/title, then emit frontmatter + sections."],
        codeBlocks: [
          {
            title: "Starter template (illustrative)",
            code: `<%*
const type = await tp.system.suggester(
  ["concept", "insight", "customer", "competitor", "opportunity"],
  ["concept", "insight", "customer", "competitor", "opportunity"]
);
const title = await tp.system.prompt("Page title?");
await tp.file.rename(title);
%>
---
type: <% type %>
tags: []
sources: []
confidence: medium
ingested: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

## Summary

## Key Evidence

## Related`,
          },
        ],
      },
    ],
  },
  {
    slug: "linter",
    title: "Obsidian Linter (Lint step)",
    summary: "Mechanical consistency: YAML order, spacing, deduped arrays—protects Dataview and human review.",
    sections: [
      {
        heading: "Baseline rules",
        bullets: [
          "YAML Key Sort in a predictable order: type, tags, sources, confidence, ingested, updated.",
          "Add blank line after YAML; dedupe array values; escape special characters where needed.",
          "Start with manual lint on /wiki; avoid aggressive auto-lint on /raw.",
        ],
      },
      {
        heading: "Workflow",
        paragraphs: [
          "Ingest writes structure → Linter cleans mechanics → semantic lint prompts handle contradictions.",
        ],
      },
    ],
  },
  {
    slug: "style-settings",
    title: "Style Settings + snippets",
    summary: "Make dashboards readable: typography, tables, and optional confidence styling.",
    sections: [
      {
        heading: "Install",
        paragraphs: [
          "Community plugin Style Settings pairs with many themes to tune CSS variables without editing files constantly.",
        ],
      },
      {
        heading: "Snippet starter",
        paragraphs: ["Add a snippet such as llm-wiki-styles.css and enable it under Appearance → CSS snippets."],
        codeBlocks: [
          {
            title: "Tables + section rhythm",
            code: `.dataview table {
  border-collapse: collapse;
  width: 100%;
  margin: 1.5em 0;
}
.dataview th {
  background-color: var(--background-secondary);
  font-weight: 600;
  padding: 12px 16px;
}
.dataview td {
  padding: 10px 16px;
  border-bottom: 1px solid var(--background-modifier-border);
}
.dataview tr:hover {
  background-color: var(--background-modifier-hover);
}`,
          },
        ],
      },
    ],
  },
  {
    slug: "themes",
    title: "Theme picks for wiki work",
    summary: "Prioritize readable typography and strong Dataview table rendering.",
    sections: [
      {
        heading: "Short list",
        bullets: [
          "Minimal — default for many knowledge bases; excellent table readability + Style Settings depth.",
          "AnuPpuccin — expressive palettes; great when you want visual hierarchy across insight types.",
          "Things — polished, long-form reading; good spacing for synthesis notes.",
          "Default — zero overhead; pair with snippets + Style Settings.",
        ],
      },
      {
        heading: "How to choose",
        paragraphs: [
          "Open Dashboard.md side-by-side with a long wiki page; switch themes and check tables + dark mode contrast.",
        ],
      },
    ],
  },
  {
    slug: "plugins",
    title: "Plugin stack beyond the core four",
    summary: "Lightweight additions: capture, move, search, and optional local LLM experiments.",
    sections: [
      {
        heading: "High leverage",
        bullets: [
          "QuickAdd — macros for fast capture into /raw.",
          "Auto Note Mover — keep folders canonical using rules.",
          "Omnisearch — faster vault-wide search during Query/Lint.",
          "Periodic Notes — structured /logs entries for ingest runs.",
        ],
      },
      {
        heading: "Visualization",
        bullets: [
          "Excalidraw — affinity maps and journey sketches from customer artifacts.",
          "Kanban — opportunity backlog from synthesized pages.",
        ],
      },
      {
        heading: "Caution",
        paragraphs: [
          "Add plugins one at a time; exclude /raw from aggressive automation. Prefer local-first tools when handling sensitive founder data.",
        ],
      },
    ],
  },
  {
    slug: "mobile",
    title: "Mobile capture",
    summary: "Capture messy reality on the phone; heavy ingest stays on the laptop.",
    sections: [
      {
        heading: "What works well",
        bullets: [
          "Dataview + Style Settings generally render fine; simplify huge DataviewJS dashboards for speed.",
          "QuickAdd or quick-add flows for /raw notes and photo attachments.",
        ],
      },
      {
        heading: "What to avoid",
        bullets: [
          "Auto-lint on every save on mobile (battery + lag).",
          "Huge JS dashboards as the primary navigation—keep a lightweight index note.",
        ],
      },
    ],
  },
  {
    slug: "sync",
    title: "Sync strategies",
    summary: "Pick one system of record; mixing sync engines on the same vault causes pain.",
    sections: [
      {
        heading: "Options",
        bullets: [
          "Obsidian Sync — simplest cross-device, encrypted, version history (paid).",
          "Syncthing — free P2P; more setup, great for privacy.",
          "iCloud Drive — workable Apple-only; test conflict behavior.",
          "Git + Obsidian Git — great history for Markdown; awkward for large binaries—ignore or LFS.",
        ],
      },
      {
        heading: "Practice",
        paragraphs: [
          "Be deliberate about large screenshots in /raw; use selective sync rules if storage is limited.",
        ],
      },
    ],
  },
  {
    slug: "backup",
    title: "Backup in depth",
    summary: "Sync is not backup—layer local zips, git history, and offsite copies.",
    sections: [
      {
        heading: "3-2-1 mindset",
        bullets: [
          "Three copies, two media types, one offsite; test restores quarterly.",
        ],
      },
      {
        heading: "Tactics",
        bullets: [
          "Enable core File Recovery for quick local snapshots.",
          "Weekly zipped vault copy to an external drive.",
          "Private git remote for /wiki + /schema with .gitignore rules for heavy /raw binaries.",
        ],
      },
    ],
  },
];

export function getPlaybook(slug: string) {
  return playbooks.find((p) => p.slug === slug) ?? null;
}
