import React from "react";
import TeamLayout from "./layout/TeamLayout";
import TeamHeader from "./components/TeamHeader";
import TeamGrid from "./components/TeamGrid";
import FullRoundedGradientButton from "../../components/FullRoundedGradientButton";
import { getCldImage } from "../../../../core/lib/getCldImage";
import { useLanguage } from "../../../../context/LanguageContext";

const memberImages = [
  getCldImage("gallery.boat", { width: 160 }),
  getCldImage("gallery.ranger2", { width: 160 }),
  getCldImage("gallery.nitaPlanting", { width: 160 }),
  getCldImage("gallery.seyhaPlanting", { width: 160 }),
  getCldImage("gallery.pichtaPlanting", { width: 160 }),
  getCldImage("gallery.groupVilla", { width: 160 }),
];

const Team: React.FC = () => {
  const { t } = useLanguage();

  const members = [
    {
      name: t("book.team.members.0.name"),
      role: t("book.team.members.0.role"),
      quote: t("book.team.members.0.quote"),
      image: memberImages[0].image,
      alt: memberImages[0].alt,
    },
    {
      name: t("book.team.members.1.name"),
      role: t("book.team.members.1.role"),
      quote: t("book.team.members.1.quote"),
      image: memberImages[1].image,
      alt: memberImages[1].alt,
    },
    {
      name: t("book.team.members.2.name"),
      role: t("book.team.members.2.role"),
      quote: t("book.team.members.2.quote"),
      image: memberImages[2].image,
      alt: memberImages[2].alt,
    },
    {
      name: t("book.team.members.3.name"),
      role: t("book.team.members.3.role"),
      quote: t("book.team.members.3.quote"),
      image: memberImages[3].image,
      alt: memberImages[3].alt,
    },
    {
      name: t("book.team.members.4.name"),
      role: t("book.team.members.4.role"),
      quote: t("book.team.members.4.quote"),
      image: memberImages[4].image,
      alt: memberImages[4].alt,
    },
    {
      name: t("book.team.members.5.name"),
      role: t("book.team.members.5.role"),
      quote: t("book.team.members.5.quote"),
      image: memberImages[5].image,
      alt: memberImages[5].alt,
    },
  ];

  return (
    <TeamLayout
      headerNode={<TeamHeader />}
      gridNode={<TeamGrid members={members} />}
      footerNode={<FullRoundedGradientButton className="px-6 rounded-full">{t("book.team.footerCta")}</FullRoundedGradientButton>}
    />
  );
};

export default Team;