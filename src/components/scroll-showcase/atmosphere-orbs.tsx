"use client";

import { cn } from "@/lib/utils";
import type { ShowcaseFrame } from "@/components/scroll-showcase/frames";

/* Softness is baked into the gradient falloff — no blur() filters, which were
 * the main source of scroll lag (18 huge blurred layers repainting). */
export function AtmosphereOrbs({
  frame,
  animate,
}: {
  frame: ShowcaseFrame;
  animate: boolean;
}) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 72% 48%, ${frame.wash} 0%, transparent 58%),
            radial-gradient(ellipse 70% 55% at 18% 28%, ${frame.glow}28 0%, transparent 52%),
            linear-gradient(165deg, ${frame.wash}cc 0%, #0E0B10 48%, #0E0B10 100%)
          `,
        }}
      />
      <div
        className={cn(
          "eh-orb absolute h-[min(720px,90vw)] w-[min(720px,90vw)] rounded-full",
          animate && "eh-orb-drift-a",
        )}
        style={{
          top: "8%",
          right: "-8%",
          background: `radial-gradient(circle, ${frame.glow}40 0%, ${frame.glow}1e 30%, ${frame.glow}0a 50%, transparent 72%)`,
        }}
      />
      <div
        className={cn(
          "eh-orb absolute h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full",
          animate && "eh-orb-drift-b",
        )}
        style={{
          top: "-12%",
          left: "-10%",
          background: `radial-gradient(circle, ${frame.spark}30 0%, ${frame.wash}26 35%, ${frame.wash}10 55%, transparent 75%)`,
        }}
      />
      <div
        className={cn(
          "eh-orb absolute h-[min(380px,55vw)] w-[min(380px,55vw)] rounded-full",
          animate && "eh-orb-drift-c",
        )}
        style={{
          top: "35%",
          left: "35%",
          background: `radial-gradient(circle, ${frame.spark}18 0%, ${frame.spark}0a 40%, transparent 68%)`,
        }}
      />
    </>
  );
}
