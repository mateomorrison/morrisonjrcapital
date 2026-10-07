"use client";

import { useEffect, useRef } from "react";

const LINE = "MJR represents the next chapter in a multi-generational family legacy rooted in the Dominican Republic.";

const PARAS = [
  "Established in 2025, MJR expands upon a journey that began with hands-on entrepreneurship and has evolved through the transformative core of financial technology.",
  "Bridging traditional roots with global innovation.",
];

/** Splits a sentence into word spans; each word wipes from ghosted to solid
 *  as scroll progress passes its threshold. Works in every browser. */
function RevealWords({ text, base }: { text: string; base: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => {
        const delay = base + i / words.length;
        return (
          <span
            key={`${base}-${i}`}
            className="rw"
            style={{ ["--rw-start" as string]: delay.toFixed(3) }}
          >
            {w}{" "}
          </span>
        );
      })}
    </>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const words = root.querySelectorAll<HTMLElement>(".rw");
      words.forEach((el) => {
        const r = el.getBoundingClientRect();
        const start = Number(el.dataset.rwStart ?? 0);
        // word begins revealing as it crosses 85% of viewport, completes by 45%
        const p = (vh * 0.85 - r.top) / (vh * (0.85 - 0.45) + r.height * 0.4);
        const done = Math.max(0, Math.min(1, (p - start) / (1 - start)));
        el.style.setProperty("--rw-p", done.toFixed(3));
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef}>
      {/* Hero: fills the first viewport, text sits low like a title card */}
      <section className="hero">
        <h1 className="headline rw" data-rw-start="0">
          MJR represents the next chapter in a multi-generational family legacy rooted in the Dominican Republic.
        </h1>
      </section>

      <main>
        <section className="body-copy">
          <p>
            <RevealWords text={PARAS[0]} base={0.15} />
          </p>
          <p className="after-gap">
            <RevealWords text={PARAS[1]} base={0.4} />
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-400">Morrison Jr, LLC</p>
          <p className="text-sm text-gray-400 mt-1">
            The Trump Building,<br />
            40 Wall Street,<br />
            32nd Floor<br />
            New York
          </p>
          <p className="text-sm text-gray-400 mt-1">General@morrisonjr.com</p>
          <p className="text-sm text-gray-400 mt-1">www.morrisonjr.com</p>
          <p className="text-sm text-gray-400 mt-1">© 2026 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
