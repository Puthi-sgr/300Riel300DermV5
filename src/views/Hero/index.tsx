import React, { useEffect, useRef, useState } from "react";
import { motion, MotionProps, useReducedMotion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import HeroBackgroundLayers from "./components/HeroBackgroundLayers";
import HeroBlurOrbs from "./components/HeroBlurOrbs";
import HeroInfoCard from "./components/HeroInfoCard"
import HeroLoadingScreen from "./components/HeroLoadingScreen";
import HeroVisualCard from "./components/HeroVisualCard";
import HiddenSeoHeadings from "./components/HiddenSeoHeadings";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const fallbackTimeoutRef = useRef<number | null>(null);
  const heroVideoPublicId = "HeroVideo_vfekg2";

  useEffect(() => {
    fallbackTimeoutRef.current = window.setTimeout(
      () => setVideoLoaded(true),
      4500
    );
    return () => {
      if (fallbackTimeoutRef.current) {
        clearTimeout(fallbackTimeoutRef.current);
        fallbackTimeoutRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!videoLoaded) return;
    const timer = setTimeout(() => setHeroReady(true), 600);
    return () => clearTimeout(timer);
  }, [videoLoaded]);

  const backgroundMotion: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 1.05 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.2, ease: "easeOut" },
      };

  const overlayMotion = (delay: number): MotionProps =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.9, delay, ease: "easeOut" },
        };

  const contentMotion: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, delay: 0.8, ease: "easeOut" },
      };

  const goToProjects = () => {
    const scrollToFeatured = () => {
      const target = document.getElementById("featured-projects");
      if (!target) return false;
      const offset = -100; // Adjust this px value as needed
      const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementTop - offset, behavior: "smooth" });
      return true;
    };

    // If we're already on home, attempt immediate scroll even if hash is present.
    if (location.pathname === "/") {
      if (scrollToFeatured()) return;
    }

    // Fallback: navigate with hash; HomePage effect will scroll once mounted.
    navigate("/#featured-projects");
  };

  const linkToFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091407241732",
      "_blank"
    );
  };

  const handleVideoLoaded = () => {
    if (!videoLoaded) {
      setVideoLoaded(true);
    }
    if (fallbackTimeoutRef.current) {
      clearTimeout(fallbackTimeoutRef.current);
      fallbackTimeoutRef.current = null;
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen bg-transparent"
    >
      <HeroBackgroundLayers
        backgroundMotion={backgroundMotion}
        overlayMotion={overlayMotion}
        onVideoLoaded={handleVideoLoaded}
      />
      <HiddenSeoHeadings />
      <HeroBlurOrbs />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-28 lg:py-40"
        {...contentMotion}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <HeroInfoCard
              t={t}
              onProjectsClick={goToProjects}
              onFacebookClick={linkToFacebook}
            />
          </div>
          <div className="order-1 lg:order-2">
            <HeroVisualCard
              subtitle={t("hero.imageAlt") ?? "Students planting mangrove trees"}
              title="300Riel Au 300Kbal"
              videoPublicId={heroVideoPublicId}
            />
          </div>
        </div>
      </motion.div>
      <HeroLoadingScreen isVisible={!heroReady} />
    </section>
  );
};
export default Hero;
