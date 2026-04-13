import Link from "next/link";
import { GRAPHIFY_REPO, SOURCE_VIDEO_URL, SITE } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50 py-10 text-sm text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">{SITE.name}</p>
          <p className="mt-2 max-w-md">{SITE.description}</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">Primary references</p>
          <ul className="space-y-1">
            <li>
              <Link className="text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300" href={SOURCE_VIDEO_URL}>
                Source workshop video (YouTube)
              </Link>
            </li>
            <li>
              <Link className="text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300" href={GRAPHIFY_REPO}>
                Graphify open-source repository
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
