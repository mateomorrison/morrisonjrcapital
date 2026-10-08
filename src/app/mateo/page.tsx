"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const TIMELINE = [
  { year: "2020", what: "Started building — first ventures, first lessons." },
  { year: "2022", what: "Expanded into financial technology infrastructure." },
  { year: "2025", what: "Formalized the studio model — launching companies across AI, quant finance and cybersecurity." },
  { year: "Now", what: "Scaling what's next from New York." },
] as const;

const FOCUS = [
  { icon: "◎", title: "Artificial Intelligence", copy: "Building applied intelligence products that compound across industries." },
  { icon: "◈", title: "Quantitative Finance", copy: "Systematic trading strategies grounded in rigorous research." },
  { icon: "⬡", title: "Cybersecurity", copy: "Protecting the infrastructure of a digital-first legacy." },
] as const;

export default function Mateo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let raf = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const raw = (vh * 0.97 - r.top) / (vh * (0.97 - 0.62));
        const p = ease(Math.max(0, Math.min(1, raw)));
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <div className="backdrop" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="grain" />
      </div>

      <a className="fixed-logo-back" href="/" aria-label="← Back">
        ←
      </a>

      <main className="bio">
        {/* Header */}
        <header className="bio-hero" data-reveal>
          <Image
            src="/logo.jpg"
            alt="Morrison JR"
            width={92}
            height={92}
            priority
            className="bio-logo"
          />
          <h1>Mateo Morrison Jr</h1>
          <p className="bio-role">
            Founder · Investor · Builder — New York
          </p>
        </header>

        {/* Bio */}
        <section className="bio-section" data-reveal>
          <p className="bio-lede">
            I build companies at the intersection of artificial intelligence,
            quantitative finance, and cybersecurity — and have been doing it
            quietly since 2020. What started as hands-on entrepreneurship is now
            a startup studio shaping how emerging markets adopt financial
            technology.
          </p>
        </section>

        {/* Focus */}
        <section className="bio-grid">
          {FOCUS.map((f) => (
            <div className="pillar" data-reveal key={f.title}>
              <div className="pillar-icon" aria-hidden="true">{f.icon}</div>
              <h2>{f.title}</h2>
              <p>{f.copy}</p>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section className="bio-section">
          <p className="kicker" data-reveal>Timeline</p>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="timeline-item" data-reveal key={t.year}>
                <span className="timeline-year">{t.year}</span>
                <span className="timeline-what">{t.what}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bio-section" data-reveal>
          <p className="bio-lede">Reach me directly.</p>
          <a href="mailto:General@morrisonjr.com" className="cta-btn">
            General@morrisonjr.com
          </a>
        </section>

        <footer className="site-footer">
          <div className="footer-inner">
            <p className="footer-line">
              <a href="/">morrisonjr.com</a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="/mateo">mateo morrison jr</a>
            </p>
            <p className="footer-line dim">© 2026</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
