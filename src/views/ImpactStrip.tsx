import React from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import CustomCounter from "../components/CustomCounter";

const ImpactStrip = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: 300,
      labelKey: "impact.seedlings",
      suffix: "+",
      detail: "Seedlings planted",
    },
    {
      value: 48,
      labelKey: "impact.volunteers",
      suffix: "+",
      detail: "Student volunteers",
    },
    {
      value: 47200,
      labelKey: "impact.reach",
      suffix: "+",
      detail: "People reached",
    },
    {
      value: 270,
      labelKey: "impact.co2",
      suffix: " t",
      detail: "Projected CO₂",
    },
  ] as const;

  return (
    <section
      id="impact"
      className="bg-eco-100 text-earth-900 py-12 sm:py-14 md:py-16 shadow-inner"
      aria-labelledby="impact-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <h2
            id="impact-title"
            className="text-2xl sm:text-3xl font-bold text-earth-900"
          >
            {t("impact.title")}
          </h2>
          <div className="h-0.5 sm:w-16 bg-eco-400 sm:h-0.5 sm:shrink-0" />
        </div>

        <div className="relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-gradient-to-br from-white via-eco-100 to-eco-200 text-eco-700 flex items-center justify-center shadow-2xl shadow-emerald-900/20 ring-4 ring-white/70 backdrop-blur-md border border-white/60">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="bg-white rounded-[32px] shadow-xl shadow-eco-900/10 px-6 py-8 sm:px-8 sm:py-10 pt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <article
                key={stat.labelKey}
                className="flex flex-col items-center text-center gap-4"
              >
                <CustomCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  size={150}
                  trackColor="#E6EFE6"
                  progressColor="#4D8B4D"
                  fillColor="#ffffff"
                />
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-semibold text-earth-900 uppercase tracking-wide">
                    {t(stat.labelKey)}
                  </p>
                  <p className="text-xxs sm:text-xs text-eco-600 uppercase tracking-[0.2em]">
                    {stat.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStrip;
