import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  Container,
  Feature,
  Grid,
  PageHero,
  PageShell,
  Section,
} from "@/components/page-shell";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "For Hosts — Event House",
  description:
    "Everything you need to run events people remember — from a first invite to check-in at the door. Create, invite, and host with Event House.",
};

type HostFeature = {
  title: string;
  body: string;
};

const FEATURES: HostFeature[] = [
  {
    title: "Create an event in minutes",
    body: "A focused flow that gets you from idea to published page fast. Set the time, place, and vibe — we handle the rest.",
  },
  {
    title: "Beautiful invites & shareable links",
    body: "Every event gets a page worth sharing. Drop one link anywhere and watch it fill up.",
  },
  {
    title: "Guest lists & RSVPs",
    body: "Track who's in, who's a maybe, and who's on the waitlist — all updated in real time.",
  },
  {
    title: "Ticketing with low flat fees",
    body: "Sell tickets without losing a cut to percentages. A low flat fee per ticket, shown before you publish.",
  },
  {
    title: "Check-in & door tools",
    body: "Scan guests in from your phone. See capacity at a glance and keep the line moving.",
  },
  {
    title: "Co-hosts & roles",
    body: "Bring in your team with the right permissions. Share the load without sharing your password.",
  },
  {
    title: "Audience insights & exports",
    body: "Understand who shows up over time. Export your guest data whenever you need it.",
  },
];

type Step = {
  number: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Create",
    body: "Spin up an event page in a few taps. Add the details that matter and set your capacity, tickets, and guest list rules.",
  },
  {
    number: "02",
    title: "Invite",
    body: "Share one link or invite from your circles. RSVPs and waitlists fill in automatically as word spreads.",
  },
  {
    number: "03",
    title: "Host",
    body: "Run the door from your phone, check guests in, and keep an eye on the room — then review who came when it's over.",
  },
];

export default function HostsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For hosts"
        title="Run nights people remember."
        lede="Hosting shouldn't feel like admin. Event House gives you invites, guest lists, ticketing, and door tools in one place — so you can focus on the night, not the logistics."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/download"
            className={cn(
              buttonVariants(),
              "h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
            )}
          >
            Start hosting
          </Link>
          <Link
            href="/pricing"
            className={cn(
              buttonVariants(),
              "h-11 rounded-full border-ash bg-transparent px-6 text-sm font-medium text-bone hover:border-bone/60 hover:bg-transparent",
            )}
          >
            See Host Pro
          </Link>
        </div>
      </PageHero>

      <Section
        title="Everything you need at the door and beyond"
        intro="From the first invite to the last guest out, the tools that make a great night run itself."
      >
        <Grid>
          {FEATURES.map((feature) => (
            <Feature key={feature.title} title={feature.title}>
              {feature.body}
            </Feature>
          ))}
        </Grid>
      </Section>

      <Section
        title="From idea to open doors in three steps"
        intro="However big the night, the shape is the same."
      >
        <Grid>
          {STEPS.map((step) => (
            <Card key={step.number} className="flex flex-col">
              <span className="font-mono text-[13px] tracking-[0.12em] text-ash">
                {step.number}
              </span>
              <h3 className="mt-4 text-[18px] font-semibold text-bone">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-bone/65">
                {step.body}
              </p>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            Your next night starts here.
          </h2>
          <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-relaxed text-bone/65">
            Set up your first event free. When you're ready for ticketing, door
            tools, and insights, Host Pro is waiting.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/download"
              className={cn(
                buttonVariants(),
                "h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
              )}
            >
              Start hosting
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants(),
                "h-11 rounded-full border-ash bg-transparent px-6 text-sm font-medium text-bone hover:border-bone/60 hover:bg-transparent",
              )}
            >
              Explore Host Pro
            </Link>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
