import React from "react";
import { motion } from "framer-motion";
import { CldImage } from "../../../../../components/media/CldImage";
import { getCldImage } from "../../../../../core/lib/getCldImage";

export type SponsorShape = {
  name: string;
  image?: string;
  supportKey?: string; // optional translation key (not used inside component)
  supportText?: string; // resolved text to display
};

type Props = {
  sponsor: SponsorShape;
  idx: number;
  prefersReducedMotion?: boolean;
};

const SponsorCard: React.FC<Props> = ({ sponsor, idx, prefersReducedMotion }) => {
  const cardVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, x: -14 },
        show: (i: number) => ({
          opacity: 1,
          x: 0,
          transition: { duration: 0.32, ease: [0.25, 0.6, 0.3, 1], delay: i * 0.08 },
        }),
      };

  const renderImage = () => {
    if (!sponsor.image) return null;
    if (sponsor.image === "gi" || sponsor.image === "villa") {
      const assetKey = sponsor.image === "villa" ? "sponsors.giantibis" : "sponsors.ktvilla";
      const { image, alt } = getCldImage(assetKey, { width: 320, autoQuality: true, autoFormat: true });
      return <CldImage image={image} alt={alt ?? sponsor.name} className="h-16 w-32 object-contain mx-auto" />;
    }
    return null;
  };

  return (
    <motion.article
      key={sponsor.name}
      className="glass-card bg-card-foam rounded-3xl shadow-impact hover:shadow-impact-hover p-5 flex flex-col gap-5 transition-shadow duration-150 ease-out border border-white/70"
      variants={cardVariants}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.2 }}
      custom={idx}
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-lg font-semibold text-earth-900">{sponsor.name}</h4>
        <span className="text-[11px] uppercase tracking-normal text-eco-700 bg-white/80 border border-white/70 px-2 py-1 rounded-full glass-card">Sponsor</span>
      </div>

      {renderImage()}

      <p className="text-sm text-earth-800 leading-relaxed">
        {sponsor.supportText}
      </p>
    </motion.article>
  );
};

export default SponsorCard;
