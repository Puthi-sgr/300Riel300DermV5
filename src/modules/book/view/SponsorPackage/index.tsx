import React from "react";
import { BookOpen, Hammer, Backpack } from "lucide-react";
import SponsorPackageLayout from "./layout/SponsorPackageLayout";
import SponsorHeader from "./components/SponsorHeader";
import TierGrid from "./components/TierGrid";
import TrustIndicators from "./components/TrustIndicators";
import { useLanguage } from "../../../../context/LanguageContext";

const SponsorPackage: React.FC = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      name: t("book.sponsorPackage.tiers.0.name"),
      tierLabel: t("book.sponsorPackage.tiers.0.tierLabel"),
      price: t("book.sponsorPackage.tiers.0.price"),
      period: t("book.sponsorPackage.tiers.0.period"),
      benefits: [
        t("book.sponsorPackage.tiers.0.benefits.0"),
        t("book.sponsorPackage.tiers.0.benefits.1"),
        t("book.sponsorPackage.tiers.0.benefits.2"),
      ],
      icon: <BookOpen className="w-5 h-5" />,
      accentClass: "bg-card-foam",
      badgeClass: "bg-eco-50 text-eco-700",
      pillClass: "bg-eco-50 text-eco-700",
      glowClass: "shadow-[0_18px_50px_rgba(31,185,106,0.4)]",
      glowBackdropClass: "",
      ctaClass: "bg-eco-600 hover:bg-eco-700 text-white",
      bulletClass: "text-eco-700",
      ctaLabel: t("book.sponsorPackage.tiers.0.ctaLabel"),
    },
    {
      name: t("book.sponsorPackage.tiers.1.name"),
      tierLabel: t("book.sponsorPackage.tiers.1.tierLabel"),
      price: t("book.sponsorPackage.tiers.1.price"),
      period: t("book.sponsorPackage.tiers.1.period"),
      benefits: [
        t("book.sponsorPackage.tiers.1.benefits.0"),
        t("book.sponsorPackage.tiers.1.benefits.1"),
        t("book.sponsorPackage.tiers.1.benefits.2"),
        t("book.sponsorPackage.tiers.1.benefits.3"),
      ],
      icon: <Hammer className="w-5 h-5" />,
      accentClass: "bg-card-fern",
      popular: true,
      badgeClass: "bg-amber-100 text-amber-800",
      pillClass: "bg-amber-100 text-amber-800",
      glowClass: "shadow-[0_24px_100px_rgba(255,193,7,0.65)]",
      glowBackdropClass: "bg-amber-200/35 blur-3xl animate-pulse",
      ctaClass: "bg-yellow-500 hover:bg-yellow-600 text-white",
      bulletClass: "text-yellow-700",
      ctaLabel: t("book.sponsorPackage.tiers.1.ctaLabel"),
    },
    {
      name: t("book.sponsorPackage.tiers.2.name"),
      tierLabel: t("book.sponsorPackage.tiers.2.tierLabel"),
      price: t("book.sponsorPackage.tiers.2.price"),
      period: t("book.sponsorPackage.tiers.2.period"),
      benefits: [
        t("book.sponsorPackage.tiers.2.benefits.0"),
        t("book.sponsorPackage.tiers.2.benefits.1"),
        t("book.sponsorPackage.tiers.2.benefits.2"),
        t("book.sponsorPackage.tiers.2.benefits.3"),
      ],
      icon: <Backpack className="w-5 h-5" />,
      accentClass: "bg-white/90",
      badgeClass: "bg-sky-50 text-sky-700",
      pillClass: "bg-sky-50 text-sky-700",
      glowClass: "shadow-[0_22px_80px_rgba(125,211,252,0.5)]",
      glowBackdropClass: "bg-sky-200/35 blur-3xl animate-pulse",
      ctaClass: "bg-sky-500 hover:bg-sky-600 text-white",
      bulletClass: "text-sky-700",
      ctaLabel: t("book.sponsorPackage.tiers.2.ctaLabel"),
    },
  ];

  const headerNode = (
    <SponsorHeader
      title={t("book.sponsorPackage.header.title")}
      subtitle={t("book.sponsorPackage.header.subtitle")}
    />
  );

  const tiersNode = <TierGrid tiers={tiers as any} />;

  const trustNode = <TrustIndicators />;

  return <SponsorPackageLayout headerNode={headerNode} tiersNode={tiersNode} trustNode={trustNode} />;
};

export default SponsorPackage;
