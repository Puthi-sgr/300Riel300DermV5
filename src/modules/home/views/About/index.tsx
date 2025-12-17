import React from "react";
import { Megaphone, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../../../context/LanguageContext";
import AboutLayout from "./layout/AboutLayout";
import AboutHeader from "./components/AboutHeader";
import ObjectivesHeader from "./components/ObjectivesHeader";
import ObjectiveCircle from "./components/ObjectiveCircle";
import CardWithHalo from "./components/CardWithHalo";

const AboutIndex: React.FC = () => {
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

  const headerNode = (
    <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <AboutHeader title={t("about.title")} subtitle={t("about.title")} />
    </motion.div>
  );

  const heroNode = (
    <>
      <CardWithHalo variants={item} title={t("about.mission")} body={t("about.missionText")} />
      <CardWithHalo variants={item} title={t("about.story")} body={t("about.storyText")} />
    </>
  );

  const objectivesHeaderNode = (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <ObjectivesHeader title={t("about.objectives")} subtitle={t("about.objectives")} />
    </motion.div>
  );

  const objectivesGridNode = (
    <>
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
    </>
  );

  return (
    <AboutLayout
      headerNode={headerNode}
      heroNode={heroNode}
      objectivesHeaderNode={objectivesHeaderNode}
      objectivesGridNode={objectivesGridNode}
    />
  );
};

export default AboutIndex;
