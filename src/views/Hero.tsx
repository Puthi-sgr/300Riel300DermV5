import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import heroImg from "../assets/HeroPictureCompressed.jpg";
import HeroInfoCard from "./components/HeroInfoCard";
import HeroVisualCard from "./components/HeroVisualCard";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const goToProjects = () => {
    navigate("/projects/mangrove-2025");
  };

  const linkToFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091407241732",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-eco-50 via-white to-eco-100 min-h-screen"
    >
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
        className="absolute -top-32 -right-20 w-72 h-72 bg-eco-200/30 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-16 w-80 h-80 bg-eco-300/20 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <HeroInfoCard
            t={t}
            onProjectsClick={goToProjects}
            onFacebookClick={linkToFacebook}
          />
          <HeroVisualCard
            imageSrc={heroImg}
            subtitle={t("hero.imageAlt") ?? "Students planting mangrove trees"}
            title="300Riel Au 300Kbal"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

