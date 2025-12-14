export type CampaignStat = {
  labelKey: string;
  value: number;
  suffix?: string;
  decimals?: number;
  progress?: number; // optional percentage for visual bar
};

export const campaignStats2025: CampaignStat[] = [
  { labelKey: "mangrove.campaign.totalViews", value: 201400 },
  { labelKey: "mangrove.campaign.uniqueReach", value: 47200 },
  { labelKey: "mangrove.campaign.interactions", value: 8100 },
  { labelKey: "mangrove.campaign.nonFollowerShare", value: 86, suffix: "%", progress: 86 },
  { labelKey: "mangrove.campaign.newFollowers", value: 576 },
];

export const campaignMeta = {
  titleKey: "mangrove.campaign.title",
  subtitleKey: "mangrove.campaign.subtitle",
  period: "June 2025",
};
