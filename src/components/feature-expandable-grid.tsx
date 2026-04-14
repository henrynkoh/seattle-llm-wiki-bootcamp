"use client";

import { useCallback, useId, useState } from "react";
import type { LandingFeature } from "@/lib/landing-content";

export function FeatureExpandableGrid({ features }: { features: LandingFeature[] }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => {
        const isOpen = openId === f.id;
        const panelId = `${baseId}-${f.id}-panel`;
        const buttonId = `${baseId}-${f.id}-btn`;

        return (
          <article
            key={f.id}
            className={`flex flex-col rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white to-zinc-50 shadow-sm transition dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-950 ${
              isOpen
                ? "ring-2 ring-indigo-400/60 ring-offset-2 ring-offset-zinc-50 dark:ring-indigo-500/50 dark:ring-offset-zinc-950 md:col-span-2 lg:col-span-3"
                : "hover:border-indigo-300/60 hover:shadow-md dark:hover:border-indigo-500/40"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(f.id)}
              className="flex w-full flex-col rounded-2xl p-6 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="text-2xl" aria-hidden>
                  {f.icon}
                </span>
                <span className="shrink-0 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  {isOpen ? "Close" : "Expand"}
                </span>
              </span>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{f.description}</p>
              <span className="mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                {isOpen ? "Click to collapse full guide" : "Click for full guide (~10× detail)"}
              </span>
            </button>

            {isOpen ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-zinc-200/80 px-6 pb-6 pt-0 dark:border-zinc-700/80"
              >
                <div className="mt-4 max-h-[min(70vh,720px)] space-y-4 overflow-y-auto rounded-xl bg-zinc-50/90 p-5 text-sm leading-relaxed text-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-200">
                  {f.expandedParagraphs.map((block, i) => (
                    <p key={i}>{block}</p>
                  ))}
                  {f.expandedBullets?.length ? (
                    <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-200">
                      {f.expandedBullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
