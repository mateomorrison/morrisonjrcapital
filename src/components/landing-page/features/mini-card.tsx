import React from "react";

interface FeatureMiniCardProps {
  images?: string[];
  rotation?: string;
  title: string;
}

const FeatureMiniCard: React.FC<FeatureMiniCardProps> = ({
  images = [],
  rotation = "",
  title,
}) => {
  return (
    <div
      className={`relative h-[280px] sm:h-[320px] lg:h-[360px] w-full max-w-[300px] ${rotation} border border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#101012] flex flex-col justify-between p-5 sm:p-6`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900/80 via-[#101012] to-black" />
      <div className="relative z-10 flex flex-col gap-3">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-14 w-14 object-cover rounded-xl opacity-80"
            loading="lazy"
          />
        ))}
      </div>
      <h3 className="relative z-10 text-lg sm:text-xl lg:text-2xl font-medium text-white leading-tight">
        {title}
      </h3>
    </div>
  );
};

export default FeatureMiniCard;
