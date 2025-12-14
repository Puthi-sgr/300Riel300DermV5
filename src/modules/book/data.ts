import { Project } from "../types";
import { getCldImage } from "../../core/lib/getCldImage";

const heroImage = getCldImage("gallery.ranger", {
  width: 1200,
  autoQuality: true,
  autoFormat: true,
});
const thumbnail = getCldImage("gallery.droneShot2", {
  width: 600,
  autoQuality: true,
  autoFormat: true,
});

export const bookProject: Project = {
  slug: "book-2026",
  title: "300 Riels 300 Kbal - Book Donation for Avlatan Primary School",
  titleKey: "book.project.meta.title",
  tagline: "300 books targeted, 1 school",
  taglineKey: "book.project.meta.tagline",
  status: "upcoming",
  statusLabelKey: "book.project.status.upcoming",
  year: 2026,
  type: "education",
  typeLabelKey: "book.project.type.education",
  heroImage: heroImage.image, // TODO: replace with real asset
  thumbnail: thumbnail.image, // TODO: replace with real asset
  summary:
    "Youth-led campaign to donate 300 books and essential learning materials to Avlatan Primary School, a remote island community in Koh Kong Province, to improve access to quality education and support long-term learning.",
  summaryKey: "book.project.meta.summary",
  stats: {
    targetBooks: 300,
    targetSchools: 1,
  },
  sponsors: [],
  reportUrl: null,
};
