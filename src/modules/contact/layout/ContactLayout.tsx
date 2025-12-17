import React from "react";
import { motion } from "framer-motion";

type Props = {
  headerNode?: React.ReactNode;
  leftNode: React.ReactNode;
  rightNode: React.ReactNode;
  containerRef?: React.Ref<any>;
  animate?: boolean;
};

const ContactLayout: React.FC<Props> = ({
  headerNode,
  leftNode,
  rightNode,
  containerRef,
  animate = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] py-16 sm:py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-eco-300/25 blur-[140px]" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-eco-200/30 blur-[160px]" />
      </div>

      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
      >
        <motion.div variants={itemVariants} className="text-center space-y-3">
          {headerNode}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="glass-card bg-card-foam rounded-3xl shadow-impact border border-white/70 p-8 space-y-6"
          >
            {leftNode}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card bg-card-glass rounded-3xl shadow-impact border border-white/70 p-8 space-y-8"
          >
            {rightNode}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactLayout;
