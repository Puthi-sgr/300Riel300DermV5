import React from "react";
import { motion } from "framer-motion";

const Threats: React.FC<{
  heading: string;
  threats: { title: string; description: string; icon: React.ComponentType<any> }[];
}> = ({ heading, threats }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full glass-card ring-1 ring-white/50 flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" />
        </div>
        <h3 className="text-3xl font-semibold text-red-800">{heading}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {threats.map((threat, index) => {
          const Icon = threat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.015 }}
              className="p-5 glass-card shadow-sm ring-1 ring-white/40 bg-warn rounded-2xl flex flex-col gap-2"
            >
              <div className="h-10 w-10 rounded-full glass-card ring-1 ring-white/50 flex items-center justify-center shadow-sm">
                <Icon className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-earth-900">{threat.title}</h4>
              <p className="text-earth-700 text-base">{threat.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Threats;
