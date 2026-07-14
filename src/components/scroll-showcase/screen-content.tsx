"use client";

import type { ShowcaseFrame } from "@/components/scroll-showcase/frames";

export function ScreenContent({ frame }: { frame: ShowcaseFrame }) {
  return (
    <>
      <span
        className="font-mono text-[9px] tracking-[0.22em] uppercase sm:text-[11px]"
        style={{ color: `${frame.accent}99` }}
      >
        Screen
      </span>
      <span
        className="mt-2 text-[40px] font-semibold leading-none tracking-[-0.04em] text-bone/95 sm:mt-3 sm:text-[56px] lg:text-[72px]"
        style={{ textShadow: `0 0 60px ${frame.accent}33` }}
      >
        {String(frame.id).padStart(2, "0")}
      </span>
      <span className="mt-2 text-[10px] font-medium tracking-[0.08em] text-bone/45 uppercase sm:mt-4 sm:text-sm">
        {frame.label}
      </span>
      <div className="absolute inset-x-4 bottom-10 space-y-1.5 sm:inset-x-6 sm:bottom-16 sm:space-y-2" aria-hidden="true">
        <div
          className="h-1.5 w-[40%] rounded-full opacity-30 sm:h-2"
          style={{ backgroundColor: frame.accent }}
        />
        <div className="h-1.5 w-[80%] rounded-full bg-bone/10 sm:h-2" />
        <div className="h-1.5 w-[60%] rounded-full bg-bone/10 sm:h-2" />
        <div className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-2">
          <div className="aspect-[4/3] rounded-lg bg-bone/[0.06] sm:rounded-xl" />
          <div className="aspect-[4/3] rounded-lg bg-bone/[0.06] sm:rounded-xl" />
        </div>
      </div>
    </>
  );
}
