import React from "react";
import { motion } from "framer-motion";
import TierCard from "./TierCard";

type Tier = React.ComponentProps<typeof TierCard>;

type TierGridProps = {
  tiers: Tier[];
};

const TierGrid: React.FC<TierGridProps> = ({ tiers }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.08 } },
    }}
    className="grid grid-cols-1 lg:grid-cols-3 gap-5"
  >
    {tiers.map((tier, idx) => (
      <motion.div
        key={tier.name}
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.04 } },
        }}
      >
        <TierCard {...tier} />
      </motion.div>
    ))}
  </motion.div>
);

export default TierGrid;
