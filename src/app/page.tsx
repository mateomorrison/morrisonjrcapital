"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Apple-style scroll reveal driver. --p (0→1) per [data-reveal]; easing,
 *  stagger via data-reveal-delay; logo/nav blur states off scroll. */
function useScrollReveal() {
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
        const raw = (vh * 0.94 - r.top) / (vh * (0.94 - 0.55));
        const delay = Number(el.dataset.revealDelay ?? 0);
        const p = ease(Math.max(0, Math.min(1, (raw - delay) / (1 - delay))));
        el.style.setProperty("--p", p.toFixed(3));
      });
      const backdrop = root.querySelector<HTMLElement>(".backdrop-img");
      if (backdrop) backdrop.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      root.querySelectorAll<HTMLElement>(".orb").forEach((o, i) => {
        o.style.transform = `translateY(${-window.scrollY * (0.08 + i * 0.03)}px)`;
      });
      // fixed logo shrinks slightly once scrolling starts
      const hero = root.querySelector<HTMLElement>(".hero");
      if (hero) {
        const t = Math.min(1, window.scrollY / (vh * 0.7));
        hero.style.setProperty("--logo-scale", (1 - 0.25 * t).toFixed(3));
      }
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

const BLOCKS = [
  {
    kicker: "01 — Origins",
    lines: ["Built quietly since 2020.", "A multi-generational family legacy."],
  },
  {
    kicker: "02 — The Craft",
    lines: ["Hands-on entrepreneurship, evolved through the", "transformative core of financial technology."],
  },
  {
    kicker: "03 — The Focus",
    lines: ["Investing at the intersection of artificial intelligence,", "quantitative finance, and cybersecurity."],
  },
] as const;

export default function Home() {
  const rootRef = useScrollReveal();

  return (
    <div ref={rootRef}>
      {/* ─── Ambient backdrop ─── */}
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

      {/* ─── Fixed logo (pinned top-center while scrolling) ─── */}
      <a className="fixed-logo" href="#top" aria-label="Morrison JR">
        <div className="logo-ring" />
        <Image
          src="/logo.jpg"
          alt="Morrison JR logo"
          className="logo-img"
          width={68}
          height={68}
          priority
        />
      </a>

      {/* ─── Hero: logo only, full-screen intro ─── */}
      <section className="hero" id="top">
        <div className="hero-logo-anchor">
          <div className="logo-ring" />
          <Image
            src="/logo.jpg"
            alt="Morrison JR logo"
            className="hero-logo"
            width={150}
            height={150}
            priority
          />
        </div>
        {/* tagline appears as you begin scrolling, in the Unbounded treatment */}
        <p className="hero-tag" data-reveal data-reveal-delay="0">
          Family legacy in financial technology.
        </p>
      </section>

      {/* ─── Statement blocks: one idea per screen ─── */}
      {BLOCKS.map((b) => (
        <section className="block" key={b.kicker}>
          <p className="kicker" data-reveal>
            {b.kicker}
          </p>
          <p className="block-line" data-reveal data-reveal-delay="0.12">
            {b.lines[0]}
          </p>
          <p className="block-line" data-reveal data-reveal-delay="0.3">
            {b.lines[1]}
          </p>
        </section>
      ))}

      {/* ─── Pillars: Apple-glass cards ─── */}
      <section className="pillars">
        <div className="pillar" data-reveal>
          <div className="pillar-icon" aria-hidden="true">◎</div>
          <h2>Artificial Intelligence</h2>
          <p>Applied intelligence that compounds across industries.</p>
        </div>
        <div className="pillar" data-reveal data-reveal-delay="0.15">
          <div className="pillar-icon" aria-hidden="true">◈</div>
          <h2>Quantitative Finance</h2>
          <p>Systematic strategies built on rigorous research.</p>
        </div>
        <div className="pillar" data-reveal data-reveal-delay="0.3">
          <div className="pillar-icon" aria-hidden="true">⬡</div>
          <h2>Cybersecurity</h2>
          <p>Protecting the infrastructure of a digital legacy.</p>
        </div>
      </section>

      {/* ─── CTA strip (glass) ─── */}
      <section className="cta-strip">
        <div className="cta-card" data-reveal>
          <p className="cta-line">Building since 2020.</p>
          <a href="mailto:General@morrisonjr.com" className="cta-btn">
            <span>Get in touch</span>
          </a>
        </div>
      </section>

      {/* ─── Footer: single minimal row ─── */}
      <footer className="site-footer">
        <div className="footer-inner">
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
