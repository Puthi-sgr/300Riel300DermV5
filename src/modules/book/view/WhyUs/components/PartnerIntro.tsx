import React from "react";
import { motion } from "framer-motion";
import PillBadge from "../../../components/PillBadge";
import FullRoundedGradientButton from "../../../components/FullRoundedGradientButton";
import { CldImage } from "../../../../../components/media/CldImage";
import { getCldImage } from "../../../../../core/lib/getCldImage";
import { useLanguage } from "../../../../../context/LanguageContext";

const PartnerIntro: React.FC = () => {
  const { t } = useLanguage();
  const { image, alt } = getCldImage("feature.mangrove", { width: 800, autoQuality: true, autoFormat: true });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <div className="flex">
          <PillBadge className="bg-pill-eco text-eco-700 border-eco-200">{t("book.whyUs.badge")}</PillBadge>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-earth-900">{t("book.whyUs.title")}</h2>
        <p className="text-earth-700 text-base sm:text-lg">{t("book.whyUs.body")}</p>
        <FullRoundedGradientButton className="px-6 rounded-xl">{t("book.whyUs.primaryCta")}</FullRoundedGradientButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-eco-300/12 blur-3xl rounded-[28px]" aria-hidden />
        <div className="relative rounded-[28px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.18)] border border-eco-100 bg-white">
          <CldImage image={image} alt={alt ?? t("book.whyUs.image.altFallback")} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent p-4">
            <div className="text-white font-semibold">{t("book.whyUs.image.captionTitle")}</div>
            <p className="text-white/80 text-sm">{t("book.whyUs.image.captionQuote")}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PartnerIntro;