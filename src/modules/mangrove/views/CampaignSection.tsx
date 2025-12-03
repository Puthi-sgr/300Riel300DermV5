import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { campaignMeta, campaignStats2025 } from "../data/campaignData";
import MangroveBarChart from "../components/MangroveBarChart";
import MangroveVerticalBarChart from "../components/MangroveVerticalBarChart";

const CampaignSection = () => {
  const { t } = useLanguage();
  const horizontalStats = campaignStats2025.slice(0, -2);
  const verticalStats = campaignStats2025.slice(-2);

  return (
    <section className="rounded-3xl bg-gradient-to-br from-[#effbf2] via-white to-[#e4ffe9] border border-white/70 shadow-[0_25px_70px_rgba(14,91,60,0.08)] p-6 sm:p-8 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-eco-500">
            {t(campaignMeta.titleKey)}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-earth-900 leading-snug">
            {t(campaignMeta.subtitleKey)}
          </h3>
        </div>
        <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-eco-50 border border-eco-200 text-eco-700">
          {campaignMeta.period}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-5 items-stretch">
        <div className="space-y-5">
          {horizontalStats.map((stat) => (
            <article
              key={stat.labelKey}
              className="rounded-2xl border border-white/60 bg-gradient-to-br from-white/95 to-eco-50/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_30px_rgba(18,79,54,0.07)] backdrop-blur-sm"
            >
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-earth-900">
                    {t(stat.labelKey)}
                  </h4>
                </div>
                <span className="text-sm font-semibold text-eco-700">
                  {stat.suffix
                    ? `${stat.value}${stat.suffix}`
                    : stat.value.toLocaleString()}
                </span>
              </div>
              <MangroveBarChart
                labels={[t(stat.labelKey)]}
                datasets={[
                  {
                    label: t("campaign.datasetLabel") ?? "Campaign Metric",
                    data: [stat.value],
                    backgroundColor: "rgba(16, 163, 82, 0.75)",
                    borderColor: "rgba(16, 163, 82, 1)",
                    borderWidth: 1,
                    borderRadius: 12,
                  },
                ]}
                options={{
                  scales: {
                    x: {
                      beginAtZero: true,
                    },
                    y: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
                height={140}
              />
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-5 h-full">
          {verticalStats.map((stat) => (
            <article
              key={stat.labelKey}
              className="rounded-2xl border border-white/60 bg-gradient-to-br from-white/95 to-eco-50/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_30px_rgba(18,79,54,0.07)] backdrop-blur-sm flex flex-col flex-1"
            >
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-earth-900">
                    {t(stat.labelKey)}
                  </h4>
                </div>
                <span className="text-sm font-semibold text-eco-700">
                  {stat.suffix
                    ? `${stat.value}${stat.suffix}`
                    : stat.value.toLocaleString()}
                </span>
              </div>
              <div className="flex-1 pt-2">
                <MangroveVerticalBarChart
                  labels={[t(stat.labelKey)]}
                  datasets={[
                    {
                      label: t("campaign.datasetLabel") ?? "Campaign Metric",
                      data: [stat.value],
                      backgroundColor: "rgba(16, 163, 82, 0.75)",
                      borderColor: "rgba(16, 163, 82, 1)",
                      borderWidth: 1,
                      borderRadius: 12,
                    },
                  ]}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          color: "#1f3c2f",
                        },
                      },
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: "rgba(13,59,36,0.08)",
                        },
                        ticks: {
                          color: "#1f3c2f",
                        },
                      },
                    },
                  }}
                  height="100%"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
