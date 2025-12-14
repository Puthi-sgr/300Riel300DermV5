import React, {
  Suspense,
  lazy,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import MetaTags from "./MetaTags";
import Hero from "./Hero/index";

const ImpactStrip = lazy(() => import("./ImpactStrip"));
const Sponsors = lazy(() => import("./Sponsors"));
const FeaturedProjects = lazy(() => import("./FeaturedProjects"));
const About = lazy(() => import("./About"));
const Gallery = lazy(() => import("./Gallery"));
const Donate = lazy(() => import("./Donate"));
const Contact = lazy(() => import("./Contact"));

type LazySectionProps = {
  id?: string;
  children: React.ReactNode;
  fallbackHeight?: number;
  forceLoad?: boolean;
};

const SectionPlaceholder = ({ minHeight = 360 }: { minHeight?: number }) => (
  <div
    className="w-full rounded-3xl bg-eco-50/60 animate-pulse"
    style={{ minHeight }}
    aria-hidden="true"
  />
);

const LazySection = ({
  id,
  children,
  fallbackHeight,
  forceLoad = false,
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(forceLoad);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (forceLoad) setIsVisible(true);
  }, [forceLoad]);

  useEffect(() => {
    if (isVisible) return;
    const sentinel = sectionRef.current;
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
  }, [isVisible]);

  const placeholder = (
    <SectionPlaceholder minHeight={fallbackHeight ?? 420} />
  );

  return (
    <div
      ref={sectionRef}
      id={!isVisible ? id : undefined}
      className="w-full"
      aria-busy={!isVisible}
      data-lazy-section={id ?? undefined}
    >
      {isVisible ? (
        <Suspense fallback={placeholder}>{children}</Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
};

const HomePage = () => {
  const location = useLocation();
  const targetSectionId = useMemo(
    () => location.hash.replace("#", ""),
    [location.hash]
  );

  useEffect(() => {
    if (!targetSectionId) return;

    const headerOffset = 64;

    let hasScrolled = false;

    const scrollToSection = () => {
      const target = document.getElementById(targetSectionId);
      if (!target) return false;
      const top = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: top - headerOffset, behavior: "smooth" });
      return true;
    };

    const timeouts: number[] = [];
    [0, 180, 420, 820].forEach((delay) => {
      const id = window.setTimeout(() => {
        if (hasScrolled) return;
        hasScrolled = scrollToSection();
        if (hasScrolled) {
          timeouts.forEach((tid) => window.clearTimeout(tid));
        }
      }, delay);
      timeouts.push(id);
    });

    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, [targetSectionId]);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const registerObserver = () => {
      const target = document.querySelector<HTMLElement>(
        '[data-lazy-section="featured-projects"], #featured-projects'
      );
      if (!target) {
        // In case the DOM isn't ready yet, try once more on the next tick.
        window.setTimeout(registerObserver, 100);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              !entry.isIntersecting &&
              window.location.hash === "#featured-projects"
            ) {
              const newUrl = window.location.pathname + window.location.search;
              window.history.replaceState(null, "", newUrl);
            }
          });
        },
        { threshold: 0 }
      );

      observer.observe(target);
    };

    registerObserver();

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <main>
      <MetaTags />
      <Hero />
      <LazySection id="impact" forceLoad={targetSectionId === "impact"}>
        <ImpactStrip />
      </LazySection>
      <LazySection fallbackHeight={520}>
        <Sponsors />
      </LazySection>
      <LazySection
        id="featured-projects"
        forceLoad={targetSectionId === "featured-projects"}
      >
        <FeaturedProjects />
      </LazySection>
      <LazySection id="about" forceLoad={targetSectionId === "about"}>
        <About />
      </LazySection>
      <LazySection id="gallery" forceLoad={targetSectionId === "gallery"}>
        <Gallery />
      </LazySection>
      <LazySection id="donate" forceLoad={targetSectionId === "donate"}>
        <Donate />
      </LazySection>
      <LazySection id="contact" forceLoad={targetSectionId === "contact"}>
        <Contact />
      </LazySection>
    </main>
  );
};

export default HomePage;
