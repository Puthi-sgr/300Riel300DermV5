import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "../../../../projects";
import { CldImage } from "../../../../../components/media/CldImage";
import { useLanguage } from "../../../../../context/LanguageContext";

const statusStyles: Record<Project["status"], string> = {
  completed: "bg-eco-100 text-eco-700 border-eco-200",
  "in-progress": "bg-amber-100 text-amber-800 border-amber-200",
  upcoming: "bg-slate-100 text-slate-700 border-slate-200",
};

const statusLabels: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  upcoming: "Planned",
};

type Props = {
  project: Project;
  index: number;
};

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const projectTitle = project.titleKey ? t(project.titleKey) : project.title;
  const projectSummary = project.summaryKey
    ? t(project.summaryKey)
    : project.summary;
  const projectStatusLabel = project.statusLabelKey
    ? t(project.statusLabelKey)
    : statusLabels[project.status];
  const projectTypeLabel = project.typeLabelKey
    ? t(project.typeLabelKey)
    : project.type;
  const projectTagline = project.taglineKey
    ? t(project.taglineKey)
    : (project.tagline ?? "");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {isVisible ? (
        <Link
          to={`/projects/${project.slug}`}
          className="group rounded-3xl border border-white/70 glass-card bg-card-foam shadow-impact overflow-hidden flex flex-col transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eco-400"
        >
          <article className="flex h-full flex-col">
            <div className="relative h-64 sm:h-72 bg-earth-50 overflow-hidden">
              {project.thumbnail ? (
                <CldImage
                  image={project.thumbnail}
                  alt={projectTitle}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-eco-100 to-eco-200" />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"
                aria-hidden
              />
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${statusStyles[project.status]}`}
              >
                {projectStatusLabel}
              </span>
            </div>

            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-earth-900">
                  {projectTitle}
                </h3>
                {projectTagline ? (
                  <p className="text-sm text-earth-700">{projectTagline}</p>
                ) : null}
              </div>

              <p className="text-earth-800 text-sm leading-relaxed flex-1">
                {projectSummary}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 text-xs text-earth-600">
                  <span className="px-2 py-1 rounded-full bg-white/85 border border-white/70 shadow-xs">
                    {project.year}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-white/85 border border-white/70 shadow-xs capitalize">
                    {projectTypeLabel}
                  </span>
                </div>
                <span className="inline-flex items-center text-eco-700 font-semibold transition group-hover:text-eco-800">
                  {t("home.featuredProjects.viewProject")}
                  <span
                    aria-hidden
                    className="ml-1 transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </div>
          </article>
        </Link>
      ) : (
        <div
          className="min-h-[360px] rounded-2xl border border-eco-100 bg-eco-100/60 animate-pulse"
          aria-hidden
        />
      )}
    </motion.div>
  );
};

export default ProjectCard;
