"use client";

import type { MotionValue } from "framer-motion";
import { AtmosphereLayer } from "@/components/scroll-showcase/atmosphere-layer";
import { FRAMES } from "@/components/scroll-showcase/frames";

/* Scroll-synced aurora mesh — each frame’s wash crossfades with the phone screen. */
export function LuxuryAtmosphere({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-ink" />
      {FRAMES.map((frame, i) => (
        <AtmosphereLayer
          key={frame.id}
          frame={frame}
          index={i}
          progress={progress}
        />
      ))}
      <div className="eh-stage-beam absolute inset-x-0 top-0 h-[55%]" />
      <div className="eh-horizon absolute inset-x-0 bottom-0 h-[45%]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 45%, transparent 35%, rgba(14,11,16,0.55) 100%)",
        }}
      />
    </div>
  );
}
