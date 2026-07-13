"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import {
  FRAMES,
  type ShowcaseFrame,
} from "@/components/scroll-showcase/frames";
import { ScreenContent } from "@/components/scroll-showcase/screen-content";

export function ScreenLayer({
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
  const visibility = useTransform(progress, (p) =>
    Math.abs(p * (FRAMES.length - 1) - index) >= 1 ? "hidden" : "visible",
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ backgroundColor: frame.color, opacity, visibility }}
    >
      <ScreenContent frame={frame} />
    </motion.div>
  );
}
