import React from "react";
import { motion } from "framer-motion";

export type PhaseShape = {
  number: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  additionalInfo: string;
};

type Props = {
  phase: PhaseShape;
  index: number;
  inView: boolean;
};

const PhaseCard: React.FC<Props> = ({ phase, index, inView }) => {

  const Icon = phase.icon;
  const alignClass = index % 2 === 0 ? "md:mr-auto" : "md:ml-auto";

  return (
    <motion.div
      key={phase.number}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-5 rounded-2xl w-full md:w-[min(34rem,100%)] ${alignClass} glass-card shadow-impact  flex flex-col`}
    >
      <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
        <Icon className="w-6 h-6 text-eco-700" />
        <h2 className="text-lg font-semibold text-earth-900">{phase.title}</h2>
      </div>
      <p className="text-earth-700 mb-2 text-base">{phase.description}</p>
      <p className="text-sm text-earth-600">{phase.additionalInfo}</p>
    </motion.div>
  );
};

export default PhaseCard;
