import Link from "next/link";
import { AppleGlyph } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
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
      <Link
        id="eh-cta-ios"
        href="/download"
        className={cn(
          buttonVariants(),
          "h-11 cursor-pointer gap-2 rounded-full border-transparent bg-bone px-5 text-sm font-medium text-ink transition-colors duration-200 ease-out hover:bg-bone focus-visible:border-transparent focus-visible:ring-0",
        )}
      >
        <AppleGlyph className="size-4" />
        Download for iOS
      </Link>
      <WaitlistCta />
    </div>
  );
}
