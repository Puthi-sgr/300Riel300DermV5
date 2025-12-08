import React from "react";
import { BarChart3 } from "lucide-react";
import { CampaignStat } from "../../../data/campaignData";
import CustomCounter from "../../../../../components/CustomCounter";

type Props = {
  interactions?: CampaignStat;
  t: (key: string) => string;
  showCounter?: boolean;
};

const formatNumber = (value?: number, decimals = 0) =>
  (value ?? 0).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });

const InteractionsCard: React.FC<Props> = ({ interactions, t, showCounter = true }) => {
  return (
    <article className="rounded-[24px] bg-card-foam border border-white/70 shadow-impact p-6 space-y-3 text-earth-900 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-xxs sm:text-xs uppercase tracking-[0.3em] text-eco-600 flex items-center gap-2">
          <BarChart3 size={16} />
          {t(interactions?.labelKey ?? "campaign.interactions")}
        </p>
        <span
          className={`text-lg font-semibold text-earth-900 transition-all duration-300 ${
            showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {showCounter ? (
            <CustomCounter end={interactions?.value ?? 0} decimals={interactions?.decimals ?? 0} />
          ) : null}
        </span>
      </div>
      <p
        className={`text-xxs sm:text-xs text-earth-700 transition-all duration-300 ${
          showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        {t("campaign.interactionsCaption") ?? "Total reactions, comments, and shares"}
      </p>
    </article>
  );
};

export default InteractionsCard;
