"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import {
  FRAMES,
  type ShowcaseFrame,
} from "@/components/scroll-showcase/frames";

export function KineticWordLayer({
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
    return (1 - dist) * 0.14;
  });
  const visibility = useTransform(progress, (p) =>
    Math.abs(p * (FRAMES.length - 1) - index) >= 1 ? "hidden" : "visible",
  );
  const x = useTransform(progress, (p) => {
    const pos = p * (FRAMES.length - 1);
    return (index - pos) * 220 + (index % 2 === 0 ? -40 : 40);
  });

  return (
    <motion.span
      className="absolute left-1/2 top-[18%] w-max -translate-x-1/2 select-none whitespace-nowrap text-[clamp(48px,13vw,13vw)] font-bold uppercase leading-none tracking-[-0.02em] lg:top-auto"
      style={{
        opacity,
        visibility,
        x,
        color: "transparent",
        WebkitTextStroke: `1px ${frame.spark}`,
      }}
    >
      {frame.label}
    </motion.span>
  );
}
