"use client";

import type { MotionValue } from "framer-motion";
import { BatteryGlyph, SignalGlyph, WifiGlyph } from "@/components/icons";
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
        className="absolute -inset-12 rounded-[72px]"
        style={{
          background: `radial-gradient(circle at 50% 42%, ${accent}26 0%, ${accent}10 40%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[52px] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
      />
      <div className="relative aspect-[380/780] w-full rounded-[52px] bg-[linear-gradient(155deg,#4a4a4e,#1a1a1e)] p-[3px] shadow-[inset_0_0_0_1px_rgba(242,238,231,0.06)]">
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

        <div className="h-full w-full rounded-[49px] bg-[#050508] p-[6px]">
          <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-ink">
            <div className="absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between px-7">
              <span className="text-[15px] font-semibold text-bone">9:41</span>
              <span className="flex items-center gap-1.5 text-bone">
                <SignalGlyph className="h-[10px] w-auto" />
                <WifiGlyph className="h-[10px] w-auto" />
                <BatteryGlyph className="h-[11px] w-auto" />
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-3 z-20 h-[32px] w-[112px] -translate-x-1/2 rounded-full bg-[#050508]"
            />

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
                      "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500",
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

            <div
              aria-hidden="true"
              className="absolute bottom-2 left-1/2 z-20 h-[5px] w-[130px] -translate-x-1/2 rounded-full bg-bone/90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
