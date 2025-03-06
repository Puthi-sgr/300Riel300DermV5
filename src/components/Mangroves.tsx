import React from "react";
import {
  Trees as Tree,
  Waves,
  Fish,
  Factory,
  ThermometerSun,
  Shield,
  Heart,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/LanguageContext";
import trampengSangkaeImg from "../assets/trapeang-sangkae-community.jpg";

const Mangroves = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToDonate = () => {
    const donationSection = document.getElementById("donate");
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { t } = useLanguage();

  const facts = [
    {
      icon: Tree,
      title: t("mangroves.fact.naturalBarrier.title"),
      description: t("mangroves.fact.naturalBarrier.description"),
      percentage: 66,
    },
    {
      icon: Fish,
      title: t("mangroves.fact.marineNursery.title"),
      description: t("mangroves.fact.marineNursery.description"),
      percentage: 70,
    },
    {
      icon: ThermometerSun,
      title: t("mangroves.fact.carbonStorage.title"),
      description: t("mangroves.fact.carbonStorage.description"),
      percentage: 80,
    },
  ];

  const threats = [
    {
      icon: Factory,
      title: t("mangroves.threat.deforestation.title"),
      description: t("mangroves.threat.deforestation.description"),
    },
    {
      icon: Waves,
      title: t("mangroves.threat.climateChange.title"),
      description: t("mangroves.threat.climateChange.description"),
    },
    {
      icon: Shield,
      title: t("mangroves.threat.conservation.title"),
      description: t("mangroves.threat.conservation.description"),
    },
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

  return (
    <section className="py-20 bg-gradient-to-b from-eco-50 via-white to-eco-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {t("mangroves.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("mangroves.subtitle")}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          className="relative h-[400px] mb-16 rounded-2xl overflow-hidden"
        >
          <img
            src={trampengSangkaeImg}
            alt="Mangrove forest in Cambodia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {t("mangroves.hero.title")}
              </h3>
              <p className="text-lg">{t("mangroves.hero.subtitle")}</p>
            </div>
          </div>
        </motion.div>

        {/* Key Facts */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">
            {t("mangroves.impact.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map((fact) => (
              <motion.div
                key={fact.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-32 mb-6">
                  {/* Icon positioned above the percentage */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <fact.icon className="w-12 h-12 text-eco-600" />
                  </div>
                  {/* Percentage circle below the icon */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <svg className="w-20 h-20" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E6EFE6"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={
                          inView
                            ? { pathLength: fact.percentage / 100 }
                            : { pathLength: 0 }
                        }
                        transition={{ duration: 2, ease: "easeOut" }}
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4D8B4D"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <text
                        x="18"
                        y="20.35"
                        className="text-xxs font-bold"
                        textAnchor="middle"
                        fill="#4D8B4D"
                      >
                        {fact.percentage}%
                      </text>
                    </svg>
                  </div>{" "}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {fact.title}
                </h4>
                <p className="text-gray-600 text-center">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Threats and Conservation */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("mangroves.challenges.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={threat.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-red-200 flex items-center justify-center mb-4">
                  <threat.icon className="w-8 h-8 text-red-900" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {threat.title}
                </h4>
                <p className="text-gray-600">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-eco-600 to-earth-600 opacity-10 rounded-3xl" />

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-eco-100">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-eco-50 flex items-center justify-center"
              >
                <Heart className="w-8 h-8 text-eco-600" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t("mangroves.cta.text")}
              </h3>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Every 300Riels helps protect and restore mangrove forests in
                Kampot
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={() => scrollToDonate()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-eco-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-eco-700 transition-all duration-300 group"
                >
                  <Heart className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  {t("mangroves.cta.button")}
                </motion.button>

                {/* <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-earth-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-earth-700 transition-all duration-300 group"
                >
                  <Tree className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  {t("mangroves.cta.learnMore.button")}
                </motion.button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Mangroves;
