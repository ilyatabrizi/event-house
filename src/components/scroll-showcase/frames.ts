/* App screenshots for the scroll story (Nodestar-style pinned sequence).
 * `glow` / `wash` / `spark` drive the luxury atmosphere that morphs with the screen.
 * `mobileTitle` / `mobileCopy` are shorter beats for the horizontal phone carousel. */

import { BRAND_TAGLINE, BRAND_TAGLINE_SHORT } from "@/lib/brand";

export const FRAMES = [
  {
    id: 1,
    label: "Home",
    title: BRAND_TAGLINE,
    copy: "Discover what's on near you, see who's going, and find something worth showing up for.",
    mobileTitle: BRAND_TAGLINE_SHORT,
    mobileCopy: "Discover events, host your own, and remember the nights that matter.",
    image: "/covercase/01-home.png",
    color: "#0A0A0A",
    accent: "#FF5B3D",
    glow: "#FF5B3D",
    wash: "#3D1814",
    spark: "#FF884A",
  },
  {
    id: 2,
    label: "Discover",
    title: "Find something worth showing up for.",
    copy: "Browse events by mood, time, and distance — or search hosts, places, and what's on this week.",
    mobileTitle: "Find your night.",
    mobileCopy: "Browse by mood, time, or place.",
    image: "/covercase/02-discover.png",
    color: "#0A0A0A",
    accent: "#FF5B3D",
    glow: "#E8452F",
    wash: "#2A1410",
    spark: "#FF7A5C",
  },
  {
    id: 3,
    label: "Profile",
    title: "Remember where you've been.",
    copy: "Your events, your posts, and the nights that made your city feel like yours.",
    mobileTitle: "Your nights, remembered.",
    mobileCopy: "Events, posts, and the places you've been.",
    image: "/covercase/03-profile.png",
    color: "#0C1210",
    accent: "#FF5B3D",
    glow: "#C45A3A",
    wash: "#1A2018",
    spark: "#E8A070",
  },
  {
    id: 4,
    label: "Chat",
    title: "Plan it in private.",
    copy: "Messages stay between you and them — pre-game invites included.",
    mobileTitle: "Plan it in private.",
    mobileCopy: "Pre-game invites, just between you.",
    image: "/covercase/04-chats.png",
    color: "#0A0A0A",
    accent: "#FF5B3D",
    glow: "#FF5B3D",
    wash: "#2A1018",
    spark: "#FF884A",
  },
  {
    id: 5,
    label: "Premium",
    title: "The rooms that don't get posted.",
    copy: "Members-only events, priority RSVP, zero booking fees, and a City Concierge in every city.",
    mobileTitle: "Rooms that don't get posted.",
    mobileCopy: "Members-only nights, priority RSVP, City Concierge.",
    image: "/covercase/05-premium.png",
    color: "#10100E",
    accent: "#C9A46A",
    glow: "#B8956C",
    wash: "#241810",
    spark: "#E0C4A0",
  },
  {
    id: 6,
    label: "Tickets",
    title: "Scan at the door.",
    copy: "Every upcoming night in one place — QR ready when you arrive.",
    mobileTitle: "Scan at the door.",
    mobileCopy: "Every ticket, QR ready when you arrive.",
    image: "/covercase/06-tickets.png",
    color: "#0A0A0A",
    accent: "#FF5B3D",
    glow: "#E8452F",
    wash: "#2A1018",
    spark: "#FF7A5C",
  },
] as const;

export type ShowcaseFrame = (typeof FRAMES)[number];

export const PHONE_HARDWARE =
  "w-[3px] bg-[linear-gradient(180deg,#4a4a4e,#1a1a1e)]";

/* Static ember specks drifting upward — pure CSS, transform/opacity only. */
export const PARTICLES = [
  { left: "8%", top: "72%", size: 3, duration: 14, delay: 0, tint: "ember" },
  { left: "16%", top: "88%", size: 2, duration: 18, delay: -6, tint: "bone" },
  { left: "27%", top: "78%", size: 4, duration: 16, delay: -11, tint: "ember" },
  { left: "38%", top: "92%", size: 2, duration: 20, delay: -3, tint: "bone" },
  { left: "52%", top: "84%", size: 3, duration: 15, delay: -9, tint: "ember" },
  { left: "64%", top: "90%", size: 2, duration: 19, delay: -14, tint: "bone" },
  { left: "76%", top: "76%", size: 4, duration: 13, delay: -5, tint: "ember" },
  { left: "88%", top: "86%", size: 2, duration: 17, delay: -12, tint: "bone" },
  { left: "94%", top: "70%", size: 3, duration: 21, delay: -8, tint: "ember" },
  { left: "45%", top: "96%", size: 3, duration: 16, delay: -2, tint: "ember" },
] as const;
