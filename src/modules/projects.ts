import { Project } from "./types";
import { mangroveProject } from "./mangrove/data";
import { bookProject } from "./book/data";

export const projects: Project[] = [mangroveProject, bookProject];

export const projectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug);

export type { Project } from "./types";
