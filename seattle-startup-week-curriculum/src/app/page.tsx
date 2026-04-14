import Link from "next/link";
import {
  cohortProfile,
  deliveryPrinciples,
  weekCurriculum,
} from "@/lib/curriculum";

export default function Home() {
  const sections = [
    { id: "overview", label: "Program Overview" },
    { id: "segments", label: "Startup Segments" },
    { id: "principles", label: "Delivery Principles" },
    { id: "curriculum", label: "Weekly Curriculum" },
    { id: "features", label: "Features & Functions" },
    { id: "next-steps", label: "Next Steps" },
  ];

  const featureCards = [
    {
      title: "Interactive day routing",
      description:
        "Every day has a dedicated page with objectives, outputs, and session blocks.",
    },
    {
      title: "Facilitator-ready structure",
      description:
        "The curriculum is organized for immediate workshop delivery with measurable outcomes.",
    },
    {
      title: "Marketing and ops bundle",
      description:
        "Includes quickstarter, manual, tutorial, and platform-specific promotion assets.",
    },
    {
      title: "Modern static performance",
      description:
        "Pages are statically generated for fast load and reliable sharing.",
    },
  ];

  return (
    <>
      <main className="mx-auto flex w-full max-w-7xl gap-8 px-4 py-8 md:px-8">
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-72 shrink-0 overflow-hidden rounded-2xl border border-indigo-200 bg-white/80 p-4 shadow-lg backdrop-blur md:flex md:flex-col">
          <h2 className="px-2 text-sm font-semibold uppercase tracking-wider text-indigo-700">
            Navigate Sections
          </h2>
          <nav className="mt-4 flex-1 overflow-y-auto pr-1">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="flex w-full flex-col gap-8">
          <section
            id="overview"
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-cyan-500 p-8 text-white shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
              Seattle Startup Cohort Program
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Modern AI Curriculum Landing Page
            </h1>
            <p className="mt-4 max-w-3xl text-base text-indigo-50 md:text-lg">
              A visual, interactive, and practical one-week curriculum experience
              designed for selected startup teams in the Greater Seattle area.
            </p>

            <div className="mt-6 grid gap-3 text-sm md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-indigo-100">Cohort</p>
                <p className="mt-1 font-semibold">{cohortProfile.name}</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-indigo-100">Location</p>
                <p className="mt-1 font-semibold">{cohortProfile.location}</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-indigo-100">Duration</p>
                <p className="mt-1 font-semibold">{cohortProfile.duration}</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-indigo-100">Participants</p>
                <p className="mt-1 font-semibold">
                  {cohortProfile.participantCount}
                </p>
              </div>
            </div>
          </section>

          <section
            id="segments"
            className="scroll-mt-24 rounded-2xl border border-emerald-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-zinc-900">
              Target Startup Segments
            </h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {cohortProfile.targetSegments.map((segment) => (
                <li
                  key={segment}
                  className="rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900 transition hover:scale-[1.01]"
                >
                  {segment}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="principles"
            className="scroll-mt-24 rounded-2xl border border-cyan-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-zinc-900">
              Delivery Principles
            </h2>
            <ul className="mt-4 grid gap-3">
              {deliveryPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="rounded-lg border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm text-cyan-950"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="curriculum"
            className="scroll-mt-24 rounded-2xl border border-violet-200 bg-white p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-2xl font-semibold text-zinc-900">
                Weekly Curriculum
              </h2>
              <p className="text-sm text-zinc-600">
                Click each card to open daily detailed agenda
              </p>
            </div>
            <div className="mt-6 grid gap-4 xl:grid-cols-2">
              {weekCurriculum.map((dayPlan) => (
                <article
                  key={dayPlan.slug}
                  className="group rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50 to-indigo-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
                    Day {dayPlan.day}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                    {dayPlan.focus}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-700">
                    {dayPlan.startupScenario}
                  </p>
                  <Link
                    href={`/days/${dayPlan.slug}`}
                    className="mt-4 inline-flex items-center rounded-md bg-violet-700 px-3 py-2 text-sm font-medium text-white transition group-hover:bg-violet-600"
                  >
                    View detailed agenda
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section
            id="features"
            className="scroll-mt-24 rounded-2xl border border-amber-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-zinc-900">
              Features & Functions
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {featureCards.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-700">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="next-steps"
            className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-zinc-900">Next Steps</h2>
            <p className="mt-3 text-zinc-700">
              Use the curriculum day pages for weekly delivery, then publish the
              included marketing bundle for startup recruitment and program
              promotion.
            </p>
          </section>
        </div>
      </main>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-black"
      >
        View on GitHub
      </a>
    </>
  );
}
