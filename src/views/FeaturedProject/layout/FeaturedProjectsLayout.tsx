import React from "react";
import { motion } from "framer-motion";

type Props = {
  headerNode: React.ReactNode;
  projectsGridNode: React.ReactNode;
};

const FeaturedProjectsLayout: React.FC<Props> = ({
  headerNode,
  projectsGridNode,
}) => {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] py-16 sm:py-20"
      id="featured-projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-eco-300/25 blur-[140px]" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-eco-200/30 blur-[160px]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {headerNode}
        </motion.div>

        <div className="relative z-10">
          {projectsGridNode}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjectsLayout;
