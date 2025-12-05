import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects, projectBySlug, Project } from "../modules/projects";
import MangroveProjectPage from "../modules/mangrove/views/ProjectPage";

const ProjectLinks = ({ currentSlug }: { currentSlug?: string }) => {
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

const StatsBlock = ({ stats }: { stats?: Project["stats"] }) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
      {stats.seedlingsPlanted !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.seedlingsPlanted.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">Seedlings planted</p>
        </div>
      )}
      {stats.volunteers !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.volunteers.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">Student volunteers</p>
        </div>
      )}
      {stats.reach !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.reach.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">People reached online</p>
        </div>
      )}
      {stats.co2Tons !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.co2Tons.toLocaleString()} t
          </div>
          <p className="text-sm text-earth-700">CO₂ projected over 20 years</p>
        </div>
      )}
      {stats.targetBooks !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.targetBooks.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">Books targeted</p>
        </div>
      )}
      {stats.targetSchools !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.targetSchools.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">Schools to support</p>
        </div>
      )}
    </div>
  );
};

const SponsorsList = ({ sponsors }: { sponsors: string[] }) => {
  if (!sponsors.length) return null;
  return (
    <div className="pt-2">
      <h3 className="text-sm font-semibold text-earth-900 mb-2">Partners</h3>
      <div className="flex flex-wrap gap-2">
        {sponsors.map((sponsor) => (
          <span
            key={sponsor}
            className="px-3 py-1 rounded-full bg-eco-50 border border-eco-100 text-sm text-earth-800"
          >
            {sponsor}
          </span>
        ))}
      </div>
    </div>
  );
};

const GenericProjectPage = ({ project }: { project: Project }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-24 space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-eco-600">Projects</p>
        <h1 className="text-4xl font-bold text-earth-900">{project.title}</h1>
        <p className="text-lg text-earth-700">{project.summary}</p>
      </header>

      <section className="rounded-2xl bg-white border border-eco-100 shadow-sm p-6 space-y-4">
        <h2 className="text-xl font-semibold text-earth-900">About this project</h2>
        <p className="text-earth-700 leading-relaxed">{project.summary}</p>
        <div className="text-sm text-earth-600">
          Status: <span className="font-semibold text-eco-700">{project.status}</span>
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
      </section>

      <section className="rounded-2xl bg-eco-50 border border-eco-100 p-6 space-y-3">
        <h3 className="text-lg font-semibold text-earth-900">Explore other projects</h3>
        <ProjectLinks currentSlug={project.slug} />
      </section>

      <button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center text-eco-700 font-semibold hover:text-eco-800"
      >
        Back to home
      </button>
    </main>
  );
};

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!project) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-24 space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase text-eco-600">Projects</p>
          <h1 className="text-4xl font-bold text-earth-900">Project not found</h1>
          <p className="text-earth-700">
            The project you are looking for does not exist yet. Choose one of the available
            projects or return home.
          </p>
        </div>

        <section className="rounded-2xl bg-white border border-eco-100 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-earth-900 mb-3">Browse available projects</h2>
          <ProjectLinks currentSlug={slug} />
        </section>

        <Link
          to="/"
          className="inline-flex items-center text-eco-700 font-semibold hover:text-eco-800"
        >
          Back to home
        </Link>
      </main>
    );
  }

  if (project.slug === "mangrove-2025") {
    return <MangroveProjectPage />;
  }

  return <GenericProjectPage project={project} />;
};

export default ProjectDetailPage;
