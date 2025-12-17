import React from "react";
import { projects } from "./../../../../projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
