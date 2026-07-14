"use client";

import { FRAMES } from "@/components/scroll-showcase/frames";
import { cn } from "@/lib/utils";

export function ChapterRail({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <nav
      className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col items-end gap-2 sm:right-6 sm:gap-2.5 xl:right-10"
      aria-label="Showcase progress"
      role="group"
    >
      {FRAMES.map((frame, i) => (
        <button
          key={frame.id}
          onClick={() => onSelect(i)}
          className="group flex cursor-pointer items-center gap-3"
          aria-label={`Go to ${frame.label}`}
          aria-current={i === active ? "step" : undefined}
        >
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
          <span
            className={cn(
              "h-[3px] rounded-full transition-all duration-300 ease-out",
              i === active
                ? "w-8 bg-ember"
                : "w-3 bg-bone/20 group-hover:bg-bone/40",
            )}
          />
        </button>
      ))}
    </nav>
  );
}
