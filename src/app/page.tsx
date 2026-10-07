"use client";

import Image from "next/image";
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
        const p = ease(Math.max(0, Math.min(1, (raw - delay) / (1 - delay))));
        el.style.setProperty("--p", p.toFixed(3));
      });
      // parallax: backdrop and orbs drift slower than scroll
      const backdrop = root.querySelector<HTMLElement>(".backdrop-img");
      if (backdrop) backdrop.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      root.querySelectorAll<HTMLElement>(".orb").forEach((o, i) => {
        o.style.transform = `translateY(${-window.scrollY * (0.08 + i * 0.03)}px)`;
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

const PILLARS = [
  {
    icon: "◎",
    title: "Artificial Intelligence",
    copy: "Applied intelligence that compounds across industries.",
  },
  {
    icon: "◈",
    title: "Quantitative Finance",
    copy: "Systematic strategies built on rigorous research.",
  },
  {
    icon: "⬡",
    title: "Cybersecurity",
    copy: "Protecting the infrastructure of a digital legacy.",
  },
] as const;

export default function Home() {
  const rootRef = useScrollReveal();

  return (
    <div ref={rootRef}>
      {/* ─── Ambient backdrop: dark skyline + slow color orbs ─── */}
      <div className="backdrop" aria-hidden="true">
        <div
          className="backdrop-img"
          style={{ backgroundImage: "url(/pexels-vlada-karpovich-4451713.jpg)" }}
        />
        <div className="backdrop-veil" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="grain" />
      </div>

      {/* ─── Hero: floating glass logo + huge wordmark ─── */}
      <section className="hero">
        <div className="logo-wrap" data-reveal>
          <div className="logo-ring" />
          <Image
            src="/logo.jpg"
            alt="Morrison JR logo"
            className="floating-logo"
            width={76}
            height={76}
            priority
          />
        </div>
        <h1 className="wordmark" data-reveal data-reveal-delay="0.12">
          Morrison&nbsp;JR
        </h1>
        <p className="tagline" data-reveal data-reveal-delay="0.4">
          Family legacy in financial technology.
        </p>
        <p className="scroll-cue" data-reveal data-reveal-delay="0.75">
          Scroll to explore ↓
        </p>
      </section>

      {/* ─── Statement: giant lede with scroll wipe ─── */}
      <section className="statement">
        <p className="lede" data-reveal>
          MJR represents the next chapter in a multi-generational family legacy.
          Established in 2025, MJR expands upon a journey that began with
          hands-on entrepreneurship and has evolved through the transformative
          core of financial technology, bridging traditional roots with global
          innovation.
        </p>
        <p className="lede" data-reveal>
          Investing at the intersection of artificial intelligence, quantitative
          finance, and cybersecurity.
        </p>
      </section>

      {/* ─── Pillars: Apple-glass cards ─── */}
      <section className="pillars">
        {PILLARS.map((pl, i) => (
          <div
            key={pl.title}
            className="pillar"
            data-reveal
            data-reveal-delay={`${0.15 * i}`}
          >
            <div className="pillar-icon" aria-hidden="true">
              {pl.icon}
            </div>
            <h2>{pl.title}</h2>
            <p>{pl.copy}</p>
          </div>
        ))}
      </section>

      {/* ─── CTA strip (glass) ─── */}
      <section className="cta-strip">
        <div className="cta-card" data-reveal>
          <p className="cta-line">Building quietly since 2025.</p>
          <a href="mailto:General@morrisonjr.com" className="cta-btn">
            <span>Get in touch</span>
          </a>
        </div>
      </section>

      {/* ─── Footer: single minimal row ─── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-brand">Morrison&nbsp;JR</p>
          <p className="footer-line">
            <a href="mailto:General@morrisonjr.com">General@morrisonjr.com</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <a href="https://www.morrisonjr.com">www.morrisonjr.com</a>
          </p>
          <p className="footer-line dim">© 2026</p>
        </div>
      </footer>
    </div>
  );
}
