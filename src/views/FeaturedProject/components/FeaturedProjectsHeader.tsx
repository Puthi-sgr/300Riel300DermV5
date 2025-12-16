import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const FeaturedProjectsHeader: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div>
      <p className="text-sm font-semibold uppercase text-eco-700 tracking-normal">
        {t("home.featuredProjects.kicker")}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-earth-900 mt-1">
        {t("home.featuredProjects.title")}
      </h2>
      <p className="text-earth-700 mt-2">
        {t("home.featuredProjects.subtitle")}
      </p>
    </div>
  );
};

export default FeaturedProjectsHeader;
