import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import BackgroundBlob from "../../../components/BackgroundBlob";
import OverviewCard from "../components/OverviewCard";
import ObjectivesList from "../components/ObjectivesList";
import CTAGroup from "../components/CTAGroup";
import ProgressCard from "../components/ProgressCard";
import ScrollIndicator from "../components/ScrollIndicator";
import { HeartHandshake } from "lucide-react";
import PillBadge from "../../../components/PillBadge";
import { useLanguage } from "../../../../../context/LanguageContext";

type Metric = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type HeroLayoutProps = {
  heading: string;
  overview: string;
  objectives: string[];
  statusLabel: string;
  raisedLabel: string;
  progressPercent: number;
  metrics: Metric[];
};

const HeroLayout: React.FC<HeroLayoutProps> = ({
  heading,
  overview,
  objectives,
  statusLabel,
  raisedLabel,
  progressPercent,
  metrics,
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] px-3 sm:px-5 lg:px-6 pt-12 pb-8 sm:pt-32 sm:pb-12 flex flex-col">
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundBlob className="-top-32 -left-16 w-96 h-96" />
        <BackgroundBlob className="-bottom-36 right-10 w-96 h-96" colorClass="bg-eco-200/26" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-6 sm:gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 sm:space-y-6"
        >
          <PillBadge>
            <HeartHandshake className="w-4 h-4" />
            {t("book.hero.pillBadge")}
          </PillBadge>

          <SectionHeader kicker={undefined} title={heading} subtitle={undefined} className="space-y-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:row-span-2 lg:self-center"
        >
          <div className="w-full max-w-xl mx-auto lg:ml-auto">
            <ProgressCard
              statusLabel={statusLabel}
              raisedLabel={raisedLabel}
              progressPercent={progressPercent}
              metrics={metrics}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 sm:space-y-7"
        >
          <OverviewCard>{overview}</OverviewCard>

          <ObjectivesList items={objectives} className="text-base space-y-4" />

          <CTAGroup />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroLayout;
