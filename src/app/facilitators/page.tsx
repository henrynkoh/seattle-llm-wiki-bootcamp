import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { facilitatorChecklist } from "@/lib/content";

export const metadata: Metadata = {
  title: "Facilitator Runbook",
};

export default function FacilitatorsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      <SectionHeading
        eyebrow="Operators"
        title="Run the cohort like a product team"
        description="Use this runbook alongside the detailed curriculum. It keeps AV, async support, and accountability loops predictable so founders can focus on building."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {facilitatorChecklist.map((block) => (
          <div key={block.title} className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{block.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="rounded-3xl border border-dashed border-emerald-400/70 bg-emerald-50/60 p-8 text-sm text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-50">
        <h2 className="text-lg font-semibold">Asset checklist (ship with welcome email)</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Template Obsidian vault (zip) with `/raw`, `/wiki`, `/schema`, `/logs` stubs</li>
          <li>Copy-paste blocks: Gardener system prompt, Ingest prompt, Query prompt, Lint prompt</li>
          <li>Example Graphify outputs (`graph.html`, `GRAPH_REPORT.md`) on sanitized sample data</li>
          <li>Slide deck: one slide per day + troubleshooting appendix</li>
          <li>Office-hours calendar holds + Zoom links with waiting room enabled</li>
        </ul>
      </section>
    </div>
  );
}
