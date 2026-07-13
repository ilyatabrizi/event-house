"use client";

import { motion, type MotionValue } from "framer-motion";

export function ScrollHint({ opacity }: { opacity: MotionValue<number> }) {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      style={{ opacity }}
      aria-hidden="true"
    >
      <span className="font-mono text-[10px] tracking-[0.2em] text-ash/80">
        SCROLL
      </span>
      <span className="eh-scroll-line block h-8 w-px bg-gradient-to-b from-ember/70 to-transparent" />
    </motion.div>
  );
}
