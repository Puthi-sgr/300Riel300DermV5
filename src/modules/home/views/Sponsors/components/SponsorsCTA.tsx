import React from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { useLanguage } from "../../../../../context/LanguageContext";

interface SponsorsCTAProps {
  onContactClick: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SponsorsCTA: React.FC<SponsorsCTAProps> = ({ onContactClick }) => {
  const { t } = useLanguage();

  return (
    <motion.div variants={itemVariants}>
      <div className="bg-gradient-to-br from-eco-50 to-earth-50 rounded-2xl p-8 shadow-lg border border-eco-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-normal normal-case">
          {t("sponsors.partnerWithUs")}
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {t("sponsors.subtitle")}
        </p>
        <motion.button
          onClick={onContactClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center px-6 py-3 bg-eco-600 text-white rounded-full font-semibold shadow-lg hover:bg-eco-700 transition-all duration-300"
        >
          <Handshake className="mr-2 w-5 h-5" />
          {t("sponsors.becomePartner")}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SponsorsCTA;
