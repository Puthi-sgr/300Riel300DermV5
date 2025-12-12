import React from "react";
import { BookOpenCheck, BookCopy, GraduationCap, Home } from "lucide-react";
import ProblemLayout from "./layout/ProblemLayout";
import ProblemIntro from "./components/ProblemIntro";
import KeyChallenges from "./components/KeyChallenges";

const Problem: React.FC = () => {
  const challenges = [
    {
      icon: <BookCopy className="w-5 h-5" />,
      title: "Limited Access",
      description: "Books are scarce and the nearest library is inaccessible for most students due to distance.",
    },
    {
      icon: <BookOpenCheck className="w-5 h-5" />,
      title: "Outdated Materials",
      description: "Current learning materials are decades old, damaged, and often culturally irrelevant.",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Teacher Support",
      description: "Teachers lack necessary training guides, modern curriculum, and support resources.",
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: "Infrastructure",
      description: "Classrooms need urgent repairs to roofing and basic furniture to be safe for learning.",
    },
  ];

  return (
    <ProblemLayout>
      <ProblemIntro
        heading="The Problem in Avlatan Village"
        highlight="Avlatan Village"
        body="Avlatan faces a critical lack of resources. The nearest library is miles away, leaving hundreds of children without access to books. This isolation has created a significant educational gap that widens with every generation."
        whyTitle="Why This Matters"
        whyBody="Educational equity is essential to breaking the cycle of poverty. Without intervention, the youth of Avlatan risk being left behind in a rapidly developing world, unable to secure the community's future."
      />

      <KeyChallenges
        title="Key Challenges"
        subtitle="We are actively addressing four main obstacles in the region."
        challenges={challenges}
      />
    </ProblemLayout>
  );
};

export default Problem;
