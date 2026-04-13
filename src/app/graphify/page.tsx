import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { GRAPHIFY_REPO, GRAPHIFY_SITE, SOURCE_VIDEO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Graphify CLI Track",
};

const installSnippet = `pip install graphifyy && graphify install`;

const claudeHookSnippet = `graphify claude install`;

const runSnippet = `graphify ./raw --obsidian --obsidian-dir ~/Obsidian-Vaults/YourStartup-LLMWiki`;

const optionalExtras = [`pip install 'graphifyy[office]'`, `pip install 'graphifyy[video]'`];

export default function GraphifyPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      <SectionHeading
        eyebrow="Day 4 acceleration"
        title="Graphify: semantic graphs that merge back into Obsidian"
        description="Graphify is an open-source AI coding-assistant skill and CLI (maintained on GitHub) that ingests messy folders, builds a knowledge graph, and can emit Obsidian-ready markdown plus interactive HTML reports. Treat it as the automation layer once manual ingests feel predictable."
      />

      <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">How this complements Days 1–3</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-base text-zinc-600 dark:text-zinc-300">
          <li>Early days focus on philosophy, prompts, and manual wiki hygiene—the skills you need when automation misfits.</li>
          <li>Graphify handles scale: dozens of PDFs, decks, screenshots, and media files with structured summaries and edges.</li>
          <li>Obsidian remains the editorial surface; Graphify is the batch refinery that proposes structure you still curate.</li>
        </ul>
      </div>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-zinc-200/80 bg-zinc-50/80 p-8 dark:border-zinc-800/80 dark:bg-zinc-950/60">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Prerequisites</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            <li>Python 3.10 or newer</li>
            <li>Claude Code, Cursor, Aider, or another supported assistant (per upstream docs)</li>
            <li>Obsidian vault with `/raw` populated from earlier bootcamp days</li>
            <li>Claude API key for multimodal extraction steps</li>
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-zinc-200/80 bg-zinc-50/80 p-8 dark:border-zinc-800/80 dark:bg-zinc-950/60">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Official references</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Always verify commands against the latest README—CLIs evolve quickly.
          </p>
          <div className="flex flex-col gap-3 text-sm font-semibold">
            <Link className="text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300" href={GRAPHIFY_REPO}>
              safishamsi/graphify on GitHub
            </Link>
            <Link className="text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300" href={GRAPHIFY_SITE}>
              graphify.net documentation hub
            </Link>
            <Link className="text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300" href={SOURCE_VIDEO_URL}>
              Source workshop video for narrative context
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Installation & hooks" description="Run on Day 4 morning after teams confirm Python availability." />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">Baseline install</p>
            <pre className="mt-4 overflow-x-auto rounded-2xl bg-zinc-950 p-4 text-sm text-zinc-50">
              <code>{installSnippet}</code>
            </pre>
          </div>
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">Claude Code integration</p>
            <pre className="mt-4 overflow-x-auto rounded-2xl bg-zinc-950 p-4 text-sm text-zinc-50">
              <code>{claudeHookSnippet}</code>
            </pre>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              Cursor users should follow the matching `graphify cursor install` instructions in the upstream README.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Live lab command" description="Replace the Obsidian path with each startup’s actual vault location." />
        <pre className="overflow-x-auto rounded-3xl bg-zinc-950 p-6 text-sm leading-relaxed text-zinc-50">
          <code>{runSnippet}</code>
        </pre>
        <div className="rounded-3xl border border-dashed border-emerald-300/70 bg-emerald-50/60 p-6 text-sm text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-50">
          <p className="font-semibold">Optional extras</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {optionalExtras.map((cmd) => (
              <li key={cmd}>
                <code className="font-mono text-xs">{cmd}</code>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
        <SectionHeading
          title="Expected artifacts"
          description="Have teams commit these files into a private Git repo or encrypted drive at the end of Day 4."
        />
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
          <li>`graph.html` — interactive exploration for investor-style reviews</li>
          <li>`GRAPH_REPORT.md` — “god nodes,” surprising edges, suggested follow-up questions</li>
          <li>`graph.json` — machine-readable graph for future automation</li>
          <li>Updated `/wiki` pages inside Obsidian with richer backlinks</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-zinc-200/80 bg-zinc-50/80 p-8 dark:border-zinc-800/80 dark:bg-zinc-950/60">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Facilitator tips</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
          <li>Run Graphify on a small `/raw` folder first so teams understand the UI before scaling to full decks.</li>
          <li>Pair Graphify output with the Day 6 Lint prompt—automation still needs human judgment.</li>
          <li>Encourage startups to narrate three “surprising edges” during Demo Day; it proves the graph changed behavior.</li>
        </ul>
      </section>
    </div>
  );
}
