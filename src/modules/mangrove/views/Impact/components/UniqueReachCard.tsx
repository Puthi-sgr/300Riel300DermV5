import React from "react";
import { Fingerprint } from "lucide-react";
import { CampaignStat } from "../../../data/campaignData";
import CustomCounter from "../../../../../components/CustomCounter";

type Props = {
  uniqueReach?: CampaignStat;
  totalViews?: CampaignStat;
  t: (key: string) => string;
  showCounter?: boolean;
};

const formatNumber = (value?: number, decimals = 0) =>
  (value ?? 0).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });

const UniqueReachCard: React.FC<Props> = ({ uniqueReach, totalViews, t, showCounter = true }) => {
  const progress = totalViews?.value
    ? Math.min(100, Math.round(((uniqueReach?.value ?? 0) / totalViews.value) * 100))
    : 0;

  return (
    <article className="rounded-[24px] bg-card-fern border border-white/70 shadow-impact p-6 space-y-4 text-earth-900 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xxs sm:text-xs uppercase tracking-normal text-eco-600 flex items-center gap-2">
            <Fingerprint size={16} />
            {t(uniqueReach?.labelKey ?? "mangrove.campaign.uniqueReach")}
          </p>
          <div
            className={`mt-2 text-3xl font-bold transition-all duration-300 ${
              showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {showCounter ? (
              <CustomCounter end={uniqueReach?.value ?? 0} decimals={uniqueReach?.decimals ?? 0} />
            ) : null}
          </div>
        </div>
        <span className="text-xxs sm:text-xs text-earth-700">{progress}% of total views</span>
      </div>
      <div
        className={`space-y-2 transition-all duration-300 ${
          showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="h-2 rounded-full bg-white/60">
          <div className="h-full rounded-full bg-eco-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xxs sm:text-xs text-earth-700">
          {t("mangrove.campaign.uniqueReachCaption") ?? "Share of total views"}
        </p>
      </div>
    </article>
  );
};

export default UniqueReachCard;
