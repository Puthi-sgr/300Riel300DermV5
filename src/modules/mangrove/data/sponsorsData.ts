export type Sponsor = {
  name: string;
  supportKey: string;
  image?: string;
};

export const sponsors2025: Sponsor[] = [
  {
    name: "Giant Ibis Transport",
    supportKey: "project.sponsors.bus",
    image: "gi",
  },
  {
    name: "De KT Villa, Kampot",
    supportKey: "project.sponsors.meals",
    image: "villa",
  },
  {
    name: "Tapaeng Sangkae Rangers & Elders",
    supportKey: "project.sponsors.guidance",
  },
];

export const sponsorsMeta = {
  titleKey: "project.sponsors.title",
  subtitleKey: "project.sponsors.subtitle",
  period: "2025",
};
