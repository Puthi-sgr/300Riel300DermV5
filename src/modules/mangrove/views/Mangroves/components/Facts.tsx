
import React from "react";
import { motion } from "framer-motion";

type FactItem = {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<any>;
};

const Facts: React.FC<{
  image: { url: string; alt: string };
  heroTitle: string;
  heroSubtitle: string;
  facts: FactItem[];
}> = ({ image, heroTitle, heroSubtitle, facts }) => {
  return (
    <div className="glass-card shadow-sm ring-1 ring-white/40 p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl bg-earth-900">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-semibold text-white">{heroTitle}</h3>
              <p className="text-gray-100">{heroSubtitle}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl"
            >
              <div className="p-4 glass-card shadow-sm ring-1 ring-white/40 bg-safe rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <fact.icon className="w-5 h-5 text-eco-700" />
                  <h4 className="text-sm font-semibold text-earth-900">{fact.title}</h4>
                </div>
                <p className="text-xl font-bold text-eco-700">{fact.value}</p>
                <p className="text-xs text-earth-700">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
