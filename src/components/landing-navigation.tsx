"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { landingNavGroups, landingSectionIds } from "@/lib/landing-content";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function LandingLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string>("hub");
  const ticking = useRef(false);

  const updateActive = useCallback(() => {
    const marker = window.scrollY + Math.min(160, window.innerHeight * 0.18);
    let current = landingSectionIds[0];
    for (const id of landingSectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top <= marker) current = id;
    }
    setActiveId(current);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking.current = false;
      });
    };
    let initialRaf = 0;
    initialRaf = requestAnimationFrame(() => {
      updateActive();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(initialRaf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActive]);

  const linkClass = (id: string) =>
    [
      "w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition",
      activeId === id
        ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/15 text-emerald-900 ring-1 ring-emerald-500/40 dark:text-emerald-100 dark:ring-emerald-400/30"
        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/80",
    ].join(" ");

  const pillClass = (id: string) =>
    [
      "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition",
      activeId === id
        ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-md"
        : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200",
    ].join(" ");

  return (
    <>
      <nav
        aria-label="Section navigation (mobile)"
        className="sticky top-0 z-30 -mx-4 mb-6 flex gap-1 overflow-x-auto border-b border-zinc-200/80 bg-zinc-50/95 px-4 py-3 backdrop-blur-md [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:hidden md:px-0 dark:border-zinc-800/80 dark:bg-zinc-950/90 [&::-webkit-scrollbar]:hidden"
      >
        {landingNavGroups.flatMap((g) => g.items).map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToId(item.id)}
            className={pillClass(item.id)}
          >
            {item.label.length > 20 ? `${item.label.slice(0, 18)}…` : item.label}
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-10 lg:gap-12">
        <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-56 shrink-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 shadow-xl shadow-indigo-500/5 backdrop-blur-xl md:flex lg:w-64 xl:w-72 dark:border-zinc-800/90 dark:bg-zinc-900/85 dark:shadow-indigo-950/20">
          <div className="border-b border-zinc-200/80 px-4 py-3 dark:border-zinc-800/80">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
              On this page
            </p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Scroll or tap to jump</p>
          </div>
          <nav className="flex-1 overflow-y-auto overscroll-contain px-2 py-3 pr-1" aria-label="Page sections">
            {landingNavGroups.map((group) => (
              <div key={group.label} className="mb-5">
                <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {group.label}
                </p>
                <ul className="space-y-0.5">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <button type="button" onClick={() => scrollToId(item.id)} className={linkClass(item.id)}>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 space-y-10 md:space-y-12">{children}</div>
      </div>
    </>
  );
}
