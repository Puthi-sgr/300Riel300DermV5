import React from "react";
import { useInView } from "react-intersection-observer";
import { getCldImage } from "../../core/lib/getCldImage";
import SponsorsLayout from "./layout/SponsorsLayout";
import SponsorsHeader from "./components/SponsorsHeader";
import SponsorsGrid, { PartnerData } from "./components/SponsorsGrid";
import SponsorsCTA from "./components/SponsorsCTA";

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners: PartnerData[] = [
    (() => {
      const { image, alt } = getCldImage("sponsors.ktvilla", { width: 640 });
      return {
        name: "Giant Ibis Transport",
        image,
        alt,
        website: "https://www.giantibis.com/",
      };
    })(),
    (() => {
      const { image, alt } = getCldImage("sponsors.giantibis", { width: 640 });
      return {
        name: "De KT Villa",
        image,
        alt,
        website:
          "https://kampot-cambodia.com/about-kampot/kampot-hotels/de-kt-villa/",
      };
    })(),
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SponsorsLayout
      containerRef={ref}
      isInView={inView}
      headerNode={<SponsorsHeader isInView={inView} />}
      partnersNode={<SponsorsGrid partners={partners} />}
      ctaNode={<SponsorsCTA onContactClick={scrollToContact} />}
    />
  );
};

export default Sponsors;
