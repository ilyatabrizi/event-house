"use client";

import Image from "next/image";
import type { ShowcaseFrame } from "@/components/scroll-showcase/frames";

export function ScreenContent({ frame }: { frame: ShowcaseFrame }) {
  return (
    <Image
      src={frame.image}
      alt={`${frame.label} — ${frame.title}`}
      fill
      sizes="(max-width: 640px) 52vw, 300px"
      className="object-cover object-top"
      priority={frame.id === 1}
    />
  );
}
