import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SOURCE_VIDEO_URL } from "@/lib/constants";
import { audience, format, logistics, prerequisites, successMetrics, trackerColumns } from "@/lib/content";

export const metadata: Metadata = {
  title: "Logistics & Preparation",
};

export default function LogisticsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      <SectionHeading
        eyebrow="Field guide"
        title="Everything you send one week before kickoff"
        description="Copy this page into your cohort email, Notion HQ, or PDF packet. It aligns expectations for hybrid logistics, tooling, and success metrics."
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Audience & format</h2>
          <dl className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
            <div>
              <dt className="font-semibold text-zinc-900 dark:text-white">Cohort shape</dt>
              <dd className="mt-1">{audience.cohort}</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900 dark:text-white">Teams</dt>
              <dd className="mt-1">{audience.attendees}</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900 dark:text-white">Industries</dt>
              <dd className="mt-1">{audience.sectors.join(", ")}</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900 dark:text-white">Hybrid stance</dt>
              <dd className="mt-1">{format.hybrid}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Seattle logistics</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            <li>
              <span className="font-semibold text-zinc-900 dark:text-white">Venues: </span>
              {logistics.venues.join(", ")}
            </li>
            <li>
              <span className="font-semibold text-zinc-900 dark:text-white">Selection: </span>
              {logistics.selection}
            </li>
            <li>
              <span className="font-semibold text-zinc-900 dark:text-white">Recordings: </span>
              {logistics.recordings}
            </li>
            <li>
              <span className="font-semibold text-zinc-900 dark:text-white">Cost posture: </span>
              {logistics.cost}
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-zinc-200/80 bg-zinc-50/80 p-8 dark:border-zinc-800/80 dark:bg-zinc-950/60">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Prerequisite checklist (T-7 days)</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
          {prerequisites.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Pair this checklist with the{" "}
          <Link className="font-semibold text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300" href={SOURCE_VIDEO_URL}>
            workshop video
          </Link>{" "}
          so teams understand the vibe before Day 1.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeading title="Shared tracker columns" description="Duplicate these headers into your cohort Google Sheet." />
        <div className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
            <thead className="bg-zinc-50 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
              <tr>
                {trackerColumns.map((column) => (
                  <th key={column} className="px-4 py-3">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <tr className="text-zinc-600 dark:text-zinc-300">
                {trackerColumns.map((column) => (
                  <td key={column} className="px-4 py-3">
                    …
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading title="Success metrics (daily stand-up)" />
        <div className="grid gap-4 md:grid-cols-2">
          {successMetrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/50">
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{metric.label}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
