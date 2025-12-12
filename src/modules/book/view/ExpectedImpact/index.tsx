import React from "react";
import { Users, Globe2, BookOpen, Sprout, Shield, Infinity, Leaf } from "lucide-react";
import ExpectedImpactLayout from "./layout/ExpectedImpactLayout";
import ImpactHeader from "./components/ImpactHeader";
import MetricCard from "./components/MetricCard";
import ImpactStatCard from "./components/ImpactStatCard";
import ClosingQuote from "./components/ClosingQuote";

const ExpectedImpact: React.FC = () => {
  const metrics = [
    {
      icon: <Users className="w-5 h-5" />,
      value: "2,000+",
      title: "In-Person Engagement",
      description: "Direct community involvement through workshops and reading sessions.",
      badge: "+20% Growth",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      value: "1M+",
      title: "Social Media Reach",
      description: "Raising global awareness for education equality via digital campaigns.",
      badge: "+150% Reach",
    },
  ];

  const supporting = [
    { icon: <BookOpen className="w-5 h-5" />, title: "500+", description: "Books donated" },
    { icon: <Users className="w-5 h-5" />, title: "300", description: "Students impacted" },
    { icon: <Sprout className="w-5 h-5" />, title: "100%", description: "Eco-friendly" },
    { icon: <Infinity className="w-5 h-5" />, title: "Lifetime", description: "Community support" },
  ];

  return (
    <ExpectedImpactLayout>
      <ImpactHeader
        title="Expected Impact"
        subtitle="Transforming futures through education and sustainable giving at Avlatan Primary School."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {metrics.map((m) => (
          <MetricCard key={m.title} {...m} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {supporting.map((s) => (
          <ImpactStatCard key={s.title} {...s} />
        ))}
      </div>

      <ClosingQuote />
    </ExpectedImpactLayout>
  );
};

export default ExpectedImpact;
