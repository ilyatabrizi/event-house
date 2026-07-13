"use client";

import Link from "next/link";
import { AppleGlyph } from "@/components/icons";
import type { ShowcaseFrame } from "@/components/scroll-showcase/frames";
import { buttonVariants } from "@/components/ui/button";
import { WaitlistCta } from "@/components/waitlist-cta";
import { cn } from "@/lib/utils";

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
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/download"
          className={cn(
            buttonVariants(),
            "h-11 cursor-pointer gap-2 rounded-full border-transparent bg-bone px-5 text-sm font-medium text-ink",
          )}
        >
          <AppleGlyph className="size-4" />
          Download for iOS
        </Link>
        <WaitlistCta />
      </div>
    </div>
  );
}
