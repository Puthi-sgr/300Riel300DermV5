import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface SponsorsHeaderProps {
  isInView: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SponsorsHeader: React.FC<SponsorsHeaderProps> = ({ isInView }) => {
  const { t } = useLanguage();

  return (
    <motion.div variants={itemVariants}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mb-4"
      >
        <Users className="w-12 h-12 text-eco-600" />
      </motion.div>
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 tracking-normal normal-case">
        {t("sponsors.title")}
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {t("sponsors.subtitle")}
      </p>
    </motion.div>
  );
};

export default SponsorsHeader;
