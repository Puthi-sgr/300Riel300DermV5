import React from "react";
import TeamLayout from "./layout/TeamLayout";
import TeamHeader from "./components/TeamHeader";
import TeamGrid from "./components/TeamGrid";
import FullRoundedGradientButton from "../../components/FullRoundedGradientButton";
import { getCldImage } from "../../../../core/lib/getCldImage";

const memberImages = [
  getCldImage("gallery.boat", { width: 160 }),
  getCldImage("gallery.ranger2", { width: 160 }),
  getCldImage("gallery.nitaPlanting", { width: 160 }),
  getCldImage("gallery.seyhaPlanting", { width: 160 }),
  getCldImage("gallery.pichtaPlanting", { width: 160 }),
  getCldImage("gallery.groupVilla", { width: 160 }),
];

const members = [
  {
    name: "Sophea Chan",
    role: "Project Lead",
    quote: "Believer in equal education access for every child in Cambodia.",
    image: memberImages[0].image,
    alt: memberImages[0].alt,
  },
  {
    name: "Dara Ly",
    role: "Logistics Coordinator",
    quote: "Ensuring every book arrives safely to the hands that need them.",
    image: memberImages[1].image,
    alt: memberImages[1].alt,
  },
  {
    name: "Bopha Kem",
    role: "Community Outreach",
    quote: "Connecting hearts across borders and sharing our vision.",
    image: memberImages[2].image,
    alt: memberImages[2].alt,
  },
  {
    name: "Visal Sok",
    role: "Fundraising Manager",
    quote: "Turning small gifts into big impact for the next generation.",
    image: memberImages[3].image,
    alt: memberImages[3].alt,
  },
  {
    name: "Neary Meng",
    role: "Content Creator",
    quote: "Sharing our story with the world to inspire positive change.",
    image: memberImages[4].image,
    alt: memberImages[4].alt,
  },
  {
    name: "Rithy Pan",
    role: "School Liaison",
    quote: "Building bridges with the community to ensure sustainable growth.",
    image: memberImages[5].image,
    alt: memberImages[5].alt,
  },
];

const Team: React.FC = () => (
  <TeamLayout>
    <TeamHeader />
    <TeamGrid members={members} />
    <div className="flex justify-center pt-6">
      <FullRoundedGradientButton className="px-6 rounded-full">Support Student-Led Impact →</FullRoundedGradientButton>
    </div>
  </TeamLayout>
);

export default Team;
