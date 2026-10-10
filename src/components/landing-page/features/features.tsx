import React from "react";
import FeaturesHeader from "./features-header";
import FeatureCard from "./feature-card";
import MiniCardSection from "./mini-card-section";
import Tagline from "./tagline";

interface FeatureItem {
  title: string;
  desc: string;
  img: string;
  icon: string;
}

const FEATURES_DATA: FeatureItem[] = [
  {
    title: "Proprietary AI Ventures",
    desc: "We build AI products from scratch — thesis-driven, shipped fast, iterating in the market. Decision infrastructure for private capital, agentic workflow tooling, and models that turn unstructured data into an edge.",
    img: "/images/features/bitcoin.png",
    icon: "/images/features/earning.png",
  },
  {
    title: "Systematic Quant Strategies",
    desc: "Trading and capital-allocation systems built in-house, owned end to end — compounding across cycles rather than chasing single-market narratives.",
    img: "/images/features/portfolio.png",
    icon: "/images/features/trading.png",
  },
  {
    title: "Emerging-Market Security",
    desc: "Offensive and defensive tooling for mobile-first rails in emerging markets — the gap is the studio’s largest unfair advantage.",
    img: "/images/features/ipo.png",
    icon: "/images/features/rocket.png",
  },
  {
    title: "Research-First, Owned End to End",
    desc: "Every venture earns allocation through out-of-sample evidence, disciplined risk limits, and infrastructure we can audit.",
    img: "/images/features/tbc.png",
    icon: "/images/features/curve.png",
  },
];

const Features: React.FC = () => {
  return (
    <section className="px-2 sm:px-4 lg:px-6 w-full mt-10 sm:mt-16 lg:mt-20">
      <div className="h-fit w-full bg-[#0F0F0F] rounded-2xl sm:rounded-3xl lg:rounded-4xl px-4 sm:px-8 lg:px-12 xl:px-20">
        <FeaturesHeader />

        {/* Grid of Feature Cards */}
        <div className="border-4 sm:border-6 border-zinc-900 rounded-2xl sm:rounded-3xl lg:rounded-4xl grid grid-cols-1 lg:grid-cols-2 w-full mb-6 sm:mb-8 lg:mb-10 p-1 sm:p-2 gap-1 sm:gap-2">
          {FEATURES_DATA.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>

        {/* Center Showcase */}
        <Tagline />

        {/* Mini Feature Cards */}
        <MiniCardSection />
      </div>
    </section>
  );
};

export default Features;
