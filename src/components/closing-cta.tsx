import { ShowcaseCtas } from "@/components/scroll-showcase/showcase-ctas";
import { BRAND_TAGLINE } from "@/lib/brand";

export function ClosingCta() {
  return (
    <section
      className="relative border-t border-bone/10 bg-ink px-6 py-16 md:px-8 lg:px-12 lg:py-24"
      aria-label="Join the waitlist"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        <p className="font-mono text-[11px] tracking-[0.16em] text-ash">
          EVENT HOUSE
        </p>
        <h2 className="max-w-2xl text-balance text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-bone sm:text-[40px]">
          {BRAND_TAGLINE}
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-bone/65 sm:text-[17px]">
          Waitlist members in Dubai get early access and two months of Premium
          free when we launch.
        </p>
        <ShowcaseCtas className="mt-2" />
      </div>
    </section>
  );
}
