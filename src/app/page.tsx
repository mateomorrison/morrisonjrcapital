"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import { ClickSpark } from "@/components/ui/click-spark";
import { FlipText } from "@/components/ui/flip-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Loader from "@/components/Loader";

type Pillar = {
  icon: string;
  title: string;
  blurb: string;
  strat: string[];
};

const PILLARS: Pillar[] = [
  {
    icon: "◎",
    title: "Artificial Intelligence",
    blurb: "Applied intelligence that compounds across industries.",
    strat: [
      "We build proprietary AI products from scratch — not wrappers, not resold APIs. Each venture starts as a thesis about where intelligence is mispriced, then ships fast and iterates in the market.",
      "Focus areas: decision infrastructure for private capital, agentic workflow tooling, and models that turn unstructured data into an investing edge.",
    ],
  },
  {
    icon: "◈",
    title: "Quantitative Finance",
    blurb: "Systematic strategies built on rigorous research.",
    strat: [
      "The studio launches proprietary trading and capital-allocation systems — built in-house, owned end to end, and compounding across cycles rather than chasing single-market narratives.",
      "Research-first: every strategy earns allocation through out-of-sample evidence, disciplined risk limits, and infrastructure we can audit.",
    ],
  },
  {
    icon: "⬡",
    title: "Cybersecurity",
    blurb: "Protecting the infrastructure of a digital legacy.",
    strat: [
      "Security is the substrate of the family's digital footprint — we build offensive-testing and defense tooling as products, and apply the same discipline to everything the studio operates.",
      "Emerging markets run on mobile-first, under-secured rails. We see that gap as the studio's largest unfair advantage.",
    ],
  },
];

function HeroImage() {
  return (
    <div className="hero-img">
      <div className="hero-img-par" aria-hidden="true" />
      <Image src="/pexels-vlada-karpovich-4451713.jpg" alt="New York financial district" width={900} height={560} priority className="hero-img-file" />
    </div>
  );
}

const BLOCKS = [
  { kicker: "01 — Origins", lines: ["Est. 2020.", "A multi-generational family legacy."] },
  { kicker: "02 — The Craft", lines: ["Hands-on entrepreneurship, evolved through the", "transformative core of financial technology."] },
  { kicker: "03 — The Focus", lines: ["Investing at the intersection of artificial intelligence,", "quantitative finance, and cybersecurity."] },
  { kicker: "04 — What's Next", lines: ["A startup studio, launching companies that", "disrupt emerging markets."] },
] as const;

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let raf = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const y = window.scrollY;

      // Hero image: parallax drift + slow zoom as you scroll
      const heroImg = root.querySelector<HTMLElement>(".hero-img-file");
      const heroImgPar = root.querySelector<HTMLElement>(".hero-img-par");
      if (heroImg) {
        const hr = heroImg.getBoundingClientRect();
        const centerOffset = hr.top + hr.height / 2 - vh / 2; // negative below center
        const drift = Math.max(-60, Math.min(60, -centerOffset * 0.12));
        const zoom = 1 + Math.max(0, Math.min(1, 1 - Math.abs(centerOffset) / (vh * 0.9))) * 0.08;
        heroImg.style.transform = `translateY(${drift.toFixed(1)}px) scale(${zoom.toFixed(3)})`;
      }
      if (heroImgPar) {
        heroImgPar.style.opacity = String(0.25 + 0.35 * Math.min(1, y / (vh * 1.5)));
      }

      // Text reveal per element
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const raw = (vh * 0.97 - r.top) / (vh * (0.97 - 0.6));
        const delay = Number(el.dataset.revealDelay ?? 0);
        const p = ease(Math.max(0, Math.min(1, (raw - delay) / (1 - delay))));
        el.style.setProperty("--p", p.toFixed(3));
      });

      // Auto-expanding pillars: each card expands individually as it scrolls into view
      // (sequenced bottom-up so the stack unwinds like pages as you move through it)
      root.querySelectorAll<HTMLElement>(".pillar.expandable").forEach((card) => {
        const r = card.getBoundingClientRect();
        // expansion begins when card top passes 80% of viewport, completes by 45%
        const prog = (vh * 0.8 - r.top) / (vh * 0.35);
        const e = ease(Math.max(0, Math.min(1, prog)));
        card.style.setProperty("--exp", e.toFixed(3));
        card.classList.toggle("open", e > 0.02);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
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
    <SmoothScroll>
      <ClickSpark sparkColor="#ffffff" />
      <Loader />
      <div ref={rootRef}>
        <div className="backdrop" aria-hidden="true">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="grain" />
        </div>

        <a className="fixed-logo" href="#top" aria-label="Morrison JR">
          <Image src="/logo.jpg" alt="Morrison JR" width={76} height={76} className="logo-img" priority />
        </a>

        <section className="hero" id="top">
          <HeroImage />
        </section>

        {BLOCKS.map((b) => (
          <section className="block" key={b.kicker}>
            <FlipText className="kicker" duration={1.6} loop={false} together={false}>
              {b.kicker}
            </FlipText>
            {b.lines.map((l, i) => (
              <p className="block-line" key={i} data-reveal data-reveal-delay={(0.2 + i * 0.25).toFixed(2)}>{l}</p>
            ))}
          </section>
        ))}

        <section className="pillars">
          {PILLARS.map((p, i) => (
            <div
              className="pillar expandable"
              data-reveal
              data-reveal-delay={(0.15 * i).toFixed(2)}
              key={p.title}
            >
              <div className="pillar-head">
                <div className="pillar-icon" aria-hidden="true">{p.icon}</div>
              </div>
              <div className="pillar-body-short">
                <h2 data-reveal data-reveal-delay="0.1">{p.title}</h2>
                <p data-reveal data-reveal-delay="0.25">{p.blurb}</p>
              </div>
              <div className="pillar-strat">
                <div>
                {p.strat.map((s, j) => (
                  <p key={j} data-reveal data-reveal-delay={(0.35 + j * 0.2).toFixed(2)}>{s}</p>
                ))}
                <p className="pillar-foot" data-reveal data-reveal-delay="0.7">
                  Proprietary ventures, built from scratch.
                </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="cta-strip">
          <div className="cta-card" data-reveal>
            <p className="cta-line">Est. 2020.</p>
            <InteractiveHoverButton
              className="cta-obsidian"
              onClick={() => { window.location.href = "mailto:General@morrisonjr.com"; }}
            >
              Get in touch
            </InteractiveHoverButton>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-inner">
            <p className="footer-line">
              <a href="mailto:General@morrisonjr.com">General@morrisonjr.com</a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="/mateo">Mateo Morrison Jr</a>
            </p>
            <p className="footer-line dim">© 2026</p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
