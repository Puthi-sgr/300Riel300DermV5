import React from "react";
import { Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

type Props = {
  prefersReducedMotion?: boolean;
  inView?: boolean;
};

const GalleryHeader: React.FC<Props> = ({ prefersReducedMotion = false, inView = false }) => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.5 }}
        animate={
          prefersReducedMotion
            ? false
            : inView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mb-4"
      >
        <Facebook className="w-12 h-12 text-[#1877F2]" />
      </motion.div>
      <p className="text-sm font-semibold uppercase text-eco-700 tracking-normal">
        {t("gallery.title")}
      </p>
      <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl">
        {t("gallery.title")}
      </h2>
    </>
  );
};

export default GalleryHeader;
