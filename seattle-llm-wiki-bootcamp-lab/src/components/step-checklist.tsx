"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

type Item = { id: string; label: string };

const stores = new Map<
  string,
  {
    value: Record<string, boolean>;
    listeners: Set<() => void>;
  }
>();

function getOrCreateStore(storageKey: string) {
  let entry = stores.get(storageKey);
  if (!entry) {
    let value: Record<string, boolean> = {};
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) value = JSON.parse(raw) as Record<string, boolean>;
      } catch {
        /* ignore */
      }
    }
    entry = { value, listeners: new Set() };
    stores.set(storageKey, entry);
  }
  return entry;
}

function subscribe(storageKey: string, onChange: () => void) {
  const entry = getOrCreateStore(storageKey);
  entry.listeners.add(onChange);
  return () => {
    entry.listeners.delete(onChange);
  };
}

function getSnapshot(storageKey: string) {
  return getOrCreateStore(storageKey).value;
}

function getServerSnapshot() {
  return {} as Record<string, boolean>;
}

function emit(storageKey: string) {
  const entry = getOrCreateStore(storageKey);
  entry.listeners.forEach((l) => l());
}

function persist(storageKey: string, value: Record<string, boolean>) {
  const entry = getOrCreateStore(storageKey);
  entry.value = value;
  try {
    localStorage.setItem(storageKey, JSON.stringify(value));
  } catch {
    /* ignore */
  }
  emit(storageKey);
}

export function StepChecklist({ storageKey, items }: { storageKey: string; items: Item[] }) {
  const done = useSyncExternalStore(
    (onChange) => subscribe(storageKey, onChange),
    () => getSnapshot(storageKey),
    getServerSnapshot,
  );

  const toggle = useCallback(
    (id: string) => {
      const next = { ...done, [id]: !done[id] };
      persist(storageKey, next);
    },
    [done, storageKey],
  );

  const total = items.length;
  const count = useMemo(() => items.filter((i) => done[i.id]).length, [done, items]);

  return (
    <div className="mt-3 rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-200">
        Progress {count}/{total}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i.id}>
            <label className="flex cursor-pointer gap-3 text-sm text-zinc-800 dark:text-zinc-200">
              <input
                type="checkbox"
                checked={!!done[i.id]}
                onChange={() => toggle(i.id)}
                className="mt-1 h-4 w-4 rounded border-zinc-400 text-emerald-600 focus:ring-emerald-500"
              />
              <span className={done[i.id] ? "text-zinc-500 line-through dark:text-zinc-500" : ""}>{i.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
