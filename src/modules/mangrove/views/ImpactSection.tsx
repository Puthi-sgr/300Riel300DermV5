import React from "react";
import { Leaf, Target, Users, Activity } from "lucide-react";
import CustomCounter from "../../../components/CustomCounter";
import MangroveProgressCounter from "../components/MangroveProgressCounter";
import { mangroveImpact2025 } from "../data/impactData";

const ImpactSection = () => {
  const [heroStat, ...restStats] = mangroveImpact2025.items;
  const pillStats = restStats.slice(0, 2);
  const miniCards = restStats.slice(2);
  const iconStack = [Leaf, Users, Target, Activity];

  return (
    <section className="relative rounded-[36px] bg-gradient-to-br from-[#f0f9f4] via-white to-[#f4fff7] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-eco-900/5 border border-white/60">
      <div className="absolute -top-10 -right-6 w-40 h-40 bg-eco-300/30 blur-3xl rounded-full" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-10 w-48 h-48 bg-eco-400/20 blur-[120px] rounded-full" aria-hidden="true" />

      <div className="relative z-10 space-y-12">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-eco-500">
              Impact Dashboard
            </p>
            <h2 className="text-3xl font-bold text-earth-900 mt-1">
              {mangroveImpact2025.title}
            </h2>
          </div>
          <span className="px-4 py-2 text-xs font-semibold rounded-full bg-white/80 border border-white text-eco-700">
            2025 Snapshot
          </span>
        </div>

        {heroStat && (
          <div className="relative rounded-[32px] bg-white text-earth-900 p-6 sm:p-8 shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-white/5" aria-hidden="true" />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <p className="uppercase text-xs tracking-[0.4em] text-eco-700/80">
                  Overview
                </p>
                <span className="px-3 py-1 rounded-full bg-white/50 text-xs font-semibold text-eco-900">
                  Monthly view
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[heroStat, ...pillStats].map((stat, index) => (
                  <div key={stat?.label ?? index} className="space-y-1">
                    <p className="text-sm text-eco-800/80">{stat?.label}</p>
                    <p className="text-3xl font-bold text-eco-900">
                      <CustomCounter
                        end={stat?.value ?? 0}
                        prefix={stat?.prefix}
                        suffix={stat?.suffix}
                        decimals={stat?.decimals}
                      />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {miniCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {miniCards.map((item, index) => {
              const Icon = iconStack[index % iconStack.length];
              const accent = [
                "from-[#e6f8ef] to-white",
                "from-[#f3fbe7] to-white",
                "from-[#e0f2f1] to-white",
              ][index % 3];

              return (
                <article
                  key={item.label}
                  className={`relative rounded-[24px] border border-white/60 bg-gradient-to-b ${accent} p-6 pt-10 shadow-lg shadow-eco-900/5`}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <span className="h-20 w-20 rounded-full bg-gradient-to-br from-[#f7f7f7] to-white text-eco-600 flex items-center justify-center shadow-md">
                      <Icon size={30} />
                    </span>
                  </div>

                  <div className="pt-6 text-center space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-eco-500">
                        Progress
                      </p>
                      <p className="text-sm font-semibold text-earth-900 mt-1">
                        {item.label}
                      </p>
                    </div>

                    <MangroveProgressCounter
                      end={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      decimals={item.decimals}
                      target={item.target}
                    />

                    <span className="block text-[10px] text-eco-500 uppercase tracking-[0.3em]">
                      {mangroveImpact2025.title}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImpactSection;
