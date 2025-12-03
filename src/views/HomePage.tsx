import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MetaTags from "./MetaTags";
import Hero from "./Hero";
import ImpactStrip from "./ImpactStrip";
import Sponsors from "./Sponsors";
import FeaturedProjects from "./FeaturedProjects";
import About from "./About";
import Gallery from "./Gallery";
import Donate from "./Donate";
import Contact from "./Contact";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");
    const element = document.getElementById(sectionId);
    const headerOffset = 64;

    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: top - headerOffset, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      <MetaTags />
      <Hero />
      <ImpactStrip />
      <Sponsors />
      <FeaturedProjects />
      <About />
      <Gallery />
      <Donate />
      <Contact />
    </main>
  );
};

export default HomePage;
