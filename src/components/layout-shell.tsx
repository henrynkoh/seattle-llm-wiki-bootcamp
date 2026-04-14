"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <SiteFooter />
    </>
  );
}
