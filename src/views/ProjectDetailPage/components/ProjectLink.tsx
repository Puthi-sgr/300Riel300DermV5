import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../../modules/projects";

type ProjectLinksProps = {
  currentSlug?: string;
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ currentSlug }) => {
  const otherProjects = projects.filter((project) => project.slug !== currentSlug);

  if (!otherProjects.length) {
    return <p className="text-earth-700">More projects coming soon.</p>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {otherProjects.map((project) => (
        <Link
          key={project.slug}
          to={`/projects/${project.slug}`}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-eco-200 text-earth-800 hover:border-eco-400 hover:text-eco-700 shadow-sm transition-colors"
        >
          {project.title}
        </Link>
      ))}
    </div>
  );
};

export default ProjectLinks;
