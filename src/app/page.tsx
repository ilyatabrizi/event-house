/*
 * Event House — public landing page (hero-only, single viewport).
 * Built: 2026-07-11
 * Layout: A (stacked, §6.2) — hero copy centered in the upper viewport, the
 * 3D phone rising into view from the bottom edge. Headline: Option A.
 * See #eh-phone-slot (src/components/phone/phone-slot.tsx) for the swappable
 * phone interior.
 *
 * Documented stack deviations from the static-HTML brief, per client request:
 *   - Next.js 16 (App Router, TypeScript) + Tailwind v4 + shadcn/ui + Framer
 *     Motion, scaffolded with create-next-app, instead of a single index.html.
 *   - Fonts load via next/font/google (self-hosted, display=swap) instead of
 *     a Google Fonts <link> tag — the React/Next best practice.
 *   - The Android waitlist CTA morphs inline into an email field and POSTs to
 *     /api/waitlist (Next.js Route Handler). Storage: Supabase when env keys
 *     are present, otherwise an internal file-backed JSON store
 *     (.data/waitlist.json) so the local preview works with zero setup.
 *   - The static-build budgets (15KB CSS / 2KB JS) don't map to a framework
 *     build and are superseded by the stack choice.
 */
import { Aurora } from "@/components/aurora";
import { FadeIn } from "@/components/fade-in";
import { Hero } from "@/components/hero";
import { PhoneMockup } from "@/components/phone/phone-mockup";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative flex flex-col overflow-hidden sm:min-h-svh">
        {/* Stacking order (§6.1): aurora → grain → phone → hero content */}
        <Aurora />
        <SiteNav />

        <main className="relative z-10 flex flex-col items-center px-6 pt-[25vh] max-sm:pt-36 md:px-8 lg:px-12">
          <Hero />
        </main>

        {/* Decorative product anchor — copy carries the information (§10) */}
        <div
          id="eh-phone-wrap"
          aria-hidden="true"
          className="relative z-[5] mx-auto mt-16 w-[min(300px,80vw)] md:w-[340px] lg:w-[380px]"
        >
          <FadeIn delay={0.36}>
            <PhoneMockup />
          </FadeIn>
        </div>
      </section>

      <footer className="relative z-10 w-full">
        {/* 96px below the phone's visible bottom edge (§7.8) */}
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 pb-10 pt-24 text-xs text-ash md:px-8 lg:px-12">
          <p>© 2026 Event House. A Lifestyle product.</p>
          <p>
            <a
              href="#"
              className="transition-colors duration-150 hover:text-bone"
            >
              Privacy
            </a>
            <span className="mx-2">·</span>
            <a
              href="#"
              className="transition-colors duration-150 hover:text-bone"
            >
              Terms
            </a>
            <span className="mx-2">·</span>
            <a
              href="#"
              className="transition-colors duration-150 hover:text-bone"
            >
              Contact
            </a>
          </p>
        </div>
      </footer>

      {/* Faint full-page grain (§6.1 layer 3) — sits under content (z-10)
       * and the phone (z-[5]), over the aurora. */}
      <div className="grain z-[1]" aria-hidden="true" />
    </div>
  );
}
