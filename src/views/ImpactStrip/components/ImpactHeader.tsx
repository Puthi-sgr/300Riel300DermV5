import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const ImpactHeader = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2
        id="impact-title"
        className="text-2xl sm:text-3xl font-bold text-earth-900"
      >
        {t("impact.title")}
      </h2>
      <p className="text-sm sm:text-base text-eco-700">
        {t("impact.subtitle") ??
          "A summary of our collective efforts and achievements."}
      </p>
    </>
  );
};

export default ImpactHeader;
