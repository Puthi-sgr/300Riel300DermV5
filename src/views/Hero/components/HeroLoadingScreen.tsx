import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

export type HeroLoadingScreenProps = {
  isVisible: boolean;
};

const HeroLoadingScreen: React.FC<HeroLoadingScreenProps> = ({ isVisible }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-eco-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-live="polite"
          aria-label="Loading hero content"
        >
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="h-12 w-12 rounded-full border-4 border-eco-500/40 border-t-emerald-500 animate-spin" />
            <div>
              <p className="text-sm uppercase tracking-normal text-eco-400">
                {t("common.loading.hero.kicker")}
              </p>
              <p className="text-xl font-semibold text-eco-800">
                {t("common.loading.hero.title")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroLoadingScreen;
