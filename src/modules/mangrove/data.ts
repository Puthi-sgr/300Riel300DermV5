import { Project } from "../types";
import { getCldImage } from "../../core/lib/getCldImage";

const heroImage = getCldImage("feature.mangrove", { width: 1200, autoQuality: true, autoFormat: true });
const thumbnail = getCldImage("feature.mangrove", { width: 600, autoQuality: true, autoFormat: true });

export const mangroveProject: Project = {
  slug: "mangrove-2025",
  title: "Mangrove Restoration – Tapaeng Sangkae (2025)",
  status: "completed",
  year: 2025,
  type: "environment",
  heroImage: heroImage.image,
  thumbnail: heroImage.image,
  summary:
    "Student-led mangrove restoration mission with 300 seedlings and a viral awareness campaign.",
  stats: {
    seedlingsPlanted: 300,
    volunteers: 48,
    reach: 47200,
    interactions: 8100,
    co2Tons: 270,
  },
  sponsors: ["Giant Ibis", "De KT Villa", "Tapaeng Sangkae Rangers"],
  reportUrl: "/reports/300riel-300derm-mangrove-2025.pdf",
};
