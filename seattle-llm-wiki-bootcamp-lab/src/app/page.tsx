import type { Metadata } from "next";
import Link from "next/link";
import { cohort, days } from "@/lib/days";
import { OBSIDIAN_URL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Overview",
};

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-12 px-4 py-12 md:px-8">
      <section className="overflow-hidden rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100/90">Greater Seattle cohort lab</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{SITE.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-indigo-50">{SITE.tagline}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-indigo-100/95">{SITE.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/week"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-violet-700 shadow-lg transition hover:scale-[1.02]"
          >
            Start the 7-day arc
          </Link>
          <Link
            href="/playbooks"
            className="inline-flex rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Open playbooks (Dataview, Lint, sync…)
          </Link>
          <a
            href={OBSIDIAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-white/25 bg-zinc-900/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900/50"
          >
            Get Obsidian
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Who this is for</h2>
        <p className="text-zinc-700 dark:text-zinc-300">{cohort.who}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{cohort.duration}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{cohort.rhythm}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Mental model</h2>
        <p className="rounded-2xl border border-zinc-200 bg-white p-6 font-mono text-sm text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100">
          Raw → Ingest → Wiki → Query → Lint
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Day 1 is entirely about the vault scaffold and messy /raw evidence. Later days add gardener prompts, capture
          habits, graphs, queries, and maintenance—executed in order so homework compounds.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Jump to a day</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {days.map((d) => (
            <li key={d.day}>
              <Link
                href={`/day/${d.day}`}
                className="block rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-700"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                  Day {d.day}
                </p>
                <p className="mt-1 font-medium text-zinc-900 dark:text-white">{d.title}</p>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{d.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
