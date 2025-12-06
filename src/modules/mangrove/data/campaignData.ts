export type CampaignStat = {
  labelKey: string;
  value: number;
  suffix?: string;
  decimals?: number;
  progress?: number; // optional percentage for visual bar
};

export const campaignStats2025: CampaignStat[] = [
  { labelKey: "campaign.totalViews", value: 201400 },
  { labelKey: "campaign.uniqueReach", value: 47200 },
  { labelKey: "campaign.interactions", value: 8100 },
  { labelKey: "campaign.nonFollowerShare", value: 86, suffix: "%", progress: 86 },
  { labelKey: "campaign.newFollowers", value: 576 },
];

export const campaignMeta = {
  titleKey: "campaign.title",
  subtitleKey: "campaign.subtitle",
  period: "June 2025",
};

