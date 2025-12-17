import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SponsorsLayoutProps {
  headerNode: ReactNode;
  partnersNode: ReactNode;
  ctaNode: ReactNode;
  containerRef: React.Ref<HTMLDivElement>;
  isInView: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SponsorsLayout: React.FC<SponsorsLayoutProps> = ({
  headerNode,
  partnersNode,
  ctaNode,
  containerRef,
  isInView,
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-eco-50 to-white">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16">{headerNode}</div>

        {/* Partners Grid */}
        <div className="relative mb-16">{partnersNode}</div>

        {/* Partnership CTA */}
        <div className="text-center">{ctaNode}</div>
      </motion.div>
    </section>
  );
};

export default SponsorsLayout;
