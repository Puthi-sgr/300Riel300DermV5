import React from "react";
import StatusPill from "../../../components/StatusPill";
import GlassCard from "../../../components/GlassCard";

type MetricCardProps = {
  icon: React.ReactNode;
  value: string;
  title: string;
  description: string;
  badge?: string;
};

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, title, description, badge }) => (
  <GlassCard className="relative bg-card-glass-emerald rounded-[22px] border border-white/70 shadow-impact p-6 space-y-3">
    <div className="flex items-center justify-between">
      <div className="h-12 w-12 rounded-full bg-eco-50 text-eco-700 flex items-center justify-center shadow-sm border border-eco-100">
        {icon}
      </div>
      {badge ? <StatusPill className="text-xxs px-2 py-1">{badge}</StatusPill> : null}
    </div>
    <div className="space-y-1">
      <p className="text-3xl font-extrabold text-earth-900">{value}</p>
      <p className="text-lg font-semibold text-earth-900">{title}</p>
      <p className="text-sm text-earth-700 leading-relaxed">{description}</p>
    </div>
  </GlassCard>
);

export default MetricCard;
