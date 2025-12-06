import React from "react";
import { BarChart3 } from "lucide-react";
import { CampaignStat } from "../../../data/campaignData";

type Props = {
  interactions?: CampaignStat;
  t: (key: string) => string;
};

const formatNumber = (value?: number, decimals = 0) =>
  (value ?? 0).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });

const InteractionsCard: React.FC<Props> = ({ interactions, t }) => {
  return (
    <article className="rounded-[24px] bg-card-foam border border-white/70 shadow-impact p-6 space-y-3 text-earth-900">
      <div className="flex items-center justify-between">
        <p className="text-xxs sm:text-xs uppercase tracking-[0.3em] text-eco-600 flex items-center gap-2">
          <BarChart3 size={16} />
          {t(interactions?.labelKey ?? "campaign.interactions")}
        </p>
        <span className="text-lg font-semibold text-earth-900">
          {formatNumber(interactions?.value)}
        </span>
      </div>
      <p className="text-xxs sm:text-xs text-earth-700">
        {t("campaign.interactionsCaption") ?? "Total reactions, comments, and shares"}
      </p>
    </article>
  );
};

export default InteractionsCard;
