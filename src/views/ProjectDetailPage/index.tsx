import React, { lazy, Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projectBySlug } from "../../modules/projects";
import ProjectPageFallback from "./components/ProjectPageFallback";
import ProjectNotFound from "./components/ProjectNotFound";
import GenericProjectPage from "./layout/GenericProjectLayout";

const MangroveProjectPage = lazy(() => import("../../modules/mangrove/views/ProjectPage"));

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!project) {
    return <ProjectNotFound currentSlug={slug} />;
  }

  if (project.slug === "mangrove-2025") {
    return (
      <Suspense fallback={<ProjectPageFallback />}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <MangroveProjectPage />
        </motion.div>
      </Suspense>
    );
  }

  return <GenericProjectPage project={project} />;
};

export default ProjectDetailPage;
