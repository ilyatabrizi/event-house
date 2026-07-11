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
  title: "Rewards — Event House",
  description:
    "Going out should pay you back. Earn points for showing up and hosting, then redeem them for skip-the-line access, guest-list priority, and partner drops.",
};

type Step = {
  label: string;
  title: string;
  blurb: string;
  points: string[];
};

const STEPS: Step[] = [
  {
    label: "01 / Show up",
    title: "Earn for going out",
    blurb:
      "Every event you check into adds points. RSVP, walk through the door, and you're already ahead.",
    points: [
      "Points for each event you attend",
      "Streak bonuses for a busy week",
      "Extra for trying somewhere new",
    ],
  },
  {
    label: "02 / Host",
    title: "Earn more for hosting",
    blurb:
      "Throwing the night everyone talks about counts for the most. The better the room, the bigger the reward.",
    points: [
      "Points for every guest who shows",
      "Bonuses for full, on-time rooms",
      "Recurring nights compound faster",
    ],
  },
  {
    label: "03 / Redeem",
    title: "Turn points into perks",
    blurb:
      "Spend what you've banked on the things that actually make a night better — no catalogs of junk.",
    points: [
      "Skip-the-line at select events",
      "Priority on waitlisted guest lists",
      "Early access to partner drops",
    ],
  },
];

type Tier = {
  label: string;
  name: string;
  reach: string;
  perks: string[];
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    label: "Tier 01",
    name: "Regular",
    reach: "Where everyone starts",
    perks: [
      "Earn points on every event",
      "Save spots you want to hit",
      "Occasional partner offers",
    ],
  },
  {
    label: "Tier 02",
    name: "Insider",
    reach: "A handful of nights a month",
    perks: [
      "Point multiplier on attendance",
      "Priority on popular guest lists",
      "Early looks at hyped events",
    ],
    featured: true,
  },
  {
    label: "Tier 03",
    name: "Local Legend",
    reach: "Out — and hosting — often",
    perks: [
      "Top multiplier on everything",
      "Skip-the-line where available",
      "First access to partner drops",
    ],
  },
];

export default function RewardsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Rewards"
        title="Going out should pay you back."
        lede="Show up, host, and repeat — Event House turns your nights out into points, and points into perks worth actually using."
      />

      <Section title="How it works">
        <Grid>
          {STEPS.map((step) => (
            <Card key={step.title} className="flex flex-col">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                {step.label}
              </p>
              <h3 className="mt-4 text-[16px] font-semibold text-bone">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-bone/65">
                {step.blurb}
              </p>
              <ul className="mt-5 flex flex-col gap-3 text-[14px] text-bone/80">
                {step.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ash"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section
        title="Tiers"
        intro="The more you're out, the further your points go. Tiers move with you — there's no annual reset to grind back from."
      >
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
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                  {tier.label}
                </span>
                {tier.featured && (
                  <span className="rounded-full border border-ash/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ash">
                    Most reach
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.01em] text-bone">
                {tier.name}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-bone/55">
                {tier.reach}
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-[14px] text-bone/80">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ash"
                    />
                    {perk}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section title="Fine print, honestly">
        <p className="max-w-[600px] text-[15px] leading-relaxed text-bone/65">
          Points are a loyalty feature inside the app — they have no cash value
          and can't be bought, sold, or transferred. Perks vary by city and
          availability, and we may adjust how earning works over time.
        </p>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            Start earning tonight.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-bone/65">
            Your next night out is already worth points. Download Event House and
            start banking them.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/download"
              className={cn(
                buttonVariants(),
                "h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
              )}
            >
              Start earning
            </Link>
            <Link
              href="/product"
              className={cn(
                buttonVariants(),
                "h-11 rounded-full border-ash bg-transparent px-6 text-sm font-medium text-bone hover:border-bone/60 hover:bg-transparent",
              )}
            >
              See how it works
            </Link>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
