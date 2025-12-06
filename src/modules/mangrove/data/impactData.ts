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
      target: 300,
    },
    {
      value: 270,
      suffix: " t",
      label: "Projected CO2 sequestered over 20 years",
      target: 270,
    },
    {
      value: 15,
      label: "student volunteers trained in environmental leadership",
      target: 20,
    },
    {
      value: 610,
      prefix: "USD ",
      suffix: "+",
      label: "in-kind support from Giant Ibis & De KT Villa",
      target: 700,
    },
  ],
};
