import React from "react";
import FeatureMiniCard from "./mini-card";

const MiniCardSection: React.FC = () => {
  return (
    <div className="h-fit w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 relative -top-12 sm:-top-16 lg:-top-20 xl:-top-24 mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-4">
      <FeatureMiniCard
        images={["/logo.jpg"]}
        rotation="rotate-1 sm:rotate-2"
        title="Co-founded fangoo as a teenager — an e-commerce platform serving the Dominican Republic"
      />
      <FeatureMiniCard
        images={["/logo.jpg"]}
        rotation="-rotate-1 sm:-rotate-3"
        title="A decade inside the infrastructure of capital markets — from licensing to global macro funds"
      />
      <FeatureMiniCard
        images={["/logo.jpg"]}
        rotation="rotate-1 sm:rotate-4"
        title="Studio est. 2020, building proprietary ventures in stealth, aimed at emerging markets"
      />
    </div>
  );
};

export default MiniCardSection;
