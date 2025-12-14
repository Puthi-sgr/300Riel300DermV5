import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const AdvantagesOfMangrove: React.FC<{
  heading: string;
  impactData: { title: string; description: string; icon: React.ComponentType<any> }[];
}> = ({ heading, impactData }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full glass-card ring-1 ring-white/50 flex items-center justify-center shadow-sm">
          <Star className="w-5 h-5 text-eco-700" />
        </div>
        <h3 className="text-3xl font-semibold text-emerald-700">{heading}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {impactData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.015 }}
            className="p-5 glass-card shadow-sm ring-1 ring-white/40 bg-safe rounded-2xl"
          >
            <div className="flex flex-col gap-2">
              <div className="h-10 w-10 rounded-full glass-card ring-1 ring-white/50 flex items-center justify-center shadow-sm">
                <item.icon className="w-5 h-5 text-eco-600" />
              </div>
              <h4 className="text-lg font-semibold text-earth-900">{item.title}</h4>
              <p className="text-earth-700 text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesOfMangrove;
