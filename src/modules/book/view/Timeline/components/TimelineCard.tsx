import React from "react";
import GlassCard from "../../../components/GlassCard";

type TimelineCardProps = {
  phaseLabel: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  align?: "left" | "right";
};

const TimelineCard: React.FC<TimelineCardProps> = ({ phaseLabel, icon, title, description, align = "left" }) => (
  <GlassCard
    className={`relative w-[min(20rem,calc(50vw+3rem))] sm:w-full md:w-[min(34rem,100%)] rounded-[22px] border border-white/70 shadow-impact p-4 sm:p-6 space-y-3 ${
      align === "left" ? "md:mr-auto" : "md:ml-auto"
    }`}
  >
    <div className="flex items-center justify-between">
      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-eco-50 text-eco-700 flex items-center justify-center shadow-sm border border-eco-100">
        {icon}
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-eco-600">{phaseLabel}</span>
    </div>
    <div className="space-y-1">
      <p className="text-base sm:text-lg font-semibold text-earth-900">{title}</p>
      <p className="hidden sm:block text-sm text-earth-700 leading-relaxed">{description}</p>
    </div>
  </GlassCard>
);

export default TimelineCard;
