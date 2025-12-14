import React from "react";
import { motion } from "framer-motion";
import HeroVideo from "./HeroVideo";

type HeroVisualCardProps = {
  title: string;
  subtitle: string;
  videoPublicId: string;
};

const HeroVisualCard: React.FC<HeroVisualCardProps> = ({
  title,
  subtitle,
  videoPublicId,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative max-w-xl mx-auto lg:max-w-2xl"
    >
      <div className="relative rounded-[36px] bg-white p-4 shadow-2xl shadow-eco-900/10 border border-eco-100">
        <div className="relative h-[520px] sm:h-[560px] w-full rounded-[28px] overflow-hidden">
          <HeroVideo publicId={videoPublicId} ariaLabel={subtitle} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute -bottom-8 left-6 right-6 glass-card rounded-2xl shadow-xl px-5 py-4 flex items-center justify-between"
        >
          <div>
            <p className="text-xs text-white uppercase tracking-normal">
              {"Current Fundraiser"}
            </p>
            <p className="text-2xl font-bold text-earth-900">{title}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">$100</span>
            <span className="text-xs text-white text-left">raised</span>
          </div>
        </motion.div>
      </div>
      <div className="absolute -top-6 -right-2 glass-card shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3 border border-eco-100">
        <span className="h-10 w-10 rounded-full bg-eco-50 flex items-center justify-center text-eco-600 font-semibold">
          dYOn
        </span>
        <div>
          <p className="text-xs text-eco-500 uppercase">Next Goal</p>
          <p className="text-sm font-semibold text-earth-900">300 Books</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroVisualCard;
