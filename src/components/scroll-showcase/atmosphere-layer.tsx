"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { AtmosphereOrbs } from "@/components/scroll-showcase/atmosphere-orbs";
import {
  FRAMES,
  type ShowcaseFrame,
} from "@/components/scroll-showcase/frames";

export function AtmosphereLayer({
  frame,
  index,
  progress,
}: {
  frame: ShowcaseFrame;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (p) => {
    const pos = p * (FRAMES.length - 1);
    const dist = Math.abs(pos - index);
    if (dist >= 1) return 0;
    return 1 - dist;
  });
  /* Fully hide off-screen layers so their paint + drift animations stop. */
  const visibility = useTransform(progress, (p) =>
    Math.abs(p * (FRAMES.length - 1) - index) >= 1 ? "hidden" : "visible",
  );

  return (
    <motion.div className="absolute inset-0" style={{ opacity, visibility }}>
      <AtmosphereOrbs frame={frame} animate />
    </motion.div>
  );
}
