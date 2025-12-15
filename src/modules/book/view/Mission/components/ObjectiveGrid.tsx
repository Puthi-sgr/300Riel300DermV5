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

const ObjectiveGrid: React.FC<ObjectiveGridProps> = ({ objectives }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-6"
    >
      {objectives.map((objective, idx) => {
        const tone =
          idx === 1
            ? {
                card: "from-amber-50/80 via-white/70 to-amber-100/40",
                icon: "bg-amber-50 text-amber-700 border-amber-100",
                number: "text-amber-200",
                glow: "shadow-[0_28px_80px_-35px_rgba(251,191,36,0.55)]",
              }
            : {
                card: "from-eco-50/75 via-white/70 to-eco-100/40",
                icon: "bg-eco-50 text-eco-700 border-eco-100",
                number: "text-eco-200",
                glow: "shadow-[0_28px_80px_-35px_rgba(34,197,94,0.45)]",
              };

        const zIndex = 30 - idx;
        const stackOffset = idx === 0 ? "translate-y-0" : idx === 1 ? "translate-y-1" : "translate-y-2";

        return (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.04 } },
            }}
            className={[
              "relative transform-gpu",
              "first:mt-0 -mt-8 sm:-mt-12 md:mt-0",
              "md:transform-none",
              stackOffset,
            ].join(" ")}
            style={{ zIndex }}
          >
            <div className={["pointer-events-none absolute inset-0 rounded-[26px] blur-2xl opacity-70", tone.glow].join(" ")} />
            <div className="relative rounded-[22px]">
              <ObjectiveCard
                {...objective}
                className={`bg-gradient-to-br ${tone.card}`}
                iconWrapperClassName={tone.icon}
                numberClassName={tone.number}
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ObjectiveGrid;
