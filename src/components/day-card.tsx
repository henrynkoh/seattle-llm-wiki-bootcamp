import type { DayPlan } from "@/lib/content";

type DayCardProps = {
  plan: DayPlan;
};

export function DayCard({ plan }: DayCardProps) {
  const anchor = `day-${plan.day}`;
  return (
    <article
      id={anchor}
      className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 shadow-sm shadow-zinc-900/5 dark:border-zinc-800/80 dark:bg-zinc-900/40"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">Day {plan.day}</p>
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">{plan.title}</h3>
        </div>
        {plan.videoAnchor ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{plan.videoAnchor}</p>
        ) : null}
      </div>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">{plan.summary}</p>
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
      {plan.group ? (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Cohort activities</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            {plan.group.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-6 rounded-2xl bg-emerald-50/70 p-4 text-sm text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-100">
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
