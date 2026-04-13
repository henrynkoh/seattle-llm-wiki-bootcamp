import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { GRAPHIFY_SITE, SOURCE_VIDEO_URL, SITE } from "@/lib/constants";
import { audience, dailyPlans, format, successMetrics } from "@/lib/content";

const highlights = [
  {
    title: "Karpathy LLM Wiki spine",
    body: "Raw → Ingest → Wiki → Query → Lint, executed inside a single Obsidian vault with a Claude gardener.",
  },
  {
    title: "Startup-native artifacts",
    body: "Customer calls, decks, competitor PDFs, code snippets, and Seattle ecosystem intel all land in `/raw` with provenance.",
  },
  {
    title: "Graphify acceleration",
    body: "Optional CLI track (`graphifyy`) generates interactive graphs, reports, and merged wiki pages for larger corpora.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-zinc-200/70 bg-gradient-to-b from-white to-zinc-50 py-16 dark:border-zinc-800/70 dark:from-zinc-950 dark:to-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Seattle cohort lab</p>
            <h1 className="text-4xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-5xl">{SITE.tagline}</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">{SITE.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/curriculum"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500"
              >
                Review the 7-day arc
              </Link>
              <Link
                href={SOURCE_VIDEO_URL}
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-emerald-500 hover:text-emerald-700 dark:border-zinc-700 dark:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-200"
              >
                Watch the source video
              </Link>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Grounded in{" "}
              <Link className="font-semibold text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300" href={SOURCE_VIDEO_URL}>
                Karpathy LLM Wiki × Claude × Obsidian × Graphify
              </Link>
              —this site is the canonical playbook for facilitators and founders.
            </p>
          </div>
          <div className="flex-1 rounded-3xl border border-zinc-200/80 bg-white/90 p-8 shadow-xl shadow-emerald-500/5 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">Cohort snapshot</p>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-6 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <dt className="text-zinc-500 dark:text-zinc-400">Audience</dt>
                <dd className="text-right font-medium text-zinc-900 dark:text-white">{audience.cohort}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <dt className="text-zinc-500 dark:text-zinc-400">Team size</dt>
                <dd className="text-right font-medium text-zinc-900 dark:text-white">{audience.attendees}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <dt className="text-zinc-500 dark:text-zinc-400">Sectors</dt>
                <dd className="text-right font-medium text-zinc-900 dark:text-white">{audience.sectors.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-zinc-500 dark:text-zinc-400">Cadence</dt>
                <dd className="mt-2 space-y-2 text-zinc-800 dark:text-zinc-200">
                  {format.daily.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <SectionHeading
          eyebrow="Why this exists"
          title="Operationalize the video’s workflow for real startups"
          description="This bootcamp is not a conference talk—it is a production-grade rehearsal of every practical step from the workshop, stretched across seven accountable days with homework, metrics, and peer review."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/50">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200/70 bg-white py-16 dark:border-zinc-800/70 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <SectionHeading
            eyebrow="Seven-day spine"
            title="Daily outcomes map 1:1 to the workshop beats"
            description="Jump into any day for facilitator-ready talking points, labs, and homework. Anchor timestamps reference the YouTube source whenever they help orient teams."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {dailyPlans.map((plan) => (
              <Link
                key={plan.day}
                href={`/curriculum#day-${plan.day}`}
                className="group rounded-3xl border border-zinc-200/80 bg-zinc-50/80 p-6 transition hover:-translate-y-0.5 hover:border-emerald-400/80 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-zinc-800/80 dark:bg-zinc-950/60"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">Day {plan.day}</p>
                  <span className="text-sm text-zinc-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-300">View details →</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white">{plan.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{plan.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-16">
        <SectionHeading
          eyebrow="North-star metrics"
          title="What “done” looks like for each startup"
          description="Track these daily in a shared Google Sheet so teams stay honest about depth—not vanity counts."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {successMetrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/50">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">{metric.label}</p>
              <p className="mt-3 text-base text-zinc-700 dark:text-zinc-200">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100/90">Graphify track</p>
            <h2 className="mt-3 text-3xl font-semibold">Need automation at vault scale?</h2>
            <p className="mt-3 max-w-2xl text-emerald-50">
              Day 4 introduces the official Graphify CLI (`graphifyy`) so teams can merge semantic graphs with Obsidian exports. Follow the maintainer docs for the freshest flags—this site links to the source of truth.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/graphify"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-50"
            >
              Open Graphify playbook
            </Link>
            <Link
              href={GRAPHIFY_SITE}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Visit graphify.net
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
