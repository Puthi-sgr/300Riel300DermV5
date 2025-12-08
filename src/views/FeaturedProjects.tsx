import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects, Project } from "../modules/projects";
import { motion } from "framer-motion";

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

const buildTagline = (project: Project) => {
  const parts: string[] = [];
  if (project.stats?.seedlingsPlanted !== undefined) {
    parts.push(`${project.stats.seedlingsPlanted} seedlings`);
  }
  if (project.stats?.volunteers !== undefined) {
    parts.push(`${project.stats.volunteers} volunteers`);
  }
  if (project.stats?.reach !== undefined) {
    parts.push(`${project.stats.reach.toLocaleString()} people reached`);
  }
  if (project.stats?.targetBooks !== undefined) {
    parts.push(`${project.stats.targetBooks} books targeted`);
  }
  if (project.stats?.targetSchools !== undefined) {
    parts.push(`${project.stats.targetSchools} schools`);
  }
  return parts.join(", ");
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.35 }
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
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {isVisible ? (
        <Link
          to={`/projects/${project.slug}`}
          className="group rounded-3xl border border-white/70 glass-card bg-card-foam shadow-impact overflow-hidden flex flex-col transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eco-400"
        >
          <article className="flex h-full flex-col">
            <div className="relative h-48 bg-earth-50 overflow-hidden">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-eco-100 to-eco-200" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" aria-hidden />
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${statusStyles[project.status]}`}
              >
                {statusLabels[project.status]}
              </span>
            </div>

            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-earth-900">{project.title}</h3>
                <p className="text-sm text-earth-700">{buildTagline(project)}</p>
              </div>

              <p className="text-earth-800 text-sm leading-relaxed flex-1">{project.summary}</p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 text-xs text-earth-600">
                  <span className="px-2 py-1 rounded-full bg-white/85 border border-white/70 shadow-xs">
                    {project.year}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-white/85 border border-white/70 shadow-xs capitalize">
                    {project.type}
                  </span>
                </div>
                <span className="inline-flex items-center text-eco-700 font-semibold transition group-hover:text-eco-800">
                  View Project
                  <span aria-hidden className="ml-1 transition group-hover:translate-x-1">→</span>
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

const FeaturedProjects = () => {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] py-16 sm:py-20"
      id="featured-projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-eco-300/25 blur-[140px]" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-eco-200/30 blur-[160px]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-sm font-semibold uppercase text-eco-700 tracking-[0.28em]">
              Featured Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-earth-900 mt-1">
              Explore our impact projects
            </h2>
            <p className="text-earth-700 mt-2">
              Learn more about what we&apos;ve completed and what&apos;s ahead.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;

