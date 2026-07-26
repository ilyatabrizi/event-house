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
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Company — Event House",
  description:
    "Event House is the company behind wentoevent — an iOS-first platform to discover what's happening, bring people together, and remember where you've been.",
};

const VALUES = [
  {
    title: "Real life, first",
    body: "The point isn't more screen time. It's a better Saturday. Everything we build should ultimately lead somewhere offline, with real people, in real places.",
  },
  {
    title: "Hosts are heroes",
    body: "Every great event starts with someone willing to make it happen. We give hosts the tools to create, manage, and grow their events without the usual chaos. No spreadsheets. No juggling five different platforms. And no percentage taken from your ticket sales.",
  },
  {
    title: "Your memories are yours",
    body: "Your events. Your guest lists. Your photos. Your history. We keep them safe, give you control over what you share, and never treat your personal life as a product.",
  },
  {
    title: "Local, everywhere",
    body: "The best things don't always trend worldwide. Sometimes they're three streets away, run by people who care deeply about what they do. That's true in every city. We build city by city, so every map is worth opening.",
  },
];

const INVESTOR_FLYWHEEL = [
  "People discover events.",
  "Events bring people together.",
  "People create new connections.",
  "Those connections create more reasons to go out.",
  "And every experience becomes part of a personal history that makes the platform more valuable over time.",
];

const SPONSOR_BENEFITS = [
  "Sponsor curated events and experiences",
  "Partner with hosts and local communities",
  "Create branded experiences",
  "Reach targeted lifestyle audiences",
  "Support city-wide campaigns and activations",
];

export default function CompanyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our story"
        title="The best days start with knowing what's on."
      />

      <Section>
        <div className="max-w-[640px] space-y-5 text-[16px] leading-relaxed text-bone/75">
          <p>Every city is full of things to do.</p>
          <p>
            This morning, somewhere near you, there&apos;s a run club, a padel
            game looking for one more player, a workshop, a dinner for twenty, or
            a night you would have loved if you&apos;d known about it in time.
          </p>
          <p>
            The problem was never a shortage of good plans. It&apos;s that
            they&apos;re scattered across WhatsApp groups, Instagram stories,
            private chats, and places you&apos;ll never think to look. And if
            you&apos;ve just landed in a new city, you&apos;re not in any of
            those groups at all.
          </p>
          <p>
            We built wentoevent because we kept missing things we would have
            loved, and forgetting the ones we actually made it to.
          </p>
          <p>
            So we&apos;re building one place to discover what&apos;s happening,
            bring people together, and remember where you&apos;ve been.
          </p>
          <p>
            Create your own event without juggling five different tools. Find
            something worth showing up for. Meet people who are already going.
            And keep a record of the places, events, and moments that made your
            city feel like yours.
          </p>
          <p className="text-bone">
            Our belief is simple: the internet should get you out the door, not
            keep you on the couch.
          </p>
        </div>
      </Section>

      <Section title="What we believe">
        <Grid cols={2}>
          {VALUES.map((value) => (
            <Feature key={value.title} title={value.title}>
              {value.body}
            </Feature>
          ))}
        </Grid>
      </Section>

      <Section title="The team">
        <div className="max-w-[640px] space-y-5 text-[16px] leading-relaxed text-bone/75">
          <p>
            We&apos;re a small team who care a little too much about a
            well-run event. We host our own. We build the product we kept wishing
            existed. And we read every message people send us.
          </p>
          <p>
            We&apos;re starting with events, but our ambition goes further: to
            build the layer between people and the cities they live in.
          </p>
          <p>
            If you want to host with us, work with us, partner with us, or tell
            us what we&apos;re getting wrong, we&apos;d genuinely like to hear
            from you.{" "}
            <Link
              href="/contact"
              className="text-bone underline decoration-ash/40 underline-offset-4 transition-colors hover:decoration-bone"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section title="Build the future of going out with us.">
        <div className="max-w-[640px] space-y-5 text-[16px] leading-relaxed text-bone/75">
          <p>
            Event House is the company behind wentoevent, an iOS-first platform
            built to help people discover what&apos;s happening, bring people
            together, and turn nights out into memories worth keeping.
          </p>
          <p>
            We&apos;re starting with events, but we&apos;re building something
            bigger: a new way for people to experience the cities they live in
            and visit.
          </p>
        </div>
      </Section>

      <Section title="For investors">
        <div className="max-w-[640px] space-y-5 text-[16px] leading-relaxed text-bone/75">
          <p>
            We&apos;re building the layer between people and the cities they
            live in.
          </p>
          <p>
            Today, real-world experiences are fragmented across social media,
            messaging apps, event platforms, ticketing services, and word of
            mouth.
          </p>
          <p>
            wentoevent brings discovery, social connection, hosting, ticketing,
            and memories into one ecosystem. The more people use it, the more
            useful it becomes.
          </p>
          <ul className="flex flex-col gap-2 pl-1">
            {INVESTOR_FLYWHEEL.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            We&apos;re building for cities, communities, hosts, venues, and the
            people who make them come alive.
          </p>
          <p>
            We&apos;re looking for partners who believe the next generation of
            social products should move people from screens into real life.
          </p>
          <p className="pt-2 text-bone">
            Interested in investing in Event House?
          </p>
          <Link
            href="mailto:hello@eventhouse.app?subject=Investment%20inquiry"
            className={cn(
              buttonVariants(),
              "inline-flex h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
            )}
          >
            Talk to the founders
          </Link>
        </div>
      </Section>

      <Section title="For sponsors & brand partners">
        <div className="max-w-[640px] space-y-5 text-[16px] leading-relaxed text-bone/75">
          <p>Your audience isn&apos;t just online. They&apos;re out there.</p>
          <p>
            wentoevent gives brands a way to become part of the moments people
            actually remember.
          </p>
          <p>
            From music and nightlife to fitness, food, culture, travel, and
            everything in between, we help brands connect with relevant
            communities through real-world experiences.
          </p>
          <p>Partner with us to:</p>
          <ul className="flex flex-col gap-2 pl-1">
            {SPONSOR_BENEFITS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>Let&apos;s create something people want to show up for.</p>
          <Link
            href="mailto:partners@eventhouse.app?subject=Partnership%20inquiry"
            className={cn(
              buttonVariants(),
              "inline-flex h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
            )}
          >
            Become a partner
          </Link>
        </div>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
            We&apos;re building what&apos;s next.
          </p>
          <h2 className="mt-5 text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            The best nights don&apos;t happen online.
            <br />
            They start there.
          </h2>
          <p className="mx-auto mt-6 max-w-[440px] text-[15px] font-semibold leading-relaxed text-bone">
            Event House
          </p>
          <p className="mx-auto mt-2 max-w-[440px] text-[15px] leading-relaxed text-bone/65">
            Get people out the door.
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
