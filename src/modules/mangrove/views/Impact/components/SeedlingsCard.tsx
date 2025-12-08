import { ImpactCardProps } from "../type";
import { IconPill } from "../components/IconPill";
import CustomCounter from "../../../../../components/CustomCounter";

export const SeedlingsCard = ({ data, showCounter = true }: { data: ImpactCardProps; showCounter?: boolean }) => (
  <article className="relative overflow-hidden rounded-3xl p-6 sm:p-7 glass-card bg-card-glass text-earth-900 shadow-impact border border-white/70 flex flex-col h-full">
    <div className="absolute inset-x-6 bottom-4 h-20 bg-eco-500/12 blur-2xl rounded-full" aria-hidden="true" />
    <div className="flex items-center justify-between mb-4">
      <IconPill Icon={data.icon} accent={data.accent} />
      {data.badge && (
        <span className="px-3 py-1 text-xs font-semibold rounded-full glass-card bg-white/70 border border-white/70 text-eco-700">
          {data.badge}
        </span>
      )}
    </div>
    <div
      className={`transition-all duration-300 ${
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
      <p className="mt-2 text-lg font-semibold text-eco-800">Seedlings Planted</p>
      <p className="mt-3 text-sm text-earth-700 leading-7 flex-1">{data.label}</p>
      {data.helper && <p className="mt-2 text-xs text-eco-700 font-semibold leading-6">{data.helper}</p>}
      <div className="mt-5">
        <a
          href="#gallery"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-eco-600 text-white text-sm font-semibold shadow-sm hover:bg-eco-700 transition-colors"
        >
          View Gallery
        </a>
      </div>
    </div>
    <div className="absolute left-6 bottom-3 w-14 h-10 bg-eco-500/18 rounded-xl blur" aria-hidden="true" />
  </article>
);
