import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import { sponsors2025, sponsorsMeta } from "../data/sponsorsData";
import { CldImage } from "../../../components/media/CldImage";
import { getCldImage } from "../../../core/lib/getCldImage";

const SponsorsSection = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

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

  return (
    <div className="rounded-3xl border border-eco-100 bg-gradient-to-br from-white to-emerald-200/20 shadow-md p-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-eco-700">
            {t(sponsorsMeta.titleKey)}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-earth-900 leading-snug">
            {t(sponsorsMeta.subtitleKey)}
          </h3>
          <p className="text-sm text-earth-700">
            {t("project.sponsors.caption") ?? "Partners who keep this work moving forward."}
          </p>
        </div>
        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-eco-50 border border-eco-200 text-eco-700">
          {sponsorsMeta.period}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sponsors2025.map((sponsor, idx) => (
          <motion.article
            key={sponsor.name}
            className="glass-card shadow-impact hover:shadow-impact-hover p-5 flex flex-col gap-5 transition-shadow duration-150 ease-out"
            variants={cardVariants}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.2 }}
            custom={idx}
          >
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-lg font-semibold text-earth-900">{sponsor.name}</h4>
              <span className="text-[11px] uppercase tracking-[0.22em] text-eco-700 bg-white/70 border border-white/80 px-2 py-1 rounded-full">
                Sponsor
              </span>
            </div>

            {(sponsor.image === "gi" || sponsor.image === "villa") && (() => {
              const assetKey = sponsor.image === "villa" ? "sponsors.giantibis" : "sponsors.ktvilla";
              const { image, alt } = getCldImage(assetKey, { width: 320, autoQuality: true, autoFormat: true });
              return (
                <CldImage
                  image={image}
                  alt={alt ?? sponsor.name}
                  className="h-16 w-32 object-contain mx-auto"
                />
              );
            })()}

            <p className="text-sm text-earth-800 leading-relaxed">
              {t(sponsor.supportKey)}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
