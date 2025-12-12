import React from "react";
import { Users, Eye, Leaf, BookOpenCheck, GraduationCap, Infinity } from "lucide-react";
import WhyUsLayout from "./layout/WhyUsLayout";
import PartnerIntro from "./components/PartnerIntro";
import CommitmentsGrid from "./components/CommitmentsGrid";

const WhyUs: React.FC = () => {
  const commitments = [
    {
      icon: <BookOpenCheck className="w-5 h-5" />,
      title: "Direct Impact",
      description: "100% of proceeds go directly to purchasing educational resources, ensuring maximum benefit.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Transparency",
      description: "Open ledger updates for all donors, so you know exactly where your money goes.",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Sustainability",
      description: "Eco-friendly sourcing to minimize our footprint and teach environmental responsibility.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Community Led",
      description: "Our initiatives are driven by local needs and voices, adding external agencies for long-term support.",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Educational Focus",
      description: "Curated books chosen for the local curriculum to enhance the learning experience.",
    },
    {
      icon: <Infinity className="w-5 h-5" />,
      title: "Long-term Vision",
      description: "We build lasting relationships and sustainable education growth, beyond one-off donations.",
    },
  ];

  return (
    <WhyUsLayout>
      <PartnerIntro />
      <CommitmentsGrid
        title="Our Commitments"
        subtitle="We prioritize transparency and impact in every step of our journey. Here is how we ensure your contribution makes a difference."
        commitments={commitments}
      />
    </WhyUsLayout>
  );
};

export default WhyUs;
