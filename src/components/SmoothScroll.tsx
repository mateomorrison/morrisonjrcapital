"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Intentionally slow, buttery smoothing so the site "flows" as you scroll. */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35, // higher = slower glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 0.85, // slightly damp wheel speed
      touchMultiplier: 1.1,
      infinite: false,
    });

    let rafId: number;
    const loop = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // Push Lenis's eased scroll position into our reveal driver's expectations —
    // native scroll events still fire because Lenis drives window scroll.
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
