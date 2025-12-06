import React from "react";
import { ClipboardList, Coins, Sprout, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../../context/LanguageContext";

const Phases = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const phases = [
    {
      number: "01",
      title: t("phases.planning.title"),
      icon: ClipboardList,
      description: t("phases.planning.description"),
      additionalInfo: t("phases.planning.additionalInfo"),
    },
    {
      number: "02",
      title: t("phases.fundraising.title"),
      icon: Coins,
      description: t("phases.fundraising.description"),
      additionalInfo: t("phases.fundraising.additionalInfo"),
    },
    {
      number: "03",
      title: t("phases.implementation.title"),
      icon: Sprout,
      description: t("phases.implementation.description"),
      additionalInfo: t("phases.implementation.additionalInfo"),
    },
    {
      number: "04",
      title: t("phases.monitoring.title"),
      icon: LineChart,
      description: t("phases.monitoring.description"),
      additionalInfo: t("phases.monitoring.additionalInfo"),
    },
  ];

  return (
    <section id="phases" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-2xl sm:text-3xl font-bold text-earth-900"
          >
            {t("phases.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold uppercase tracking-wide text-eco-700"
          >
            {t("phases.subtitle")}
          </motion.p>
         
        </div>

        <div className="space-y-10">
          <div className="hidden md:block relative h-1 bg-eco-200 rounded-full">
            {phases.map((phase, index) => (
              <span
                key={phase.number}
                className="absolute -top-2 w-6 h-6 rounded-full bg-white border-2 border-eco-600 flex items-center justify-center text-xs font-bold text-eco-700"
                style={{ left: `${(index / (phases.length - 1)) * 100}%`, transform: "translateX(-50%)" }}
              >
                {phase.number}
              </span>
            ))}
          </div>

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-5 rounded-2xl glass-card shadow-impact ${
                  ["bg-card-grain", "bg-card-foam", "bg-card-fern", "bg-card-mist"][index % 4]
                } flex flex-col h-full`}
              >
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  <phase.icon className="w-6 h-6 text-eco-700" />
                  <h2 className="text-lg font-semibold text-earth-900">{phase.title}</h2>
                </div>
                <p className="text-earth-700 mb-2 text-base">{phase.description}</p>
                <p className="text-sm text-earth-600 flex-1">{phase.additionalInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phases;
