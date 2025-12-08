import React from "react";
import { Megaphone, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const { t } = useLanguage();
  const container = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.15, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-eco-300/22 blur-[140px]" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-eco-200/26 blur-[160px]" />
      </div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10"
      >
        <motion.div variants={item} className="text-center text-earth-900 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-eco-700">
            {t("about.title")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">{t("about.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <CardWithHalo variants={item} title={t("about.mission")} body={t("about.missionText")} />
          <CardWithHalo variants={item} title={t("about.story")} body={t("about.storyText")} />
        </div>
      </motion.div>

      <div className="relative bg-gradient-to-br from-white via-[#f7faf7] to-[#eef5ef] border-t border-white/80">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8"
        >
          <motion.div variants={item} className="text-center space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-eco-700">
              {t("about.objectives")}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-earth-900">{t("about.objectives")}</h3>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <ObjectiveCircle
              icon={<Megaphone className="w-10 h-10 text-eco-700" />}
              title={t("about.objective1Title") ?? t("about.objectives")}
              description={t("about.objective1")}
            />
            <ObjectiveCircle
              icon={<Sprout className="w-10 h-10 text-eco-700" />}
              title={t("about.objective2Title") ?? t("about.objectives")}
              description={t("about.objective2") ?? t("about.objective3")}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

const ObjectiveCircle = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="glass-card bg-white/90 rounded-3xl border border-white/80 shadow-impact p-6 lg:p-7 text-center flex flex-col items-center gap-3">
    <div className="h-16 w-16 rounded-full glass-card ring-1 ring-white/70 flex items-center justify-center shadow-sm bg-card-foam">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="font-semibold text-earth-900 text-lg leading-tight">{title}</h4>
      <p className="text-sm text-earth-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

const CardWithHalo = ({
  variants,
  title,
  body,
}: {
  variants: any;
  title: string;
  body: string;
}) => (
  <motion.div variants={variants} className="relative">
    <div className="absolute inset-0 rounded-[28px] bg-card-foam blur-2xl opacity-90" aria-hidden />
    <div className="relative glass-card bg-card-glass rounded-[28px] border border-white/70 shadow-impact p-7 sm:p-9 space-y-4 text-earth-900">
      <h3 className="text-3xl font-bold text-earth-900">{title}</h3>
      <p className="text-earth-800 leading-relaxed text-base sm:text-lg">{body}</p>
    </div>
  </motion.div>
);
