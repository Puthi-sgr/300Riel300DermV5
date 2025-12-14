import React from "react";
import { motion } from "framer-motion";
import CommitmentCard from "./CommitmentCard";

type Commitment = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type CommitmentsGridProps = {
  title: string;
  subtitle: string;
  commitments: Commitment[];
};

const CommitmentsGrid: React.FC<CommitmentsGridProps> = ({ title, subtitle, commitments }) => (
  <div className="space-y-4">
    <div className="space-y-1">
      <h3 className="text-2xl sm:text-3xl font-bold text-earth-900">{title}</h3>
      <p className="text-earth-700">{subtitle}</p>
    </div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {commitments.map((item, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: idx * 0.03 } },
          }}
        >
          <CommitmentCard {...item} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default CommitmentsGrid;
