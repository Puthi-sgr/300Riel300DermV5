import React from "react";
import { BookOpen, Hammer, Backpack } from "lucide-react";
import SponsorPackageLayout from "./layout/SponsorPackageLayout";
import SponsorHeader from "./components/SponsorHeader";
import TierGrid from "./components/TierGrid";
import TrustIndicators from "./components/TrustIndicators";

const SponsorPackage: React.FC = () => {
  const tiers = [
    {
      name: "The Learner",
      tierLabel: "Bronze",
      price: "$25",
      period: "one-time",
      benefits: [
        "Provides 5 new textbooks",
        "Name on website donor list",
        "Monthly email newsletter",
      ],
      icon: <BookOpen className="w-5 h-5" />,
      accentClass: "bg-card-foam",
      badgeClass: "bg-eco-50 text-eco-700",
      pillClass: "bg-eco-50 text-eco-700",
      glowClass: "shadow-[0_18px_50px_rgba(31,185,106,0.18)]",
      glowBackdropClass: "",
      ctaClass: "bg-eco-600 hover:bg-eco-700 text-white",
      bulletClass: "text-eco-700",
      ctaLabel: "Become a learner",
    },
    {
      name: "The Builder",
      tierLabel: "Gold Tier",
      price: "$500",
      period: "one-time",
      benefits: [
        "Renovates a full classroom",
        "Personal video from students",
        "VIP project updates",
        "Bronze plaque at the school",
      ],
      icon: <Hammer className="w-5 h-5" />,
      accentClass: "bg-card-fern",
      popular: true,
      badgeClass: "bg-amber-100 text-amber-800",
      pillClass: "bg-amber-100 text-amber-800",
      glowClass: "shadow-[0_24px_70px_rgba(255,193,7,0.35)]",
      glowBackdropClass: "bg-amber-200/35 blur-3xl animate-pulse",
      ctaClass: "bg-amber-500 hover:bg-amber-600 text-white",
      bulletClass: "text-amber-700",
      ctaLabel: "Become a Builder",
    },
    {
      name: "The Scholar",
      tierLabel: "Silver",
      price: "$100",
      period: "one-time",
      benefits: [
        "Provides classroom supplies",
        "Personal thank you letter",
        "Name on donor wall",
        "Quarterly impact report",
      ],
      icon: <Backpack className="w-5 h-5" />,
      accentClass: "bg-white/90",
      badgeClass: "bg-sky-50 text-sky-700",
      pillClass: "bg-sky-50 text-sky-700",
      glowClass: "shadow-[0_22px_60px_rgba(125,211,252,0.3)]",
      glowBackdropClass: "bg-sky-200/35 blur-3xl animate-pulse",
      ctaClass: "bg-sky-500 hover:bg-sky-600 text-white",
      bulletClass: "text-sky-700",
      ctaLabel: "Become a Scholar",
    },
  ];

  return (
    <SponsorPackageLayout>
      <SponsorHeader
        title="Make a Lasting Impact"
        subtitle="Choose a sponsorship tier to help provide books and educational resources to the students of Avlatan Primary School. 100% of proceeds go directly to the school."
      />

      <TierGrid tiers={tiers as any} />

      <div className="pt-6">
        <TrustIndicators />
      </div>
    </SponsorPackageLayout>
  );
};

export default SponsorPackage;
