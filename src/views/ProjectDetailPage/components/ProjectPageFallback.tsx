import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const ProjectPageFallback: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-32 text-center text-eco-700">
      {t("common.loading.projectExperience")}
    </div>
  );
};

export default ProjectPageFallback;
