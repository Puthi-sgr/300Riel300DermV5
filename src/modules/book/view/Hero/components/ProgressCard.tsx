import React from "react";
import GlassCard from "../../../components/GlassCard";
import TranslucentCirclePill from "../../../components/TranslucentCirclePill";
import StatusPill from "../../../components/StatusPill";
import { useLanguage } from "../../../../../context/LanguageContext";

type Metric = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ProgressCardProps = {
  statusLabel: string;
  raisedLabel: string;
  progressPercent: number;
  metrics: Metric[];
};

const ProgressCard: React.FC<ProgressCardProps> = ({
  statusLabel,
  raisedLabel,
  progressPercent,
  metrics,
}) => {
  const { t } = useLanguage();
  const clampedPercent = Math.max(0, Math.min(progressPercent, 100));

  return (
    <GlassCard className="p-5 sm:p-6 space-y-3 bg-white shadow-2xl shadow-eco-900/8 border border-eco-100 rounded-[24px]">
      <div className="flex items-center justify-between">
        <div className="text-earth-900 font-semibold">{t("book.hero.progress.title")}</div>
        <StatusPill>{statusLabel}</StatusPill>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-earth-700">{t("book.hero.progress.raised")}</p>
        <p className="text-2xl font-bold text-earth-900">{raisedLabel}</p>
        <div className="h-3 rounded-full bg-white/90 border border-eco-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-eco-600 transition-all duration-500 ease-out"
            style={{ width: `${clampedPercent}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white/85 rounded-2xl border border-white/70 p-4 shadow-sm"
          >
            <div className="flex items-center justify-center">
              <TranslucentCirclePill className="h-12 w-12 bg-eco-100 text-eco-700 glass-card border border-white/70">
                {metric.icon}
              </TranslucentCirclePill>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-earth-900">{metric.title}</p>
              <p className="text-sm text-earth-700">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ProgressCard;
