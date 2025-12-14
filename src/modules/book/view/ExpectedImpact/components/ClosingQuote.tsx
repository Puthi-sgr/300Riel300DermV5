import React from "react";
import { useLanguage } from "../../../../../context/LanguageContext";

const ClosingQuote: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center space-y-2">
      <p className="text-2xl sm:text-3xl font-bold text-earth-900">{t("book.expectedImpact.closingQuote")}</p>
    </div>
  );
};

export default ClosingQuote;
