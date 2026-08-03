import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Container,
  Feature,
  Grid,
  PageHero,
  PageShell,
  Section,
} from "@/components/page-shell";
import { WaitlistCta } from "@/components/waitlist-cta";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Premium — Event House",
  description:
    "The rooms that don't get posted. Founding Premium memberships offer verified access, members-only events, priority RSVP, and a city concierge.",
};

type PremiumFeature = {
  title: string;
  body: string;
};

const FEATURES: PremiumFeature[] = [
  {
    title: "Verified badge",
    body: "A member seal on your profile, posts, and messages. People know who they're saying yes to.",
  },
  {
    title: "Members-only events",
    body: "Discover and join exclusive tables, gatherings, and nights that never reach the public feed.",
  },
  {
    title: "Priority RSVP",
    body: "Skip waitlists on high-demand events and get priority access where available.",
  },
  {
    title: "Zero booking fees",
    body: "Premium members don't pay additional booking fees on eligible tickets.",
  },
  {
    title: "Members lounge",
    body: "A private space to plan nights, meet other members, and find people to go with. The group chat you'd actually want to be in.",
  },
  {
    title: "City Concierge",
    body: "Tell us your city, your dates, and what you're looking for. We'll help build a curated plan around your trip, not just hand you a list of search results. Premium members receive two concierge requests per month.",
  },
  {
    title: "Publish public events",
    body: "Premium members can publish their own events to the public wentoevent feed and map.",
  },
];

export default function PremiumPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Premium"
        title="The rooms that don't get posted."
        lede="Some of the best tables, nights, and experiences in a city never make it to the public feed. Premium is how you hear about them. Founding memberships are capped at 250 members — access, community, and experiences that are curated rather than mass-produced."
      />

      <Section>
        <Grid cols={2}>
          {FEATURES.map((feature) => (
            <Feature key={feature.title} title={feature.title}>
              {feature.body}
            </Feature>
          ))}
        </Grid>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            Join the waitlist.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-bone/65">
            Founding Premium members receive their first two months free when we
            launch in their city.
          </p>
          <p className="mx-auto mt-3 max-w-[520px] text-[14px] leading-relaxed text-bone/55">
            No card required. No automatic renewal. We&apos;ll ask before
            anything charges.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WaitlistCta
              id="eh-cta-premium-waitlist"
              label="Join the waitlist"
              icon={null}
              ariaLabel="Email address for the Premium waitlist"
              variant="primary"
            />
            <Link
              href="/pricing"
              className={cn(
                buttonVariants(),
                "h-11 rounded-full border-ash bg-transparent px-6 text-sm font-medium text-bone hover:border-bone/60 hover:bg-transparent",
              )}
            >
              See pricing
            </Link>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
