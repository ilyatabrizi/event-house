import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-ash/15 bg-bone/[0.02] p-6 transition-colors duration-200 hover:border-ash/30 ${className}`}
    >
      {children}
    </div>
  );
}
