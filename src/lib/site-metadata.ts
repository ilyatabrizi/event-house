import type { Metadata } from "next";

export const siteName = "Event House";

export const siteDescription =
  "Discover events near you, host your own, and keep a record of every good night — all from your phone.";

/** Canonical production URL; override with NEXT_PUBLIC_SITE_URL when you add a custom domain. */
export function getSiteUrl(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return new URL(fromEnv);

  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }

  if (process.env.NODE_ENV === "development") {
    return new URL("http://localhost:3000");
  }

  return new URL("https://event-house-alphaaagency.vercel.app");
}

export const siteMetadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteName,
    template: "%s — Event House",
  },
  description: siteDescription,
  applicationName: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
};
