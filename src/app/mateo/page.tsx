"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RaisedButton } from "@/components/ui/raised-button";
import { Button } from "@/components/ui/button";
import { ClickSpark } from "@/components/ui/click-spark";
import { FlipText } from "@/components/ui/flip-text";
import SmoothScroll from "@/components/SmoothScroll";

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

const CHIPS = ["Founder", "Investor", "Builder", "New York", "Building since 2016"] as const;

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
    <SmoothScroll>
      <ClickSpark sparkColor="#ffffff" />
      <div ref={ref}>
        <div className="backdrop" aria-hidden="true">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="grain" />
        </div>

        <div className="fixed-logo-back-wrap">
          <Button variant="outline" size="sm" className="obsidian-back" onClick={() => { window.location.href = "/"; }}>
            ← Back
          </Button>
        </div>

        <main className="bio">
          {/* Hero */}
          <header className="bio-hero">
            <Badge variant="secondary" className="bio-top-badge">Profile</Badge>
            <h1 data-reveal>Mateo Morrison Jr</h1>
            <FlipText className="bio-statement" duration={2.0} delay={0.15} loop={false}>
              Building for today&apos;s fast-moving world.
            </FlipText>
            <div className="bio-chips">
              {CHIPS.map((c) => (
                <Badge key={c} variant="outline" className="bio-chip">{c}</Badge>
              ))}
            </div>
            <Image
              src="/logo.jpg"
              alt="Morrison JR"
              width={84}
              height={84}
              priority
              className="bio-logo"
            />
          </header>

          <Separator className="bio-sep" />

          {/* Bio: factual paragraphs, entity-first phrasing */}
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
              <Card className="obsidian-focus" data-reveal key={f.title}>
                <CardHeader>
                  <div className="pillar-icon" aria-hidden="true">{f.icon}</div>
                  <CardTitle className="focus-title">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="focus-copy">{f.copy}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Timeline */}
          <section className="bio-timeline">
            <FlipText className="kicker" duration={1.6} loop={false}>Trajectory</FlipText>
            <div className="timeline">
              {TIMELINE.map((t, i) => (
                <div data-reveal key={t.year}>
                  <div className="timeline-item" data-reveal-delay="0">
                    <div className="timeline-meta">
                      <Badge variant="outline" className="timeline-year">{t.year}</Badge>
                      <span className="timeline-place">{t.place}</span>
                    </div>
                    <div className="timeline-body">
                      <strong className="timeline-title">{t.title}</strong>
                      <span className="timeline-org">{t.org}</span>
                      <p className="timeline-desc">{t.desc}</p>
                    </div>
                  </div>
                  {i < TIMELINE.length - 1 && <Separator className="timeline-sep" />}
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="bio-contact">
            <Card className="obsidian-contact" data-reveal>
              <CardContent className="cta-flex">
                <p className="cta-line">Get in touch.</p>
                <RaisedButton
                  variant="default"
                  color="#ffffff"
                  onClick={() => { window.location.href = "mailto:mateo@morrisonjr.org"; }}
                >
                  mateo@morrisonjr.org
                </RaisedButton>
              </CardContent>
            </Card>
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
    </SmoothScroll>
  );
}
