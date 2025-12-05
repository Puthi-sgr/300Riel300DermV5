import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { mangroveProject } from "../data";

const ImpactSection = lazy(() => import("./ImpactSection"));
const HighlightsSection = lazy(() => import("./HighlightsSection"));
const CampaignSection = lazy(() => import("./CampaignSection"));
const SponsorsSection = lazy(() => import("./SponsorsSection"));
const GallerySection = lazy(() => import("./GallerySection"));
const Mangroves = lazy(() => import("./Mangroves"));
const Phases = lazy(() => import("./Phases"));

const statusBadge =
  "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border bg-eco-100 text-eco-700 border-eco-200";

type LazySectionProps = {
  children: React.ReactNode;
  fallbackHeight?: number;
  initiallyVisible?: boolean;
};

const SectionPlaceholder = ({ minHeight = 360 }: { minHeight?: number }) => (
  <div
    className="w-full rounded-3xl bg-eco-50/60 animate-pulse border border-eco-100"
    style={{ minHeight }}
    aria-hidden="true"
  />
);

const LazySection = ({
  children,
  fallbackHeight,
  initiallyVisible = false,
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (initiallyVisible || isVisible) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [initiallyVisible, isVisible]);

  const placeholder = (
    <SectionPlaceholder minHeight={fallbackHeight ?? 420} />
  );

  return (
    <div
      ref={sentinelRef}
      className="w-full"
      aria-busy={!isVisible}
      data-lazy-section
    >
      {isVisible ? (
        <Suspense fallback={placeholder}>{children}</Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
};

const MangroveProjectPage = () => {
  const { t } = useLanguage();
  const project = mangroveProject;
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <main className="min-h-screen bg-eco-50">
      <header className="relative h-64 sm:h-80 bg-earth-900 text-white overflow-hidden">
        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
        <div className="relative w-full px-4 sm:px-6 lg:px-10 h-full flex flex-col justify-end pb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className={statusBadge}>{t("project.status.completed")}</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20">
              {project.year}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 capitalize">
              {project.type}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-100 mt-2 max-w-5xl">
            {project.summary}
          </p>
        </div>
      </header>

      <section className="w-full px-4 sm:px-6 lg:px-10 py-12 space-y-10">
        <LazySection initiallyVisible fallbackHeight={560}>
          <ImpactSection />
        </LazySection>

        <LazySection initiallyVisible fallbackHeight={520}>
          <HighlightsSection />
        </LazySection>

        <LazySection fallbackHeight={520}>
          <CampaignSection />
        </LazySection>

        <LazySection fallbackHeight={520}>
          <SponsorsSection />
        </LazySection>

        <LazySection fallbackHeight={520}>
          <GallerySection />
        </LazySection>

        <LazySection fallbackHeight={520}>
          <div className="rounded-3xl border border-eco-100 shadow-sm overflow-hidden">
            <Mangroves />
          </div>
        </LazySection>

        <LazySection fallbackHeight={520}>
          <div className="rounded-3xl border border-eco-100 shadow-sm overflow-hidden bg-white">
            <Phases />
          </div>
        </LazySection>

        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center text-eco-700 font-semibold hover:text-eco-800"
        >
          {t("project.backHome")}
        </button>
      </section>
    </main>
  );
};

export default MangroveProjectPage;
