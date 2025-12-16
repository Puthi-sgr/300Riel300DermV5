import React from "react";
import { useReducedMotion } from "framer-motion";
import { useLanguage } from "../../../../context/LanguageContext";
import { sponsors2025, sponsorsMeta } from "../../data/sponsorsData";
import SponsorsLayout from "./layout/SponsorsLayout";
import SponsorsHeader from "./components/SponsorsHeader";
import SponsorPeriod from "./components/SponsorPeriod";
import SponsorCard from "./components/SponsorCard";

const SponsorsSection = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const headerNode = (
    <SponsorsHeader
      title={t(sponsorsMeta.titleKey)}
      subtitle={t(sponsorsMeta.subtitleKey)}
      caption={t("mangrove.project.sponsors.caption") ?? "Partners who keep this work moving forward."}
    />
  );

  const periodNode = <SponsorPeriod period={sponsorsMeta.period} />;

  const cardsNode = (
    <>
      {sponsors2025.map((sponsor, idx) => (
        <SponsorCard
          key={sponsor.name}
          sponsor={{ name: sponsor.name, image: sponsor.image, supportText: t(sponsor.supportKey) }}
          idx={idx}
          prefersReducedMotion={prefersReducedMotion!}
        />
      ))}
    </>
  );

  return <SponsorsLayout headerNode={headerNode} periodNode={periodNode} cardsNode={cardsNode} />;
};

export default SponsorsSection;
