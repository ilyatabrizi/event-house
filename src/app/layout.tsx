import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Event House",
  description:
    "Discover events near you, host your own, and keep a record of every good night — all from your phone.",
  icons: {
    icon: [
      { url: "/logo/Web/favicon_16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/Web/favicon_32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/Web/favicon_48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo/Web/favicon_192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo/Web/favicon_512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/logo/Web/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/logo/Web/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0B10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-bone">
        {children}
      </body>
    </html>
  );
}
