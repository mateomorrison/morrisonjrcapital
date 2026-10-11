import React from "react";

interface FeatureCardProps {
  img: string;
  title: string;
  desc: string;
  icon: string;
  glyph?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  desc,
  glyph = "◎",
}) => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] w-full border border-zinc-800 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden bg-[#0B0B0D]">
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-[#0B0B0D] to-black" />
      <div className="absolute -top-16 -right-10 h-64 w-64 rounded-full blur-3xl opacity-20 bg-[#FF2F00]/40" />
      <span className="absolute top-6 sm:top-8 lg:top-10 right-6 sm:right-10 text-[8rem] sm:text-[10rem] lg:text-[13rem] font-bold text-white/[0.05] leading-none select-none">
        {glyph}
      </span>
      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col gap-3 sm:gap-4 lg:gap-5 max-w-2xl">
        <span className="text-[#FF2F00] text-xs font-semibold tracking-[0.25em] uppercase">
          Studio Focus
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
