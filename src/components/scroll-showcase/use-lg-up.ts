"use client";

import { useEffect, useState } from "react";

/** Brief lg breakpoint — 1200px. Defaults to false (mobile-first) until mounted. */
export function useLgUp() {
  const [lgUp, setLgUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");
    const sync = () => setLgUp(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return lgUp;
}
