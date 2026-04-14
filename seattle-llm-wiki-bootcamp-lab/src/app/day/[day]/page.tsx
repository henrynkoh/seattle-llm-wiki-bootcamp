import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/code-block";
import { StepChecklist } from "@/components/step-checklist";
import { getDay, days } from "@/lib/days";

interface Props {
  params: Promise<{ day: string }>;
}

export async function generateStaticParams() {
  return days.map((d) => ({ day: String(d.day) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { day } = await params;
  const n = Number.parseInt(day, 10);
  const plan = getDay(n);
  if (!plan) return { title: "Day not found" };
  return {
    title: `Day ${plan.day}: ${plan.title}`,
    description: plan.summary,
  };
}

export default async function DayLabPage({ params }: Props) {
  const { day } = await params;
  const n = Number.parseInt(day, 10);
  const plan = getDay(n);

  if (!plan) notFound();

  const prev = getDay(n - 1);
  const next = getDay(n + 1);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-4 py-10 md:px-8">
      <div className="flex flex-wrap gap-3 text-sm">
        <Link
          href="/week"
          className="rounded-lg border border-zinc-300 px-3 py-2 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
        >
          ← 7-day arc
        </Link>
        {prev ? (
          <Link
            href={`/day/${prev.day}`}
            className="rounded-lg border border-zinc-300 px-3 py-2 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Day {prev.day}
          </Link>
        ) : null}
        {next ? (
          <Link
            href={`/day/${next.day}`}
            className="ml-auto rounded-lg border border-zinc-300 px-3 py-2 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Day {next.day} →
          </Link>
        ) : null}
      </div>

      <header className="space-y-3">
        <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Day {plan.day}</p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">{plan.title}</h1>
        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{plan.mentalModelLine}</p>
        {plan.videoAnchor ? <p className="text-xs text-zinc-500 dark:text-zinc-400">{plan.videoAnchor}</p> : null}
        <p className="max-w-3xl text-zinc-600 dark:text-zinc-300">{plan.summary}</p>
      </header>

      <section className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Outcomes</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          {plan.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-12">
        {plan.steps.map((step, idx) => (
          <article key={step.id} className="scroll-mt-28 border-b border-zinc-200 pb-12 last:border-0 dark:border-zinc-800">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Step {idx + 1}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white">{step.title}</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {step.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {step.codeBlocks?.map((block) => (
              <CodeBlock key={block.title ?? block.code.slice(0, 24)} title={block.title} code={block.code} />
            ))}
            {step.checklist?.length ? (
              <StepChecklist
                storageKey={`llm-wiki-lab-d${plan.day}-${step.id}`}
                items={step.checklist.map((label, i) => ({ id: `${step.id}-${i}`, label }))}
              />
            ) : null}
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-amber-200/90 bg-amber-50/60 p-6 dark:border-amber-900/40 dark:bg-amber-950/20">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Homework</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-800 dark:text-zinc-200">
          {plan.homework.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
