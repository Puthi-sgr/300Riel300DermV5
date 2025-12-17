import React from "react";
import { useLanguage } from "../../../../../context/LanguageContext";

const DonateHeader: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <p className="text-sm font-semibold uppercase text-eco-700 tracking-normal">
        {t("donate.title")}
      </p>
      <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl">
        {t("donate.title")}
      </h2>
      <p className="text-lg text-earth-700">{t("donate.subtitle")}</p>
    </>
  );
};

export default DonateHeader;
