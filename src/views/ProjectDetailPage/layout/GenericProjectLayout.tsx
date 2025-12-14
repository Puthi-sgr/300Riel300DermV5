import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, MotionProps } from "framer-motion";
import { Project } from "../../../modules/projects";
import StatsBlock from "../components/StatBlock";
import SponsorsList from "../components/SponsorList";
import ProjectLinks from "../components/ProjectLink";
import { useLanguage } from "../../../context/LanguageContext";

const revealMotion: MotionProps = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const GenericProjectPage = ({ project }: { project: Project }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const projectTitle = project.titleKey ? t(project.titleKey) : project.title;
  const projectSummary = project.summaryKey
    ? t(project.summaryKey)
    : project.summary;
  const projectTypeLabel = project.typeLabelKey
    ? t(project.typeLabelKey)
    : project.type;
  const projectStatusLabel = project.statusLabelKey
    ? t(project.statusLabelKey)
    : project.status;

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <motion.main
      className="max-w-5xl mx-auto px-4 py-24 space-y-8"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.header className="space-y-3" {...revealMotion}>
        <p className="text-sm font-semibold uppercase text-eco-600">Projects</p>
        <h1 className="text-4xl font-bold text-earth-900">{projectTitle}</h1>
        <p className="text-lg text-earth-700">{projectSummary}</p>
      </motion.header>

      <motion.section
        className="rounded-2xl bg-white border border-eco-100 shadow-sm p-6 space-y-4"
        {...revealMotion}
      >
        <h2 className="text-xl font-semibold text-earth-900">
          About this project
        </h2>
        <p className="text-earth-700 leading-relaxed">{projectSummary}</p>
        <div className="text-sm text-earth-600">
          Status:{" "}
          <span className="font-semibold text-eco-700">
            {projectStatusLabel}
          </span>
        </div>
        <div className="text-sm text-earth-600">
          Type:{" "}
          <span className="font-semibold text-earth-800">
            {projectTypeLabel}
          </span>
        </div>
        <StatsBlock stats={project.stats} />
        <SponsorsList sponsors={project.sponsors} />

        {project.reportUrl && (
          <a
            href={project.reportUrl}
            className="inline-flex items-center text-eco-700 font-semibold hover:text-eco-800"
          >
            View report
          </a>
        )}
      </motion.section>

      <motion.section
        className="rounded-2xl bg-eco-50 border border-eco-100 p-6 space-y-3"
        {...revealMotion}
      >
        <h3 className="text-lg font-semibold text-earth-900">
          Explore other projects
        </h3>
        <ProjectLinks currentSlug={project.slug} />
      </motion.section>

      <motion.button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center text-eco-700 font-semibold hover:text-eco-800"
        whileHover={{ x: 4 }}
      >
        Back to home
      </motion.button>
    </motion.main>
  );
};

export default GenericProjectPage;
