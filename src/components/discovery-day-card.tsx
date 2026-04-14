import type { DiscoveryDayPlan } from "@/lib/discovery-content";

type DiscoveryDayCardProps = {
  plan: DiscoveryDayPlan;
};

export function DiscoveryDayCard({ plan }: DiscoveryDayCardProps) {
  const anchor = `discovery-day-${plan.day}`;
  return (
    <article
      id={anchor}
      className="rounded-3xl border border-violet-200/80 bg-white/90 p-8 shadow-sm shadow-zinc-900/5 dark:border-violet-900/40 dark:bg-zinc-900/40"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">
            Day {plan.day}
          </p>
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">{plan.title}</h3>
        </div>
        {plan.timeBudget ? (
          <p className="shrink-0 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-900 dark:bg-violet-950/60 dark:text-violet-100">
            {plan.timeBudget}
          </p>
        ) : null}
      </div>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">{plan.summary}</p>
      <p className="mt-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-3 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950/40 dark:text-zinc-300">
        <span className="font-semibold text-zinc-900 dark:text-white">LLM Wiki week link: </span>
        {plan.wikiAlignment}
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Morning focus</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            {plan.morning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Hands-on lab</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            {plan.handsOn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {plan.cohort ? (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Cohort activities</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            {plan.cohort.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-6 rounded-2xl border border-violet-200/60 bg-violet-50/70 p-4 text-sm text-violet-950 dark:border-violet-800/50 dark:bg-violet-950/30 dark:text-violet-100">
        <p className="font-semibold">Deliverables (done = checked in stand-up)</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {plan.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 rounded-2xl bg-emerald-50/70 p-4 text-sm text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-100">
        <p className="font-semibold">Homework</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {plan.homework.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
