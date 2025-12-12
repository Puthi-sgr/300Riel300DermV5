import React from "react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import GlassCard from "../../../components/GlassCard";
import { CldImage } from "../../../../../components/media/CldImage";

type TeamCardProps = {
  name: string;
  role: string;
  quote: string;
  image: CloudinaryImage;
  alt: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, role, quote, image, alt }) => (
  <GlassCard className="bg-white/90 rounded-[22px] border border-white/70 p-6 shadow-sm space-y-3">
    <div className="flex justify-center">
      <CldImage
        image={image}
        alt={alt}
        className="h-20 w-20 rounded-full object-cover border border-white/70 shadow-sm"
      />
    </div>
    <div className="text-center space-y-1">
      <p className="text-lg font-semibold text-earth-900">{name}</p>
      <p className="text-xs font-semibold text-eco-600 uppercase tracking-wide">{role}</p>
      <p className="text-sm text-earth-700 italic leading-relaxed">“{quote}”</p>
    </div>
  </GlassCard>
);

export default TeamCard;
