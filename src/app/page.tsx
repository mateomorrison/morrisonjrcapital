"use client";

import { useState } from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SmoothScroll from "@/components/SmoothScroll";

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

function PillarCard({ p, idx, open, onToggle }: {
  p: Pillar; idx: number; open: boolean; onToggle: () => void;
}) {
  return (
    <div
      className={`pillar expandable ${open ? "open" : ""}`}
      data-reveal
      data-reveal-delay={(0.15 * idx).toFixed(2)}
      onClick={onToggle}
    >
      <div className="pillar-head">
        <div className="pillar-icon" aria-hidden="true">{p.icon}</div>
        <span className="pillar-chev" aria-hidden="true">{open ? "−" : "+"}</span>
      </div>
      <div className="pillar-body-short">
        <h2>{p.title}</h2>
        <p>{p.blurb}</p>
      </div>
      <div className="pillar-strat" style={{ maxHeight: open ? "none" : "0px" }}>
        {p.strat.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
        <p className="pillar-foot">Proprietary ventures, built from scratch.</p>
      </div>
    </div>
  );
}

const BLOCKS = [
  { kicker: "01 — Origins", lines: ["Built quietly since 2020.", "A multi-generational family legacy."] },
  { kicker: "02 — The Craft", lines: ["Hands-on entrepreneurship, evolved through the", "transformative core of financial technology."] },
  { kicker: "03 — The Focus", lines: ["Investing at the intersection of artificial intelligence,", "quantitative finance, and cybersecurity."] },
  { kicker: "04 — What's Next", lines: ["A startup studio, launching companies that", "disrupt emerging markets."] },
] as const;

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let raf = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const y = window.scrollY;
      const travel = Math.min(1, y / (vh * 0.9));
      const logo = root.querySelector<HTMLElement>(".travel-logo");
      if (logo) {
        logo.style.left = travel < 1 ? `calc(50vw - ${(32 * travel).toFixed(1)}px)` : "2.6rem";
        logo.style.transform = `translateX(-50%) scale(${(1 - 0.18 * travel).toFixed(3)})`;
        logo.style.opacity = String(0.35 + 0.65 * travel);
      }
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const raw = (vh * 0.97 - r.top) / (vh * (0.97 - 0.6));
        const delay = Number(el.dataset.revealDelay ?? 0);
        const p = ease(Math.max(0, Math.min(1, (raw - delay) / (1 - delay))));
        el.style.setProperty("--p", p.toFixed(3));
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
      <div ref={rootRef}>
        <div className="backdrop" aria-hidden="true">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="grain" />
        </div>

        <div className="travel-logo">
          <Image src="/logo.jpg" alt="Morrison JR" width={76} height={76} className="logo-img" priority />
        </div>

        <section className="hero" id="top" />

        {BLOCKS.map((b) => (
          <section className="block" key={b.kicker}>
            <p className="kicker" data-reveal>{b.kicker}</p>
            {b.lines.map((l, i) => (
              <p className="block-line" key={i} data-reveal data-reveal-delay={(0.2 + i * 0.25).toFixed(2)}>{l}</p>
            ))}
          </section>
        ))}

        <section className="pillars">
          {PILLARS.map((p, i) => (
            <PillarCard
              key={p.title}
              p={p}
              idx={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </section>

        <section className="cta-strip">
          <div className="cta-card" data-reveal>
            <p className="cta-line">Building since 2020.</p>
            <a href="mailto:General@morrisonjr.com" className="cta-btn"><span>Get in touch</span></a>
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
