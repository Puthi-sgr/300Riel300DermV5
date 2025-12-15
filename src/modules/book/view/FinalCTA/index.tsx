import React from "react";
import { Calendar } from "lucide-react";
import FinalCTALayout from "./layout/FinalCTALayout";
import FullRoundedGradientButton from "../../components/FullRoundedGradientButton";
import { useLanguage } from "../../../../context/LanguageContext";

const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  const cardNode = (
    <div className="glass-card bg-card-foam rounded-[28px] border border-white/70 shadow-impact px-8 sm:px-10 py-10 space-y-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-earth-900">{t("book.finalCta.title")}</h2>
      <p className="text-earth-700 max-w-2xl mx-auto">{t("book.finalCta.body")}</p>

      <div className="flex justify-center">
        <FullRoundedGradientButton className="px-7 rounded-full">{t("book.finalCta.primaryCta")}</FullRoundedGradientButton>
      </div>

      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 border border-eco-100 text-earth-800 text-sm shadow-sm">
          <Calendar className="w-4 h-4 text-eco-600" />
          {t("book.finalCta.deadline")}
        </div>
      </div>

      <hr className="border-t border-eco-100/70" />

      <p className="text-earth-700 italic">{t("book.finalCta.closingQuote")}</p>
    </div>
  );

  return <FinalCTALayout cardNode={cardNode} />;
};

export default FinalCTA;