"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { AppleGlyph, BatteryGlyph, SignalGlyph, WifiGlyph } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { WaitlistCta } from "@/components/waitlist-cta";
import { cn } from "@/lib/utils";

/* Placeholder app frames — replace `color` panels with real screenshots later.
 * Each frame is one beat of the scroll story (Nodestar-style pinned sequence).
 * `glow` / `wash` / `spark` drive the luxury atmosphere that morphs with the screen. */
const FRAMES = [
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

const hardware = "w-[3px] bg-[linear-gradient(180deg,#4a4a4e,#1a1a1e)]";

/* Static ember specks drifting upward — pure CSS, transform/opacity only. */
const PARTICLES = [
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

export function ScrollShowcase() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.4,
  });

  const phoneY = useTransform(smoothProgress, [0, 1], [28, -28]);
  /* The phone slowly turns as screens change — spatial depth on scroll. */
  const phoneRotateY = useTransform(
    smoothProgress,
    (p) => -12 + Math.sin(p * Math.PI * 2.4) * 8,
  );
  const phoneRotateX = useTransform(
    smoothProgress,
    (p) => 4 + Math.sin(p * Math.PI * 1.6) * 3,
  );
  const hintOpacity = useTransform(smoothProgress, [0, 0.06], [1, 0]);

  useMotionValueEvent(smoothProgress, "change", (p) => {
    const next = Math.round(
      Math.min(FRAMES.length - 1, Math.max(0, p * (FRAMES.length - 1))),
    );
    setActive((prev) => (prev === next ? prev : next));
  });

  function scrollToFrame(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const top = window.scrollY + track.getBoundingClientRect().top;
    const scrollable = track.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + (i / (FRAMES.length - 1)) * scrollable,
      behavior: "smooth",
    });
  }

  if (reduceMotion) {
    return (
      <section className="relative overflow-hidden bg-ink">
        <AtmosphereStatic frame={FRAMES[0]} />
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-16 px-6 pb-24 pt-36 md:px-8 lg:px-12">
          <StaticIntro frame={FRAMES[0]} />
          <div className="w-[min(280px,72vw)] sm:w-[300px]">
            <PhoneFrame activeIndex={0} />
          </div>
          <ul className="grid w-full max-w-md gap-3">
            {FRAMES.map((frame) => (
              <li
                key={frame.id}
                className="flex h-24 items-center justify-center rounded-2xl text-2xl font-semibold tracking-tight text-bone/90"
                style={{ backgroundColor: frame.color }}
              >
                {String(frame.id).padStart(2, "0")}
                <span className="ml-3 text-sm font-medium tracking-[0.12em] text-bone/50 uppercase">
                  {frame.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      className="relative"
      style={{ height: `${FRAMES.length * 100}vh` }}
      aria-label="Product showcase"
    >
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden bg-ink">
        <LuxuryAtmosphere progress={smoothProgress} />

        {/* Kinetic backdrop word — huge outlined label gliding behind everything */}
        <KineticWord progress={smoothProgress} />

        {/* Ember specks rising through the scene */}
        <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
          {PARTICLES.map((particle, i) => (
            <span
              key={i}
              className={cn(
                "eh-particle absolute rounded-full",
                particle.tint === "ember" ? "bg-ember/50" : "bg-bone/30",
              )}
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="grain absolute inset-0 z-[1]" aria-hidden="true" />

        {/* Right-side chapter rail — jump between screens */}
        <nav
          className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex xl:right-10"
          aria-label="Showcase chapters"
        >
          {FRAMES.map((frame, i) => (
            <button
              key={frame.id}
              onClick={() => scrollToFrame(i)}
              className="group flex cursor-pointer items-center gap-3"
              aria-label={`Go to ${frame.label}`}
              aria-current={i === active ? "step" : undefined}
            >
              <span
                className={cn(
                  "font-mono text-[10px] tracking-[0.14em] uppercase transition-all duration-300",
                  i === active
                    ? "translate-x-0 text-bone opacity-100"
                    : "translate-x-2 text-ash opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                )}
              >
                {frame.label}
              </span>
              <span
                className={cn(
                  "h-px transition-all duration-300",
                  i === active
                    ? "w-8 bg-ember"
                    : "w-4 bg-bone/25 group-hover:bg-bone/50",
                )}
              />
            </button>
          ))}
        </nav>

        {/* Scroll hint — fades as soon as the journey starts */}
        <motion.div
          className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          style={{ opacity: hintOpacity }}
          aria-hidden="true"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-ash/80">
            SCROLL
          </span>
          <span className="eh-scroll-line block h-8 w-px bg-gradient-to-b from-ember/70 to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col px-6 pt-24 pb-6 max-sm:justify-between md:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:pt-24 lg:pb-12">
          <div className="flex shrink-0 flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left">
            <p className="font-mono text-[11px] tracking-[0.16em] text-ash">
              EVENT HOUSE
              <span className="mx-2 text-ash/40">·</span>
              <span className="text-bone/70">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(FRAMES.length).padStart(2, "0")}
              </span>
            </p>

            <div className="relative mt-4 grid w-full max-w-xl sm:mt-6">
              {FRAMES.map((frame, i) => (
                <motion.div
                  key={frame.id}
                  className="col-start-1 row-start-1 flex flex-col items-center lg:items-start"
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  aria-hidden={i !== active}
                  style={{ pointerEvents: i === active ? "auto" : "none" }}
                >
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: i === active ? 1 : 0,
                      y: i === active ? 0 : 10,
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="font-mono text-[11px] tracking-[0.18em] text-ember/80 uppercase"
                  >
                    {frame.label}
                  </motion.p>
                  <h1 className="mt-2 text-balance text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-bone sm:mt-3 sm:text-[48px] lg:text-[clamp(48px,4.8vw,64px)]">
                    {frame.title.split(" ").map((word, w) => (
                      <span
                        key={w}
                        className="inline-block overflow-hidden pb-[0.08em] align-bottom"
                      >
                        <motion.span
                          className="inline-block"
                          initial={false}
                          animate={{
                            y: i === active ? 0 : "110%",
                            opacity: i === active ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: i === active ? 0.05 + w * 0.055 : 0,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {word}
                        </motion.span>
                        {w < frame.title.split(" ").length - 1 && "\u00A0"}
                      </span>
                    ))}
                  </h1>
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: i === active ? 1 : 0,
                      y: i === active ? 0 : 12,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i === active ? 0.18 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-3 max-w-[420px] text-[15px] leading-relaxed text-bone/65 sm:mt-4 sm:text-[17px]"
                  >
                    {frame.copy}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
              <Link
                id="eh-cta-ios"
                href="/download"
                className={cn(
                  buttonVariants(),
                  "h-11 cursor-pointer gap-2 rounded-full border-transparent bg-bone px-5 text-sm font-medium text-ink transition-colors duration-200 ease-out hover:bg-bone focus-visible:border-transparent focus-visible:ring-0",
                )}
              >
                <AppleGlyph className="size-4" />
                Download for iOS
              </Link>
              <WaitlistCta />
            </div>

            <div
              className="mt-6 flex items-center gap-2 sm:mt-10"
              role="group"
              aria-label="Showcase progress"
            >
              {FRAMES.map((frame, i) => (
                <button
                  key={frame.id}
                  onClick={() => scrollToFrame(i)}
                  aria-label={`Go to ${frame.label}`}
                  aria-current={i === active ? "step" : undefined}
                  className={cn(
                    "h-[3px] cursor-pointer rounded-full transition-all duration-300 ease-out",
                    i === active
                      ? "w-8 bg-ember"
                      : "w-3 bg-bone/20 hover:bg-bone/40",
                  )}
                />
              ))}
            </div>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-end justify-center max-sm:mt-4 lg:mt-0 lg:items-center lg:justify-end"
            style={{ perspective: 1600 }}
          >
            <motion.div
              className="w-[min(220px,58vw)] sm:w-[280px] lg:w-[340px]"
              style={{
                y: phoneY,
                rotateY: phoneRotateY,
                rotateX: phoneRotateX,
                transformStyle: "preserve-3d",
              }}
            >
              <PhoneFrame activeIndex={active} progress={smoothProgress} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StaticIntro({ frame }: { frame: (typeof FRAMES)[number] }) {
  return (
    <div className="flex max-w-xl flex-col items-center text-center">
      <p className="font-mono text-[11px] tracking-[0.16em] text-ash">
        EVENT HOUSE
      </p>
      <h1 className="mt-5 text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-bone sm:text-[56px]">
        {frame.title}
      </h1>
      <p className="mt-5 text-[17px] leading-relaxed text-bone/70">{frame.copy}</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/download"
          className={cn(
            buttonVariants(),
            "h-11 cursor-pointer gap-2 rounded-full border-transparent bg-bone px-5 text-sm font-medium text-ink",
          )}
        >
          <AppleGlyph className="size-4" />
          Download for iOS
        </Link>
        <WaitlistCta />
      </div>
    </div>
  );
}

/* Giant outlined chapter word gliding across the backdrop — editorial luxury. */
function KineticWord({ progress }: { progress: MotionValue<number> }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] flex items-center overflow-hidden"
      aria-hidden="true"
    >
      {FRAMES.map((frame, i) => (
        <KineticWordLayer key={frame.id} frame={frame} index={i} progress={progress} />
      ))}
    </div>
  );
}

function KineticWordLayer({
  frame,
  index,
  progress,
}: {
  frame: (typeof FRAMES)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (p) => {
    const pos = p * (FRAMES.length - 1);
    const dist = Math.abs(pos - index);
    if (dist >= 1) return 0;
    return (1 - dist) * 0.14;
  });
  /* Each word drifts sideways as its chapter passes — parallax slower than scroll. */
  const x = useTransform(progress, (p) => {
    const pos = p * (FRAMES.length - 1);
    return (index - pos) * 220 + (index % 2 === 0 ? -40 : 40);
  });

  return (
    <motion.span
      className="absolute left-1/2 top-[16%] w-max -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-bold uppercase leading-none tracking-[-0.02em] lg:top-auto lg:text-[13vw]"
      style={{
        opacity,
        x,
        color: "transparent",
        WebkitTextStroke: `1px ${frame.spark}`,
      }}
    >
      {frame.label}
    </motion.span>
  );
}

/* Scroll-synced aurora mesh — each frame’s wash crossfades with the phone screen. */
function LuxuryAtmosphere({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-ink" />
      {FRAMES.map((frame, i) => (
        <AtmosphereLayer key={frame.id} frame={frame} index={i} progress={progress} />
      ))}
      {/* Soft stage light from above — “something’s arriving” */}
      <div className="eh-stage-beam absolute inset-x-0 top-0 h-[55%]" />
      {/* Horizon bloom behind the phone */}
      <div className="eh-horizon absolute inset-x-0 bottom-0 h-[45%]" />
      {/* Edge vignette keeps copy readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 45%, transparent 35%, rgba(14,11,16,0.55) 100%)",
        }}
      />
    </div>
  );
}

function AtmosphereStatic({ frame }: { frame: (typeof FRAMES)[number] }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0">
        <AtmosphereOrbs frame={frame} animate={false} />
      </div>
      <div className="eh-stage-beam absolute inset-x-0 top-0 h-[55%]" />
      <div className="eh-horizon absolute inset-x-0 bottom-0 h-[45%]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 45%, transparent 35%, rgba(14,11,16,0.55) 100%)",
        }}
      />
      <div className="grain absolute inset-0" />
    </div>
  );
}

function AtmosphereLayer({
  frame,
  index,
  progress,
}: {
  frame: (typeof FRAMES)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (p) => {
    const pos = p * (FRAMES.length - 1);
    const dist = Math.abs(pos - index);
    if (dist >= 1) return 0;
    return 1 - dist;
  });

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <AtmosphereOrbs frame={frame} animate />
    </motion.div>
  );
}

function AtmosphereOrbs({
  frame,
  animate,
}: {
  frame: (typeof FRAMES)[number];
  animate: boolean;
}) {
  return (
    <>
      {/* Deep color field */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 72% 48%, ${frame.wash} 0%, transparent 58%),
            radial-gradient(ellipse 70% 55% at 18% 28%, ${frame.glow}28 0%, transparent 52%),
            linear-gradient(165deg, ${frame.wash}cc 0%, #0E0B10 48%, #0E0B10 100%)
          `,
        }}
      />
      {/* Primary glow — behind phone */}
      <div
        className={cn(
          "eh-orb absolute h-[min(720px,90vw)] w-[min(720px,90vw)] rounded-full",
          animate && "eh-orb-drift-a",
        )}
        style={{
          top: "8%",
          right: "-8%",
          background: `radial-gradient(circle, ${frame.glow}55 0%, ${frame.glow}18 35%, transparent 68%)`,
          filter: "blur(40px)",
        }}
      />
      {/* Secondary wash — upper left */}
      <div
        className={cn(
          "eh-orb absolute h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full",
          animate && "eh-orb-drift-b",
        )}
        style={{
          top: "-12%",
          left: "-10%",
          background: `radial-gradient(circle, ${frame.spark}40 0%, ${frame.wash}30 40%, transparent 70%)`,
          filter: "blur(50px)",
        }}
      />
      {/* Soft spark near center */}
      <div
        className={cn(
          "eh-orb absolute h-[min(380px,55vw)] w-[min(380px,55vw)] rounded-full",
          animate && "eh-orb-drift-c",
        )}
        style={{
          top: "35%",
          left: "35%",
          background: `radial-gradient(circle, ${frame.spark}22 0%, transparent 65%)`,
          filter: "blur(60px)",
        }}
      />
      {/* Thin iridescent rim light */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background: `
            conic-gradient(
              from 210deg at 65% 45%,
              transparent 0deg,
              ${frame.spark}14 40deg,
              transparent 90deg,
              ${frame.glow}10 160deg,
              transparent 220deg,
              ${frame.spark}08 300deg,
              transparent 360deg
            )
          `,
        }}
      />
    </>
  );
}

function PhoneFrame({
  activeIndex,
  progress,
}: {
  activeIndex: number;
  progress?: MotionValue<number>;
}) {
  const accent = FRAMES[activeIndex]?.glow ?? "#FF5B3D";

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[60px] transition-[box-shadow] duration-700 ease-out"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${accent}33 0%, transparent 70%)`,
          filter: "blur(24px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[52px] transition-[box-shadow] duration-700 ease-out"
        style={{
          boxShadow: `0 50px 100px ${accent}22, 0 30px 60px rgba(0,0,0,0.55)`,
        }}
      />
      <div className="relative aspect-[380/780] w-full rounded-[52px] bg-[linear-gradient(155deg,#4a4a4e,#1a1a1e)] p-[3px] shadow-[inset_0_0_0_1px_rgba(242,238,231,0.06)]">
        <div className={`absolute -left-[2px] top-[17%] h-[3.5%] rounded-l-[2px] ${hardware}`} />
        <div className={`absolute -left-[2px] top-[24%] h-[6%] rounded-l-[2px] ${hardware}`} />
        <div className={`absolute -left-[2px] top-[31.5%] h-[6%] rounded-l-[2px] ${hardware}`} />
        <div className={`absolute -right-[2px] top-[25%] h-[9%] rounded-r-[2px] ${hardware}`} />
        <div className={`absolute -right-[2px] top-[66%] h-[4.5%] rounded-r-[2px] ${hardware}`} />

        <div className="h-full w-full rounded-[49px] bg-[#050508] p-[6px]">
          <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-ink">
            <div className="absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between px-7">
              <span className="text-[15px] font-semibold text-bone">9:41</span>
              <span className="flex items-center gap-1.5 text-bone">
                <SignalGlyph className="h-[10px] w-auto" />
                <WifiGlyph className="h-[10px] w-auto" />
                <BatteryGlyph className="h-[11px] w-auto" />
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-3 z-20 h-[32px] w-[112px] -translate-x-1/2 rounded-full bg-[#050508]"
            />

            <div className="absolute inset-0">
              {FRAMES.map((frame, i) =>
                progress ? (
                  <ScreenLayer key={frame.id} frame={frame} index={i} progress={progress} />
                ) : (
                  <div
                    key={frame.id}
                    className={cn(
                      "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500",
                      i === activeIndex ? "opacity-100" : "opacity-0",
                    )}
                    style={{ backgroundColor: frame.color }}
                    aria-hidden={i !== activeIndex}
                  >
                    <ScreenContent frame={frame} />
                  </div>
                ),
              )}
            </div>

            {/* Light sweep across the glass on every screen change */}
            <div
              key={activeIndex}
              aria-hidden="true"
              className="eh-screen-sweep absolute inset-0 z-10"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-2 left-1/2 z-20 h-[5px] w-[130px] -translate-x-1/2 rounded-full bg-bone/90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenLayer({
  frame,
  index,
  progress,
}: {
  frame: (typeof FRAMES)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (p) => {
    const pos = p * (FRAMES.length - 1);
    const dist = Math.abs(pos - index);
    if (dist >= 1) return 0;
    return 1 - dist;
  });

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ backgroundColor: frame.color, opacity }}
    >
      <ScreenContent frame={frame} />
    </motion.div>
  );
}

function ScreenContent({ frame }: { frame: (typeof FRAMES)[number] }) {
  return (
    <>
      <span
        className="font-mono text-[11px] tracking-[0.22em] uppercase"
        style={{ color: `${frame.accent}99` }}
      >
        Screen
      </span>
      <span
        className="mt-3 text-[72px] font-semibold leading-none tracking-[-0.04em] text-bone/95"
        style={{ textShadow: `0 0 60px ${frame.accent}33` }}
      >
        {String(frame.id).padStart(2, "0")}
      </span>
      <span className="mt-4 text-sm font-medium tracking-[0.08em] text-bone/45 uppercase">
        {frame.label}
      </span>
      <div className="absolute inset-x-6 bottom-16 space-y-2" aria-hidden="true">
        <div
          className="h-2 w-[40%] rounded-full opacity-30"
          style={{ backgroundColor: frame.accent }}
        />
        <div className="h-2 w-[80%] rounded-full bg-bone/10" />
        <div className="h-2 w-[60%] rounded-full bg-bone/10" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="aspect-[4/3] rounded-xl bg-bone/[0.06]" />
          <div className="aspect-[4/3] rounded-xl bg-bone/[0.06]" />
        </div>
      </div>
    </>
  );
}
