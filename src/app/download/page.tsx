import type { Metadata } from "next";
import Link from "next/link";
import { AndroidGlyph, AppleGlyph } from "@/components/icons";
import {
  Card,
  Container,
  PageHero,
  PageShell,
  Section,
} from "@/components/page-shell";
import { WaitlistCta } from "@/components/waitlist-cta";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Get Event House",
  description:
    "Event House is in TestFlight beta on iOS, with Android on the way. Grab an invite or join the Android waitlist.",
};

export default function DownloadPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Download"
        title="Get Event House."
        lede="We're rolling out invites city by city. iOS is live in TestFlight beta today — Android is next, and the waitlist decides who's first."
      />

      <Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* iOS */}
          <Card className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bone text-ink">
                <AppleGlyph className="size-5" />
              </span>
              <div>
                <h2 className="text-[16px] font-semibold text-bone">iOS</h2>
                <p className="font-mono text-[11px] tracking-[0.06em] text-ash">
                  v1.0.0 · iOS 17+ · TestFlight
                </p>
              </div>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-bone/65">
              The iPhone app is in open beta through TestFlight. Request an
              invite and we'll send a link to install the current build.
            </p>
            <a
              href="mailto:testflight@eventhouse.app?subject=TestFlight%20invite&body=Hi%20Event%20House%20team%2C%20I'd%20love%20a%20TestFlight%20invite."
              className={cn(
                buttonVariants(),
                "mt-6 h-11 gap-2 rounded-full border-transparent bg-bone px-5 text-sm font-medium text-ink hover:bg-bone",
              )}
            >
              <AppleGlyph className="size-4" />
              Request a TestFlight invite
            </a>
          </Card>

          {/* Android */}
          <Card className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ash text-bone">
                <AndroidGlyph className="size-5 text-ash" />
              </span>
              <div>
                <h2 className="text-[16px] font-semibold text-bone">Android</h2>
                <p className="font-mono text-[11px] tracking-[0.06em] text-ash">
                  Coming soon · Join the waitlist
                </p>
              </div>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-bone/65">
              The Android app is in the works. Drop your email and you'll be
              among the first to get in when it lands.
            </p>
            <div className="mt-6">
              <WaitlistCta />
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-ash/15 bg-bone/[0.02] px-8 py-12 text-center">
          <p className="text-[15px] leading-relaxed text-bone/70">
            Want to know what's shipped lately?
          </p>
          <Link
            href="/changelog"
            className={cn(
              buttonVariants(),
              "mx-auto mt-6 h-10 rounded-full border-ash bg-transparent px-5 text-sm font-medium text-bone hover:border-bone/60 hover:bg-transparent",
            )}
          >
            Read the changelog
          </Link>
        </Container>
      </Section>
    </PageShell>
  );
}
