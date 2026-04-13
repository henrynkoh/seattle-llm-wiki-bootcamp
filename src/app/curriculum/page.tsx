import type { Metadata } from "next";
import { DayCard } from "@/components/day-card";
import { SectionHeading } from "@/components/section-heading";
import { SOURCE_VIDEO_URL } from "@/lib/constants";
import { dailyPlans, format, obsidianPlugins, vaultLayout } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "7-Day Curriculum",
};

export default function CurriculumPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Bootcamp arc"
          title="Seven consecutive days, each mapped to the workshop"
          description="Facilitators can run this verbatim: every block includes morning instruction, hands-on lab work, cohort exercises where noted, and homework that compounds into Demo Day artifacts."
        />
        <div className="rounded-3xl border border-emerald-200/80 bg-emerald-50/60 p-6 text-sm text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-50">
          <p className="font-semibold">Source fidelity</p>
          <p className="mt-2">
            The canonical video walkthrough lives on{" "}
            <Link className="font-semibold underline-offset-4 hover:underline" href={SOURCE_VIDEO_URL}>
              YouTube
            </Link>
            . When a day references timestamps, treat them as orientation—not rigid law—because edits and translations can shift timing.
          </p>
        </div>
      </div>

      <section className="space-y-6">
        <SectionHeading title="Daily rhythm" description="Keep this block visible on-screen during welcome." />
        <ul className="list-disc space-y-2 pl-5 text-base text-zinc-700 dark:text-zinc-200">
          {format.daily.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="text-base text-zinc-600 dark:text-zinc-300">{format.goal}</p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Vault layout</h3>
          <ul className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
            {vaultLayout.map((row) => (
              <li key={row.path}>
                <span className="font-mono text-emerald-700 dark:text-emerald-300">{row.path}</span>
                <p>{row.purpose}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Obsidian plugin stack</h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            Match the facilitator template vault on Day 1 so screen shares line up. Swap alternatives only after the baseline is stable.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            {obsidianPlugins.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          title="Day-by-day execution"
          description="Each card is copy-ready for slide decks, Notion HQ pages, or printed packets."
        />
        <div className="space-y-10">
          {dailyPlans.map((plan) => (
            <DayCard key={plan.day} plan={plan} />
          ))}
        </div>
      </section>
    </div>
  );
}
