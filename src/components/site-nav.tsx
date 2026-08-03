"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftGlyph, LogoMark, MenuGlyph } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string };

const NAV_ITEMS: readonly NavItem[] = [
  { label: "Hosting", href: "/hosts" },
  { label: "Our Story", href: "/company" },
  { label: "Premium", href: "/premium" },
  { label: "Pricing", href: "/pricing" },
  { label: "Roadmap", href: "/roadmap" },
] as const;

/* Items that stay visible between 600–899px (§9); the rest drop out. */
const COMPACT_ITEMS = new Set(["Hosting", "Pricing", "Roadmap"]);

/* overlay — floats over the landing hero (absolute, transparent).
 * solid   — a normal header for interior pages (ink background + hairline). */
export function SiteNav({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  /* Focus trap for the mobile overlay (§10): focus moves in on open, Tab
   * cycles inside, Escape closes, focus returns to the hamburger. */
  useEffect(() => {
    if (!menuOpen) return;
    const overlay = overlayRef.current;
    if (!overlay) return;
    const focusables = Array.from(
      overlay.querySelectorAll<HTMLElement>("a[href], button"),
    );
    focusables[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const navClass =
    variant === "overlay"
      ? "fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-ink/90 via-ink/50 to-transparent pb-8 pt-8"
      : "sticky top-0 z-30 border-b border-ash/15 bg-ink/85 py-6 backdrop-blur-md";

  return (
    <nav className={navClass}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-8 lg:px-12">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          {variant === "solid" && (
            <Link
              href="/"
              aria-label="Back to homepage"
              className="flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-ash transition-colors duration-150 hover:text-bone"
            >
              <ArrowLeftGlyph className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          )}

          <Link
            href="/"
            aria-label="Event House home"
            className="flex min-w-0 items-center gap-[10px]"
          >
            <LogoMark id="eh-logomark" className="h-5 w-5 shrink-0 text-bone" />
            <span className="truncate text-[15px] font-semibold tracking-[-0.01em] text-bone">
              Event House
            </span>
          </Link>
        </div>

        <ul className="hidden items-center gap-8 sm:flex">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className={
                COMPACT_ITEMS.has(item.label) ? undefined : "max-md:hidden"
              }
            >
              <Link
                href={item.href}
                className="text-[13px] font-medium text-ash transition-colors duration-150 hover:text-bone"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            id="eh-cta-nav-waitlist"
            href="/download"
            className={cn(
              buttonVariants(),
              "hidden h-9 rounded-full border-transparent bg-bone px-4 text-[13px] font-medium text-ink hover:bg-bone sm:inline-flex",
            )}
          >
            Join waitlist
          </Link>

          <button
            ref={menuButtonRef}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="text-ash transition-colors duration-150 hover:text-bone sm:hidden"
          >
            <MenuGlyph className="h-6 w-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeMenu();
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-[rgba(14,11,16,0.96)]"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="text-[15px] font-medium text-ash transition-colors duration-150 hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/download"
            onClick={closeMenu}
            className={cn(
              buttonVariants(),
              "mt-2 h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone",
            )}
          >
            Join waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
