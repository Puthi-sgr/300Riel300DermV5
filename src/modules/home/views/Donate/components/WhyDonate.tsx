import React from "react";
import { useLanguage } from "../../../../../context/LanguageContext";

const WhyDonate: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-earth-900">{t("donate.why")}</h3>
      <ul className="space-y-4 text-earth-700 bg-card-foam rounded-2xl p-6 border border-white/70 shadow-sm">
        <li className="flex items-start gap-3">
          <span className="text-xl">🌱</span>
          <div>
            <h4 className="font-semibold text-earth-900">{t("donate.impact.info1.header")}</h4>
            <p>{t("donate.impact.info1")}</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">🤝</span>
          <div>
            <h4 className="font-semibold text-earth-900">{t("donate.impact.info2.header")}</h4>
            <p>{t("donate.impact.info2")}</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">📚</span>
          <div>
            <h4 className="font-semibold text-earth-900">{t("donate.impact.info3.header")}</h4>
            <p>{t("donate.impact.info3")}</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">🌊</span>
          <div>
            <h4 className="font-semibold text-earth-900">{t("donate.impact.info4.header")}</h4>
            <p>{t("donate.impact.info4")}</p>
          </div>
        </li>
      </ul>
      <div className="rounded-2xl border border-white/70 bg-card-foam p-6 shadow-sm">
        <h4 className="font-semibold text-earth-900 mb-3">{t("donate.impact")}</h4>
        <p className="text-earth-700">{t("donate.impact.appreciation")}</p>
      </div>
    </div>
  );
};

export default WhyDonate;
