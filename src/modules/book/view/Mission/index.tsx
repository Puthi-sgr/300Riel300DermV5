import React from "react";
import { BookOpenCheck, Users, Leaf } from "lucide-react";
import MissionLayout from "./layout/MissionLayout";
import MissionIntro from "./components/MissionIntro";
import ObjectiveGrid from "./components/ObjectiveGrid";
import MissionCTA from "./components/MissionCTA";

const Mission: React.FC = () => {
  const objectives = [
    {
      number: "01",
      icon: <BookOpenCheck className="w-5 h-5" />,
      title: "Educational Resources",
      description:
        "Providing a curated library of books, digital learning tools, and essential school supplies to foster a lifelong love for reading and discovery.",
    },
    {
      number: "02",
      icon: <Users className="w-5 h-5" />,
      title: "Community Empowerment",
      description:
        "Engaging local teachers with comprehensive training programs and connecting international volunteers for rich cultural exchange.",
    },
    {
      number: "03",
      icon: <Leaf className="w-5 h-5" />,
      title: "Sustainable Growth",
      description:
        "Investing in eco-friendly infrastructure and implementing long-term maintenance plans to ensure the school thrives for years to come.",
    },
  ];

  return (
    <MissionLayout>
      <MissionIntro
        quote="Empowering minds, one book at a time."
        intro="We are on a mission to transform education at Avlatan Primary School in Cambodia. Through literacy, sustainable resources, and community support, we are building a brighter future for every child."
      />

      <ObjectiveGrid objectives={objectives} />

      <MissionCTA />
    </MissionLayout>
  );
};

export default Mission;
