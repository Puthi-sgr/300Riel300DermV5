import React from "react";
import { motion } from "framer-motion";
import PillBadge from "../../../components/PillBadge";
import { useLanguage } from "../../../../../context/LanguageContext";

type MissionIntroProps = {
  quote: string;
  intro: string;
};

const MissionIntro: React.FC<MissionIntroProps> = ({ quote, intro }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center space-y-4"
    >
      <div className="flex justify-center">
        <PillBadge className="text-eco-700 font-semibold bg-pill-eco border-eco-200">{t("book.mission.badge")}</PillBadge>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-900 leading-tight">“{quote}”</h2>
      <p className="text-earth-700 max-w-3xl mx-auto text-base sm:text-lg">{intro}</p>
    </motion.div>
  );
};

export default MissionIntro;