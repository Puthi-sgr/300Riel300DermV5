import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../context/LanguageContext";
import Facts from "./components/Facts";
import AdvantagesOfMangrove from "./components/AdvantagesOfMangrove";
import Threats from "./components/Threats";
import CTA from "./components/CTA";
import MangrovesLayout from "./layout/MangrovesLayout";
import { getCldImage } from "../../../../core/lib/getCldImage";
import { Users, Waves, Trees as TreeIcon, Shield, Fish, ThermometerSun, Factory, Heart } from "lucide-react";


const Mangroves: React.FC = () => {
  const { t } = useLanguage();
  // Prepare all page data here so this index acts as the single source of truth
  const factImage = getCldImage("mangrove.factImage");

  const conservationFacts = [
    {
      title: t("mangrove.mangroves.fact.communityTitle"),
      value: "15+ years",
      description: t("mangrove.mangroves.fact.communityDescription"),
      icon: Users,
    },
    {
      title: t("mangrove.mangroves.fact.coastalTitle"),
      value: "66%",
      description: t("mangrove.mangroves.fact.coastalDescription"),
      icon: Waves,
    },
    {
      title: t("mangrove.mangroves.fact.carbonTitle"),
      value:  "3-5x",
      description: t("mangrove.mangroves.fact.carbonDescription"),
      icon: TreeIcon,
    },
  ];

  const impactData = [
    {
      title: t("mangrove.mangroves.fact.naturalBarrier.title"),
      description: t("mangrove.mangroves.fact.naturalBarrier.description"),
      icon: Shield,
    },
    {
      title: t("mangrove.mangroves.fact.marineNursery.title"),
      description: t("mangrove.mangroves.fact.marineNursery.description"),
      icon: Fish,
    },
    {
      title: t("mangrove.mangroves.fact.carbonStorage.title"),
      description: t("mangrove.mangroves.fact.carbonStorage.description"),
      icon: ThermometerSun,
    },
  ];

  const threatsData = [
    {
      title: t("mangrove.mangroves.threat.deforestation.title"),
      description: t("mangrove.mangroves.threat.deforestation.description"),
      icon: TreeIcon,
    },
    {
      title: t("mangrove.mangroves.threat.climateChange.title"),
      description: t("mangrove.mangroves.threat.climateChange.description"),
      icon: Factory,
    },
    {
      title: t("mangrove.mangroves.threat.conservation.title"),
      description: t("mangrove.mangroves.threat.conservation.description"),
      icon: Heart,
    },
  ];

  const cta = {
    title: t("mangrove.mangroves.cta.text"),
    description: t("mangrove.mangroves.cta.description"),
    primary: t("mangrove.mangroves.cta.button"),
    secondary: t("mangrove.mangroves.cta.learnMore.button"),
  };

  return (
    <MangrovesLayout
      title={t("mangrove.mangroves.title")}
      subtitle={t("mangrove.mangroves.subtitle")}
      factsNode={
        <Facts
          image={factImage}
          heroTitle={t("mangrove.mangroves.hero.title")}
          heroSubtitle={t("mangrove.mangroves.hero.subtitle")}
          facts={conservationFacts}
        />
      }
      advantageTop={<AdvantagesOfMangrove heading={t("mangrove.mangroves.impact.title")} impactData={impactData} />}
      threatsBottom={<Threats heading={t("mangrove.mangroves.challenges.title")} threats={threatsData} />}
      ctaNode={<CTA title={cta.title} description={cta.description} primaryLabel={cta.primary} secondaryLabel={cta.secondary} />}
    />
  );
};

export default Mangroves;
