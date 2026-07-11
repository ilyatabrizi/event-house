/* ═══════════════ SWAP ZONE START ═══════════════
 * To replace the placeholder with the real Event House app UI later:
 *   1. Empty the contents of #eh-phone-slot (this component's JSX).
 *   2. Insert the new app UI markup, keeping #eh-phone-statusbar intact
 *      (it lives in phone-mockup.tsx, outside this slot).
 *   3. Ensure all new styles are scoped under #eh-phone-slot — Tailwind
 *      utilities inline here, or `#eh-phone-slot .foo` rules in the scoped
 *      section of globals.css. Never top-level class selectors.
 * Do not modify #eh-phone-frame, #eh-phone-shadow, or the 3D transform on
 * #eh-phone-3d.
 * ═══════════════════════════════════════════════ */

/* Layer 2 — screen content (§7.7.2). Placeholder per §7.7.3: static markup
 * only, no JavaScript, no fake data, no fake avatars, photos, or event
 * names. Bottom padding = home indicator zone (13px) + 20px clearance. */
export function PhoneSlot() {
  return (
    <div
      id="eh-phone-slot"
      className="phone-display absolute inset-0 flex flex-col pb-[33px] pt-11"
    >
      {/* 1 — App header */}
      <div className="flex h-[72px] flex-none flex-col justify-center px-5">
        <p className="text-[15px] font-semibold text-bone">Event House</p>
        <p className="mt-1 font-mono text-[10px] tracking-[0.1em] text-ash">
          TONIGHT — 12 NEARBY
        </p>
      </div>

      {/* 2 — Placeholder tile, and 3 — live indicator 8px below it */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex h-[180px] w-[80%] flex-col items-center rounded-[20px] border border-bone/12 pt-8">
          <div className="h-10 w-10 rounded-[10px] bg-bone/15" />
          <div className="mt-3 h-px w-[70%] bg-bone/12" />
          <div className="mt-2 h-px w-[40%] bg-bone/12" />
        </div>
        <div className="mt-2 flex items-center">
          {/* The only place Ember appears inside the phone (§7.7.3) */}
          <span className="h-[6px] w-[6px] rounded-full bg-ember shadow-[0_0_4px_rgba(255,91,61,0.4)]" />
          <span className="ml-1.5 text-[11px] font-medium text-ash">
            Live now
          </span>
        </div>
      </div>

      {/* 4 — Bottom nav bar */}
      <div className="flex h-[60px] flex-none items-center justify-evenly">
        <div className="h-6 w-6 rounded-[4px] bg-bone/15" />
        <div className="h-6 w-6 rounded-[4px] bg-bone/15" />
        <div className="h-6 w-6 rounded-[4px] bg-bone/15" />
      </div>
    </div>
  );
}
/* ════════════════ SWAP ZONE END ═════════════════ */
