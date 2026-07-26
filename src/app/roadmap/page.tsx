import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, Container, PageHero, PageShell, Section } from "@/components/page-shell";
import { WaitlistCta } from "@/components/waitlist-cta";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Roadmap — Event House",
  description:
    "What we're building, in the open. Exactly where wentoevent stands today and what's coming next — dates only when they're real.",
};

type RoadmapStatus = "Done" | "Designed" | "Building" | "Next" | "Later";

type RoadmapItem = {
  status: RoadmapStatus;
  title: string;
  blurb: string;
};

const ROADMAP: RoadmapItem[] = [
  {
    status: "Done",
    title: "Product design & design system",
    blurb:
      "Full UX specification, screen by screen, with the Alerglow design system established across the product.",
  },
  {
    status: "Designed",
    title: "Discovery & map",
    blurb:
      "Feed, event discovery, filters by activity, time, and distance, with map clustering designed for city-scale discovery.",
  },
  {
    status: "Building",
    title: "Host tools",
    blurb:
      "Event creation, guest lists, co-hosts, permissions, and door check-in.",
  },
  {
    status: "Building",
    title: "Seeding the first 40 events",
    blurb:
      "Onboarding our Founding Hosts in Dubai before opening the app to the public.",
  },
  {
    status: "Next",
    title: "iOS launch, Dubai first",
    blurb:
      "Waitlist members get access before the public release, with two months of Premium free.",
  },
  {
    status: "Next",
    title: "Ticketing & payouts",
    blurb:
      "Simple ticketing with a flat AED 4 platform fee per paid ticket and reliable, on-time payouts.",
  },
  {
    status: "Next",
    title: "Premium goes live",
    blurb:
      "Members-only events, the Members Lounge, Priority RSVP, and City Concierge for the first 250 founding members.",
  },
  {
    status: "Later",
    title: "Plans with friends",
    blurb:
      "Commit to something as a group in one tap, with a live guest list that shows who's actually coming.",
  },
  {
    status: "Later",
    title: "Android",
    blurb: "So no one gets left off the list.",
  },
  {
    status: "Later",
    title: "Recaps",
    blurb:
      "A shareable look back at the places you've been, the events you've attended, and the moments you've chosen to keep.",
  },
  {
    status: "Later",
    title: "More cities",
    blurb:
      "One city at a time, properly seeded. Your profile, your history, and your Premium membership are built to travel with you, so wentoevent becomes more useful the moment you land somewhere new.",
  },
];

const STATUS_STYLE: Record<RoadmapStatus, string> = {
  Done: "text-bone",
  Designed: "text-bone/80",
  Building: "text-ember",
  Next: "text-bone",
  Later: "text-ash",
};

export default function RoadmapPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Roadmap" title="What we're building, in the open.">
        <div className="max-w-[640px] space-y-4 text-[17px] leading-relaxed text-bone/75">
          <p>wentoevent isn&apos;t out yet.</p>
          <p>
            Instead of pretending we have a changelog before we have a product,
            here&apos;s exactly where things stand and what&apos;s coming next.
          </p>
          <p>Dates will appear here only when they&apos;re real.</p>
        </div>
      </PageHero>

      <Section>
        <div className="flex flex-col gap-4">
          {ROADMAP.map((item) => (
            <Card key={item.title} className="md:flex md:gap-10">
              <div className="mb-4 shrink-0 md:mb-0 md:w-40">
                <p
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.12em]",
                    STATUS_STYLE[item.status],
                  )}
                >
                  {item.status}
                </p>
              </div>
              <div className="md:flex-1">
                <h2 className="text-[16px] font-semibold text-bone">
                  {item.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-bone/65">
                  {item.blurb}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            Get in before the doors open.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-bone/65">
            Waitlist members in Dubai get early access and two months of Premium
            free when we launch.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WaitlistCta
              id="eh-cta-roadmap-waitlist"
              label="Join the waitlist"
              icon={null}
              ariaLabel="Email address for the waitlist"
              variant="primary"
            />
            <Link
              href="/hosts"
              className={cn(
                buttonVariants(),
                "h-11 rounded-full border-ash bg-transparent px-6 text-sm font-medium text-bone hover:border-bone/60 hover:bg-transparent",
              )}
            >
              Become a Founding Host
            </Link>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
