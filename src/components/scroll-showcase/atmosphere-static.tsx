"use client";

import { AtmosphereOrbs } from "@/components/scroll-showcase/atmosphere-orbs";
import type { ShowcaseFrame } from "@/components/scroll-showcase/frames";

export function AtmosphereStatic({ frame }: { frame: ShowcaseFrame }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0">
        <AtmosphereOrbs frame={frame} animate={false} />
      </div>
      <div className="eh-stage-beam absolute inset-x-0 top-0 h-[55%]" />
      <div className="eh-horizon absolute inset-x-0 bottom-0 h-[45%]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 45%, transparent 35%, rgba(14,11,16,0.55) 100%)",
        }}
      />
      <div className="grain absolute inset-0" />
    </div>
  );
}
