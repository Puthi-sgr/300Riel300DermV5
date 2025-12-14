import React from "react";
import GlassCard from "../../../components/GlassCard";
import FullRoundedGradientButton from "../../../components/FullRoundedGradientButton";

type TierCardProps = {
  name: string;
  tierLabel: string;
  price: string;
  period: string;
  benefits: string[];
  icon: React.ReactNode;
  accentClass?: string;
  popular?: boolean;
  ctaLabel: string;
  pillClass?: string;
  badgeClass?: string;
  glowClass?: string;
  glowBackdropClass?: string;
  ctaClass?: string;
  bulletClass?: string;
};

const TierCard: React.FC<TierCardProps> = ({
  name,
  tierLabel,
  price,
  period,
  benefits,
  icon,
  accentClass = "bg-card-foam",
  popular = false,
  ctaLabel,
  pillClass = "bg-eco-50 text-eco-700",
  badgeClass = "bg-white/70 text-eco-600",
  glowClass = "shadow-impact",
  glowBackdropClass = "",
  ctaClass = "bg-eco-600 hover:bg-eco-700 text-white",
  bulletClass = "text-eco-600",
}) => (
  <GlassCard
    className={`relative rounded-[24px] border border-white/70 p-6 space-y-4 overflow-hidden ${accentClass} ${glowClass}`}
  >
    {glowBackdropClass ? (
      <div
        className={`absolute inset-0 pointer-events-none ${glowBackdropClass}`}
        aria-hidden
      />
    ) : null}
    <div className="relative space-y-4">
      <div className="flex items-center justify-between">
        <div
          className={`h-10 w-10 rounded-full flex items-center justify-center shadow-sm border border-white/70 ${pillClass}`}
        >
          {icon}
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full border border-eco-100 ${badgeClass}`}
        >
          {tierLabel}
        </span>
      </div>

      <div className="space-y-1">
        <p className="text-xl font-bold text-earth-900">{name}</p>
        <p className="text-3xl font-extrabold text-earth-900">
          {price}{" "}
          <span className="text-base font-semibold text-earth-700">
            / {period}
          </span>
        </p>
      </div>

      <ul className="space-y-2 text-earth-700 text-sm">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className={`${bulletClass} mt-0.5`}>•</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <div>
        <FullRoundedGradientButton
          className={`w-full justify-center rounded-xl ${ctaClass}`}
        >
          {ctaLabel}
        </FullRoundedGradientButton>
      </div>
    </div>
  </GlassCard>
);

export default TierCard;
