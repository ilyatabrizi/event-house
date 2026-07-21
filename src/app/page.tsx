/*
 * Event House — public landing page.
 * Scroll-pinned product showcase (Nodestar-style): sticky viewport with
 * six app screens that crossfade as the user scrolls.
 */
import { ClosingCta } from "@/components/closing-cta";
import { ScrollShowcase } from "@/components/scroll-showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <div className="relative bg-ink">
      <SiteNav />
      <ScrollShowcase />
      <ClosingCta />
      <SiteFooter />
    </div>
  );
}
