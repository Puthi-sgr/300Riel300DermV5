import React from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../../../context/LanguageContext";
import PhasesLayout from "./layout/PhasesLayout";
import PhasesHeader from "./components/PhasesHeader";
import PhasesTrack from "./components/PhasesTrack";
import PhaseCard from "./components/PhaseCard";
import { ClipboardList, Coins, Sprout, LineChart } from "lucide-react";

const PhasesIndex: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { t } = useLanguage();

  const phases = [
    {
      number: "01",
      title: t("mangrove.phases.planning.title"),
      icon: ClipboardList,
      description: t("mangrove.phases.planning.description"),
      additionalInfo: t("mangrove.phases.planning.additionalInfo"),
    },
    {
      number: "02",
      title: t("mangrove.phases.fundraising.title"),
      icon: Coins,
      description: t("mangrove.phases.fundraising.description"),
      additionalInfo: t("mangrove.phases.fundraising.additionalInfo"),
    },
    {
      number: "03",
      title: t("mangrove.phases.implementation.title"),
      icon: Sprout,
      description: t("mangrove.phases.implementation.description"),
      additionalInfo: t("mangrove.phases.implementation.additionalInfo"),
    },
    {
      number: "04",
      title: t("mangrove.phases.monitoring.title"),
      icon: LineChart,
      description: t("mangrove.phases.monitoring.description"),
      additionalInfo: t("mangrove.phases.monitoring.additionalInfo"),
    },
  ];

  const headerNode = <PhasesHeader title={t("mangrove.phases.title")} subtitle={t("mangrove.phases.subtitle")} />;

  const trackNode = <PhasesTrack phases={phases.map((p) => ({ number: p.number }))} />;

  const itemsNode = <>{phases.map((phase, index) => (<PhaseCard key={phase.number} phase={phase} index={index} inView={inView} />))}</>;

  return <PhasesLayout headerNode={headerNode} trackNode={trackNode} itemsNode={itemsNode} itemsRef={ref} />;
};

export default PhasesIndex;
