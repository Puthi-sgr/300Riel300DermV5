import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const ContactHeader: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <p className="text-sm font-semibold uppercase text-eco-700 tracking-normal">
        {t("contact.title")}
      </p>
      <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl">
        {t("contact.title")}
      </h2>
      <p className="text-lg text-earth-700">{t("contact.subtitle")}</p>
    </>
  );
};

export default ContactHeader;
