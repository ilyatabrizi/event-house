"use client";

import { useReducedMotion } from "framer-motion";
import { AtmosphereStatic } from "@/components/scroll-showcase/atmosphere-static";
import { DesktopShowcase } from "@/components/scroll-showcase/desktop-showcase";
import { FRAMES } from "@/components/scroll-showcase/frames";
import { MobileShowcase } from "@/components/scroll-showcase/mobile-showcase";
import { PhoneFrame } from "@/components/scroll-showcase/phone-frame";
import { StaticIntro } from "@/components/scroll-showcase/static-intro";
import { useLgUp } from "@/components/scroll-showcase/use-lg-up";

export function ScrollShowcase() {
  const reduceMotion = useReducedMotion();
  const lgUp = useLgUp();

  if (reduceMotion) {
    return (
      <section className="relative overflow-hidden bg-ink">
        <AtmosphereStatic frame={FRAMES[0]} />
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-6 pb-24 pt-36 md:px-8 lg:px-12">
          <StaticIntro frame={FRAMES[0]} />
          <div className="w-[min(200px,52vw)] sm:w-[280px] lg:w-[300px]">
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

  return lgUp ? <DesktopShowcase /> : <MobileShowcase />;
}
