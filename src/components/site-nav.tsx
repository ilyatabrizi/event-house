"use client";

import { useEffect, useRef, useState } from "react";
import { MenuGlyph } from "@/components/icons";

const NAV_ITEMS = [
  "Product",
  "Hosts",
  "Rewards",
  "Pricing",
  "Changelog",
  "Company",
] as const;

/* Items that stay visible between 600–899px (§9); the rest drop out. */
const COMPACT_ITEMS = new Set(["Product", "Pricing", "Changelog"]);

export function SiteNav() {
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

  return (
    <nav className="absolute inset-x-0 top-10 z-20">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-8 lg:px-12">
        <a
          href="#"
          aria-label="Event House home"
          className="flex items-center gap-[10px]"
        >
          <div id="eh-logomark" className="h-4 w-4 rounded-[4px] bg-bone" />
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-bone">
            Event House
          </span>
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {NAV_ITEMS.map((item) => (
            <li
              key={item}
              className={COMPACT_ITEMS.has(item) ? undefined : "max-md:hidden"}
            >
              <a
                href="#"
                className="text-[13px] font-medium text-ash transition-colors duration-150 hover:text-bone"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button id="eh-account" aria-label="Account" className="flex items-center gap-1">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ash bg-ink text-[10px] font-medium text-bone">
              NS
            </span>
            {/* Account-online dot — a permitted UI use of Ember (§5.1.1) */}
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-ember shadow-[0_0_6px_rgba(255,91,61,0.4)]"
            />
          </button>

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
            <a
              key={item}
              href="#"
              onClick={closeMenu}
              className="text-[15px] font-medium text-ash transition-colors duration-150 hover:text-bone"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
