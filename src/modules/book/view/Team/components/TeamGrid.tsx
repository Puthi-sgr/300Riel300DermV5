import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

type Member = React.ComponentProps<typeof TeamCard>;

type TeamGridProps = {
  members: Member[];
};

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.08 } },
    }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
  >
    {members.map((member, idx) => (
      <motion.div
        key={member.name}
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.03 } },
        }}
      >
        <TeamCard {...member} />
      </motion.div>
    ))}
  </motion.div>
);

export default TeamGrid;
