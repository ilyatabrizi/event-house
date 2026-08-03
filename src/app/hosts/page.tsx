import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FoundingHostForm } from "@/components/founding-host-application";
import {
  Card,
  Container,
  Feature,
  Grid,
  PageHero,
  PageShell,
  Section,
} from "@/components/page-shell";
import { foundingHostWhatsAppUrl } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hosting — Event House",
  description:
    "Everything you need before the doors open, and after. wentoevent gives you the tools to run events without the usual chaos.",
};

type HostFeature = {
  title: string;
  body: string;
};

const FEATURES: HostFeature[] = [
  {
    title: "Create in minutes",
    body: "Go from idea to a published event page in minutes. Set the time, location, capacity, ticketing, and who can see your event.",
  },
  {
    title: "Shareable event pages",
    body: "Every event gets a page worth sharing. Drop one link into your group chats, social channels, or website and let registrations roll in.",
  },
  {
    title: "Guest lists & RSVPs",
    body: "See who's confirmed, who's maybe, and who's on the waitlist, all updated in real time.",
  },
  {
    title: "Ticketing",
    body: "Ticketed events are charged a simple, flat AED 4 platform fee per paid ticket. No percentage of your ticket revenue. No complicated pricing. Free events stay free.",
  },
  {
    title: "Check-in",
    body: "Scan guests with your phone. See capacity at a glance, manage arrivals, and keep the line moving.",
  },
  {
    title: "Co-hosts & roles",
    body: "Invite your team with the right permissions. Share the work, not your password.",
  },
  {
    title: "Reports & exports",
    body: "Understand who actually shows up over time and export your guest data whenever you need it.",
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
    body: "Build your event page in a few taps. Set capacity, tickets, visibility, and guest list rules.",
  },
  {
    number: "02",
    title: "Invite",
    body: "Share one link. Registrations and waitlists update automatically, so you can focus on the event instead of managing spreadsheets.",
  },
  {
    number: "03",
    title: "Host",
    body: "Manage check-in from your phone, welcome your guests, and see who attended afterward.",
  },
];

const FOUNDING_HOST_BENEFITS = [
  "1 year of Host Pro for free",
  "Permanent public publishing access",
  "Early access to new features and the chance to shape them before they're built",
  "Day-one exposure to the wentoevent audience",
];

const FOUNDING_HOST_ASKS = [
  "Host at least two events in your first three months",
  "Let us feature one of your events as a case study",
  "Give us honest feedback about what's working and what's broken",
];

export default function HostsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hosting"
        title="Everything you need before the doors open, and after."
        lede="From your first idea to the final guest leaving, wentoevent gives you the tools to run events without the usual chaos."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#founding-host-application"
            className={cn(
              buttonVariants(),
              "h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
            )}
          >
            Apply to become a Founding Host
          </Link>
          <a
            href={foundingHostWhatsAppUrl()}
            className={cn(
              buttonVariants(),
              "h-11 rounded-full border-ash bg-transparent px-6 text-sm font-medium text-bone hover:border-bone/60 hover:bg-transparent",
            )}
          >
            Message us on WhatsApp
          </a>
        </div>
      </PageHero>

      <Section>
        <Grid>
          {FEATURES.map((feature) => (
            <Feature key={feature.title} title={feature.title}>
              {feature.body}
            </Feature>
          ))}
        </Grid>
      </Section>

      <Section title="From idea to opening the doors, in three steps.">
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

      <Section
        id="founding-host-application"
        title="We're selecting the first 40 Founding Hosts in Dubai."
      >
        <div className="max-w-[640px] space-y-5 text-[16px] leading-relaxed text-bone/75">
          <p>
            Founding Hosts are the first people helping us shape how events
            happen on wentoevent.
          </p>
          <p>Founding Hosts receive:</p>
          <ul className="flex flex-col gap-2 pl-1">
            {FOUNDING_HOST_BENEFITS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>In return, we ask for three things:</p>
          <ul className="flex flex-col gap-2 pl-1">
            {FOUNDING_HOST_ASKS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-bone">
            Tell us what you&apos;re hosting. We&apos;ll get back to you within
            48 hours.
          </p>
        </div>

        <div className="mt-12 max-w-[520px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
            Application
          </p>
          <div className="mt-6">
            <FoundingHostForm />
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
