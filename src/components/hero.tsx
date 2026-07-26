"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ShowcaseCtas } from "@/components/scroll-showcase/showcase-ctas";
import { BRAND_TAGLINE } from "@/lib/brand";

export function Hero() {
  const reduceMotion = useReducedMotion();

  /* Load sequence (§8): each block fades in and rises 8px, 60ms apart,
   * 400ms ease-out. Instant under prefers-reduced-motion. */
  const rise = (step: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion
      ? { duration: 0 }
      : { duration: 0.4, delay: step * 0.06, ease: "easeOut" as const },
  });

  return (
    <div className="flex flex-col items-center text-center">
      <motion.p
        {...rise(0)}
        className="font-mono text-[11px] tracking-[0.14em] text-ash"
      >
        EVENT HOUSE — iOS
      </motion.p>

      <motion.h1
        {...rise(1)}
        className="mt-5 text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-bone sm:text-[56px] md:text-[72px] lg:text-[clamp(72px,7.5vw,96px)]"
      >
        {BRAND_TAGLINE}
      </motion.h1>

      <motion.p
        {...rise(2)}
        className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-bone/75"
      >
        Discover what&apos;s happening near you, host your own events, and keep
        a record of every night worth remembering — all from your phone.
      </motion.p>

      <motion.div {...rise(3)} className="mt-10">
        <ShowcaseCtas />
      </motion.div>

      <motion.p
        {...rise(4)}
        className="mt-4 font-mono text-[11px] tracking-[0.06em] text-ash"
      >
        v1.0.0<span className="mx-2">·</span>iOS 17+
        <span className="mx-2">·</span>TestFlight available
      </motion.p>

      <motion.div {...rise(5)} className="mt-6">
        {/* Announcement pill — its 1px Ember inner glow is a permitted UI
         * use of Ember (§5.1.1) */}
        <Link
          id="eh-announcement"
          href="/company"
          className="group inline-flex h-8 items-center rounded-full border border-bone/20 px-4 shadow-[inset_0_0_0_1px_rgba(255,91,61,0.18)]"
        >
          <span className="text-xs font-medium text-bone">
            Introducing wentoevent
          </span>
          <span aria-hidden="true" className="mx-3 h-3 w-px bg-ash/40" />
          <span className="text-xs font-medium text-ash transition-colors duration-150 group-hover:text-bone">
            Read our story →
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
