import type { ReactNode } from "react";
import { Card } from "@/components/page-shell/card";

export function Feature({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <h3 className="text-[16px] font-semibold text-bone">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-bone/65">{children}</p>
    </Card>
  );
}
