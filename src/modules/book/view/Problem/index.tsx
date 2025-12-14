import React from "react";
import { BookOpenCheck, BookCopy, GraduationCap, Home } from "lucide-react";
import ProblemLayout from "./layout/ProblemLayout";
import ProblemIntro from "./components/ProblemIntro";
import KeyChallenges from "./components/KeyChallenges";
import { useLanguage } from "../../../../context/LanguageContext";

const Problem: React.FC = () => {
  const { t } = useLanguage();

  const challenges = [
    {
      icon: <BookCopy className="w-5 h-5" />,
      title: t("book.problem.challenges.0.title"),
      description: t("book.problem.challenges.0.description"),
    },
    {
      icon: <BookOpenCheck className="w-5 h-5" />,
      title: t("book.problem.challenges.1.title"),
      description: t("book.problem.challenges.1.description"),
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: t("book.problem.challenges.2.title"),
      description: t("book.problem.challenges.2.description"),
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: t("book.problem.challenges.3.title"),
      description: t("book.problem.challenges.3.description"),
    },
  ];

  return (
    <ProblemLayout>
      <ProblemIntro
        heading={t("book.problem.heading")}
        highlight={t("book.problem.highlight")}
        body={t("book.problem.body")}
        whyTitle={t("book.problem.whyTitle")}
        whyBody={t("book.problem.whyBody")}
      />

      <KeyChallenges
        title={t("book.problem.challenges.title")}
        subtitle={t("book.problem.challenges.subtitle")}
        challenges={challenges}
      />
    </ProblemLayout>
  );
};

export default Problem;
