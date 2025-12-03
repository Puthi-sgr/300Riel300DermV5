export type ImpactItem = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  target?: number;
};

export type ImpactHeadline = {
  title: string;
  items: ImpactItem[];
};

export const mangroveImpact2025: ImpactHeadline = {
  title: "Our Impact in 2025",
  items: [
    {
      value: 300,
      label: "mangrove seedlings planted at Tapaeng Sangkae, Kampot",
      target: 500,
    },
    {
      value: 270,
      suffix: " t",
      label: "Projected CO2 sequestered over 20 years",
      target: 400,
    },
    {
      value: 48,
      label: "student volunteers trained in environmental leadership",
      target: 120,
    },
    {
      value: 47200,
      label: "people reached through our digital campaign",
      target: 60000,
    },
    {
      value: 576,
      label: "new followers gained through community engagement",
      target: 1200,
    },
    {
      value: 610,
      prefix: "USD ",
      suffix: "+",
      label: "in-kind support from Giant Ibis & De KT Villa",
      target: 1500,
    },
  ],
};
