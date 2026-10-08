"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const TIMELINE = [
  { year: "2015", what: "Co-founded fangoo — an e-commerce platform connecting buyers and sellers across the Dominican Republic. Managed payments, logistics, and listings; built and led a team through hundreds of transactions." },
  { year: "2019", what: "Joined Computers and Structures, Inc. in the San Francisco Bay Area — technical support engineering and software licensing management for one of structural engineering's core software providers." },
  { year: "2021", what: "Technical Project Manager at Options Technology, New York — technical project delivery and account management inside one of the capital markets industry's critical infrastructure providers." },
  { year: "2023", what: "Consultant at Tiger Global Management — end-user computing and AI for one of the world's most active investment firms." },
  { year: "2025", what: "Information Technology & AI at Moore Capital Management — building at the infrastructure layer of a global trading firm, while the studio compounds in parallel." },
  { year: "Now", what: "Scaling Morrison Jr — a startup studio launching proprietary companies across AI, quantitative finance, and cybersecurity for emerging markets." },
] as const;

const FOCUS = [
  { icon: "◎", title: "Artificial Intelligence", copy: "Applied intelligence products that compound across industries — not wrappers, not resold APIs." },
  { icon: "◈", title: "Quantitative Finance", copy: "Systematic strategies grounded in rigorous research and disciplined risk." },
  { icon: "⬡", title: "Cybersecurity", copy: "The substrate of a digital legacy — offensive tooling and defensive depth." },
] as const;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let raf = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const raw = (vh * 0.97 - r.top) / (vh * (0.97 - 0.6));
        const p = ease(Math.max(0, Math.min(1, raw)));
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return ref;
}

export default function Mateo() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      <div className="backdrop" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="grain" />
      </div>

      <a className="fixed-logo-back" href="/" aria-label="← Back">←</a>

      <main className="bio">
        {/* Hero: statement first, mobile-first */}
        <header className="bio-hero">
          <h1 data-reveal>Mateo Morrison Jr</h1>
          <p className="bio-statement" data-reveal data-reveal-delay="0.15">
            Building for today&apos;s fast-moving world.
          </p>
          <p className="bio-facts" data-reveal data-reveal-delay="0.3">
            Founder · Investor · Builder — New York
            <br />
            Born July 12, 1999 · Building since 2016
          </p>
          <Image
            src="/logo.jpg"
            alt="Morrison JR"
            width={84}
            height={84}
            priority
            className="bio-logo"
            data-reveal
            data-reveal-delay="0.4"
          />
        </header>

        {/* Bio */}
        <section className="bio-section" data-reveal>
          <p className="bio-lede">
            I&apos;m a founder, investor, and builder working at the
            intersection of artificial intelligence, quantitative finance, and
            cybersecurity. I started building at 16 — co-founding an e-commerce
            platform in the Dominican Republic while still a teenager — and have
            spent every year since compounding that craft: infrastructure inside
            global capital, technical delivery in markets that never close,
            and now a startup studio of my own.
          </p>
          <p className="bio-body">
            My vantage is unusual. I&apos;ve operated inside the
            machinery of some of the most demanding institutions in the world —
            global trading firms and funds — from the infrastructure layer up.
            I&apos;ve experienced firsthand what speeds capital markets move at,
            where legacy systems strain, and what the next decade of
            financial technology actually requires.
          </p>
          <p className="bio-body">
            Morrison Jr — the studio I lead — is the answer to that vantage. We
            build proprietary companies from scratch: applied AI, quantitative
            systems, and security tooling, engineered for emerging markets that
            the incumbents overlook. Quiet, compounding, built to last.
          </p>
        </section>

        {/* Focus cards */}
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
          <p className="kicker" data-reveal>Trajectory — a decade of building</p>
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
          <a href="mailto:mateo@morrisonjr.org" className="cta-btn">
            mateo@morrisonjr.org
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
