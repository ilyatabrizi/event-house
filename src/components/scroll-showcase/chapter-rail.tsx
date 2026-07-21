"use client";

import { FRAMES } from "@/components/scroll-showcase/frames";
import { cn } from "@/lib/utils";

export function ChapterRail({
  active,
  onSelect,
  orientation = "vertical",
}: {
  active: number;
  onSelect: (index: number) => void;
  orientation?: "vertical" | "horizontal";
}) {
  const horizontal = orientation === "horizontal";

  return (
    <nav
      className={cn(
        "z-20",
        horizontal
          ? "relative flex flex-row items-center justify-center gap-2"
          : "absolute right-4 top-1/2 flex -translate-y-1/2 flex-col items-end gap-2 sm:right-6 sm:gap-2.5 xl:right-10",
      )}
      aria-label="Showcase progress"
      role="group"
    >
      {FRAMES.map((frame, i) => (
        <button
          key={frame.id}
          onClick={() => onSelect(i)}
          className={cn(
            "group flex cursor-pointer items-center",
            horizontal ? "gap-0" : "gap-3",
          )}
          aria-label={`Go to ${frame.label}`}
          aria-current={i === active ? "step" : undefined}
        >
          {!horizontal && (
            <span
              className={cn(
                "hidden font-mono text-[10px] tracking-[0.14em] uppercase transition-all duration-300 lg:inline",
                i === active
                  ? "translate-x-0 text-bone opacity-100"
                  : "translate-x-2 text-ash opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
              )}
            >
              {frame.label}
            </span>
          )}
          <span
            className={cn(
              "rounded-full transition-all duration-300 ease-out",
              horizontal
                ? i === active
                  ? "h-1.5 w-6 bg-ember"
                  : "size-1.5 bg-bone/25 group-hover:bg-bone/45"
                : i === active
                  ? "h-[3px] w-8 bg-ember"
                  : "h-[3px] w-3 bg-bone/20 group-hover:bg-bone/40",
            )}
          />
        </button>
      ))}
    </nav>
  );
}
