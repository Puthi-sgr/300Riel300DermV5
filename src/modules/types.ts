import { CloudinaryImage } from "@cloudinary/url-gen/index";

export type ProjectStatus = "completed" | "in-progress" | "upcoming";

export type ProjectStats = {
  seedlingsPlanted?: number;
  volunteers?: number;
  reach?: number;
  interactions?: number;
  co2Tons?: number;
  targetBooks?: number;
  targetSchools?: number;
};

export type Project = {
  slug: string;
  title: string;
  titleKey?: string;
  tagline?: string;
  taglineKey?: string;
  status: ProjectStatus;
  statusLabelKey?: string;
  year: number;
  type: string;
  typeLabelKey?: string;
  heroImage?: CloudinaryImage;
  thumbnail?: CloudinaryImage;
  summary: string;
  summaryKey?: string;
  stats?: ProjectStats;
  sponsors: string[];
  reportUrl?: string | null;
};
