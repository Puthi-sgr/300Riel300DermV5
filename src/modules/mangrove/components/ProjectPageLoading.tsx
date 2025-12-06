import React from "react";
import { motion } from "framer-motion";

const ProjectPageLoading = () => (
  <motion.main
    className="min-h-screen bg-eco-50 flex items-center justify-center px-6"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-full max-w-5xl rounded-3xl bg-card-glass border border-white/60 backdrop-blur-md shadow-impact p-10 flex flex-col gap-6">
      <div className="h-6 w-32 bg-white/60 rounded-full animate-pulse" />
      <div className="h-10 w-3/4 bg-white/60 rounded-xl animate-pulse" />
      <div className="h-4 w-full bg-white/50 rounded-lg animate-pulse" />
      <div className="h-4 w-5/6 bg-white/50 rounded-lg animate-pulse" />
      <div className="flex gap-3">
        {[1, 2, 3].map((key) => (
          <div
            key={key}
            className="h-12 w-28 bg-white/55 rounded-full animate-pulse"
          />
        ))}
      </div>
      <div className="h-64 w-full bg-white/55 rounded-2xl animate-pulse" />
    </div>
  </motion.main>
);

export default ProjectPageLoading;
