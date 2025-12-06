import React from "react";
import { Link } from "react-router-dom";
import ProjectLinks from "./ProjectLink";

type ProjectNotFoundProps = {
  currentSlug?: string;
};

const ProjectNotFound: React.FC<ProjectNotFoundProps> = ({ currentSlug }) => (
  <main className="max-w-5xl mx-auto px-4 py-24 space-y-6">
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase text-eco-600">Projects</p>
      <h1 className="text-4xl font-bold text-earth-900">Project not found</h1>
      <p className="text-earth-700">
        The project you are looking for does not exist yet. Choose one of the available projects
        or return home.
      </p>
    </div>

    <section className="rounded-2xl bg-white border border-eco-100 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-earth-900 mb-3">Browse available projects</h2>
      <ProjectLinks currentSlug={currentSlug} />
    </section>

    <Link to="/" className="inline-flex items-center text-eco-700 font-semibold hover:text-eco-800">
      Back to home
    </Link>
  </main>
);

export default ProjectNotFound;
