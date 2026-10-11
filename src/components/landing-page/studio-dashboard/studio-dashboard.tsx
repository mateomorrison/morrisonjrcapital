"use client";

const VENTURES = [
  { name: "Venture 01", domain: "AI · Decision infrastructure", status: "Stealth",  tint: "#3D7FFF" },
  { name: "Venture 02", domain: "Quant · Allocation systems", status: "In build", tint: "#8B5CF6" },
  { name: "Venture 03", domain: "Cyber · Mobile-first defense", status: "In build", tint: "#22D3EE" },
  { name: "fangoo",     domain: "E-commerce · Exited 2017",    status: "Alumni",  tint: "#F5F5F7" },
];

const STATS = [
  { label: "Studio est.", value: "2020" },
  { label: "Mode", value: "Stealth" },
  { label: "Building since", value: "2016" },
];

export default function StudioDashboard() {
  return (
    <div className="studio-dash">
      <div className="sd-header">
        <span className="sd-logo">morrison</span>
        <span className="sd-title">Studio — Portfolio · Proprietary. Built from scratch.</span>
      </div>
      <div className="sd-stats">
        {STATS.map((s) => (
          <div className="sd-stat" key={s.label}>
            <span className="sd-stat-value">{s.value}</span>
            <span className="sd-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="sd-rows">
        {VENTURES.map((v) => (
          <div className="sd-row" key={v.name}>
            <span className="sd-dot" style={{ background: v.tint }} />
            <span className="sd-name">{v.name}</span>
            <span className="sd-domain">{v.domain}</span>
            <span className="sd-status" data-status={v.status}>{v.status}</span>
          </div>
        ))}
      </div>
      <div className="sd-foot">
        Emerging markets focus · AI × Quant × Cybersecurity
      </div>
    </div>
  );
}
