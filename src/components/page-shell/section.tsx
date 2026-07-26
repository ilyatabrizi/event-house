import type { ReactNode } from "react";
import { Container } from "@/components/page-shell/container";

export function Section({
  id,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
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
