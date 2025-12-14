import React from "react";
import { BookOpen, GraduationCap } from "lucide-react";
import HeroLayout from "./layout/HeroLayout";
import { useLanguage } from "../../../../context/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const objectives = [
    t("book.hero.objectives.0"),
    t("book.hero.objectives.1"),
    t("book.hero.objectives.2"),
    t("book.hero.objectives.3"),
  ];

  const metrics = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: t("book.hero.metrics.0.title"),
      description: t("book.hero.metrics.0.description"),
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: t("book.hero.metrics.1.title"),
      description: t("book.hero.metrics.1.description"),
    },
  ];

  return (
    <HeroLayout
      heading={t("book.hero.heading")}
      overview={t("book.hero.overview")}
      objectives={objectives}
      statusLabel={t("book.hero.statusLabel")}
      raisedLabel={t("book.hero.raisedLabel")}
      progressPercent={32}
      metrics={metrics}
    />
  );
};

export default Hero;
