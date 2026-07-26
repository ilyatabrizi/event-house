import { WaitlistCta } from "@/components/waitlist-cta";
import { cn } from "@/lib/utils";

export function ShowcaseCtas({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative z-10 flex flex-wrap items-center justify-center gap-3",
        className,
      )}
    >
      <WaitlistCta
        id="eh-cta-waitlist"
        label="Join the waitlist"
        icon={null}
        ariaLabel="Email address for the waitlist"
        variant="primary"
      />
    </div>
  );
}
