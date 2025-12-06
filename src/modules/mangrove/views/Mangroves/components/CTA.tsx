import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../../context/LanguageContext";

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center glass-card shadow-sm ring-1 ring-white/40 bg-card-grain rounded-3xl p-8"
    >
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-earth-900">{t("mangroves.cta.text")}</h3>
        <p className="text-earth-700">{t("mangroves.cta.description")}</p>
      </div>

      <div className="flex gap-3">
        <button className="px-5 py-3 bg-eco-600 text-white rounded-xl font-semibold hover:bg-eco-700 transition-colors">
          {t("mangroves.cta.button")}
        </button>
        <button className="px-5 py-3 bg-white text-earth-900 rounded-xl font-semibold border border-eco-200 hover:border-eco-400 transition-colors">
          {t("mangroves.cta.learnMore.button")}
        </button>
      </div>
    </motion.div>
  );
};

export default CTA;