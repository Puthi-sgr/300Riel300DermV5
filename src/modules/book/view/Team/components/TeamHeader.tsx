import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../../context/LanguageContext";

const TeamHeader: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center space-y-3"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-earth-900">{t("book.team.header.title")}</h2>
      <p className="text-earth-700 max-w-3xl mx-auto">{t("book.team.header.subtitle")}</p>
    </motion.div>
  );
};

export default TeamHeader;
