"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { AtmosphereStatic } from "@/components/scroll-showcase/atmosphere-static";
import { ChapterRail } from "@/components/scroll-showcase/chapter-rail";
import { FRAMES } from "@/components/scroll-showcase/frames";
import { KineticWord } from "@/components/scroll-showcase/kinetic-word";
import { LuxuryAtmosphere } from "@/components/scroll-showcase/luxury-atmosphere";
import { ParticleField } from "@/components/scroll-showcase/particle-field";
import { PhoneFrame } from "@/components/scroll-showcase/phone-frame";
import { ScrollHint } from "@/components/scroll-showcase/scroll-hint";
import { ShowcaseCopy } from "@/components/scroll-showcase/showcase-copy";
import { StaticIntro } from "@/components/scroll-showcase/static-intro";

export function ScrollShowcase() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.4,
  });

  const phoneY = useTransform(smoothProgress, [0, 1], [28, -28]);
  const phoneRotateY = useTransform(
    smoothProgress,
    (p) => -12 + Math.sin(p * Math.PI * 2.4) * 8,
  );
  const phoneRotateX = useTransform(
    smoothProgress,
    (p) => 4 + Math.sin(p * Math.PI * 1.6) * 3,
  );
  const hintOpacity = useTransform(smoothProgress, [0, 0.06], [1, 0]);

  useMotionValueEvent(smoothProgress, "change", (p) => {
    const next = Math.round(
      Math.min(FRAMES.length - 1, Math.max(0, p * (FRAMES.length - 1))),
    );
    setActive((prev) => (prev === next ? prev : next));
  });

  function scrollToFrame(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const top = window.scrollY + track.getBoundingClientRect().top;
    const scrollable = track.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + (i / (FRAMES.length - 1)) * scrollable,
      behavior: "smooth",
    });
  }

  if (reduceMotion) {
    return (
      <section className="relative overflow-hidden bg-ink">
        <AtmosphereStatic frame={FRAMES[0]} />
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-16 px-6 pb-24 pt-36 md:px-8 lg:px-12">
          <StaticIntro frame={FRAMES[0]} />
          <div className="w-[min(280px,72vw)] sm:w-[300px]">
            <PhoneFrame activeIndex={0} />
          </div>
          <ul className="grid w-full max-w-md gap-3">
            {FRAMES.map((frame) => (
              <li
                key={frame.id}
                className="flex h-24 items-center justify-center rounded-2xl text-2xl font-semibold tracking-tight text-bone/90"
                style={{ backgroundColor: frame.color }}
              >
                {String(frame.id).padStart(2, "0")}
                <span className="ml-3 text-sm font-medium tracking-[0.12em] text-bone/50 uppercase">
                  {frame.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      className="relative"
      style={{ height: `${FRAMES.length * 100}vh` }}
      aria-label="Product showcase"
    >
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden bg-ink">
        <LuxuryAtmosphere progress={smoothProgress} />
        <KineticWord progress={smoothProgress} />
        <ParticleField />
        <div className="grain absolute inset-0 z-[1]" aria-hidden="true" />
        <ChapterRail active={active} onSelect={scrollToFrame} />
        <ScrollHint opacity={hintOpacity} />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col px-6 pt-24 pb-6 max-sm:justify-between md:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:pt-24 lg:pb-12">
          <ShowcaseCopy active={active} onSelectFrame={scrollToFrame} />

          <div
            className="relative flex min-h-0 flex-1 items-end justify-center max-sm:mt-4 lg:mt-0 lg:items-center lg:justify-end"
            style={{ perspective: 1600 }}
          >
            <motion.div
              className="w-[min(220px,58vw)] sm:w-[280px] lg:w-[340px]"
              style={{
                y: phoneY,
                rotateY: phoneRotateY,
                rotateX: phoneRotateX,
                transformStyle: "preserve-3d",
              }}
            >
              <PhoneFrame activeIndex={active} progress={smoothProgress} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
