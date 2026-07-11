import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

/* Shared chrome for every interior (non-landing) page: a solid nav, a
 * centered content column, and the shared footer. Keeps all pages visually
 * consistent with the Ember Nightfall system (Ink bg, Bone text, Ash muted;
 * Ember reserved for the few permitted UI uses only). */
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

/* Standard container width, matching the nav/footer. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-6 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

/* Page header: mono eyebrow, large headline, muted lede. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <Container className="pt-20 md:pt-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-[720px] text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-bone sm:text-[56px] md:text-[64px]">
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-[600px] text-[17px] leading-relaxed text-bone/75">
          {lede}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </Container>
  );
}

/* A titled content band. */
export function Section({
  title,
  intro,
  children,
  className = "",
}: {
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <Container>
        {title && (
          <h2 className="max-w-[640px] text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            {title}
          </h2>
        )}
        {intro && (
          <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed text-bone/70">
            {intro}
          </p>
        )}
        <div className={title || intro ? "mt-10" : ""}>{children}</div>
      </Container>
    </section>
  );
}

/* A bordered card used across feature grids, pricing, changelog, etc. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-ash/15 bg-bone/[0.02] p-6 transition-colors duration-200 hover:border-ash/30 ${className}`}
    >
      {children}
    </div>
  );
}

/* Responsive grid for feature/value cards. */
export function Grid({
  children,
  cols = 3,
}: {
  children: ReactNode;
  cols?: 2 | 3;
}) {
  const colClass =
    cols === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";
  return <div className={`grid grid-cols-1 gap-4 ${colClass}`}>{children}</div>;
}

/* A single feature: small title + supporting copy. */
export function Feature({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <h3 className="text-[16px] font-semibold text-bone">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-bone/65">{children}</p>
    </Card>
  );
}
