"use client";

import { motion } from "framer-motion";
import { FRAMES } from "@/components/scroll-showcase/frames";

export function ShowcaseCopy({ active }: { active: number }) {
  return (
    <div className="flex shrink-0 flex-col items-center text-center lg:items-start lg:text-left">
      <p className="font-mono text-[11px] tracking-[0.16em] text-ash">
        EVENT HOUSE
        <span className="mx-2 text-ash/40">·</span>
        <span className="text-bone/70">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(FRAMES.length).padStart(2, "0")}
        </span>
      </p>

      <div className="relative mt-3 grid w-full max-w-xl sm:mt-6">
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
            <h1 className="mt-2 text-balance text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-bone sm:mt-3 sm:text-[48px] lg:text-[clamp(48px,4.8vw,64px)]">
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
              className="mt-2 max-w-[420px] text-[14px] leading-relaxed text-bone/65 sm:mt-4 sm:text-[17px]"
            >
              {frame.copy}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
