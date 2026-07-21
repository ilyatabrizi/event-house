import { ShowcaseCtas } from "@/components/scroll-showcase/showcase-ctas";

export function ClosingCta() {
  return (
    <section
      className="relative border-t border-bone/10 bg-ink px-6 py-16 md:px-8 lg:px-12 lg:py-24"
      aria-label="Download"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        <p className="font-mono text-[11px] tracking-[0.16em] text-ash">
          EVENT HOUSE
        </p>
        <h2 className="max-w-xl text-balance text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-bone sm:text-[40px]">
          Ready for tonight?
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-bone/65 sm:text-[17px]">
          Download the app and see what&apos;s on near you.
        </p>
        <ShowcaseCtas className="mt-2" />
      </div>
    </section>
  );
}
