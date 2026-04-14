"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname === "/";

  return (
    <>
      {!hideChrome && <SiteHeader />}
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      {!hideChrome && <SiteFooter />}
    </>
  );
}
