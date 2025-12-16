import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useLanguage } from "../../../context/LanguageContext";

export interface ImpactCardData {
  value: number;
  labelKey: string;
  suffix: string;
  detail: string;
  icon: React.ReactNode;
  backgroundClass: string;
}

interface ImpactCardProps {
  data: ImpactCardData;
  index: number;
  isInView: boolean;
  animateBars: boolean;
  totalCards: number;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  data,
  index,
  isInView,
  animateBars,
  totalCards,
}) => {
  const { t } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{
        y: -12,
        transition: { duration: 0.15 },
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`impact-card shadow-impact ${
        data.backgroundClass
      } p-10 sm:p-11 min-h-[270px] w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] transition-shadow duration-150 ease-out hover:shadow-impact-hover ${
        index === 0 ? "" : "lg:-ml-10"
      }`}
      style={{
        zIndex: totalCards - index,
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-6 w-6 rounded-full bg-white/70 text-eco-800 flex items-center justify-center shadow-lg shadow-emerald-900/10 border border-white/70">
          {data.icon}
        </div>
        <p className="text-xs font-semibold uppercase tracking-normal text-eco-800">
          {t(data.labelKey)}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-4xl font-extrabold text-earth-900 drop-shadow-sm">
          {isInView ? (
            <CountUp end={data.value} suffix={data.suffix} separator="," />
          ) : (
            <>
              0{data.suffix}
            </>
          )}
        </p>
        <p className="text-xs uppercase tracking-normal text-eco-800/80">
          {data.detail}
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
  );
};

export default ImpactCard;
