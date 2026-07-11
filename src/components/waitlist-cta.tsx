"use client";

import { useEffect, useRef, useState } from "react";
import { AndroidGlyph } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Phase = "idle" | "editing" | "sending" | "done";

/* Secondary CTA (§7.4) with one documented extension: clicking it morphs the
 * pill inline (same 44px geometry — no popup, no modal) into an email field
 * that POSTs to /api/waitlist. A persistent visually-hidden status region
 * announces success/error to screen readers. */
export function WaitlistCta() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (phase === "editing") inputRef.current?.focus();
    if (phase === "done") doneRef.current?.focus();
  }, [phase]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (phase === "sending") return;
    setPhase("sending");
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Try again.",
        );
        setPhase("editing");
        return;
      }
      setPhase("done");
    } catch {
      setError("Something went wrong. Try again.");
      setPhase("editing");
    }
  }

  return (
    <div className="contents">
      {phase === "done" ? (
        <p
          ref={doneRef}
          tabIndex={-1}
          className="flex h-11 items-center rounded-full border border-ash px-5 text-sm font-medium text-bone"
        >
          You’re on the waitlist.
        </p>
      ) : phase === "editing" || phase === "sending" ? (
        <form onSubmit={submit} className="flex flex-col items-start">
          <div className="flex h-11 items-center gap-2 rounded-full border border-ash pl-5 pr-1.5">
            <input
              ref={inputRef}
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setPhase("idle");
              }}
              placeholder="you@example.com"
              aria-label="Email address for the Android waitlist"
              className="w-[164px] bg-transparent text-sm text-bone placeholder:text-ash"
            />
            <Button
              type="submit"
              className="h-8 rounded-full bg-bone px-3 text-xs font-medium text-ink hover:bg-bone"
            >
              {phase === "sending" ? "Joining…" : "Join"}
            </Button>
          </div>
          {error && <p className="mt-2 pl-5 text-xs text-ash">{error}</p>}
        </form>
      ) : (
        <a
          id="eh-cta-android"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setPhase("editing");
          }}
          className={cn(
            buttonVariants(),
            "h-11 gap-2 rounded-full border-ash bg-transparent px-5 text-sm font-medium text-bone transition-colors duration-200 ease-out hover:border-bone/60 hover:bg-transparent focus-visible:border-ash focus-visible:ring-0",
          )}
        >
          <AndroidGlyph className="size-4 text-ash" />
          Join Android waitlist
        </a>
      )}
      {/* Always-mounted live region so state changes actually announce */}
      <span role="status" className="sr-only">
        {phase === "done" ? "You’re on the waitlist." : (error ?? "")}
      </span>
    </div>
  );
}
