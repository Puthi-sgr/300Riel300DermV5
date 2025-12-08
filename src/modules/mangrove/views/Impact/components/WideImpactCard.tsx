import { ImpactCardProps } from "../type";
import { IconPill } from "../components/IconPill";
import CustomCounter from "../../../../../components/CustomCounter";

export const WideImpactCard = ({ data, showCounter = true }: { data: ImpactCardProps; showCounter?: boolean }) => (
  <article className="relative overflow-hidden rounded-3xl p-6 sm:p-7 glass-card bg-card-glass text-earth-900 shadow-impact border border-white/70 h-full">
    <div className="absolute -right-10 -bottom-14 w-44 h-44 bg-white/40 rounded-full blur-3xl" aria-hidden="true" />
    <div className="flex items-start justify-between gap-4">
      <IconPill Icon={data.icon} accent={data.accent} />
      {data.badge && (
        <span className="px-3 py-1 text-xs font-semibold rounded-full glass-card bg-white/70 border border-white/70 text-eco-700">
          {data.badge}
        </span>
      )}
    </div>
    <div
      className={`mt-4 transition-all duration-300 ${
        showCounter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div className="text-4xl sm:text-5xl font-bold leading-tight text-earth-900">
        {showCounter ? (
          <CustomCounter
            end={data.value}
            prefix={data.prefix}
            suffix={data.suffix}
            decimals={data.decimals}
          />
        ) : null}
      </div>
      <p className="mt-2 text-base text-earth-700">{data.label}</p>
      {data.helper && <p className="mt-3 text-sm text-eco-700 font-semibold">{data.helper}</p>}
    </div>
  </article>
);
