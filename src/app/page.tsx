/*
 * Event House — public landing page.
 * Scroll-pinned product showcase (Nodestar-style): sticky viewport with
 * six app-screen placeholders that crossfade as the user scrolls.
 * Real screenshots can replace the numbered solid-color panels later.
 */
import { ScrollShowcase } from "@/components/scroll-showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <div className="relative bg-ink">
      <SiteNav />
      <ScrollShowcase />
      <SiteFooter />
    </div>
  );
}
