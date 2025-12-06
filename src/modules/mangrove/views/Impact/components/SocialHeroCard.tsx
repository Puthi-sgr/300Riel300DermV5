import React from "react";
import { BarChart3, Eye } from "lucide-react";
import { CampaignStat } from "../../../data/campaignData";

type Props = {
  stat?: CampaignStat;
  t: (key: string) => string;
};

const formatNumber = (value?: number, decimals = 0) =>
  (value ?? 0).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });

const SocialHeroCard: React.FC<Props> = ({ stat, t }) => {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/70 bg-card-glass shadow-impact p-6 sm:p-8 text-earth-900">
      <div className="absolute -right-8 -bottom-10 h-32 w-32 rounded-full bg-white/30 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-1/3 opacity-10" aria-hidden="true">
        <BarChart3 className="h-full w-full" />
      </div>
      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-xxs sm:text-xs uppercase tracking-[0.35em] text-eco-500">
              <Eye size={16} />
              {t(stat?.labelKey ?? "campaign.totalViews")}
            </p>
            <div className="mt-3 text-4xl sm:text-5xl font-bold">
              {formatNumber(stat?.value)}
              {stat?.suffix && (
                <span className="text-2xl sm:text-3xl text-eco-500">{stat.suffix}</span>
              )}
            </div>
            <p className="text-sm text-earth-700 mt-2">
              {t("campaign.totalViewsDescription") ?? "Latest verified reach"}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xxs sm:text-xs font-semibold text-eco-700 border border-white/70 shadow-sm">
            {t("campaign.metricVerified") ?? "Verified"}
          </span>
        </div>
        <p className="text-xxs sm:text-xs text-earth-700">
          {t("campaign.dataSource") ?? "Data source: Organic campaign telemetry"}
        </p>
      </div>
    </article>
  );
};

export default SocialHeroCard;
