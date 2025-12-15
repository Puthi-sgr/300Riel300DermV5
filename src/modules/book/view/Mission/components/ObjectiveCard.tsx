import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../../../../context/LanguageContext";

type ObjectiveCardProps = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconWrapperClassName?: string;
  numberClassName?: string;
};

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({
  number,
  icon,
  title,
  description,
  className,
  iconWrapperClassName,
  numberClassName,
}) => {
  const { t } = useLanguage();

  return (
    <div
      className={[
        "relative glass-card rounded-[22px] border border-white/70 shadow-impact p-6 space-y-3",
        "bg-gradient-to-br from-white/75 via-white/70 to-white/60",
        className ?? "",
      ].join(" ")}
    >
      <div
        className={[
          "absolute top-4 right-5 text-3xl font-extrabold select-none pt-1",
          numberClassName ?? "text-eco-200",
        ].join(" ")}
      >
        {number}
      </div>
      <div
        className={[
          "h-12 w-12 rounded-full flex items-center justify-center shadow-sm border",
          iconWrapperClassName ?? "bg-eco-50 text-eco-700 border-eco-100",
        ].join(" ")}
      >
        {icon}
      </div>
      <div className="space-y-2">
        <p className="text-lg font-semibold text-earth-900">{title}</p>
        <p className="text-sm text-earth-700 leading-relaxed">{description}</p>
      </div>
      <button type="button" className="inline-flex items-center gap-2 text-sm font-semibold text-eco-700 hover:text-eco-800">
        {t("book.mission.objectiveCard.learnMore")}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ObjectiveCard;
