import React from "react";
import PillBadge from "../../../components/PillBadge";
import FullRoundedGradientButton from "../../../components/FullRoundedGradientButton";
import { useLanguage } from "../../../../../context/LanguageContext";

const MissionCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <PillBadge className="bg-pill-eco text-eco-700 border-eco-200">{t("book.mission.cta.badge")}</PillBadge>
      </div>
      <h3 className="text-3xl sm:text-4xl font-bold text-earth-900">{t("book.mission.cta.title")}</h3>
      <p className="text-earth-700 max-w-3xl mx-auto">{t("book.mission.cta.body")}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <FullRoundedGradientButton href="/#contact" className="px-6 rounded-xl">
          {t("book.mission.cta.primary")}
        </FullRoundedGradientButton>
        <a
          href="#timeline"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold text-eco-700 border border-eco-600/30 bg-white/70 hover:bg-white/85 transition-colors duration-200"
        >
          {t("book.mission.cta.secondary")}
        </a>
      </div>
    </div>
  );
};

export default MissionCTA;
