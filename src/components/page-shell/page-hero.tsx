import type { ReactNode } from "react";
import { Container } from "@/components/page-shell/container";

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
