import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  Container,
  PageHero,
  PageShell,
  Section,
} from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Contact — Event House",
  description:
    "Get in touch with Event House — support, hosting and partnerships, press, or just to say hello.",
};

type Channel = {
  label: string;
  email: string;
  blurb: string;
};

const CHANNELS: Channel[] = [
  {
    label: "General",
    email: "hello@eventhouse.app",
    blurb: "Questions, ideas, or a hello. We read everything.",
  },
  {
    label: "Support",
    email: "support@eventhouse.app",
    blurb: "Trouble with the app or your account? We'll sort it out.",
  },
  {
    label: "Hosts & partnerships",
    email: "partners@eventhouse.app",
    blurb: "Running events or a venue? Let's build something together.",
  },
  {
    label: "Press",
    email: "press@eventhouse.app",
    blurb: "Media requests, assets, and interviews.",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Say hello."
        lede="Pick the right inbox and we'll get back to you — usually within a day or two."
      />

      <Section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CHANNELS.map((channel) => (
            <Card key={channel.email} className="flex flex-col">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
                {channel.label}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-bone/65">
                {channel.blurb}
              </p>
              <a
                href={`mailto:${channel.email}`}
                className="mt-4 inline-block text-[15px] font-medium text-bone underline decoration-ash/40 underline-offset-4 transition-colors duration-150 hover:decoration-bone"
              >
                {channel.email}
              </a>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-12 text-center">
          <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-bone">
            Looking to join instead?
          </h2>
          <p className="mx-auto mt-3 max-w-[420px] text-[15px] leading-relaxed text-bone/65">
            Event House is rolling out now. Grab the app or join the Android
            waitlist.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/download"
              className="flex h-11 items-center rounded-full bg-bone px-5 text-sm font-medium text-ink transition-transform duration-200 ease-out motion-safe:hover:scale-[1.02]"
            >
              Get Event House
            </Link>
            <Link
              href="/company"
              className="flex h-11 items-center rounded-full border border-ash px-5 text-sm font-medium text-bone transition-colors duration-200 hover:border-bone/60"
            >
              Our story
            </Link>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
