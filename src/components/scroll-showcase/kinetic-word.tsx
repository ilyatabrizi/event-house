"use client";

import type { MotionValue } from "framer-motion";
import { FRAMES } from "@/components/scroll-showcase/frames";
import { KineticWordLayer } from "@/components/scroll-showcase/kinetic-word-layer";

export function KineticWord({ progress }: { progress: MotionValue<number> }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] flex items-center overflow-hidden"
      aria-hidden="true"
    >
      {FRAMES.map((frame, i) => (
        <KineticWordLayer
          key={frame.id}
          frame={frame}
          index={i}
          progress={progress}
        />
      ))}
    </div>
  );
}
