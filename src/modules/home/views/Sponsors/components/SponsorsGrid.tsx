import React from "react";
import { motion } from "framer-motion";
import { CldImage } from "../../../../../components/media/CldImage";

export interface PartnerData {
  name: string;
  image: any;
  alt: string;
  website: string;
}

interface SponsorsGridProps {
  partners: PartnerData[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SponsorsGrid: React.FC<SponsorsGridProps> = ({ partners }) => {
  return (
    <motion.div variants={containerVariants}>
      <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex justify-center flex-nowrap sm:flex md:flex gap-6 min-w-max sm:min-w-0">
          {partners.map((partner) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              key={partner.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="w-68 sm:w-auto flex-shrink-0"
            >
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center align-middle rounded-xl p-6 transition-shadow duration-300 border border-gray-100 h-full"
              >
                <div className="flex flex-col items-center gap-y-3">
                  <div className="h-24 md:h-32 rounded-xl bg-gradient-to-br shadow-lg items-center flex justify-center mb-3">
                    <CldImage
                      image={partner.image}
                      alt={partner.alt ?? partner.name}
                      className="h-full w-auto object-contain rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="sm:hidden mt-4 flex justify-center">
        <div className="space-x-1">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="inline-block w-2 h-2 rounded-full bg-eco-200"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SponsorsGrid;
