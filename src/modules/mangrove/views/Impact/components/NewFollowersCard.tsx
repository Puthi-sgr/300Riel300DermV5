import React from "react";
import { UserPlus, TrendingUp } from "lucide-react";
import { CampaignStat } from "../../../data/campaignData";

type Props = {
  stat?: CampaignStat;
  t: (key: string) => string;
};

const formatNumber = (value?: number, decimals = 0) =>
  (value ?? 0).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });

const NewFollowersCard: React.FC<Props> = ({ stat, t }) => {
  return (
    <article className="rounded-[24px] bg-card-foam border border-white/70 shadow-impact p-6 text-earth-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xxs sm:text-xs uppercase tracking-[0.3em] text-eco-600 flex items-center gap-2">
            <UserPlus size={16} />
            {t(stat?.labelKey ?? "campaign.newFollowers")}
          </p>
          <div className="mt-2 text-3xl font-bold">+{formatNumber(stat?.value)}</div>
        </div>
        <span className="text-xxs sm:text-xs text-earth-700 flex items-center gap-2">
          <TrendingUp size={14} />
          {t("campaign.newFollowersCaption") ?? "Net gain from campaign"}
        </span>
      </div>
    </article>
  );
};

export default NewFollowersCard;
