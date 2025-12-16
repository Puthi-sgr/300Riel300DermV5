import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
};

const PhasesHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-2 text-2xl sm:text-3xl font-bold text-earth-900"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base font-semibold uppercase tracking-normal text-eco-700"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </>
  );
};

export default PhasesHeader;
