"use client";

import { useRouter } from "next/navigation";

const EMAIL = "mateo@morrisonjr.org";

export default function Mateo() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100svh",
        background: "#000",
        color: "#f5f5f7",
        fontFamily: "var(--font-unbounded), system-ui, sans-serif",
        padding: "6rem 1.6rem 4rem",
        maxWidth: "46rem",
        margin: "0 auto",
        lineHeight: 1.85,
        fontWeight: 300,
      }}
    >
      <button
        onClick={() => router.push("/")}
        aria-label="Back to home"
        style={{
          position: "fixed",
          top: "1.3rem",
          right: "1.3rem",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.16)",
          color: "#f5f5f7",
          borderRadius: "999px",
          padding: "0.55rem 1.1rem",
          fontSize: "0.68rem",
          letterSpacing: "0.1em",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        ← Back
      </button>

      <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, margin: 0, lineHeight: 1.15, textAlign: "center" }}>
        Mateo Morrison Jr
      </h1>

      <section style={{ color: "#d5d8dc", maxWidth: "38rem", margin: "3rem auto 0" }}>
        <p data-block>
          A tech builder based in New
          York. His work is centered on proprietary ventures in artificial
          intelligence, quantitative finance, and cybersecurity, built for
          emerging markets.
        </p>
        <p data-block>
          As a teenager he co-founded fangoo (2015–2017), an e-commerce platform
          serving the Dominican Republic — running payments, logistics, and
          product listings end to end while still in high school. Since 2019 he
          has worked across the technology infrastructure of capital markets:
          software licensing, technical project delivery for engineering and
          analytics teams, end-user computing and AI consulting for trading
          floors, and currently information technology at a leading global
          macro fund.
        </p>
        <p data-block>
          His focus is building software and systems end to end — owned,
          engineered in-house, and shipped quietly. He publishes selectively
          while his ventures are in development.
        </p>
      </section>

      <section
        style={{
          maxWidth: "38rem",
          margin: "3rem auto 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: "0.9rem",
        }}
      >
        <span style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9aa0a6" }}>
          Email
        </span>
        <a
          href={`mailto:${EMAIL}`}
          style={{ color: "#f5f5f7", textDecoration: "none", fontSize: "0.85rem" }}
        >
          {EMAIL}
        </a>
      </section>

      <footer
        style={{
          marginTop: "3rem",
          textAlign: "center",
          fontSize: "0.68rem",
          color: "#767b81",
          letterSpacing: "0.08em",
        }}
      >
        morrisonjr.com · © 2026
      </footer>
    </main>
  );
}
