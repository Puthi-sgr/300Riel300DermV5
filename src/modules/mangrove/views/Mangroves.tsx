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
import { useLanguage } from "../../../context/LanguageContext";
import trampengSangkaeImg from "../../../assets/trapeang-sangkae-community.jpg";

const Mangroves = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const impactData = [
    {
      title: t("mangroves.fact.naturalBarrier.title"),
      description: t("mangroves.fact.naturalBarrier.description"),
      icon: Shield,
    },
    {
      title: t("mangroves.fact.marineNursery.title"),
      description: t("mangroves.fact.marineNursery.description"),
      icon: Fish,
    },
    {
      title: t("mangroves.fact.carbonStorage.title"),
      description: t("mangroves.fact.carbonStorage.description"),
      icon: ThermometerSun,
    },
  ];

  const threats = [
    {
      title: t("mangroves.threat.deforestation.title"),
      description: t("mangroves.threat.deforestation.description"),
      icon: Tree,
    },
    {
      title: t("mangroves.threat.climateChange.title"),
      description: t("mangroves.threat.climateChange.description"),
      icon: Factory,
    },
    {
      title: t("mangroves.threat.conservation.title"),
      description: t("mangroves.threat.conservation.description"),
      icon: Heart,
    },
  ];

  const conservationFacts = [
    {
      title: "Community-Led Conservation",
      value: "15+ years",
      description: "Local efforts protecting Trapeang Sangkae mangrove forest",
      icon: Users,
    },
    {
      title: "Coastal Protection",
      value: "66%",
      description: "Wave energy reduced in first 100m of mangrove forest",
      icon: Waves,
    },
    {
      title: "Carbon Storage",
      value: "3-5x",
      description: "More carbon stored than tropical forests per hectare",
      icon: Tree,
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-eco-50 py-16">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,89,0,0.03)_0%,rgba(0,89,0,0.04)_50%,rgba(0,89,0,0.02)_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-earth-900 mb-4"
          >
            {t("mangroves.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-earth-700"
          >
            {t("mangroves.subtitle")}
          </motion.p>
        </div>

        <div className="rounded-3xl bg-white border border-eco-100 shadow-lg p-6 sm:p-8">
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
                  src={trampengSangkaeImg}
                  alt="Trapeang Sangkae community mangrove forest"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {t("mangroves.hero.title")}
                  </h3>
                  <p className="text-gray-100">{t("mangroves.hero.subtitle")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-earth-900">
                {t("mangroves.impact.title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {impactData.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 bg-eco-50 rounded-xl shadow-sm border border-eco-100"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-eco-600" />
                      <h4 className="font-semibold text-earth-900">{item.title}</h4>
                    </div>
                    <p className="text-earth-700 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="p-5 bg-eco-50 rounded-xl border border-eco-200">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-eco-700 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      {t("mangroves.challenges.title")}
                    </h4>
                    <p className="text-earth-700 text-sm">
                      {t("mangroves.threat.climateChange.description")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {conservationFacts.map((fact) => (
            <div
              key={fact.title}
              className="p-5 bg-white rounded-2xl shadow-sm border border-eco-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <fact.icon className="w-5 h-5 text-eco-600" />
                <h4 className="font-semibold text-earth-900">{fact.title}</h4>
              </div>
              <p className="text-3xl font-bold text-eco-700">{fact.value}</p>
              <p className="text-sm text-earth-700 mt-1">{fact.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-eco-100 rounded-3xl p-8 border border-eco-200"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-earth-900">
              {t("mangroves.cta.text")}
            </h3>
            <p className="text-earth-700">{t("mangroves.cta.description")}</p>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-3 bg-eco-600 text-white rounded-xl font-semibold hover:bg-eco-700 transition-colors">
              {t("mangroves.cta.button")}
            </button>
            <button className="px-5 py-3 bg-white text-earth-900 rounded-xl font-semibold border border-eco-200 hover:border-eco-400 transition-colors">
              {t("mangroves.cta.learnMore.button")}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mangroves;
