"use client";

import { motion } from "framer-motion";
import { FRAMES } from "@/components/scroll-showcase/frames";
import { cn } from "@/lib/utils";

export function ShowcaseCopy({
  active,
  compact = false,
}: {
  active: number;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 flex-col items-center text-center lg:items-start lg:text-left",
        compact && "max-w-sm",
      )}
    >
      <p className="font-mono text-[11px] tracking-[0.16em] text-ash">
        EVENT HOUSE
        <span className="mx-2 text-ash/40">·</span>
        <span className="text-bone/70">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(FRAMES.length).padStart(2, "0")}
        </span>
      </p>

      <div
        className={cn(
          "relative grid w-full max-w-xl",
          compact ? "mt-2" : "mt-3 sm:mt-6",
        )}
      >
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
            <h1
              className={cn(
                "text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-bone",
                compact
                  ? "mt-1.5 text-[22px] sm:text-[32px]"
                  : "mt-2 text-[28px] sm:mt-3 sm:text-[48px] lg:text-[clamp(48px,4.8vw,64px)]",
              )}
            >
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
              className={cn(
                "max-w-[420px] leading-relaxed text-bone/65",
                compact
                  ? "mt-1.5 line-clamp-2 text-[13px] sm:mt-2 sm:text-[15px]"
                  : "mt-2 text-[14px] sm:mt-4 sm:text-[17px]",
              )}
            >
              {frame.copy}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
