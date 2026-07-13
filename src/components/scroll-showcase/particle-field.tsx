"use client";

import { PARTICLES } from "@/components/scroll-showcase/frames";
import { cn } from "@/lib/utils";

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
      {PARTICLES.map((particle, i) => (
        <span
          key={i}
          className={cn(
            "eh-particle absolute rounded-full",
            particle.tint === "ember" ? "bg-ember/50" : "bg-bone/30",
          )}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
