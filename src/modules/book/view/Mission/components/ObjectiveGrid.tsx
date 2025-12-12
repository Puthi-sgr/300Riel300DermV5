import React from "react";
import { motion } from "framer-motion";
import ObjectiveCard from "./ObjectiveCard";

type Objective = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ObjectiveGridProps = {
  objectives: Objective[];
};

const ObjectiveGrid: React.FC<ObjectiveGridProps> = ({ objectives }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.08 } },
    }}
    className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
  >
    {objectives.map((objective, idx) => (
      <motion.div
        key={objective.title}
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.04 } },
        }}
      >
        <ObjectiveCard {...objective} />
      </motion.div>
    ))}
  </motion.div>
);

export default ObjectiveGrid;
