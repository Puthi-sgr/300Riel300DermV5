import React from "react";
import { Sprout, Users, Share2, Leaf } from "lucide-react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ImpactStrip = () => {
  const { t } = useLanguage();
  const [animateBars, setAnimateBars] = React.useState(false);
  const stripRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(stripRef, { once: true, amount: 0.25 });

  React.useEffect(() => {
    if (isInView) setAnimateBars(true);
  }, [isInView]);

  const cards = [
    {
      value: 300,
      labelKey: "impact.seedlings",
      suffix: "+",
      detail: "Seedlings planted",
      icon: <Sprout className="w-6 h-6" />,
      backgroundClass: "bg-card-fern",
    },
    {
      value: 48,
      labelKey: "impact.volunteers",
      suffix: "+",
      detail: "Student volunteers",
      icon: <Users className="w-6 h-6" />,
      backgroundClass: "bg-card-grain",
    },
    {
      value: 47200,
      labelKey: "impact.reach",
      suffix: "+",
      detail: "People reached",
      icon: <Share2 className="w-6 h-6" />,
      backgroundClass: "bg-card-foam",
    },
    {
      value: 270,
      labelKey: "impact.co2",
      suffix: " t",
      detail: "Projected CO2 over 20 years",
      icon: <Leaf className="w-6 h-6" />,
      backgroundClass: "bg-card-mist",
    },
  ] as const;

  return (
    <section
      id="impact"
      className="bg-gradient-to-b from-white via-[#f8fdfa] to-[#eef7f1] text-earth-900 py-16 sm:py-20"
      aria-labelledby="impact-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2
            id="impact-title"
            className="text-2xl sm:text-3xl font-bold text-earth-900"
          >
            {t("impact.title")}
          </h2>
          <p className="text-sm sm:text-base text-eco-700">
            {t("impact.subtitle") ??
              "A summary of our collective efforts and achievements."}
          </p>
        </div>

        <div className="flex justify-center">
          <div
            ref={stripRef}
            className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-0 lg:flex-nowrap"
          >
            {cards.map((card, idx) => (
              <motion.article
                key={card.labelKey}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.15 },
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`impact-card shadow-impact ${card.backgroundClass} p-10 sm:p-11 min-h-[270px] w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] transition-shadow duration-150 ease-out hover:shadow-impact-hover ${
                  idx === 0 ? "" : "lg:-ml-10"
                }`}
                style={{
                  zIndex: cards.length - idx,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-6 w-6 rounded-full bg-white/70 text-eco-800 flex items-center justify-center shadow-lg shadow-emerald-900/10 border border-white/70">
                    {card.icon}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-normal text-eco-800">
                    {t(card.labelKey)}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-4xl font-extrabold text-earth-900 drop-shadow-sm">
                    {isInView ? (
                      <CountUp
                        end={card.value}
                        suffix={card.suffix}
                        separator="," 
                      />
                    ) : (
                      <>0{card.suffix}</>
                    )}
                  </p>
                  <p className="text-xs uppercase tracking-normal text-eco-800/80">
                    {card.detail}
                  </p>
                </div>

                <div className="absolute inset-x-5 bottom-5 h-2.5 rounded-full bg-white/45 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-emerald-500/85 transition-all duration-800 ease-out ${
                      animateBars ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStrip;
