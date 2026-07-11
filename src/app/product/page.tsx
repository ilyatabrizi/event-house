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
  title: "Product — Event House",
  description:
    "Discover events near you, host your own, and keep a record of every good night — all in one app built for the way you actually go out.",
};

type PillarFeature = {
  title: string;
  body: string;
};

const FEATURES: PillarFeature[] = [
  {
    title: "Discover",
    body: "A curated feed of what's on near you — filter by vibe, time, and place so the right night finds you before it sells out.",
  },
  {
    title: "Host",
    body: "Spin up an event in seconds, send invites, and watch your guest list fill in. From house parties to warehouse sets.",
  },
  {
    title: "Record",
    body: "Every night you show up gets saved — photos, the people who were there, a personal history you'll actually want to revisit.",
  },
  {
    title: "Social",
    body: "Follow the friends and hosts whose taste you trust, and see what they're going to before the room gets full.",
  },
  {
    title: "Notifications",
    body: "A quiet nudge when something you'd love drops nearby, a friend RSVPs, or doors are about to open. Never miss a good one.",
  },
  {
    title: "Tickets & RSVP",
    body: "Tap once to RSVP, hold your ticket in the app, and breeze through the door. No screenshots, no lost links.",
  },
];

const RECORD_CARDS: PillarFeature[] = [
  {
    title: "The people",
    body: "Faces from the night, tagged and kept. Months later you'll remember exactly who you met and where.",
  },
  {
    title: "The photos",
    body: "Shared shots from everyone who was there land in one place — a private album for the room, not the algorithm.",
  },
  {
    title: "The history",
    body: "Scroll back through your year in nights out. A record that quietly adds up to something worth keeping.",
  },
];

export default function ProductPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Product"
        title="Everything a night needs, in one app."
        lede="Event House helps you find what's on near you, host the nights you want to throw, and hold on to the ones worth remembering — without leaving the app."
      />

      <Section
        title="Three things, done well"
        intro="Discover, host, record. The whole arc of a good night, from the first idea to the memory of it."
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
        title="A record of every good night."
        intro="Most nights out disappear the next morning. Event House keeps them — not as a feed to perform for, but as a private history that's yours."
      >
        <Grid cols={3}>
          {RECORD_CARDS.map((card) => (
            <Card key={card.title}>
              <h3 className="text-[16px] font-semibold text-bone">
                {card.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-bone/65">
                {card.body}
              </p>
            </Card>
          ))}
        </Grid>
        <p className="mt-8 max-w-[600px] text-[15px] leading-relaxed text-bone/65">
          Every event you attend becomes an entry — the who, the where, the
          photos everyone shared. Over a year it turns into something you'll
          want to look back on, and it never leaves your phone unless you say
          so.
        </p>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            Your next good night is already out there.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-bone/65">
            Download Event House and start with what's on tonight.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/download"
              className={cn(
                buttonVariants(),
                "h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
              )}
            >
              Get Event House
            </Link>
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
