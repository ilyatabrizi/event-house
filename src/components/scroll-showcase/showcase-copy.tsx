"use client";

import { motion } from "framer-motion";
import { FRAMES } from "@/components/scroll-showcase/frames";

export function ShowcaseCopy({ active }: { active: number }) {
  return (
    <div className="flex w-full shrink-0 flex-col items-center text-center sm:items-start sm:text-left">
      <p className="font-mono text-[11px] tracking-[0.16em] text-ash">
        <span className="sm:hidden">
          <span className="text-ember/80 uppercase">
            {FRAMES[active]?.label}
          </span>
          <span className="mx-2 text-ash/40">·</span>
          <span className="text-bone/55">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(FRAMES.length).padStart(2, "0")}
          </span>
        </span>
        <span className="hidden sm:inline">
          EVENT HOUSE
          <span className="mx-2 text-ash/40">·</span>
          <span className="text-bone/70">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(FRAMES.length).padStart(2, "0")}
          </span>
        </span>
      </p>

      <div className="relative mt-2.5 grid w-full max-w-[22rem] sm:mt-5 sm:max-w-xl">
        {FRAMES.map((frame, i) => (
          <motion.div
            key={frame.id}
            className="col-start-1 row-start-1 flex flex-col items-center sm:items-start"
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
              className="hidden font-mono text-[11px] tracking-[0.18em] text-ember/80 uppercase sm:block"
            >
              {frame.label}
            </motion.p>
            <h1 className="mt-1.5 text-pretty text-[26px] font-semibold leading-[1.12] tracking-[-0.035em] text-bone sm:mt-2.5 sm:text-[clamp(32px,4.5vw,64px)] sm:leading-[1.08]">
              <span className="sm:hidden">
                {frame.mobileTitle.split(" ").map((word, w, words) => (
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
                    {w < words.length - 1 && "\u00A0"}
                  </span>
                ))}
              </span>
              <span className="hidden sm:inline">
                {frame.title.split(" ").map((word, w, words) => (
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
                    {w < words.length - 1 && "\u00A0"}
                  </span>
                ))}
              </span>
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
              className="mt-2 max-w-[18rem] text-pretty text-[14px] leading-[1.45] text-bone/65 sm:mt-4 sm:max-w-[420px] sm:text-[17px] sm:leading-relaxed"
            >
              <span className="sm:hidden">{frame.mobileCopy}</span>
              <span className="hidden sm:inline">{frame.copy}</span>
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
