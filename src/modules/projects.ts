import { Project } from "./types";
import { mangroveProject } from "./mangrove/data";

const otherProjects: Project[] = [
  {
    slug: "book-donation-2026",
    title: "Book Donation for Rural Schools (2026)",
    status: "upcoming",
    year: 2026,
    type: "education",
    heroImage: "/images/books-hero.jpg",
    thumbnail: "/images/books-card.jpg",
    summary:
      "Upcoming project to provide storybooks and learning materials to under-resourced schools.",
    stats: {
      targetBooks: 1000,
      targetSchools: 5,
    },
    sponsors: [],
    reportUrl: null,
  },
];

export const projects: Project[] = [mangroveProject, ...otherProjects];

export const projectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug);

export type { Project } from "./types";
