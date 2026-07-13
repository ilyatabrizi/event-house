import Link from "next/link";

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
] as const;

/* Shared footer (§7.8). Legal links resolve to real routes. */
export function SiteFooter() {
  return (
    <footer className="relative z-10 w-full">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 pb-10 pt-12 text-xs text-ash md:px-8 lg:px-12">
        <p>© 2026 Event House. A Lifestyle product.</p>
        <p className="flex items-center">
          {LEGAL_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center">
              {i > 0 && <span className="mx-2">·</span>}
              <Link
                href={link.href}
                className="transition-colors duration-150 hover:text-bone"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
