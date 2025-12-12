import React from "react";
import { BookOpen, GraduationCap } from "lucide-react";
import HeroLayout from "./layout/HeroLayout";

const Hero: React.FC = () => {
  const objectives = [
    "Provide 300 quality books and learning kits.",
    "Equip 150+ students with notebooks and pencils.",
    "Engage local teachers with fresh materials.",
    "Ensure long-term learning access on the island.",
  ];

  const metrics = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Students Impacted",
      description: "Direct support for 150+ children",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Resources Needed",
      description: "Textbooks, notebooks, pencils",
    },
  ];

  return (
    <HeroLayout
      heading="300 Riels • 300 Kbal For Avlatan Primary School"
      overview="We are dedicated to providing books and educational resources to rural students in Cambodia, fostering a brighter tomorrow through literacy and unwavering community support."
      objectives={objectives}
      statusLabel="ONGOING"
      raisedLabel="$1,140 / $5,000"
      progressPercent={32}
      metrics={metrics}
    />
  );
};

export default Hero;
