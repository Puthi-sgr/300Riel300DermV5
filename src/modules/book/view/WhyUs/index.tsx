import React from "react";
import { Users, Eye, Leaf, BookOpenCheck, GraduationCap, Infinity } from "lucide-react";
import WhyUsLayout from "./layout/WhyUsLayout";
import PartnerIntro from "./components/PartnerIntro";
import CommitmentsGrid from "./components/CommitmentsGrid";
import { useLanguage } from "../../../../context/LanguageContext";

const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const commitments = [
    {
      icon: <BookOpenCheck className="w-5 h-5" />,
      title: t("book.whyUs.commitments.0.title"),
      description: t("book.whyUs.commitments.0.description"),
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: t("book.whyUs.commitments.1.title"),
      description: t("book.whyUs.commitments.1.description"),
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: t("book.whyUs.commitments.2.title"),
      description: t("book.whyUs.commitments.2.description"),
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t("book.whyUs.commitments.3.title"),
      description: t("book.whyUs.commitments.3.description"),
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: t("book.whyUs.commitments.4.title"),
      description: t("book.whyUs.commitments.4.description"),
    },
    {
      icon: <Infinity className="w-5 h-5" />,
      title: t("book.whyUs.commitments.5.title"),
      description: t("book.whyUs.commitments.5.description"),
    },
  ];

  return (
    <WhyUsLayout>
      <PartnerIntro />
      <CommitmentsGrid
        title={t("book.whyUs.commitments.title")}
        subtitle={t("book.whyUs.commitments.subtitle")}
        commitments={commitments}
      />
    </WhyUsLayout>
  );
};

export default WhyUs;
