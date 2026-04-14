import type { Metadata } from "next";
import Link from "next/link";
import { cohort, days } from "@/lib/days";

export const metadata: Metadata = {
  title: "7-day arc",
};

export default function WeekPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-4 py-12 md:px-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Seven-day execution arc</h1>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-300">
          Each day links to a step-by-step lab with checklists (saved in this browser). {cohort.rhythm}
        </p>
      </div>

      <ol className="space-y-6">
        {days.map((d) => (
          <li
            key={d.day}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Day {d.day}</p>
              {d.videoAnchor ? (
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{d.videoAnchor}</p>
              ) : null}
            </div>
            <h2 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">{d.title}</h2>
            <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">{d.mentalModelLine}</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{d.summary}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {d.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <div className="mt-5">
              <Link
                href={`/day/${d.day}`}
                className="inline-flex rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Open Day {d.day} lab →
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
