import React from "react";
import { BookOpenCheck, Truck, MapPin, Users } from "lucide-react";
import TimelineLayout from "./layout/TimelineLayout";
import TimelineHeader from "./components/TimelineHeader";
import TimelineTrack from "./components/TimelineTrack";
import TimelineCard from "./components/TimelineCard";
import TimelineCTA from "./components/TimelineCTA";

const Timeline: React.FC = () => {
  const phases = [
    {
      phase: "Phase 1",
      icon: <BookOpenCheck className="w-5 h-5" />,
      title: "Initial Fundraising & Book Collection",
      description:
        "We launched our community drive, gathering over 500 books and essential learning materials from generous local donors.",
    },
    {
      phase: "Phase 2",
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Shipping to Cambodia",
      description:
        "Coordinating international freight to ensure the safe and timely arrival of our collected resources across borders.",
    },
    {
      phase: "Phase 3",
      icon: <MapPin className="w-5 h-5" />,
      title: "Arrival & Setup at Avlatan School",
      description:
        "Unpacking boxes and organizing the new library space with the help of teachers and local volunteers.",
    },
    {
      phase: "Phase 4",
      icon: <Users className="w-5 h-5" />,
      title: "The First Reading Session",
      description:
        "Seeing the smiles on the students' faces as they opened their first books was the ultimate reward.",
    },
  ];

  return (
    <TimelineLayout>
      <TimelineHeader
        title="Our Journey So Far"
        subtitle="Tracing our mission to donate books and educational resources to Avlatan Primary School in Cambodia, step by step."
      />

      <div className="relative mt-10">
        <TimelineTrack nodes={phases.length} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-14">
          {phases.map((phase, idx) => (
            <div key={phase.title} className={idx % 2 === 0 ? "lg:pr-10" : "lg:pl-10"}>
              <TimelineCard
                phaseLabel={phase.phase}
                icon={phase.icon}
                title={phase.title}
                description={phase.description}
                align={idx % 2 === 0 ? "left" : "right"}
              />
            </div>
          ))}
        </div>
      </div>

      <TimelineCTA />
    </TimelineLayout>
  );
};

export default Timeline;
