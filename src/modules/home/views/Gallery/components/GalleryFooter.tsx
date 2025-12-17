import React from "react";
import { Facebook, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../../context/LanguageContext";

const GalleryFooter: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.a
      href="https://web.facebook.com/profile.php?id=100091407241732"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-8 py-3 glass-card bg-gradient-to-r from-[#1b74e4] via-[#1877f2] to-[#1464d4] text-white font-semibold rounded-full transition-colors group shadow-md hover:shadow-lg"
    >
      <Facebook className="mr-2" size={20} />
      {t("gallery.viewMore")}
      <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  );
};

export default GalleryFooter;
