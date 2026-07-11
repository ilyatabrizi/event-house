import { BatteryGlyph, SignalGlyph, WifiGlyph } from "@/components/icons";
import { PhoneSlot } from "@/components/phone/phone-slot";

/* Layer 1 — Chrome (§7.7.1). Permanent: device frame, side hardware, dynamic
 * island, status bar, home indicator, drop shadow. The 3D transform on
 * #eh-phone-3d and the positioning of #eh-phone-wrap live in globals.css.
 * None of this changes when the slot content is swapped. */

const hardware = "w-[3px] bg-[linear-gradient(180deg,#4a4a4e,#1a1a1e)]";

export function PhoneMockup() {
  return (
    <div id="eh-phone-3d" className="relative">
      <div
        id="eh-phone-shadow"
        aria-hidden="true"
        className="absolute inset-0 rounded-[56px] shadow-[0_60px_120px_rgba(255,91,61,0.10),0_40px_80px_rgba(0,0,0,0.55)]"
      />

      <div
        id="eh-phone-frame"
        className="relative aspect-[380/780] w-full rounded-[56px] bg-[linear-gradient(155deg,#4a4a4e,#1a1a1e)] p-[4px] shadow-[inset_0_0_0_1px_rgba(242,238,231,0.05)]"
      >
        {/* Side hardware — decorative, no interaction */}
        <div className={`absolute -left-[2px] top-[17%] h-[3.5%] rounded-l-[2px] ${hardware}`} />
        <div className={`absolute -left-[2px] top-[24%] h-[6%] rounded-l-[2px] ${hardware}`} />
        <div className={`absolute -left-[2px] top-[31.5%] h-[6%] rounded-l-[2px] ${hardware}`} />
        <div className={`absolute -right-[2px] top-[25%] h-[9%] rounded-r-[2px] ${hardware}`} />
        <div className={`absolute -right-[2px] top-[66%] h-[4.5%] rounded-r-[2px] ${hardware}`} />

        {/* Inner bezel */}
        <div className="h-full w-full rounded-[52px] bg-[#050508] p-[7px]">
          {/* Display */}
          <div className="relative h-full w-full overflow-hidden rounded-[44px] bg-ink">
            {/* Status bar — part of the chrome; survives content swaps */}
            <div
              id="eh-phone-statusbar"
              className="absolute inset-x-0 top-0 z-10 flex h-11 items-center justify-between px-7"
            >
              <span className="text-[15px] font-semibold text-bone">9:41</span>
              <span className="flex items-center gap-1.5 text-bone">
                <SignalGlyph className="h-[10px] w-auto" />
                <WifiGlyph className="h-[10px] w-auto" />
                <BatteryGlyph className="h-[11px] w-auto" />
              </span>
            </div>

            {/* Dynamic Island */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-3 z-10 h-[34px] w-[120px] -translate-x-1/2 rounded-full bg-[#050508]"
            />

            {/* Layer 2 — swappable screen content */}
            <PhoneSlot />

            {/* Home indicator */}
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-1/2 z-10 h-[5px] w-[140px] -translate-x-1/2 rounded-full bg-bone/90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
