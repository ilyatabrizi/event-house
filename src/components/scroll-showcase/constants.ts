export type ShowcaseFrame = {
  id: number;
  label: string;
  title: string;
  copy: string;
  color: string;
  accent: string;
  glow: string;
  wash: string;
  spark: string;
};

/* Placeholder app frames — replace `color` panels with real screenshots later.
 * Each frame is one beat of the scroll story (Nodestar-style pinned sequence).
 * `glow` / `wash` / `spark` drive the luxury atmosphere that morphs with the screen. */
export const FRAMES: readonly ShowcaseFrame[] = [
  {
    id: 1,
    label: "Discover",
    title: "The city has plans tonight.",
    copy: "Open the map and see what's happening within walking distance.",
    color: "#2A1614",
    accent: "#FF5B3D",
    glow: "#FF5B3D",
    wash: "#3D1814",
    spark: "#FF884A",
  },
  {
    id: 2,
    label: "Tonight",
    title: "A night, curated.",
    copy: "Filters that respect the mood — live music, rooftops, late kitchens.",
    color: "#1C1410",
    accent: "#E8A070",
    glow: "#D4A574",
    wash: "#2A1C12",
    spark: "#F0C9A0",
  },
  {
    id: 3,
    label: "Near you",
    title: "Always in reach.",
    copy: "Distance, start time, and who's going — without the noise.",
    color: "#14181C",
    accent: "#8BA4B8",
    glow: "#6B8FA3",
    wash: "#101820",
    spark: "#A8C4D4",
  },
  {
    id: 4,
    label: "Host",
    title: "Put something on.",
    copy: "Publish in minutes. Guests find you the same night.",
    color: "#1A1218",
    accent: "#C4A484",
    glow: "#B8956C",
    wash: "#241810",
    spark: "#E0C4A0",
  },
  {
    id: 5,
    label: "Rewards",
    title: "Nights that count.",
    copy: "Earn for showing up. Redeem for the next good room.",
    color: "#161418",
    accent: "#FF5B3D",
    glow: "#E8452F",
    wash: "#2A1018",
    spark: "#FF7A5C",
  },
  {
    id: 6,
    label: "Memories",
    title: "Keep the record.",
    copy: "Every ticket, photo, and late checkout — filed for you.",
    color: "#101418",
    accent: "#A8B4C0",
    glow: "#8A9AAC",
    wash: "#0C1018",
    spark: "#D0D8E0",
  },
] as const;

export const HARDWARE =
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
