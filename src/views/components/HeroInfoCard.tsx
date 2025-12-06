import React from "react";
import { motion } from "framer-motion";
import { Activity, Facebook, FolderOpen } from "lucide-react";

type HeroInfoCardProps = {
  t: (key: string) => string | undefined;
  onProjectsClick: () => void;
  onFacebookClick: () => void;
};

const HeroInfoCard: React.FC<HeroInfoCardProps> = ({
  t,
  onProjectsClick,
  onFacebookClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-card-foam rounded-2xl shadow-impact hover:shadow-impact-hover p-8 sm:p-10 text-earth-900 transition-shadow duration-150 ease-out"
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="inline-flex items-center gap-2 text-eco-600 font-semibold text-sm bg-eco-50 px-4 py-2 rounded-full"
      >
        <Activity size={16} />
        {t("hero.subtitle")}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl sm:text-5xl font-bold text-earth-900 mt-6 leading-tight"
        aria-label="Plant mangrove trees in Cambodia to restore coastal ecosystems and fight climate change"
      >
        {t("hero.title")}
        <span className="sr-only">
          Cambodia mangrove tree planting environmental conservation eco project
          climate resilience blue carbon biodiversity restoration
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg text-earth-700 mt-6"
      >
        {t("hero.description") ?? t("hero.subtitle")}
      </motion.p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onProjectsClick}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-eco-500 to-eco-600 text-white font-semibold shadow-lg shadow-eco-900/20"
        >
          <FolderOpen className="mr-2" size={20} />
          {t("hero.viewProjects")}
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onFacebookClick}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-eco-200 text-eco-700 font-semibold bg-white"
        >
          <Facebook className="mr-2" size={20} />
          {t("hero.follow")}
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8 flex items-center gap-4"
      >
        <div className="flex -space-x-3">
          {[1, 2, 3].map((item) => (
            <img
              key={item}
              src={`https://i.pravatar.cc/64?img=${item + 10}`}
              alt="Project supporter"
              className="w-12 h-12 rounded-full border-4 border-white shadow-md"
            />
          ))}
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-eco-500">
            {t("hero.supportersLabel") ?? "Active Supporters"}
          </p>
          <p className="text-2xl font-bold text-earth-900">1.5K+</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroInfoCard;
