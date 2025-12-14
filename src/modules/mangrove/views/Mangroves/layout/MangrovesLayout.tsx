import React from "react";
import { motion } from "framer-motion";

type MangrovesLayoutProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  factsNode?: React.ReactNode;
  advantageTop?: React.ReactNode;
  threatsBottom?: React.ReactNode;
  ctaNode?: React.ReactNode;
  className?: string;
};

/**
 * Page-level skeletal layout for the Mangroves section.
 * This file is presentation-only: it accepts already-prepared nodes
 * (atoms/molecules/organisms) from the page `index.tsx` and arranges them.
 */
const MangrovesLayout: React.FC<MangrovesLayoutProps> = ({
  title,
  subtitle,
  factsNode,
  advantageTop,
  threatsBottom,
  ctaNode,
  className = "",
}) => {
  return (
    <section id="about" className={`relative overflow-hidden bg-white py-16 ${className}`}>
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
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-earth-700"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {factsNode}

        {/* Inlined AdvantageAndThreat skeletal wrapper (moved here per request) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 gap-10">
            <div>{advantageTop}</div>
            <div>{threatsBottom}</div>
          </div>
        </motion.div>

        {ctaNode}
      </div>
    </section>
  );
};

export default MangrovesLayout;
