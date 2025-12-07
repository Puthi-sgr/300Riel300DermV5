import React from "react";
import {
  Users,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/LanguageContext";
import { CldImage } from "../components/media/CldImage";
import { getCldImage } from "../core/lib/getCldImage";

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const partners = [
    (() => {
      const { image, alt } = getCldImage("sponsors.ktvilla", { width: 640 });
     
      return {
        name: "Giant Ibis Transport",
        image,
        alt,
        website: "https://www.giantibis.com/",
      };
    })(),
    (() => {
      const { image, alt } = getCldImage("sponsors.giantibis", { width: 640 });
      return {
        name: "De KT Villa",
        image,
        alt,
        website:
          "https://kampot-cambodia.com/about-kampot/kampot-hotels/de-kt-villa/",
      };
    })(),
  ];
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

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-eco-50 to-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <Users className="w-12 h-12 text-eco-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {t("sponsors.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("sponsors.subtitle")}
          </p>
        </motion.div>

        {/* Partners Grid - Horizontal Scrolling on Mobile */}
        <motion.div variants={containerVariants} className="relative mb-16">
          <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex justify-center flex-nowrap sm:flex md:flex gap-6 min-w-max sm:min-w-0">
              {partners.map((partner: any) => (
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

        {/* Partnership CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="bg-gradient-to-br from-eco-50 to-earth-50 rounded-2xl p-8 shadow-lg border border-eco-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("sponsors.partnerWithUs")}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t("sponsors.subtitle")}
            </p>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-eco-600 text-white rounded-lg font-semibold shadow-lg hover:bg-eco-700 transition-all duration-300"
            >
              <Handshake className="mr-2 w-5 h-5" />
              {t("sponsors.becomePartner")}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Sponsors;
