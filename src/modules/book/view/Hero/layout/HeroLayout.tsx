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
  return (
    <section className="relative w-full overflow-hidden min-h-screen px-3 sm:px-5 lg:px-6 py-14 sm:py-18">
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundBlob className="-top-32 -left-16 w-96 h-96" />
        <BackgroundBlob className="-bottom-36 right-10 w-96 h-96" colorClass="bg-eco-200/26" />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-100 text-eco-500 font-semibold text-xs uppercase tracking-[0.12em] border border-eco-200 shadow-sm">
            <HeartHandshake className="w-4 h-4" />
            Together, we build a better future
          </div>

          <SectionHeader kicker={undefined} title={heading} subtitle={undefined} className="space-y-3" />

          <OverviewCard>{overview}</OverviewCard>

          <ObjectivesList items={objectives} className="text-base" />

          <CTAGroup />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center lg:justify-end"
        >
          <ProgressCard
            statusLabel={statusLabel}
            raisedLabel={raisedLabel}
            progressPercent={progressPercent}
            metrics={metrics}
          />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroLayout;
