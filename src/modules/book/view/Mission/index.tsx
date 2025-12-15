import React from "react";
import { BookOpenCheck, Users, Leaf } from "lucide-react";
import MissionLayout from "./layout/MissionLayout";
import MissionIntro from "./components/MissionIntro";
import ObjectiveGrid from "./components/ObjectiveGrid";
import MissionCTA from "./components/MissionCTA";
import { useLanguage } from "../../../../context/LanguageContext";

const Mission: React.FC = () => {
  const { t } = useLanguage();

  const objectives = [
    {
      number: t("book.mission.objectives.0.number"),
      icon: <BookOpenCheck className="w-5 h-5" />,
      title: t("book.mission.objectives.0.title"),
      description: t("book.mission.objectives.0.description"),
    },
    {
      number: t("book.mission.objectives.1.number"),
      icon: <Users className="w-5 h-5" />,
      title: t("book.mission.objectives.1.title"),
      description: t("book.mission.objectives.1.description"),
    },
    {
      number: t("book.mission.objectives.2.number"),
      icon: <Leaf className="w-5 h-5" />,
      title: t("book.mission.objectives.2.title"),
      description: t("book.mission.objectives.2.description"),
    },
  ];

  const introNode = (
    <MissionIntro
      quote={t("book.mission.quote")}
      intro={t("book.mission.intro")}
    />
  );

  const objectivesNode = <ObjectiveGrid objectives={objectives} />;

  const ctaNode = <MissionCTA />;

  return (
    <MissionLayout introNode={introNode} objectivesNode={objectivesNode} ctaNode={ctaNode} />
  );
};

export default Mission;
