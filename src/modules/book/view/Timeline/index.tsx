import React from "react";
import { BookOpenCheck, Truck, MapPin, Users } from "lucide-react";
import TimelineLayout from "./layout/TimelineLayout";
import TimelineHeader from "./components/TimelineHeader";
import TimelineTrack from "./components/TimelineTrack";
import TimelineCard from "./components/TimelineCard";
import TimelineCTA from "./components/TimelineCTA";
import { useLanguage } from "../../../../context/LanguageContext";

const Timeline: React.FC = () => {
  const { t } = useLanguage();

  const phases = [
    {
      phase: t("book.timeline.phases.0.phase"),
      icon: <BookOpenCheck className="w-5 h-5" />,
      title: t("book.timeline.phases.0.title"),
      description: t("book.timeline.phases.0.description"),
    },
    {
      phase: t("book.timeline.phases.1.phase"),
      icon: <Truck className="w-5 h-5" />,
      title: t("book.timeline.phases.1.title"),
      description: t("book.timeline.phases.1.description"),
    },
    {
      phase: t("book.timeline.phases.2.phase"),
      icon: <MapPin className="w-5 h-5" />,
      title: t("book.timeline.phases.2.title"),
      description: t("book.timeline.phases.2.description"),
    },
    {
      phase: t("book.timeline.phases.3.phase"),
      icon: <Users className="w-5 h-5" />,
      title: t("book.timeline.phases.3.title"),
      description: t("book.timeline.phases.3.description"),
    },
  ];

  return (
    <TimelineLayout>
      <TimelineHeader
        title={t("book.timeline.header.title")}
        subtitle={t("book.timeline.header.subtitle")}
      />

      <div className="relative mt-10">
        <TimelineTrack nodes={phases.length} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-14">
          {phases.map((phase, idx) => (
            <div key={idx} className={idx % 2 === 0 ? "lg:pr-10" : "lg:pl-10"}>
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
