import React from "react";
import { motion } from "framer-motion";
import PillBadge from "../../../components/PillBadge";

type TimelineHeaderProps = {
  title: string;
  subtitle: string;
};

const TimelineHeader: React.FC<TimelineHeaderProps> = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="text-center space-y-4"
  >
    <div className="flex justify-center">
      <PillBadge className="bg-pill-eco text-eco-700 border-eco-200">Our Mission</PillBadge>
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold text-earth-900">{title}</h2>
    <p className="text-earth-700 max-w-3xl mx-auto">{subtitle}</p>
  </motion.div>
);

export default TimelineHeader;
