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
      className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex xl:right-10"
      aria-label="Showcase chapters"
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
              "font-mono text-[10px] tracking-[0.14em] uppercase transition-all duration-300",
              i === active
                ? "translate-x-0 text-bone opacity-100"
                : "translate-x-2 text-ash opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
            )}
          >
            {frame.label}
          </span>
          <span
            className={cn(
              "h-px transition-all duration-300",
              i === active
                ? "w-8 bg-ember"
                : "w-4 bg-bone/25 group-hover:bg-bone/50",
            )}
          />
        </button>
      ))}
    </nav>
  );
}
