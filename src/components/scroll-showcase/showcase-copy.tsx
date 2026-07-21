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
        "flex shrink-0 flex-col",
        compact
          ? "mx-auto w-full max-w-[22rem] items-center text-center"
          : "items-center text-center lg:items-start lg:text-left",
      )}
    >
      <p
        className={cn(
          "font-mono tracking-[0.16em] text-ash",
          compact ? "text-[10px]" : "text-[11px]",
        )}
      >
        {compact ? (
          <>
            <span className="text-ember/80 uppercase">
              {FRAMES[active]?.label}
            </span>
            <span className="mx-2 text-ash/40">·</span>
            <span className="text-bone/55">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(FRAMES.length).padStart(2, "0")}
            </span>
          </>
        ) : (
          <>
            EVENT HOUSE
            <span className="mx-2 text-ash/40">·</span>
            <span className="text-bone/70">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(FRAMES.length).padStart(2, "0")}
            </span>
          </>
        )}
      </p>

      <div
        className={cn(
          "relative grid w-full",
          compact ? "mt-2.5 max-w-none" : "mt-3 max-w-xl sm:mt-6",
        )}
      >
        {FRAMES.map((frame, i) => {
          const headline = compact ? frame.mobileTitle : frame.title;
          const subtitle = compact ? frame.mobileCopy : frame.copy;

          return (
            <motion.div
              key={frame.id}
              className="col-start-1 row-start-1 flex flex-col items-center lg:items-start"
              initial={false}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              aria-hidden={i !== active}
              style={{ pointerEvents: i === active ? "auto" : "none" }}
            >
              {!compact && (
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
              )}
              <h1
                className={cn(
                  "text-pretty font-semibold tracking-[-0.035em] text-bone",
                  compact
                    ? "mt-0 text-[26px] leading-[1.12] sm:text-[34px]"
                    : "mt-2 text-[28px] leading-[1.05] sm:mt-3 sm:text-[48px] lg:text-[clamp(48px,4.8vw,64px)]",
                )}
              >
                {headline.split(" ").map((word, w) => (
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
                    {w < headline.split(" ").length - 1 && "\u00A0"}
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
                  "text-pretty text-bone/65",
                  compact
                    ? "mt-2 max-w-[18rem] text-[14px] leading-[1.45] sm:max-w-[22rem] sm:text-[15px]"
                    : "mt-2 max-w-[420px] text-[14px] leading-relaxed sm:mt-4 sm:text-[17px]",
                )}
              >
                {subtitle}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
