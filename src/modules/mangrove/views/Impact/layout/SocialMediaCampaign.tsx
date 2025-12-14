import React from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import type { CampaignStat } from "../../../data/campaignData";
import SocialHeroCard from "../components/SocialHeroCard";
import UniqueReachCard from "../components/UniqueReachCard";
import InteractionsCard from "../components/InteractionsCard";
import NonFollowerShareCard from "../components/NonFollowerShareCard";
import NewFollowersCard from "../components/NewFollowersCard";
import { useStaggeredCounters } from "../../../../../hooks/useStaggeredCounters";

type Props = {
  campaignMeta: { title: string; subtitle: string; period: string };
  campaignStats: CampaignStat[];
  t: (key: string) => string; // passed through to child components which still use labelKey
};

const SocialMediaCampaignLayout: React.FC<Props> = ({ campaignMeta, campaignStats, t }) => {
  const { getMotionProps, markReady, isReady } = useStaggeredCounters([
    "hero",
    "uniqueReach",
    "interactions",
    "nonFollowerShare",
    "newFollowers",
  ]);

  const statsMap = campaignStats.reduce<Record<string, CampaignStat>>((acc, stat) => {
    acc[stat.labelKey] = stat;
    return acc;
  }, {} as Record<string, CampaignStat>);

  const totalViews = statsMap["mangrove.campaign.totalViews"];
  const uniqueReach = statsMap["mangrove.campaign.uniqueReach"];
  const interactions = statsMap["mangrove.campaign.interactions"];
  const nonFollowerShare = statsMap["mangrove.campaign.nonFollowerShare"];
  const newFollowers = statsMap["mangrove.campaign.newFollowers"];

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#f3fbf6] via-white to-[#eef6ee] border border-white/70 shadow-impact p-6 sm:p-8 space-y-4 text-earth-900">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xxs sm:text-xs font-semibold uppercase tracking-normal text-eco-500">{campaignMeta.title}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-earth-900 leading-tight">{campaignMeta.subtitle}</h3>
        </div>
        <span className="flex items-center gap-2 px-4 py-1.5 text-xxs sm:text-xs font-semibold rounded-full bg-white/80 border border-white/70 text-eco-700 shadow-sm">
          <Activity size={14} />
          {campaignMeta.period}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-3">
        <div className="col-span-12 lg:col-span-8 lg:row-span-6 grid gap-3">
          <motion.div
            {...getMotionProps(0)}
            className="row-span-3 h-full"
            onAnimationComplete={() => markReady("hero")}
          >
            <SocialHeroCard stat={totalViews} t={t} showCounter={isReady("hero")} />
          </motion.div>

          <motion.div
            {...getMotionProps(0.2)}
            className="row-span-3 h-full"
            onAnimationComplete={() => markReady("nonFollowerShare")}
          >
            <NonFollowerShareCard stat={nonFollowerShare} t={t} showCounter={isReady("nonFollowerShare")} />
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:row-span-6 grid grid-rows-6 gap-3">
          <motion.div
            {...getMotionProps(0.3)}
            className="lg:row-span-2 h-full"
            onAnimationComplete={() => markReady("uniqueReach")}
          >
            <UniqueReachCard uniqueReach={uniqueReach} totalViews={totalViews} t={t} showCounter={isReady("uniqueReach")} />
          </motion.div>
          <motion.div
            {...getMotionProps(0.4)}
            className="lg:row-span-2 h-full"
            onAnimationComplete={() => markReady("interactions")}
          >
            <InteractionsCard interactions={interactions} t={t} showCounter={isReady("interactions")} />
          </motion.div>
          <motion.div
            {...getMotionProps(0.5)}
            className="lg:row-span-2 h-full"
            onAnimationComplete={() => markReady("newFollowers")}
          >
            <NewFollowersCard stat={newFollowers} t={t} showCounter={isReady("newFollowers")} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCampaignLayout;
