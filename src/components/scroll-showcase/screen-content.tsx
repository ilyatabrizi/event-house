"use client";

import type { ShowcaseFrame } from "@/components/scroll-showcase/frames";

export function ScreenContent({ frame }: { frame: ShowcaseFrame }) {
  return (
    <>
      <span
        className="font-mono text-[11px] tracking-[0.22em] uppercase"
        style={{ color: `${frame.accent}99` }}
      >
        Screen
      </span>
      <span
        className="mt-3 text-[72px] font-semibold leading-none tracking-[-0.04em] text-bone/95"
        style={{ textShadow: `0 0 60px ${frame.accent}33` }}
      >
        {String(frame.id).padStart(2, "0")}
      </span>
      <span className="mt-4 text-sm font-medium tracking-[0.08em] text-bone/45 uppercase">
        {frame.label}
      </span>
      <div className="absolute inset-x-6 bottom-16 space-y-2" aria-hidden="true">
        <div
          className="h-2 w-[40%] rounded-full opacity-30"
          style={{ backgroundColor: frame.accent }}
        />
        <div className="h-2 w-[80%] rounded-full bg-bone/10" />
        <div className="h-2 w-[60%] rounded-full bg-bone/10" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="aspect-[4/3] rounded-xl bg-bone/[0.06]" />
          <div className="aspect-[4/3] rounded-xl bg-bone/[0.06]" />
        </div>
      </div>
    </>
  );
}
