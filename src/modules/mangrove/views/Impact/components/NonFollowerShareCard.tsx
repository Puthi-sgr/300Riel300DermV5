import React from "react";
import { Share2 } from "lucide-react";
import { CampaignStat } from "../../../data/campaignData";

type Props = {
  stat?: CampaignStat;
  t: (key: string) => string;
};

const NonFollowerShareCard: React.FC<Props> = ({ stat, t }) => {
  const circleStyle = {
    background: `conic-gradient(#4d8b4d ${(stat?.value ?? 0) * 3.6}deg, rgba(0,89,0,0.12) 0deg)`,
  };

  return (
    <article className="rounded-[24px] bg-card-grain border border-white/70 shadow-impact p-6 flex flex-col md:flex-row items-center gap-6 text-earth-900">
      <div className="relative h-24 w-24 rounded-full bg-white/60 flex items-center justify-center" style={circleStyle}>
        <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center text-2xl font-bold text-eco-600">
          {stat?.value ?? 0}
          {stat?.suffix ?? "%"}
        </div>
      </div>
      <div>
        <p className="text-xxs sm:text-xs uppercase tracking-[0.3em] text-eco-600 flex items-center gap-2">
          <Share2 size={16} />
          {t(stat?.labelKey ?? "campaign.nonFollowerShare")}
        </p>
        <p className="text-sm text-earth-700 mt-2">
          {t("campaign.nonFollowerShareCaption") ?? "Share of reach outside followers"}
        </p>
      </div>
    </article>
  );
};

export default NonFollowerShareCard;
