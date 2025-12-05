import React, { useEffect, useRef, useState } from "react";
import { motion, MotionProps, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import HeroInfoCard from "./components/HeroInfoCard";
import HeroVisualCard from "./components/HeroVisualCard";
import BackgroundVideo from "./components/BackgroundVideo";
import HeroLoadingScreen from "./components/HeroLoadingScreen";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const fallbackTimeoutRef = useRef<number | null>(null);
  const heroVideoPublicId =
    import.meta.env.VITE_CLOUDINARY_HERO_VIDEO_PUBLIC_ID || "Shockwave_vshxyk";

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
    navigate("/projects/mangrove-2025");
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
      <motion.div
        className="absolute inset-0 -z-7"
        {...backgroundMotion}
        aria-hidden="true"
      >
        <BackgroundVideo
          className="h-full w-full object-cover opacity-55 blur-[900px]"
          style={{
            filter: "saturate(0.7) brightness(1.2) hue-rotate(85deg) contrast(0.95)",
          }}
          onLoadedData={handleVideoLoaded}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-200/70 via-lime-50/60 to-emerald-300/80 mix-blend-screen pointer-events-none -z-25"
        {...overlayMotion(0.2)}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-0 bg-emerald-50/80 mix-blend-screen backdrop-blur-[1100px] pointer-events-none -z-20"
        {...overlayMotion(0.35)}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-eco-50 via-white to-eco-100 opacity-90 pointer-events-none -z-10"
        {...overlayMotion(0.5)}
        aria-hidden="true"
      />
      <div style={{ display: "none" }} aria-hidden="true">
        <h1>Cambodia mangrove tree planting eco restoration project</h1>
        <h1>mangrove planting Cambodia</h1>
        <h1>tree planting volunteer</h1>
        <h1>eco project Cambodia</h1>
        <h1>climate action Cambodia</h1>
        <h1>coastal restoration project</h1>
        <h2>environmental conservation coastal reforestation climate action</h2>
        <h2>community tree planting</h2>
        <h2>Cambodia reforestation effort</h2>
        <h2>mangrove conservation team</h2>
        <h2>volunteer eco mission</h2>
        <h2>forest restoration Cambodia</h2>
        <h3>eco volunteer Cambodia</h3>
        <h3>youth tree planting</h3>
        <h3>green Cambodia project</h3>
        <h3>environmental awareness</h3>
        <h3>nature-based solutions</h3>

        <h3>sustainable development community forestry biodiversity protection</h3>
        <h4>carbon sequestration habitat revival green initiative Southeast Asia</h4>
        <h4>climate resilience Cambodia</h4>
        <h4>sustainable forestry</h4>
        <h4>local conservation team</h4>
        <h4>coastal protection</h4>
        <h4>carbon sink mangroves</h4>

        <h5>renewable resources blue carbon mangrove nursery ocean safety</h5>
        <h5>mangrove nursery Cambodia</h5>
        <h5>NGO climate project</h5>
        <h5>regenerative forestry</h5>
        <h5>blue carbon project</h5>
        <h5>mangrove habitat support</h5>

        <h6>eco education nature preservation ecosystem regeneration Cambodia</h6>
        <h6>eco education program</h6>
        <h6>local volunteer action</h6>
        <h6>protect coastal forests</h6>
        <h6>learn tree planting</h6>
        <h6>Cambodia ecosystem care</h6>
      </div>

      <div
        className="absolute -top-32 -right-20 w-72 h-72 bg-eco-200/30 blur-[1000px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-16 w-80 h-80 bg-eco-300/20 blur-[1000px] rounded-full"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-28 lg:py-40"
        {...contentMotion}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <HeroInfoCard
            t={t}
            onProjectsClick={goToProjects}
            onFacebookClick={linkToFacebook}
          />
          <HeroVisualCard
            subtitle={t("hero.imageAlt") ?? "Students planting mangrove trees"}
            title="300Riel Au 300Kbal"
            videoPublicId={heroVideoPublicId}
          />
        </div>
      </motion.div>
      <HeroLoadingScreen isVisible={!heroReady} />
    </section>
  );
};
export default Hero;
