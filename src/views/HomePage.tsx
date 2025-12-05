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
import Hero from "./Hero";

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

  useEffect(() => {
    if (isVisible && sectionRef.current?.id === id) {
      sectionRef.current?.removeAttribute("id");
    }
  }, [isVisible, id]);

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

    const scrollToSection = () => {
      const target = document.getElementById(targetSectionId);
      if (!target) return false;
      const top = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: top - headerOffset, behavior: "smooth" });
      return true;
    };

    if (scrollToSection()) return;

    let attempts = 0;
    const intervalId = window.setInterval(() => {
      attempts += 1;
      if (scrollToSection() || attempts > 30) {
        window.clearInterval(intervalId);
      }
    }, 120);

    return () => window.clearInterval(intervalId);
  }, [targetSectionId]);

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
