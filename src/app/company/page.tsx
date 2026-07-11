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
    "The story behind Event House — an iOS-first app to discover, host, and remember the events that make a city worth living in.",
};

const VALUES = [
  {
    title: "Real life, first",
    body: "The point isn't more screen time. It's a better Friday. Everything we build should end with you somewhere, with people, doing something worth showing up for.",
  },
  {
    title: "Hosts are heroes",
    body: "Every good night starts with someone brave enough to plan it. We give hosts the tools to invite, organize, and pull it off without the chaos.",
  },
  {
    title: "Your memories are yours",
    body: "Your nights, your guest lists, your photos — they belong to you. We keep them safe, we don't sell them, and we never make you the product.",
  },
  {
    title: "Local over global",
    body: "The best events aren't trending worldwide. They're three blocks away, run by people who care. We build for the neighborhood, not the algorithm.",
  },
];

export default function CompanyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our story"
        title="We think the best nights start with a plan."
        lede="Event House is an iOS-first way to discover what's happening near you, host things worth showing up for, and keep the nights you'll want to remember."
      />

      <Section title="Why we're building this">
        <div className="max-w-[640px] space-y-5 text-[16px] leading-relaxed text-bone/75">
          <p>
            Cities are overflowing with things to do. Somewhere tonight there's a
            listening party, a run club, a stoop show, a dinner for twelve. The
            problem was never a shortage of good nights — it's that the good ones
            are buried, scattered across a dozen apps and group chats, and gone
            by the time you hear about them.
          </p>
          <p>
            We started Event House because we kept missing things we would have
            loved, and forgetting the ones we made it to. So we built one place
            to find what's on, to host your own without wrangling five tools, and
            to keep a real record of where you've been and who you were with.
          </p>
          <p>
            It's a simple idea with a stubborn belief underneath it: the internet
            should get you out the door, not keep you on the couch. If Event House
            ends more of your weeks with a story worth telling, we've done our
            job.
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
            We're a small team who care a little too much about a well-run night.
            We host our own events, use the app every weekend, and read every note
            people send us.
          </p>
          <p>
            If any of this resonates — whether you want to build with us, host
            with us, or just tell us what we're getting wrong —{" "}
            <Link
              href="/contact"
              className="text-bone underline decoration-ash/40 underline-offset-4 transition-colors hover:decoration-bone"
            >
              get in touch
            </Link>
            . We'd love to hear from you.
          </p>
        </div>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            The best nights don't just happen.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-bone/65">
            Discover, host, and remember them all in one place.
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
