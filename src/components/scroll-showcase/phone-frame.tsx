"use client";

import type { MotionValue } from "framer-motion";
import {
  FRAMES,
  PHONE_HARDWARE,
} from "@/components/scroll-showcase/frames";
import { ScreenContent } from "@/components/scroll-showcase/screen-content";
import { ScreenLayer } from "@/components/scroll-showcase/screen-layer";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  activeIndex,
  progress,
}: {
  activeIndex: number;
  progress?: MotionValue<number>;
}) {
  const accent = FRAMES[activeIndex]?.glow ?? "#FF5B3D";

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[48px] sm:-inset-12 sm:rounded-[64px] lg:rounded-[72px]"
        style={{
          background: `radial-gradient(circle at 50% 42%, ${accent}26 0%, ${accent}10 40%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[28px] shadow-[0_40px_80px_rgba(0,0,0,0.5)] sm:rounded-[40px] lg:rounded-[52px]"
      />
      <div className="relative aspect-[380/780] w-full rounded-[28px] bg-[linear-gradient(155deg,#4a4a4e,#1a1a1e)] p-[2px] shadow-[inset_0_0_0_1px_rgba(242,238,231,0.06)] sm:rounded-[40px] sm:p-[3px] lg:rounded-[52px]">
        <div
          className={`absolute -left-[2px] top-[17%] h-[3.5%] rounded-l-[2px] ${PHONE_HARDWARE}`}
        />
        <div
          className={`absolute -left-[2px] top-[24%] h-[6%] rounded-l-[2px] ${PHONE_HARDWARE}`}
        />
        <div
          className={`absolute -left-[2px] top-[31.5%] h-[6%] rounded-l-[2px] ${PHONE_HARDWARE}`}
        />
        <div
          className={`absolute -right-[2px] top-[25%] h-[9%] rounded-r-[2px] ${PHONE_HARDWARE}`}
        />
        <div
          className={`absolute -right-[2px] top-[66%] h-[4.5%] rounded-r-[2px] ${PHONE_HARDWARE}`}
        />

        <div className="h-full w-full rounded-[26px] bg-[#050508] p-[4px] sm:rounded-[37px] sm:p-[5px] lg:rounded-[49px] lg:p-[6px]">
          <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-ink sm:rounded-[32px] lg:rounded-[42px]">
            <div className="absolute inset-0">
              {FRAMES.map((frame, i) =>
                progress ? (
                  <ScreenLayer
                    key={frame.id}
                    frame={frame}
                    index={i}
                    progress={progress}
                  />
                ) : (
                  <div
                    key={frame.id}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      i === activeIndex ? "opacity-100" : "opacity-0",
                    )}
                    style={{ backgroundColor: frame.color }}
                    aria-hidden={i !== activeIndex}
                  >
                    <ScreenContent frame={frame} />
                  </div>
                ),
              )}
            </div>

            <div
              key={activeIndex}
              aria-hidden="true"
              className="eh-screen-sweep absolute inset-0 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
