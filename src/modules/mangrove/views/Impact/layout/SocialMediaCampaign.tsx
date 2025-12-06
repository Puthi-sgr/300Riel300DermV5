import React from "react";
import { Activity } from "lucide-react";
import { useLanguage } from "../../../../../context/LanguageContext";
import {
  campaignMeta,
  campaignStats2025,
  CampaignStat,
} from "../../../data/campaignData";
import SocialHeroCard from "../components/SocialHeroCard";
import UniqueReachCard from "../components/UniqueReachCard";
import InteractionsCard from "../components/InteractionsCard";
import NonFollowerShareCard from "../components/NonFollowerShareCard";
import NewFollowersCard from "../components/NewFollowersCard";

const SocialMediaCampaignLayout = () => {
  const { t } = useLanguage();

  const statsMap = campaignStats2025.reduce<Record<string, CampaignStat>>(
    (acc, stat) => {
      acc[stat.labelKey] = stat;
      return acc;
    },
    {}
  );

  const totalViews = statsMap["campaign.totalViews"];
  const uniqueReach = statsMap["campaign.uniqueReach"];
  const interactions = statsMap["campaign.interactions"];
  const nonFollowerShare = statsMap["campaign.nonFollowerShare"];
  const newFollowers = statsMap["campaign.newFollowers"];

  return (
    <div className="rounded-3xl bg-card-foam border border-white/70 shadow-impact p-6 sm:p-8 space-y-8 text-earth-900">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xxs sm:text-xs font-semibold uppercase tracking-[0.35em] text-eco-500">
            {t(campaignMeta.titleKey)}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-earth-900 leading-tight">
            {t(campaignMeta.subtitleKey)}
          </h3>
        </div>
        <span className="flex items-center gap-2 px-4 py-1.5 text-xxs sm:text-xs font-semibold rounded-full bg-white/80 border border-white/70 text-eco-700 shadow-sm">
          <Activity size={14} />
          {campaignMeta.period}
        </span>
      </div>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-6">
          <SocialHeroCard stat={totalViews} t={t} />

          <div className="grid gap-6">
            <UniqueReachCard uniqueReach={uniqueReach} totalViews={totalViews} t={t} />
            <InteractionsCard interactions={interactions} t={t} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NonFollowerShareCard stat={nonFollowerShare} t={t} />
          <NewFollowersCard stat={newFollowers} t={t} />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCampaignLayout;
