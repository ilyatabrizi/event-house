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
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing — Event House",
  description:
    "Event House is free to discover and attend. Upgrade for hosting tools, rewards, and everything you need to run a great night.",
};

type Tier = {
  name: string;
  price: string;
  cadence?: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Free",
    price: "$0",
    blurb: "Find what's on tonight and show up.",
    features: [
      "Discover events near you",
      "RSVP and save events",
      "Your night, kept as a record",
      "Follow hosts and friends",
    ],
    cta: "Download for iOS",
    href: "/download",
  },
  {
    name: "Plus",
    price: "$6",
    cadence: "/ month",
    blurb: "For the people who never miss a good night.",
    features: [
      "Everything in Free",
      "Early access to popular events",
      "Priority on waitlisted guest lists",
      "Rewards multipliers",
      "Ad-free discovery",
    ],
    cta: "Start Plus",
    href: "/download",
    featured: true,
  },
  {
    name: "Host Pro",
    price: "$29",
    cadence: "/ month",
    blurb: "Everything you need to run events people remember.",
    features: [
      "Unlimited events & guest lists",
      "Ticketing with low flat fees",
      "Check-in and door tools",
      "Audience insights & exports",
      "Co-host roles and permissions",
    ],
    cta: "Talk to us",
    href: "/contact",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Free to go out. Fair to host."
        lede="Discovering and attending events is always free. Upgrade only when you want more from your nights — or when you start hosting your own."
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
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-semibold text-bone">
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="rounded-full border border-ash/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ash">
                    Popular
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

              <Link
                href={tier.href}
                className={cn(
                  buttonVariants(),
                  "mt-8 h-11 rounded-full border-transparent text-sm font-medium",
                  tier.featured
                    ? "bg-bone text-ink hover:bg-bone"
                    : "border-ash bg-transparent text-bone hover:border-bone/60 hover:bg-transparent",
                )}
              >
                {tier.cta}
              </Link>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section title="Questions, answered">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {[
            {
              q: "Is Event House really free?",
              a: "Yes. Finding and attending events never costs anything. Plus and Host Pro are optional.",
            },
            {
              q: "What does hosting cost?",
              a: "Hosting free events is free. Ticketed events on Host Pro carry a low flat fee per ticket, shown before you publish.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Anytime, from the app. Your plan stays active until the end of the billing period.",
            },
            {
              q: "Do you offer plans for venues?",
              a: "We do. Reach out and we'll tailor something for recurring programming.",
            },
          ].map((item) => (
            <div key={item.q}>
              <h3 className="text-[15px] font-semibold text-bone">{item.q}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-bone/65">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            The city has plans tonight.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-bone/65">
            Start free. Upgrade whenever you're ready.
          </p>
          <Link
            href="/download"
            className={cn(
              buttonVariants(),
              "mx-auto mt-8 h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
            )}
          >
            Get Event House
          </Link>
        </Container>
      </Section>
    </PageShell>
  );
}
