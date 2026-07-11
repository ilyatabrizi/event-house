"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Load-sequence primitive (§8): fade in and rise 8px over 400ms ease-out.
 * Under prefers-reduced-motion the animation is instant. */
export function FadeIn({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.4, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}
