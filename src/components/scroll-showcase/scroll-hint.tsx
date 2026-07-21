"use client";

import { motion, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function ScrollHint({
  opacity,
  direction = "vertical",
  label,
  className,
}: {
  opacity: MotionValue<number> | number;
  direction?: "vertical" | "horizontal";
  label?: string;
  className?: string;
}) {
  const horizontal = direction === "horizontal";
  const text = label ?? (horizontal ? "SWIPE" : "SCROLL");
  const isMotionValue = typeof opacity !== "number";

  return (
    <motion.div
      className={cn(
        "pointer-events-none z-20 flex items-center gap-2",
        horizontal
          ? "absolute top-[42%] right-5"
          : "absolute bottom-5 left-1/2 -translate-x-1/2 flex-col",
        className,
      )}
      {...(isMotionValue
        ? { style: { opacity } }
        : {
            initial: false,
            animate: { opacity },
            transition: { duration: 0.35, ease: "easeOut" },
          })}
      aria-hidden="true"
    >
      <span className="font-mono text-[10px] tracking-[0.2em] text-ash/80">
        {text}
      </span>
      <span
        className={
          horizontal
            ? "eh-scroll-line block h-px w-8 bg-gradient-to-r from-ember/70 to-transparent"
            : "eh-scroll-line block h-8 w-px bg-gradient-to-b from-ember/70 to-transparent"
        }
      />
    </motion.div>
  );
}
