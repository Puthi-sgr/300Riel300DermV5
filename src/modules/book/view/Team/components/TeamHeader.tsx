import React from "react";
import { motion } from "framer-motion";

const TeamHeader: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="text-center space-y-3"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-earth-900">Meet the Team Behind the Mission</h2>
    <p className="text-earth-700 max-w-3xl mx-auto">
      We are a group of passionate students dedicated to providing educational resources to Avlatan Primary School.
      Together, we are building bridges through books.
    </p>
  </motion.div>
);

export default TeamHeader;
