import { ImpactCardProps } from "../type";
import { IconPill } from "../components/IconPill";
import CustomCounter from "../../../../../components/CustomCounter";
import { useLanguage } from "../../../../../context/LanguageContext";

export const CompactCard = ({ data, showCounter = true }: { data: ImpactCardProps; showCounter?: boolean }) => {
  const { t } = useLanguage();

  return (
    <article className="relative overflow-hidden rounded-3xl p-6 sm:p-7 glass-card bg-card-glass text-earth-900 shadow-impact border border-white/70 h-full">
      <div className="absolute -right-10 -bottom-12 w-36 h-36 bg-white/40 rounded-full blur-3xl" aria-hidden="true" />
      <div className="flex items-start justify-between gap-4">
        <IconPill Icon={data.icon} accent={data.accent} />
        {data.badge && (
          <span className="px-3 py-1 text-xs font-semibold rounded-full glass-card bg-white/70 border border-white/70 text-eco-700">
            {data.badge}
          </span>
        )}
      </div>
      <div
        className={`mt-3 transition-all duration-300 ${
          showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="text-3xl sm:text-4xl font-bold leading-tight text-earth-900">
          {showCounter ? (
            <CustomCounter
              end={data.value}
              prefix={data.prefix}
              suffix={data.suffix}
              decimals={data.decimals}
            />
          ) : null}
        </div>
        <p className="mt-2 text-sm sm:text-base text-earth-700">{data.label}</p>
        <div className="mt-4">
          <a
            href="#sponsors"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-eco-600 text-white text-sm font-semibold shadow-sm hover:bg-eco-700 transition-colors"
          >
            {t("mangrove.impact.cards.compact.cta")}
          </a>
        </div>
      </div>
    </article>
  );
};
