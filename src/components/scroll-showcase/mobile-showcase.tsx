"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChapterRail } from "@/components/scroll-showcase/chapter-rail";
import { FRAMES } from "@/components/scroll-showcase/frames";
import { KineticWord } from "@/components/scroll-showcase/kinetic-word";
import { LuxuryAtmosphere } from "@/components/scroll-showcase/luxury-atmosphere";
import { ParticleField } from "@/components/scroll-showcase/particle-field";
import { PhoneFrame } from "@/components/scroll-showcase/phone-frame";
import { ScrollHint } from "@/components/scroll-showcase/scroll-hint";
import { ShowcaseCopy } from "@/components/scroll-showcase/showcase-copy";

export function MobileShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const rawProgress = useMotionValue(0);

  const smoothProgress = useSpring(rawProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
  });

  const hintOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    function onScroll() {
      const node = scrollerRef.current;
      if (!node) return;
      const max = node.scrollWidth - node.clientWidth;
      rawProgress.set(max > 0 ? node.scrollLeft / max : 0);
    }

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [rawProgress]);

  useMotionValueEvent(smoothProgress, "change", (p) => {
    const next = Math.round(
      Math.min(FRAMES.length - 1, Math.max(0, p * (FRAMES.length - 1))),
    );
    setActive((prev) => (prev === next ? prev : next));
  });

  function scrollToFrame(i: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }

  return (
    <section
      className="relative flex h-svh flex-col overflow-hidden bg-ink"
      aria-label="Product showcase"
    >
      <LuxuryAtmosphere progress={smoothProgress} />
      <KineticWord progress={smoothProgress} />
      <ParticleField />
      <div className="grain absolute inset-0 z-[1]" aria-hidden="true" />

      <div
        ref={scrollerRef}
        className="relative z-10 flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FRAMES.map((frame, i) => (
          <div
            key={frame.id}
            className="flex h-full w-full shrink-0 snap-center flex-col px-5 pt-16 sm:px-8 sm:pt-20"
          >
            <ShowcaseCopy active={i} compact />
            <div className="flex min-h-0 flex-1 items-end justify-center pb-1 sm:items-center sm:pb-0">
              <motion.div
                className="w-[min(220px,58vw)] sm:w-[280px]"
                initial={false}
                animate={{
                  opacity: i === active ? 1 : 0.45,
                  scale: i === active ? 1 : 0.94,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <PhoneFrame activeIndex={i} />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-20 flex shrink-0 justify-center px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2">
        <ChapterRail
          active={active}
          onSelect={scrollToFrame}
          orientation="horizontal"
        />
      </div>

      <ScrollHint opacity={hintOpacity} direction="horizontal" />
    </section>
  );
}
