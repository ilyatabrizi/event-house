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
