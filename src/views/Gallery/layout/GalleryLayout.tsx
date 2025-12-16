import React from "react";
import { motion } from "framer-motion";

type Props = {
  headerNode: React.ReactNode;
  galleryNode: React.ReactNode;
  footerNode: React.ReactNode;
  containerRef?: React.Ref<any>;
  animate?: boolean;
  prefersReducedMotion?: boolean;
};

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.2, 0.6, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.2, 0.6, 0.3, 1] },
  },
};

const GalleryLayout: React.FC<Props> = ({
  headerNode,
  galleryNode,
  footerNode,
  containerRef,
  animate = false,
  prefersReducedMotion = false,
}) => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-eco-300/25 blur-[140px]" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-eco-200/30 blur-[160px]" />
      </div>
      <motion.div
        ref={containerRef}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? false : animate ? "visible" : undefined}
        variants={prefersReducedMotion ? undefined : containerVariants}
        viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
      >
        <motion.div
          variants={prefersReducedMotion ? undefined : itemVariants}
          className="text-center space-y-3"
        >
          {headerNode}
        </motion.div>

        {/* Facebook Posts with Horizontal Scroll */}
        <div className="relative">
          {galleryNode}
        </div>

        {/* Follow Button */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          {footerNode}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GalleryLayout;
