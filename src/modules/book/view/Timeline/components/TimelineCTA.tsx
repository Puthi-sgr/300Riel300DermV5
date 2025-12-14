import React from "react";
import { Leaf } from "lucide-react";
import FullRoundedGradientButton from "../../../components/FullRoundedGradientButton";
import { useLanguage } from "../../../../../context/LanguageContext";

const TimelineCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center text-eco-600">
        <Leaf className="w-6 h-6" />
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-earth-900">{t("book.timeline.cta.title")}</h3>
      <FullRoundedGradientButton className="px-6 rounded-xl">{t("book.timeline.cta.button")}</FullRoundedGradientButton>
    </div>
  );
};

export default TimelineCTA;
