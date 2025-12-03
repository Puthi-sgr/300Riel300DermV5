import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { sponsors2025, sponsorsMeta } from "../data/sponsorsData";
import giLogo from "../../../Assets/GI_Logo.png";
import villaLogo from "../../../Assets/partner1.webp";

const SponsorsSection = () => {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl bg-white border border-eco-100 shadow-sm p-6 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-eco-700">
            {t(sponsorsMeta.titleKey)}
          </h2>
          <h3 className="text-2xl font-bold text-earth-900 leading-snug">
            {t(sponsorsMeta.subtitleKey)}
          </h3>
        </div>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-eco-50 border border-eco-200 text-eco-700">
          {sponsorsMeta.period}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {sponsors2025.map((sponsor) => (
          <article
            key={sponsor.name}
            className="relative rounded-2xl border border-eco-100 shadow-md overflow-hidden bg-eco-50 flex flex-col h-full min-h-[260px]"
          >
            <div className="p-5 flex-1 flex flex-col gap-4 items-center text-center">
              <h3 className="text-lg font-semibold text-earth-900">
                {sponsor.name}
              </h3>
              {(sponsor.image === "gi" || sponsor.image === "villa") && (
                <div className="rounded-xl  shadow-sm flex items-center justify-center">
                  <img
                    src={sponsor.image === "gi" ? giLogo : villaLogo}
                    alt={sponsor.name}
                    className="h-20 w-32 object-contain"
                  />
                </div>
              )}
              <p className="text-sm text-earth-700 flex-1">
                {t(sponsor.supportKey)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
