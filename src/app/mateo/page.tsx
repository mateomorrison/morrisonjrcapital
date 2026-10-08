"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const TIMELINE = [
  {
    year: "Oct 2015 — Oct 2017",
    title: "Co-Founder, CEO",
    org: "fangoo",
    place: "Dominican Republic",
    desc: "E-commerce platform connecting buyers and sellers across the Dominican Republic. Managed payments, shipping, and listings; built and led the team through hundreds of completed transactions.",
  },
  {
    year: "Sep 2019 — Sep 2021",
    title: "Technical Support Engineer, Licensing Support",
    org: "Engineering software company (structural analysis)",
    place: "San Francisco Bay Area",
    desc: "Technical support and software licensing management for a structural engineering software provider.",
  },
  {
    year: "Sep 2021 — Sep 2023",
    title: "Technical Project Manager, TPM",
    org: "Capital markets technology provider",
    place: "New York",
    desc: "Technical project delivery and account management.",
  },
  {
    year: "Oct 2023 — Oct 2025",
    title: "Consultant, EUC",
    org: "Tech VC / public fund crossover firm",
    place: "New York",
    desc: "End-user computing and AI.",
  },
  {
    year: "Jan 2025 — Present",
    title: "Information Technology, AI",
    org: "Leading global macro fund",
    place: "New York",
    desc: "Building at the infrastructure layer of a global trading firm.",
  },
] as const;

const FOCUS = [
  { icon: "◎", title: "Artificial Intelligence", copy: "Applied intelligence products that compound across industries." },
  { icon: "◈", title: "Quantitative Finance", copy: "Systematic strategies grounded in rigorous research." },
  { icon: "⬡", title: "Cybersecurity", copy: "Offensive tooling and defensive depth." },
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
        {/* Hero */}
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

        {/* Bio: short factual paragraphs, entity-first phrasing */}
        <section className="bio-narrative">
          <p data-reveal>
            Mateo Morrison Jr (born July 12, 1999) is a founder, investor, and
            technology builder based in New York. He has been building since
            2016, and works at the intersection of artificial intelligence,
            quantitative finance, and cybersecurity.
          </p>
          <p data-reveal>
            He co-founded fangoo — an e-commerce platform connecting buyers and
            sellers across the Dominican Republic — as a teenager, running
            payments, logistics, and product listings before leaving to focus on
            technology infrastructure.
          </p>
          <p data-reveal>
            Since then he has held technical roles across capital markets:
            software licensing support for structural engineering software in
            the San Francisco Bay Area, technical project delivery at a capital
            markets technology provider in New York, end-user computing and AI
            consulting for a technology venture/public fund crossover firm, and
            information technology and AI work at a leading global macro fund —
            where he currently serves.
          </p>
          <p data-reveal>
            In parallel, he leads Morrison Jr, a startup studio est. 2020 that
            builds proprietary companies from scratch — applied AI, quantitative
            systems, and security tooling — aimed at emerging markets.
          </p>
          <p data-reveal>
            He is known for hands-on entrepreneurship and a preference for
            building quietly: long-horizon ventures, engineered from the
            infrastructure layer up.
          </p>
        </section>

        {/* Focus cards */}
        <section className="bio-grid">
          {FOCUS.map((f) => (
            <div className="pillar small" data-reveal key={f.title}>
              <div className="pillar-icon" aria-hidden="true">{f.icon}</div>
              <h2>{f.title}</h2>
              <p>{f.copy}</p>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section className="bio-timeline">
          <p className="kicker" data-reveal>Trajectory</p>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="timeline-item" data-reveal key={t.year}>
                <div className="timeline-meta">
                  <span className="timeline-year">{t.year}</span>
                  <span className="timeline-place">{t.place}</span>
                </div>
                <div className="timeline-body">
                  <strong className="timeline-title">{t.title}</strong>
                  <span className="timeline-org">{t.org}</span>
                  <p className="timeline-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bio-contact" data-reveal>
          <p className="bio-lede">Contact</p>
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
