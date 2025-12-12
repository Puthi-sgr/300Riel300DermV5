import React from "react";
import { motion } from "framer-motion";
import Hero from "./view/Hero";

const BookProjectPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <Hero />
      </div>
    </motion.main>
  );
};

export default BookProjectPage;
