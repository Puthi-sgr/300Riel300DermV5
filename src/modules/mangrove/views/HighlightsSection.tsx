import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const HighlightsSection = () => {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl bg-white border border-eco-100 shadow-sm p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-eco-700">
            {t("project.highlights.title")}
          </h2>
          <h3 className="text-2xl font-bold text-earth-900 leading-snug">
            {t("project.highlights.tagline")}
          </h3>
        </div>
      </div>
      <p className="text-earth-700 leading-relaxed">
        {t("project.highlights.body1")}
      </p>
      <p className="text-earth-700 leading-relaxed">
        {t("project.highlights.body2")}
      </p>
      <div className="mt-4 rounded-xl border-2 border-dashed border-eco-200 bg-eco-50 p-6 text-center text-earth-700">
        {t("project.highlights.galleryPlaceholder")}
      </div>
    </div>
  );
};

export default HighlightsSection;
