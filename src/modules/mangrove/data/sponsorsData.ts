export type Sponsor = {
  name: string;
  supportKey: string;
  image?: string;
};

export const sponsors2025: Sponsor[] = [
  {
    name: "Giant Ibis Transport",
    supportKey: "mangrove.project.sponsors.bus",
    image: "gi",
  },
  {
    name: "De KT Villa, Kampot",
    supportKey: "mangrove.project.sponsors.meals",
    image: "villa",
  },
  {
    name: "Tapaeng Sangkae Rangers & Elders",
    supportKey: "mangrove.project.sponsors.guidance",
  },
];

export const sponsorsMeta = {
  titleKey: "mangrove.project.sponsors.title",
  subtitleKey: "mangrove.project.sponsors.subtitle",
  period: "2025",
};
