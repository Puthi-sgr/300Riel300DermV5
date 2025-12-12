import React from "react";
import { CldImage } from "../../../../../components/media/CldImage";
import { getCldImage } from "../../../../../core/lib/getCldImage";

const ProblemImageCard: React.FC = () => {
  const { image, alt } = getCldImage("gallery.droneShot2", { width: 900, autoQuality: true, autoFormat: true });

  return (
    <div className="relative rounded-[28px] border border-eco-100 shadow-impact overflow-hidden bg-card-foam">
      <div className="absolute inset-0 bg-eco-500/4 blur-[80px]" aria-hidden />
      <div className="relative p-3">
        <div className="rounded-2xl overflow-hidden border border-white/70 shadow-lg bg-white">
          <CldImage image={image} alt={alt ?? "Avlatan Village"} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ProblemImageCard;
