import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

/* Shared chrome for every interior (non-landing) page: a solid nav, a
 * centered content column, and the shared footer. Keeps all pages visually
 * consistent with the Ember Nightfall system. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <SiteNav variant="solid" />
      <main className="relative z-10 flex-1">{children}</main>
      <SiteFooter />
      <div className="grain z-[1]" aria-hidden="true" />
    </div>
  );
}
