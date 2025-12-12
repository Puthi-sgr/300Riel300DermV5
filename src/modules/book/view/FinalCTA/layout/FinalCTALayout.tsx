import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import BackgroundBlob from "../../../components/BackgroundBlob";
import FullRoundedGradientButton from "../../../components/FullRoundedGradientButton";

type FinalCTALayoutProps = {
  title: string;
  kicker?: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

const FinalCTALayout: React.FC<FinalCTALayoutProps> = ({
  title,
  kicker,
  description,
  primaryLabel = "Support the project",
  secondaryLabel = "Learn more",
}) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
    <div className="absolute inset-0 pointer-events-none">
      <BackgroundBlob className="-top-24 -left-10 w-72 h-72" />
      <BackgroundBlob className="-bottom-24 right-0 w-72 h-72" colorClass="bg-eco-200/28" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-4xl mx-auto text-center space-y-6"
    >
      <SectionHeader kicker={kicker} title={title} subtitle={description} align="center" />
      <div className="flex flex-wrap justify-center gap-3">
        <FullRoundedGradientButton className="px-6">{primaryLabel}</FullRoundedGradientButton>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold text-eco-700 border border-eco-600/30 bg-white/60 hover:bg-white/80 transition-colors duration-200"
        >
          {secondaryLabel}
        </button>
      </div>
    </motion.div>
  </section>
);

export default FinalCTALayout;
