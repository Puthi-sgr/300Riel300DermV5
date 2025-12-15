import React from "react";
import { motion } from "framer-motion";
import ChallengeCard from "./ChallengeCard";

type Challenge = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type KeyChallengesProps = {
  title: string;
  subtitle: string;
  challenges: Challenge[];
};

const KeyChallenges: React.FC<KeyChallengesProps> = ({ title, subtitle, challenges }) => (
  <div className="space-y-4">
    <div className="space-y-1">
      <h3 className="text-2xl sm:text-3xl font-bold text-earth-900">{title}</h3>
      <p className="text-earth-700">{subtitle}</p>
    </div>

    <motion.div
      className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {challenges.map((item, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: idx * 0.04 } },
          }}
        >
          <ChallengeCard {...item} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default KeyChallenges;
