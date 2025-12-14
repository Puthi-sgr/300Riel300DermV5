import React from "react";
import { UserPlus, TrendingUp } from "lucide-react";
import CustomCounter from "../../../../../components/CustomCounter";
import { CampaignStat } from "../../../data/campaignData";

type Props = {
  stat?: CampaignStat;
  t: (key: string) => string;
  showCounter?: boolean;
};

const NewFollowersCard: React.FC<Props> = ({ stat, t, showCounter = true }) => {
  return (
    <article className="rounded-[24px] bg-card-foam border border-white/70 shadow-impact p-6 text-earth-900 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xxs sm:text-xs uppercase tracking-normal text-eco-600 flex items-center gap-2">
            <UserPlus size={16} />
            {t(stat?.labelKey ?? "mangrove.campaign.newFollowers")}
          </p>
          <div
            className={`mt-2 text-3xl font-bold transition-all duration-300 ${
              showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {showCounter ? (
              <CustomCounter
                prefix="+"
                end={stat?.value ?? 0}
                decimals={stat?.decimals ?? 0}
              />
            ) : null}
          </div>
        </div>
        <span
          className={`text-xxs sm:text-xs text-earth-700 flex items-center gap-2 transition-all duration-300 ${
            showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          <TrendingUp size={14} />
          {t("mangrove.campaign.newFollowersCaption") ?? "Net gain from campaign"}
        </span>
      </div>
    </article>
  );
};

export default NewFollowersCard;
