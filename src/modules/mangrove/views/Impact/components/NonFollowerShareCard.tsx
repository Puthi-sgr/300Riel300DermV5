import React from "react";
import { Share2 } from "lucide-react";
import { CampaignStat } from "../../../data/campaignData";
import CustomCounter from "../../../../../components/CustomCounter";

type Props = {
  stat?: CampaignStat;
  t: (key: string) => string;
  showCounter?: boolean;
};

const NonFollowerShareCard: React.FC<Props> = ({ stat, t, showCounter = true }) => {
  const circleStyle = {
    background: `conic-gradient(#4d8b4d ${(stat?.value ?? 0) * 3.6}deg, rgba(0,89,0,0.12) 0deg)`,
  };

  return (
    <article className="rounded-[24px] bg-card-grain border border-white/70 shadow-impact p-6 h-full flex flex-col md:flex-row items-center gap-6 text-earth-900">
      <div className="relative h-24 w-24 rounded-full bg-white/60 flex items-center justify-center" style={circleStyle}>
        <div
          className={`h-16 w-16 rounded-full bg-white/90 flex items-center justify-center text-2xl font-bold text-eco-600 transition-all duration-300 ${
            showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {showCounter ? (
            <CustomCounter
              end={stat?.value ?? 0}
              suffix={stat?.suffix ?? "%"}
              decimals={stat?.decimals ?? 0}
            />
          ) : null}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${
          showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <p className="text-xxs sm:text-xs uppercase tracking-normal text-eco-600 flex items-center gap-2">
          <Share2 size={16} />
          {t(stat?.labelKey ?? "mangrove.campaign.nonFollowerShare")}
        </p>
        <p className="text-sm text-earth-700 mt-2">
          {t("mangrove.campaign.nonFollowerShareCaption") ??
            "Share of reach outside followers"}
        </p>
      </div>
    </article>
  );
};

export default NonFollowerShareCard;
