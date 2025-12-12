import React, { Suspense, lazy, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projectRegistry } from "../modules/projects/registry";
import { projectBySlug } from "../modules/projects";
import ProjectPageFallback from "../views/ProjectDetailPage/components/ProjectPageFallback";
import ProjectNotFound from "../views/ProjectDetailPage/components/ProjectNotFound";
import GenericProjectPage from "../views/ProjectDetailPage/layout/GenericProjectLayout";

const ProjectsRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!project) {
    return <ProjectNotFound currentSlug={slug} />;
  }

  const loader = slug ? projectRegistry[slug] : undefined;

  if (loader) {
    const LazyPage = lazy(loader);
    return (
      <Suspense fallback={<ProjectPageFallback />}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <LazyPage />
        </motion.div>
      </Suspense>
    );
  }

  return <GenericProjectPage project={project} />;
};

export default ProjectsRoute;
