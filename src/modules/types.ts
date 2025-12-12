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
  status: ProjectStatus;
  year: number;
  type: string;
  heroImage?: CloudinaryImage;
  thumbnail?: CloudinaryImage;
  summary: string;
  stats?: ProjectStats;
  sponsors: string[];
  reportUrl?: string | null;
};
