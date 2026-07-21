/* App screenshots for the scroll story (Nodestar-style pinned sequence).
 * `glow` / `wash` / `spark` drive the luxury atmosphere that morphs with the screen. */

export const FRAMES = [
  {
    id: 1,
    label: "Home",
    title: "The city has plans tonight.",
    copy: "A feed that knows Dubai — recommended nights, who's going, and what it costs.",
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
    title: "Find your night.",
    copy: "Search events, hosts, and places — or browse by the mood you're after.",
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
    title: "Your night out, filed.",
    copy: "Posts, events, and the people who follow where you go.",
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
    title: "For people who go out often.",
    copy: "A verified badge, members-only nights, and a concierge in every city.",
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
