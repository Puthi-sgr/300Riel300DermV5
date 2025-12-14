import React from "react";
import { Users, Globe2, BookOpen, Sprout, Shield, Infinity, Leaf } from "lucide-react";
import ExpectedImpactLayout from "./layout/ExpectedImpactLayout";
import ImpactHeader from "./components/ImpactHeader";
import MetricCard from "./components/MetricCard";
import ImpactStatCard from "./components/ImpactStatCard";
import ClosingQuote from "./components/ClosingQuote";
import { useLanguage } from "../../../../context/LanguageContext";

const ExpectedImpact: React.FC = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: <Users className="w-5 h-5" />,
      value: t("book.expectedImpact.metrics.0.value"),
      title: t("book.expectedImpact.metrics.0.title"),
      description: t("book.expectedImpact.metrics.0.description"),
      badge: t("book.expectedImpact.metrics.0.badge"),
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      value: t("book.expectedImpact.metrics.1.value"),
      title: t("book.expectedImpact.metrics.1.title"),
      description: t("book.expectedImpact.metrics.1.description"),
      badge: t("book.expectedImpact.metrics.1.badge"),
    },
  ];

  const supporting = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: t("book.expectedImpact.supporting.0.title"),
      description: t("book.expectedImpact.supporting.0.description"),
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t("book.expectedImpact.supporting.1.title"),
      description: t("book.expectedImpact.supporting.1.description"),
    },
    {
      icon: <Sprout className="w-5 h-5" />,
      title: t("book.expectedImpact.supporting.2.title"),
      description: t("book.expectedImpact.supporting.2.description"),
    },
    {
      icon: <Infinity className="w-5 h-5" />,
      title: t("book.expectedImpact.supporting.3.title"),
      description: t("book.expectedImpact.supporting.3.description"),
    },
  ];

  return (
    <ExpectedImpactLayout>
      <ImpactHeader
        title={t("book.expectedImpact.header.title")}
        subtitle={t("book.expectedImpact.header.subtitle")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {metrics.map((m, index) => (
          <MetricCard key={index} {...m} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {supporting.map((s, index) => (
          <ImpactStatCard key={index} {...s} />
        ))}
      </div>

      <ClosingQuote />
    </ExpectedImpactLayout>
  );
};

export default ExpectedImpact;
