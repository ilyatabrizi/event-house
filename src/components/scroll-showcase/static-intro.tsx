"use client";

import type { ShowcaseFrame } from "@/components/scroll-showcase/frames";
import { ShowcaseCtas } from "@/components/scroll-showcase/showcase-ctas";

export function StaticIntro({ frame }: { frame: ShowcaseFrame }) {
  return (
    <div className="flex max-w-xl flex-col items-center text-center">
      <p className="font-mono text-[11px] tracking-[0.16em] text-ash">
        EVENT HOUSE
      </p>
      <h1 className="mt-5 text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-bone sm:text-[56px]">
        {frame.title}
      </h1>
      <p className="mt-5 text-[17px] leading-relaxed text-bone/70">{frame.copy}</p>
      <ShowcaseCtas className="mt-10" />
    </div>
  );
}
