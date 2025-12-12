import React, { lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { mangroveProject } from "./data";
import ProjectPageLoading from "./components/ProjectPageLoading";
import ProjectPageHeader from "./components/ProjectPageHeader";
import LazyRevealSection from "./components/utils/LazyRevealSection";

const ImpactSection = lazy(() => import("./views/Impact/index"));
const HighlightsSection = lazy(() => import("./views/HighlightsSection"));
const SponsorsSection = lazy(() => import("./views/SponsorsSection"));
const GallerySection = lazy(() => import("./views/GallerySection"));
const Mangroves = lazy(() => import("./views/Mangroves/index"));
const Phases = lazy(() => import("./views/Phases"));

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.6, 0.3, 1] },
  },
};

const MangroveProjectPage = () => {
  const { t } = useLanguage();
  const project = mangroveProject;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <ProjectPageLoading key="project-loading" />
      ) : (
        <motion.main
          key="project-content"
          className="min-h-screen bg-eco-50"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? false : "show"}
          exit={prefersReducedMotion ? false : "hidden"}
        >
          <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
            <ProjectPageHeader
              project={project}
              statusLabel={t("project.status.completed") ?? ""}
            />
          </motion.div>

          <motion.section
            className="w-full px-4 sm:px-6 lg:px-10 py-12 space-y-10"
            variants={prefersReducedMotion ? undefined : containerVariants}
          >
            <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
              <LazyRevealSection initiallyVisible fallbackHeight={560}>
                <ImpactSection />
              </LazyRevealSection>
            </motion.div>

            <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
              <LazyRevealSection initiallyVisible fallbackHeight={520}>
                <HighlightsSection />
              </LazyRevealSection>
            </motion.div>

             <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
              <LazyRevealSection initiallyVisible fallbackHeight={520}>
                <GallerySection />
              </LazyRevealSection>
            </motion.div>

            <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
              <LazyRevealSection fallbackHeight={520}>
                <SponsorsSection />
              </LazyRevealSection>
            </motion.div>

            <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
              <LazyRevealSection fallbackHeight={520}>
                <div className="rounded-3xl border border-eco-100 shadow-sm overflow-hidden">
                  <Mangroves />
                </div>
              </LazyRevealSection>
            </motion.div>

            <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
              <LazyRevealSection fallbackHeight={520}>
                <div className="rounded-3xl border border-eco-100 shadow-sm overflow-hidden bg-white">
                  <Phases />
                </div>
              </LazyRevealSection>
            </motion.div>

            <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center text-eco-700 font-semibold hover:text-eco-800"
              >
                {t("project.backHome")}
              </button>
            </motion.div>
          </motion.section>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default MangroveProjectPage;
