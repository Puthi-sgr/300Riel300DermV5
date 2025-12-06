import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../context/LanguageContext";
import Facts from "./components/Facts";
import AdvantageAndThreat from "./layout/AdvantageAndThreat";
import CTA from "./components/CTA";


const Mangroves: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden bg-white py-16">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,89,0,0.03)_0%,rgba(0,89,0,0.04)_50%,rgba(0,89,0,0.02)_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-earth-900 mb-4"
          >
            {t("mangroves.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-earth-700"
          >
            {t("mangroves.subtitle")}
          </motion.p>
        </div>

        <Facts />
        <AdvantageAndThreat />
        <CTA />
      </div>
    </section>
  );
};

export default Mangroves;
