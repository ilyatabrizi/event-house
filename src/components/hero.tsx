"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AppleGlyph } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { WaitlistCta } from "@/components/waitlist-cta";
import { cn } from "@/lib/utils";

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
        The city has plans tonight.
      </motion.h1>

      <motion.p
        {...rise(2)}
        className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-bone/75"
      >
        Discover events near you, host your own, and keep a record of every
        good night — all from your phone.
      </motion.p>

      <motion.div
        {...rise(3)}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        {/* A real link styled via shadcn buttonVariants — keeps native link
         * semantics (no forced role="button") for screen readers. */}
        <a
          id="eh-cta-ios"
          href="#"
          className={cn(
            buttonVariants(),
            "h-11 gap-2 rounded-full border-transparent bg-bone px-5 text-sm font-medium text-ink transition-transform duration-200 ease-out hover:bg-bone focus-visible:border-transparent focus-visible:ring-0 motion-safe:hover:scale-[1.02]",
          )}
        >
          {/* Apple glyph stays Ink on Bone — never tinted Ember (§5.1.1) */}
          <AppleGlyph className="size-4" />
          Download for iOS
        </a>
        <WaitlistCta />
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
        <a
          id="eh-announcement"
          href="#"
          className="group inline-flex h-8 items-center rounded-full border border-bone/20 px-4 shadow-[inset_0_0_0_1px_rgba(255,91,61,0.18)]"
        >
          <span className="text-xs font-medium text-bone">
            Introducing Event House
          </span>
          <span aria-hidden="true" className="mx-3 h-3 w-px bg-ash/40" />
          <span className="text-xs font-medium text-ash transition-colors duration-150 group-hover:text-bone">
            Read the story →
          </span>
        </a>
      </motion.div>
    </div>
  );
}
