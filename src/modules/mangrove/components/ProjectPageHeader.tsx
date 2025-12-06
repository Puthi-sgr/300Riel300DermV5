import React from "react";

type Project = {
  heroImage?: string;
  title: string;
  summary: string;
  year: string | number;
  type: string;
};

type ProjectPageHeaderProps = {
  project: Project;
  statusLabel: string;
};

const statusBadgeClass =
  "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border bg-eco-100 text-eco-700 border-eco-200";

const ProjectPageHeader: React.FC<ProjectPageHeaderProps> = ({
  project,
  statusLabel,
}) => (
  <header className="relative h-64 sm:h-80 bg-earth-900 text-white overflow-hidden">
    {project.heroImage && (
      <img
        src={project.heroImage}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        loading="lazy"
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
    <div className="relative w-full px-4 sm:px-6 lg:px-10 h-full flex flex-col justify-end pb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className={statusBadgeClass}>{statusLabel}</span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20">
          {project.year}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 capitalize">
          {project.type}
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
      <p className="text-lg text-gray-100 mt-2 max-w-5xl">{project.summary}</p>
    </div>
  </header>
);

export default ProjectPageHeader;
