import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container, PageHero, PageShell, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — Event House",
  description:
    "How Event House collects, uses, and protects your information — and the choices you have over your data.",
};

/* Local prose primitives to keep the long-form body DRY. */
function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 text-[20px] font-semibold text-bone">{children}</h2>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-relaxed text-bone/70">{children}</p>
  );
}

function List({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 list-disc pl-5 text-[15px] leading-relaxed text-bone/70">
      {children}
    </ul>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <li className="mt-2">{children}</li>;
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="This policy explains what we collect, why we collect it, and the control you have over your information on Event House."
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
          Last updated: July 12, 2026
        </p>
      </PageHero>

      <Section>
        <Container className="max-w-[720px]">
          <Heading>Overview</Heading>
          <Prose>
            Event House helps you discover, host, and attend events. To do that
            well, we collect a limited amount of information about you and how
            you use the app. This policy describes what that information is, how
            we use it, who we share it with, and the choices available to you.
            We aim to collect only what we need and to keep it in plain language.
          </Prose>

          <Heading>Information we collect</Heading>
          <Prose>
            We collect information you give us directly and information generated
            as you use Event House:
          </Prose>
          <List>
            <Item>
              <strong className="text-bone/90">Account information</strong> —
              your name, email or phone number, password, and any profile
              details you choose to add, such as a photo or bio.
            </Item>
            <Item>
              <strong className="text-bone/90">Events activity</strong> — the
              events you view, save, RSVP to, attend, or host, including guest
              lists and check-ins for events you run.
            </Item>
            <Item>
              <strong className="text-bone/90">Device and usage data</strong> —
              device type, operating system, app version, and how you interact
              with features, used to keep the app reliable and improve it.
            </Item>
            <Item>
              <strong className="text-bone/90">Location</strong> — approximate or
              precise location, but only if you enable it (see Location data
              below).
            </Item>
            <Item>
              <strong className="text-bone/90">Content you post</strong> —
              event details, descriptions, images, comments, and messages you
              create or send within the app.
            </Item>
          </List>

          <Heading>How we use information</Heading>
          <Prose>We use the information we collect to:</Prose>
          <List>
            <Item>Provide, personalize, and improve Event House.</Item>
            <Item>
              Show you relevant events and, when you allow it, events near you.
            </Item>
            <Item>
              Manage RSVPs, guest lists, ticketing, and check-in for events you
              attend or host.
            </Item>
            <Item>
              Send you notifications and updates about events and your account.
            </Item>
            <Item>
              Keep the app secure, prevent abuse, and troubleshoot problems.
            </Item>
            <Item>Meet legal and safety obligations.</Item>
          </List>

          <Heading>Location data</Heading>
          <Prose>
            We only access your location if you grant permission through your
            device settings. When enabled, we use it to surface nearby events
            and improve discovery. You can turn location access off at any time
            in your device or app settings, and Event House will continue to
            work without it — you may just see fewer location-based suggestions.
          </Prose>

          <Heading>How we share information</Heading>
          <Prose>
            We do not sell your personal data. We share information only in these
            limited situations:
          </Prose>
          <List>
            <Item>
              <strong className="text-bone/90">With hosts</strong> — when you
              RSVP to or attend an event, the host can see the information needed
              to manage their guest list, such as your name and RSVP status.
            </Item>
            <Item>
              <strong className="text-bone/90">With service providers</strong> —
              trusted vendors who help us run Event House, such as hosting,
              analytics, and payment processing, under agreements that limit how
              they can use your data.
            </Item>
            <Item>
              <strong className="text-bone/90">For legal reasons</strong> — when
              we believe disclosure is required by law, or necessary to protect
              the rights, safety, and security of our users or the public.
            </Item>
          </List>

          <Heading>Your choices and rights</Heading>
          <Prose>
            You have meaningful control over your information. Depending on where
            you live, you can:
          </Prose>
          <List>
            <Item>Access and review the information associated with your account.</Item>
            <Item>Export a copy of your data.</Item>
            <Item>Delete your account and associated personal data.</Item>
            <Item>Manage or turn off push and email notifications.</Item>
            <Item>Toggle location access on or off at any time.</Item>
          </List>
          <Prose>
            You can exercise most of these directly in the app. If you need help,
            reach out using the contact details below.
          </Prose>

          <Heading>Data retention</Heading>
          <Prose>
            We keep your information for as long as your account is active or as
            needed to provide Event House. When you delete your account, we
            remove or de-identify your personal data within a reasonable period,
            except where we are required to retain certain records for legal,
            accounting, or security purposes.
          </Prose>

          <Heading>Security</Heading>
          <Prose>
            We use technical and organizational measures — including encryption
            in transit and access controls — to protect your information against
            unauthorized access, loss, or misuse. No system is perfectly secure,
            but we work continuously to safeguard your data and to respond
            quickly if an issue arises.
          </Prose>

          <Heading>Children</Heading>
          <Prose>
            Event House is intended for people aged 13 and older, and some
            content or events may be intended for older audiences. We do not
            knowingly collect personal information from children under 13. If you
            believe a child under 13 has provided us with information, please
            contact us and we will take steps to remove it.
          </Prose>

          <Heading>Changes to this policy</Heading>
          <Prose>
            We may update this policy from time to time as Event House evolves or
            as laws change. When we make material changes, we will update the
            date above and, where appropriate, notify you in the app. Continued
            use of Event House after an update means you accept the revised
            policy.
          </Prose>

          <Heading>Contact</Heading>
          <Prose>
            If you have questions about this policy or how we handle your data,
            email us at{" "}
            <a
              href="mailto:privacy@eventhouse.app"
              className="text-bone underline decoration-ash/40 underline-offset-4 hover:decoration-bone/60"
            >
              privacy@eventhouse.app
            </a>{" "}
            or reach out through our{" "}
            <Link
              href="/contact"
              className="text-bone underline decoration-ash/40 underline-offset-4 hover:decoration-bone/60"
            >
              contact page
            </Link>
            .
          </Prose>
        </Container>
      </Section>
    </PageShell>
  );
}
