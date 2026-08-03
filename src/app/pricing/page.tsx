import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  Container,
  Grid,
  PageHero,
  PageShell,
  Section,
} from "@/components/page-shell";
import { WaitlistCta } from "@/components/waitlist-cta";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing — Event House",
  description:
    "Discovering and attending events on wentoevent is free. Optional Premium and Host Pro memberships for people who want more.",
};

type TierCta =
  | {
      type: "waitlist";
      label: string;
      id: string;
      variant?: "primary" | "secondary";
    }
  | { type: "link"; label: string; href: string };

type Tier = {
  name: string;
  price: string;
  cadence?: string;
  secondaryPrice?: string;
  badge?: string;
  blurb: string;
  features: string[];
  cta: TierCta;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Free",
    price: "AED 0",
    blurb: "Find what's on and show up.",
    features: [
      "Discover events near you",
      "RSVP and save events",
      "Keep a personal record of the events you attend",
      "Follow hosts and friends",
      "Create private events",
      "Invite guests by link",
    ],
    cta: {
      type: "waitlist",
      label: "Join the waitlist",
      id: "eh-cta-pricing-free-waitlist",
    },
  },
  {
    name: "Premium",
    price: "AED 45",
    cadence: "/ month",
    secondaryPrice: "Or AED 390 / year",
    badge: "2 months free",
    blurb: "For people who want access to the rooms that don't get posted.",
    features: [
      "Everything in Free, plus:",
      "Verified badge",
      "Members-only events",
      "Priority RSVP",
      "Zero booking fees on eligible tickets",
      "Members lounge",
      "City Concierge, 2 requests per month",
      "Publish public events",
    ],
    cta: {
      type: "waitlist",
      label: "Join the waitlist — 2 months free",
      id: "eh-cta-pricing-premium-waitlist",
      variant: "primary",
    },
    featured: true,
  },
  {
    name: "Host Pro",
    price: "AED 199",
    cadence: "/ month",
    blurb: "Everything you need to host and manage events people remember.",
    features: [
      "Unlimited events and guest lists",
      "Ticketing with a flat AED 4 platform fee per paid ticket",
      "Check-in and door tools",
      "Insights and exports",
      "Co-host roles and permissions",
      "Priority support",
      "Public event publishing",
    ],
    cta: {
      type: "link",
      label: "Talk to us",
      href: "/contact",
    },
  },
];

const FAQ = [
  {
    q: "Is it really free?",
    a: "Yes. Discovering and attending events is free. Creating a private event and inviting people by link is free. Premium and Host Pro are optional.",
  },
  {
    q: "What do I get for joining the waitlist?",
    a: "You'll receive two months of Premium free from the day we launch in your city. No card upfront. No automatic renewal. We'll ask before anything charges.",
  },
  {
    q: "Can anyone post an event?",
    a: "Anyone can create a private event and invite guests by link. Public event publishing is available to Premium members, Host Pro members, Founding Hosts, and hosts who earn permanent publishing access through the wentoevent host program.",
  },
  {
    q: "What does hosting cost?",
    a: "Free events cost nothing to run. For ticketed events, we charge a flat AED 4 platform fee per paid ticket. We never take a percentage of your ticket sales. The fee is shown clearly before you publish.",
  },
  {
    q: "What is City Concierge?",
    a: "City Concierge helps you plan your time in a city around your dates, interests, and what you actually want to do. You send us the details. You get a curated plan, not a search result. Premium members receive two requests per month.",
  },
  {
    q: "When do you launch?",
    a: "We're launching on iOS first, city by city, starting with Dubai. Waitlist members get access before the public release.",
  },
  {
    q: "What about Android?",
    a: "Android is on the roadmap.",
    href: "/download",
    linkLabel: "Join the Android waitlist",
    suffix: " and we'll let you know when it's ready.",
  },
  {
    q: "I'm only visiting. Is wentoevent useful for me?",
    a: "That's one of the reasons we built it. Open the app when you arrive and see what's happening in the city that week. And if you're a Premium member, City Concierge can help you turn your dates into a real plan.",
  },
  {
    q: "What happens to my events and memories?",
    a: "Your events, guest lists, photos, and personal history belong to you. You control what you share, and we don't sell your personal data.",
  },
] as const;

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Free to show up. Fair to host."
        lede="Discovering and attending events on wentoevent is free. We offer two optional memberships for people who want more, and both can be cancelled from the app."
      />

      <Section>
        <Grid>
          {TIERS.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "flex flex-col",
                tier.featured && "border-bone/40 bg-bone/[0.04]",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[15px] font-semibold text-bone">
                  {tier.name}
                </h3>
                {tier.badge && (
                  <span className="shrink-0 rounded-full border border-ash/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ash">
                    {tier.badge}
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-[40px] font-semibold tracking-[-0.02em] text-bone">
                  {tier.price}
                </span>
                {tier.cadence && (
                  <span className="text-[13px] text-ash">{tier.cadence}</span>
                )}
              </div>
              {tier.secondaryPrice && (
                <p className="mt-1 text-[13px] text-ash">{tier.secondaryPrice}</p>
              )}
              <p className="mt-3 text-[14px] leading-relaxed text-bone/65">
                {tier.blurb}
              </p>

              <ul className="mt-6 flex flex-col gap-3 text-[14px] text-bone/80">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ash"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {tier.cta.type === "waitlist" ? (
                  <WaitlistCta
                    id={tier.cta.id}
                    label={tier.cta.label}
                    icon={null}
                    ariaLabel={`Email address for the ${tier.cta.label.toLowerCase()}`}
                    variant={
                      tier.cta.variant ?? (tier.featured ? "primary" : "secondary")
                    }
                  />
                ) : (
                  <Link
                    href={tier.cta.href}
                    className={cn(
                      buttonVariants(),
                      "h-11 rounded-full border-ash bg-transparent text-sm font-medium text-bone hover:border-bone/60 hover:bg-transparent",
                    )}
                  >
                    {tier.cta.label}
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section title="Founding Hosts">
        <p className="max-w-[640px] text-[16px] leading-relaxed text-bone/75">
          The first 40 Founding Hosts in Dubai receive Host Pro free for one
          year, plus permanent public publishing access.{" "}
          <Link
            href="/hosts#founding-host-application"
            className="text-bone underline decoration-ash/40 underline-offset-4 transition-colors hover:decoration-bone/60"
          >
            Apply to become a Founding Host
          </Link>
          .
        </p>
      </Section>

      <Section title="Questions, answered">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {FAQ.map((item) => (
            <div key={item.q}>
              <h3 className="text-[15px] font-semibold text-bone">{item.q}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-bone/65">
                {item.a}
                {"href" in item && item.href && (
                  <>
                    {" "}
                    <Link
                      href={item.href}
                      className="text-bone underline decoration-ash/40 underline-offset-4 transition-colors hover:decoration-bone/60"
                    >
                      {item.linkLabel}
                    </Link>
                    {"suffix" in item ? item.suffix : "."}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            Join the waitlist.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-bone/65">
            Founding Premium members receive their first two months free when we
            launch in their city. No card required. No automatic renewal.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistCta
              id="eh-cta-pricing-footer-waitlist"
              label="Join the waitlist"
              icon={null}
              ariaLabel="Email address for the waitlist"
              variant="primary"
            />
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
