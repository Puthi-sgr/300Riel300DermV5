import { Project } from "../types";
import { getCldImage } from "../../core/lib/getCldImage";

const heroImage = getCldImage("feature.mangrove", {
  width: 1200,
  autoQuality: true,
  autoFormat: true,
});
const thumbnail = getCldImage("feature.mangrove", {
  width: 600,
  autoQuality: true,
  autoFormat: true,
});

export const mangroveProject: Project = {
  slug: "mangrove-2025",
  title: "Mangrove Restoration - Tapaeng Sangkae (2025)",
  titleKey: "mangrove.project.meta.title",
  tagline: "300 seedlings, 15 volunteers, 47,200 people reached",
  taglineKey: "mangrove.project.meta.tagline",
  status: "completed",
  statusLabelKey: "mangrove.project.status.completed",
  year: 2025,
  type: "environment",
  typeLabelKey: "mangrove.project.type.environment",
  heroImage: heroImage.image,
  thumbnail: thumbnail.image,
  summary:
    "Student-led mangrove restoration mission with 300 seedlings and a viral awareness campaign.",
  summaryKey: "mangrove.project.meta.summary",
  stats: {
    seedlingsPlanted: 300,
    volunteers: 15,
    reach: 47200,
    interactions: 8100,
    co2Tons: 270,
  },
  sponsors: ["Giant Ibis", "De KT Villa", "Tapaeng Sangkae Rangers"],
  reportUrl: "/reports/300riel-300derm-mangrove-2025.pdf",
};
