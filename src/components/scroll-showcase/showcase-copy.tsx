"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppleGlyph } from "@/components/icons";
import { FRAMES } from "@/components/scroll-showcase/frames";
import { buttonVariants } from "@/components/ui/button";
import { WaitlistCta } from "@/components/waitlist-cta";
import { cn } from "@/lib/utils";

export function ShowcaseCopy({
  active,
  onSelectFrame,
}: {
  active: number;
  onSelectFrame: (index: number) => void;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left">
      <p className="font-mono text-[11px] tracking-[0.16em] text-ash">
        EVENT HOUSE
        <span className="mx-2 text-ash/40">·</span>
        <span className="text-bone/70">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(FRAMES.length).padStart(2, "0")}
        </span>
      </p>

      <div className="relative mt-4 grid w-full max-w-xl sm:mt-6">
        {FRAMES.map((frame, i) => (
          <motion.div
            key={frame.id}
            className="col-start-1 row-start-1 flex flex-col items-center lg:items-start"
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            aria-hidden={i !== active}
            style={{ pointerEvents: i === active ? "auto" : "none" }}
          >
            <motion.p
              initial={false}
              animate={{
                opacity: i === active ? 1 : 0,
                y: i === active ? 0 : 10,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[11px] tracking-[0.18em] text-ember/80 uppercase"
            >
              {frame.label}
            </motion.p>
            <h1 className="mt-2 text-balance text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-bone sm:mt-3 sm:text-[48px] lg:text-[clamp(48px,4.8vw,64px)]">
              {frame.title.split(" ").map((word, w) => (
                <span
                  key={w}
                  className="inline-block overflow-hidden pb-[0.08em] align-bottom"
                >
                  <motion.span
                    className="inline-block"
                    initial={false}
                    animate={{
                      y: i === active ? 0 : "110%",
                      opacity: i === active ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: i === active ? 0.05 + w * 0.055 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                  {w < frame.title.split(" ").length - 1 && "\u00A0"}
                </span>
              ))}
            </h1>
            <motion.p
              initial={false}
              animate={{
                opacity: i === active ? 1 : 0,
                y: i === active ? 0 : 12,
              }}
              transition={{
                duration: 0.5,
                delay: i === active ? 0.18 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3 max-w-[420px] text-[15px] leading-relaxed text-bone/65 sm:mt-4 sm:text-[17px]"
            >
              {frame.copy}
            </motion.p>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
        <Link
          id="eh-cta-ios"
          href="/download"
          className={cn(
            buttonVariants(),
            "h-11 cursor-pointer gap-2 rounded-full border-transparent bg-bone px-5 text-sm font-medium text-ink transition-colors duration-200 ease-out hover:bg-bone focus-visible:border-transparent focus-visible:ring-0",
          )}
        >
          <AppleGlyph className="size-4" />
          Download for iOS
        </Link>
        <WaitlistCta />
      </div>

      <div
        className="mt-6 flex items-center gap-2 sm:mt-10"
        role="group"
        aria-label="Showcase progress"
      >
        {FRAMES.map((frame, i) => (
          <button
            key={frame.id}
            onClick={() => onSelectFrame(i)}
            aria-label={`Go to ${frame.label}`}
            aria-current={i === active ? "step" : undefined}
            className={cn(
              "h-[3px] cursor-pointer rounded-full transition-all duration-300 ease-out",
              i === active ? "w-8 bg-ember" : "w-3 bg-bone/20 hover:bg-bone/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
