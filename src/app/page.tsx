"use client";

import { useEffect, useRef } from "react";

/** Apple-style scroll reveal: each [data-reveal] block progresses 0→1 with
 *  easing as it travels through the lower viewport, driving
 *  opacity, --p (gradient wipe) and a subtle rise. rAF-throttled. */
function useScrollReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let raf = 0;

    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic, Apple-ish

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const r = el.getBoundingClientRect();
        // progress 0 when element top crosses 92% vh, 1 when top reaches 48% vh
        const raw = (vh * 0.92 - r.top) / (vh * (0.92 - 0.48));
        const delay = Number(el.dataset.revealDelay ?? 0);
        // stagger: shift and rescale progress so delayed items start later but complete in same window
        const p = ease(Math.max(0, Math.min(1, (raw - delay) / (1 - delay))));
        el.style.setProperty("--p", p.toFixed(3));
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

  return rootRef;
}

export default function Home() {
  const rootRef = useScrollReveal();

  return (
    <div ref={rootRef}>
      {/* ─── Hero: Apple product page style — huge wordmark, tagline under ─── */}
      <section className="hero">
        <h1 className="wordmark" data-reveal>
          Morrison&nbsp;JR
        </h1>
        <p className="tagline" data-reveal data-reveal-delay="0.35">
          A Dominican Republic family legacy in financial technology.
        </p>
        <p className="scroll-cue" data-reveal data-reveal-delay="0.7">
          Scroll to explore ↓
        </p>
      </section>

      {/* ─── Statement: large line-reveal paragraphs ─── */}
      <section className="statement">
        <p className="lede" data-reveal>
          MJR represents the next chapter in a multi-generational family legacy
          rooted in the Dominican Republic. Established in 2025, MJR expands
          upon a journey that began with hands-on entrepreneurship and has
          evolved through the transformative core of financial technology,
          bridging traditional roots with global innovation.
        </p>

        <p className="lede" data-reveal>
          Investing at the intersection of artificial intelligence, quantitative
          finance, and cybersecurity.
        </p>
      </section>

      {/* ─── Pillars: three cards, staggered ─── */}
      <section className="pillars">
        <div className="pillar" data-reveal>
          <h2>Artificial Intelligence</h2>
          <p>Applied intelligence that compounds across industries.</p>
        </div>
        <div className="pillar" data-reveal data-reveal-delay="0.15">
          <h2>Quantitative Finance</h2>
          <p>Systematic strategies built on rigorous research.</p>
        </div>
        <div className="pillar" data-reveal data-reveal-delay="0.3">
          <h2>Cybersecurity</h2>
          <p>Protecting the infrastructure of a digital legacy.</p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-brand">Morrison&nbsp;JR, LLC</p>
          <p className="footer-line">
            The Trump Building<br />
            40 Wall Street, 32nd Floor<br />
            New York
          </p>
          <p className="footer-line">
            <a href="mailto:General@morrisonjr.com">General@morrisonjr.com</a>
            <br />
            <a href="https://www.morrisonjr.com">www.morrisonjr.com</a>
          </p>
          <p className="footer-line dim">© 2026 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
