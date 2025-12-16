import React from "react";
import FeaturedProjectsLayout from "./layout/FeaturedProjectsLayout";
import FeaturedProjectsHeader from "./components/FeaturedProjectsHeader";
import ProjectsGrid from "./components/ProjectsGrid";

const FeaturedProjects = () => {
  return (
    <FeaturedProjectsLayout
      headerNode={<FeaturedProjectsHeader />}
      projectsGridNode={<ProjectsGrid />}
    />
  );
};

export default FeaturedProjects;
