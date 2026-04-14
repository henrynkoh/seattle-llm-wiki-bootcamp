import type { Metadata } from "next";
import { DiscoveryDayCard } from "@/components/discovery-day-card";
import { SectionHeading } from "@/components/section-heading";
import {
  ADVANCED_SYNTHESIS_PROMPT,
  aiToolsGeneral,
  aiToolsSpecialized,
  artifactPrimer,
  discoveryAudience,
  discoveryPlans,
  synthesisProcessSteps,
} from "@/lib/discovery-content";
import { SOURCE_VIDEO_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discovery & Synthesis Week",
  description:
    "Executable 7-day track for Seattle startups: messy /raw artifacts, affinity synthesis, AI-assisted workflows, advanced prompting.",
};

const toc = [
  { href: "#why", label: "Why this track" },
  { href: "#artifacts", label: "What counts as messy?" },
  { href: "#process", label: "Synthesis process" },
  { href: "#week", label: "Day-by-day execution" },
  { href: "#ai-tools", label: "AI tools" },
  { href: "#prompt", label: "Advanced prompt (copy)" },
];

export default function DiscoveryPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Parallel cohort track"
          title="From messy artifacts to defensible insights — one week, step by step"
          description={`Built for ${discoveryAudience} Run it alongside the main LLM Wiki vault curriculum so teams both capture reality in /raw and produce structured /synthesis outputs.`}
        />
        <div className="flex flex-wrap gap-2 text-sm">
          {toc.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-violet-200 bg-white px-3 py-1 font-medium text-violet-800 transition hover:bg-violet-50 dark:border-violet-800 dark:bg-zinc-900 dark:text-violet-200 dark:hover:bg-violet-950/50"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="rounded-3xl border border-violet-200/80 bg-violet-50/60 p-6 text-sm text-violet-950 dark:border-violet-500/30 dark:bg-violet-950/30 dark:text-violet-50">
          <p className="font-semibold">Source material</p>
          <p className="mt-2">
            The main bootcamp still follows the{" "}
            <Link className="font-semibold underline-offset-4 hover:underline" href={SOURCE_VIDEO_URL}>
              workshop video walkthrough
            </Link>
            . This page adds a <strong>product-discovery execution layer</strong>—raw customer/market dumps,
            qualitative synthesis, grounded AI passes, and advanced prompting—so cohorts don’t stop at “files in a folder.”
          </p>
          <p className="mt-3">
            Facilitators: pair each Discovery day with the matching{" "}
            <Link className="font-semibold underline-offset-4 hover:underline" href="/curriculum">
              7-Day Curriculum
            </Link>{" "}
            card; cross-links are called out inside every day.
          </p>
        </div>
      </div>

      <section id="why" className="scroll-mt-24 space-y-4">
        <SectionHeading
          title="Why run this in the same week?"
          description="Raw artifacts without synthesis stay noisy; synthesis without raw evidence drifts into opinion. Doing both builds an auditable chain founders can show investors and teams."
        />
        <ul className="list-disc space-y-2 pl-5 text-base text-zinc-700 dark:text-zinc-200">
          <li>Teams finish with `/raw` (messy) and `/synthesis` (clear) side by side.</li>
          <li>Repeated signals across interviews beat single loud anecdotes.</li>
          <li>AI tools save time on first-pass coding—human review stays mandatory for strategy.</li>
        </ul>
      </section>

      <section id="artifacts" className="scroll-mt-24 space-y-6">
        <SectionHeading title="What belongs in `/raw`?" description={artifactPrimer.definition} />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Examples that count</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {artifactPrimer.examples.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Folder rule</h3>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">{artifactPrimer.folderRule}</p>
            <p className="mt-4 text-sm font-medium text-zinc-800 dark:text-zinc-100">
              Quick homework check: open `/raw` and count 5–10 files with different extensions. No subfolders required on
              day one.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 space-y-6">
        <SectionHeading
          title="Synthesis spine (repeatable after bootcamp)"
          description="This is the manual craft path; Day 6–7 add AI accelerators with the same checkpoints."
        />
        <ol className="space-y-4">
          {synthesisProcessSteps.map((step, idx) => (
            <li
              key={step.phase}
              className="flex gap-4 rounded-2xl border border-zinc-200/80 bg-white/80 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-900 dark:bg-emerald-900/50 dark:text-emerald-100">
                {idx + 1}
              </span>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">{step.phase}</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="week" className="scroll-mt-24 space-y-8">
        <SectionHeading
          title="Day-by-day execution"
          description="Each block lists morning teaching, lab work, cohort interaction, deliverables, and homework. Times assume a 9:00–11:30 core block like the main curriculum."
        />
        <div className="space-y-10">
          {discoveryPlans.map((plan) => (
            <DiscoveryDayCard key={plan.day} plan={plan} />
          ))}
        </div>
      </section>

      <section id="ai-tools" className="scroll-mt-24 space-y-6">
        <SectionHeading
          title="AI tools (generalist → specialist)"
          description="Pick one generalist stack per team for consistency; add a specialist repo only if interview volume is high."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">General-purpose LLMs & notebooks</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              {aiToolsGeneral.map((t) => (
                <li key={t.name}>
                  <span className="font-semibold text-zinc-900 dark:text-white">{t.name}: </span>
                  {t.note}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Specialized qualitative stacks</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {aiToolsSpecialized.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Recommended mini-workflow: NotebookLM for grounded overview → Claude for deep passes → Miro/FigJam for visuals.
            </p>
          </div>
        </div>
      </section>

      <section id="prompt" className="scroll-mt-24 space-y-4">
        <SectionHeading
          title="Copy-paste: advanced synthesis prompt"
          description="Use after text extracts exist. Run as a chain: extraction prompt first if files are huge. Redact PII before uploading to any vendor."
        />
        <pre className="overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-950 p-6 text-xs leading-relaxed text-zinc-100 dark:border-zinc-700">
          <code>{ADVANCED_SYNTHESIS_PROMPT}</code>
        </pre>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Techniques to combine: CORE framing, chain-of-thought (“show your work”), prompt chaining (extract → cluster →
          insight), tree-of-thoughts for conflicting signals, self-critique pass for weak evidence.
        </p>
      </section>

      <section className="rounded-3xl border border-emerald-200/80 bg-emerald-50/50 p-8 dark:border-emerald-800/40 dark:bg-emerald-950/20">
        <h2 className="text-xl font-semibold text-emerald-950 dark:text-emerald-50">Facilitator note</h2>
        <p className="mt-3 text-sm text-emerald-900 dark:text-emerald-100">
          Keep `/raw` read-only for polish. All cleaned narratives live in `/synthesis` (or `/wiki` if you merge into the LLM
          Wiki). Demo Day should show one slide with the evidence chain: photo of messy folder → affinity snapshot → single
          prioritized insight → next experiment.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/curriculum"
            className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Back to main 7-day curriculum
          </Link>
          <Link
            href="/logistics"
            className="rounded-full border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-50 dark:border-emerald-800 dark:bg-zinc-900 dark:text-emerald-100 dark:hover:bg-emerald-950/40"
          >
            Logistics & prerequisites
          </Link>
        </div>
      </section>
    </div>
  );
}
