import React from "react";
import { motion } from "framer-motion";
import AdvantagesOfMangrove from "../components/AdvantagesOfMangrove";
import Threats from "../components/Threats";

const AdvantageAndThreat: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="space-y-12"
  >
    <AdvantagesOfMangrove />
    <Threats />
  </motion.div>
);

export default AdvantageAndThreat;