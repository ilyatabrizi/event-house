import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service — Event House",
  description:
    "The terms that govern your use of Event House — discovering, hosting, and attending events.",
};

/* Local long-form primitives, scoped to this page. */
function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 text-[20px] font-semibold text-bone">{children}</h2>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-relaxed text-bone/70">{children}</p>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="mt-4 list-disc pl-5 text-bone/70">{children}</ul>;
}

function Item({ children }: { children: ReactNode }) {
  return <li className="mt-2 text-[15px] leading-relaxed">{children}</li>;
}

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lede="These terms explain the rules for using Event House and what you can expect from us. Please read them carefully."
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
          Last updated: July 12, 2026
        </p>
      </PageHero>

      <section className="py-16 md:py-20">
        <Container className="max-w-[720px]">
          <Heading>1. Agreement to these terms</Heading>
          <Paragraph>
            Event House is a social app for discovering, hosting, and attending
            events. By downloading the app, creating an account, or otherwise
            using Event House, you agree to these Terms of Service and to our
            Privacy Policy. If you do not agree, please do not use the app. If
            you are using Event House on behalf of an organization, you confirm
            that you have the authority to accept these terms for that
            organization.
          </Paragraph>

          <Heading>2. Eligibility</Heading>
          <Paragraph>
            You must be at least 13 years old to use Event House, and old enough
            to form a binding contract where you live. Some events, features, or
            payments may carry their own age requirements, and hosts may set
            additional age limits for their events. By using the app, you
            represent that you meet these requirements and that the information
            you provide about yourself is accurate.
          </Paragraph>

          <Heading>3. Your account</Heading>
          <Paragraph>
            To use most features you will need an account. You agree to provide
            accurate, current information and to keep it up to date. You are
            responsible for keeping your login credentials safe and for all
            activity that happens under your account. If you believe your
            account has been compromised, let us know right away so we can help
            protect it.
          </Paragraph>

          <Heading>4. Acceptable use</Heading>
          <Paragraph>
            Event House works because people treat each other and the community
            with respect. When using the app, you agree not to:
          </Paragraph>
          <List>
            <Item>
              Organize, promote, or attend events that are illegal or that put
              others at risk.
            </Item>
            <Item>
              Harass, threaten, impersonate, or discriminate against other
              people.
            </Item>
            <Item>
              Post spam, scams, misleading listings, or unsolicited
              advertising.
            </Item>
            <Item>
              Scrape, crawl, or harvest data from the app, or use bots to access
              it, except as expressly permitted.
            </Item>
            <Item>
              Upload malware, attempt to breach security, or interfere with the
              app&rsquo;s normal operation.
            </Item>
            <Item>
              Infringe anyone&rsquo;s intellectual property, privacy, or other
              rights.
            </Item>
            <Item>
              Use the app to collect or misuse other people&rsquo;s personal
              information.
            </Item>
          </List>
          <Paragraph>
            We may remove content, cancel listings, or suspend accounts that
            violate these rules.
          </Paragraph>

          <Heading>5. Hosting events</Heading>
          <Paragraph>
            If you host an event, you are solely responsible for it. That
            includes making sure your listing is accurate, that the event
            actually happens as described, and that you comply with all
            applicable laws, permits, venue rules, and safety requirements where
            the event takes place. You are responsible for interactions with
            your guests, for any refunds you offer, and for honoring the terms
            you publish. Event House provides the tools to host, but we are not
            the organizer of your event and are not responsible for how it is
            run.
          </Paragraph>

          <Heading>6. Tickets and payments</Heading>
          <Paragraph>
            Some events are free and some are ticketed. When an event is
            ticketed, the price and any service fees are shown to you before you
            complete a purchase. Payments are handled through third-party
            payment processors, and by paying you also agree to their terms.
            Cancellations, refunds, and changes are generally set by the host
            and described on the event; where a host offers no refund, none may
            be available. Initiating a chargeback instead of requesting a refund
            through the app may result in suspension of your account. Any fees we
            charge to hosts are disclosed before an event is published.
          </Paragraph>

          <Heading>7. Your content and the license you grant</Heading>
          <Paragraph>
            You keep ownership of the content you create and share on Event
            House &mdash; your photos, event descriptions, comments, and
            anything else you post. To operate the app, you grant Event House a
            worldwide, non-exclusive, royalty-free license to host, store,
            reproduce, and display that content so we can show it within the app
            and its features, including in discovery and event pages. This
            license lasts only as long as needed to provide the service and ends
            when you remove your content, except for copies retained for legal
            or backup purposes. You are responsible for the content you post and
            confirm you have the rights to share it.
          </Paragraph>

          <Heading>8. Intellectual property</Heading>
          <Paragraph>
            Event House, including the app, its design, logos, and software, is
            owned by us and protected by intellectual property laws. We grant
            you a limited, personal, non-transferable license to use the app for
            its intended purpose. You may not copy, modify, distribute, sell, or
            reverse-engineer any part of the app except as the law allows.
          </Paragraph>

          <Heading>9. Third-party services</Heading>
          <Paragraph>
            Event House may link to or rely on third-party services, such as
            maps, payment processors, and app stores. We do not control those
            services and are not responsible for their content or practices.
            Your use of a third-party service is governed by that
            provider&rsquo;s own terms and privacy policies.
          </Paragraph>

          <Heading>10. Disclaimers</Heading>
          <Paragraph>
            Event House is provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranties of any kind, whether express or
            implied, to the fullest extent permitted by law. We do not warrant
            that the app will be uninterrupted, error-free, or secure, or that
            any event listed will meet your expectations. We are not responsible
            for the conduct of hosts, guests, or other users, whether online or
            at an event.
          </Paragraph>

          <Heading>11. Limitation of liability</Heading>
          <Paragraph>
            To the fullest extent permitted by law, Event House and its team will
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages, or for any loss of data, profits, or goodwill,
            arising from your use of the app or attendance at any event. Where
            liability cannot be excluded, it is limited to the amount you paid us
            in the twelve months before the claim, or the minimum permitted by
            law.
          </Paragraph>

          <Heading>12. Termination</Heading>
          <Paragraph>
            You may stop using Event House and delete your account at any time.
            We may suspend or terminate your access if you violate these terms,
            create risk for others, or if we are required to by law. Provisions
            that by their nature should survive termination &mdash; such as
            content licenses already granted, disclaimers, and limitations of
            liability &mdash; will continue to apply.
          </Paragraph>

          <Heading>13. Changes to these terms</Heading>
          <Paragraph>
            We may update these terms from time to time as the app evolves. When
            we make material changes, we will update the date above and, where
            appropriate, notify you in the app. By continuing to use Event House
            after changes take effect, you agree to the updated terms.
          </Paragraph>

          <Heading>14. Governing law</Heading>
          <Paragraph>
            These terms are governed by the laws applicable where Event House
            operates, without regard to conflict-of-laws principles. Any
            disputes will be resolved in the courts having jurisdiction there,
            unless local law grants you the right to bring a claim elsewhere.
          </Paragraph>

          <Heading>15. Contact us</Heading>
          <Paragraph>
            If you have questions about these terms, reach us at{" "}
            <a
              href="mailto:hello@eventhouse.app"
              className="text-bone underline underline-offset-4 decoration-ash/40 hover:decoration-bone/60"
            >
              hello@eventhouse.app
            </a>{" "}
            or through our{" "}
            <Link
              href="/contact"
              className="text-bone underline underline-offset-4 decoration-ash/40 hover:decoration-bone/60"
            >
              contact page
            </Link>
            .
          </Paragraph>
        </Container>
      </section>
    </PageShell>
  );
}
