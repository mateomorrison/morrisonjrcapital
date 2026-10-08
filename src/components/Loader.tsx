"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Loader: black screen, logo pulses once, then "Loading" with dots appearing
 *  one by one until the page is actually ready, then everything fades out. */
export default function Loader() {
  const [phase, setPhase] = useState<"pulse" | "dots" | "done">("pulse");
  const [dots, setDots] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // one pulse ~0.9s, then dots start after 0.5s
    const t1 = setTimeout(() => setPhase("dots"), 900);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== "dots") return;
    const iv = setInterval(() => setDots((d) => Math.min(d + 1, 3)), 350);
    return () => clearInterval(iv);
  }, [phase]);

  useEffect(() => {
    if (phase !== "dots") return;
    // fade out once document is actually loaded (and give the dots a beat)
    const finish = () => setTimeout(() => setPhase("done"), 500);
    if (document.readyState === "complete") {
      const t = finish();
      return () => clearTimeout(t);
    }
    window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => setHidden(true), 650);
    return () => clearTimeout(t);
  }, [phase]);

  if (hidden) return null;

  return (
    <div className={`loader ${phase === "done" ? "loader-out" : ""}`} aria-hidden={phase === "done"}>
      <div className="loader-logo-wrap">
        <div className={`loader-logo ${phase === "pulse" ? "pulse-once" : "loader-logo-settled"}`}>
          <Image src="/logo.jpg" alt="" width={88} height={88} priority />
        </div>
      </div>
      {phase !== "pulse" && (
        <p className="loader-text">
          loading
          {'.'.repeat(dots)}
          <span className="loader-dots-ghost">{'.'.repeat(3 - dots)}</span>
        </p>
      )}
    </div>
  );
}
