import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, Container, PageHero, PageShell, Section } from "@/components/page-shell";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Changelog — Event House",
  description:
    "Every release of Event House, newest first — the features, fixes, and refinements shaping how the city goes out.",
};

type Release = {
  version: string;
  date?: string;
  status?: string;
  title: string;
  changes: string[];
};

const RELEASES: Release[] = [
  {
    version: "v1.3.0",
    date: "2026-07-12",
    title: "Plans with friends",
    changes: [
      "Added shared plans so a group could commit to a night together in one tap.",
      "Introduced live guest lists that updated as friends RSVP'd.",
      "Rebuilt notifications to group by event and quiet the noise.",
      "Fixed a rare crash when opening events with very long descriptions.",
    ],
  },
  {
    version: "v1.2.1",
    date: "2026-07-12",
    title: "Faster, quieter",
    changes: [
      "Cut cold-start time on the discover feed by roughly forty percent.",
      "Smoothed map clustering when browsing dense neighborhoods.",
      "Resolved a bug where saved events occasionally lost their reminders.",
    ],
  },
  {
    version: "v1.2.0",
    date: "2026-07-12",
    title: "Discover, refined",
    changes: [
      "Reworked discovery around the times you actually go out.",
      "Added filters for vibe, distance, and who's already going.",
      "Brought hosts a lightweight preview of how their event would appear.",
    ],
  },
  {
    version: "v1.1.0",
    date: "2026-07-11",
    title: "Hosting tools land",
    changes: [
      "Shipped guest lists, co-hosts, and door check-in for hosts.",
      "Added event drafts so a night could take shape before going public.",
      "Improved photo uploads with faster compression and previews.",
    ],
  },
  {
    version: "v1.0.1",
    date: "2026-07-11",
    title: "Launch-day polish",
    changes: [
      "Patched sign-in edge cases reported in the first hours after launch.",
      "Tuned push notification copy and delivery timing.",
      "Fixed layout glitches on smaller iPhone displays.",
    ],
  },
  {
    version: "v1.0.0",
    date: "2026-07-11",
    title: "Introducing Event House",
    changes: [
      "Launched Event House on iOS to the public.",
      "Discover events near you, RSVP, and save the ones you love.",
      "Follow hosts and friends to keep up with what's on.",
      "Kept every night you attended as a personal record.",
    ],
  },
];

const ROADMAP: { title: string; blurb: string }[] = [
  {
    title: "Android, in the works",
    blurb: "Bringing Event House to Android so no one gets left off the list.",
  },
  {
    title: "Ticketing for hosts",
    blurb: "Low flat fees, built-in check-in, and payouts that arrive on time.",
  },
  {
    title: "Recaps",
    blurb: "A shareable look back at the nights you and your friends showed up for.",
  },
];

export default function ChangelogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Changelog"
        title="What's new in Event House."
        lede="Every release, newest first — the features, fixes, and small refinements shaping how the city goes out."
      />

      <Section>
        <div className="flex flex-col gap-4">
          {RELEASES.map((release) => (
            <Card key={release.version} className="md:flex md:gap-10">
              <div className="mb-5 shrink-0 md:mb-0 md:w-40">
                <p className="font-mono text-[13px] font-medium text-bone">
                  {release.version}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ash">
                  {release.date ?? release.status}
                </p>
              </div>

              <div className="md:flex-1">
                <h2 className="text-[16px] font-semibold text-bone">
                  {release.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-[14px] leading-relaxed text-bone/80">
                  {release.changes.map((change) => (
                    <li key={change} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ash"
                      />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="On the roadmap"
        intro="Not shipped yet, but on the way. Dates land here once they're real."
      >
        <div className="flex flex-col gap-4">
          {ROADMAP.map((item) => (
            <Card key={item.title} className="md:flex md:gap-10">
              <div className="mb-4 shrink-0 md:mb-0 md:w-40">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ash">
                  Planned
                </p>
              </div>
              <div className="md:flex-1">
                <h3 className="text-[15px] font-semibold text-bone">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-bone/65">
                  {item.blurb}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-14 text-center">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-bone sm:text-[32px]">
            Get the latest, on your phone.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-bone/65">
            Every release ships to iOS first. Download Event House and go out.
          </p>
          <Link
            href="/download"
            className={cn(
              buttonVariants(),
              "mx-auto mt-8 h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
            )}
          >
            Download for iOS
          </Link>
        </Container>
      </Section>
    </PageShell>
  );
}
