/* Small inline glyphs. Colors come from the parent via `fill-current` /
 * `stroke-current` so brand-token discipline stays in one place. */

export function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  );
}

export function AndroidGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.46 11.46 0 0 0-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83l1.84 3.18C3.24 11.16 1.5 14.31 1.5 17.5h21c0-3.19-1.74-6.34-4.9-8.02ZM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
    </svg>
  );
}

/* Status-bar glyphs — part of the phone chrome (Layer 1). */

export function SignalGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 12"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="0" y="8" width="3" height="4" rx="0.8" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
      <rect x="10" y="3" width="3" height="9" rx="0.8" />
      <rect x="15" y="0" width="3" height="12" rx="0.8" />
    </svg>
  );
}

export function WifiGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 12"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 12 5.6 9.53a3.4 3.4 0 0 1 4.8 0L8 12ZM3.7 7.57a6.1 6.1 0 0 1 8.6 0l-1.43 1.47a4.07 4.07 0 0 0-5.74 0L3.7 7.57ZM1.8 5.62 .37 4.15a10.8 10.8 0 0 1 15.26 0l-1.43 1.47a8.77 8.77 0 0 0-12.4 0Z" />
    </svg>
  );
}

export function BatteryGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 25 12"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="21"
        height="11"
        rx="3"
        stroke="currentColor"
      />
      <rect x="2" y="2" width="15" height="8" rx="1.8" fill="currentColor" />
      <path d="M23.5 4v4a2.2 2.2 0 0 0 0-4Z" fill="currentColor" />
    </svg>
  );
}

export function MenuGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
