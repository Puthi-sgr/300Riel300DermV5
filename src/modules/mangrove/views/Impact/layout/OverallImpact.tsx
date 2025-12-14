import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Target, Users, Activity } from "lucide-react";
import { SeedlingsCard } from "../components/SeedlingsCard";
import { WideImpactCard } from "../components/WideImpactCard";
import { CompactCard } from "../components/CompactCard";
import { useStaggeredCounters } from "../../../../../hooks/useStaggeredCounters";
import { getCldImage } from "../../../../../core/lib/getCldImage";
import { CldImage } from "../../../../../components/media/CldImage";

type ImpactItem = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  target?: number;
  icon?: React.ComponentType<any>;
  accent?: string;
  badge?: string;
  helper?: string;
};

type Props = {
  kicker: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  periodBadge?: React.ReactNode;
  items: ImpactItem[];
};

const ImpactSection: React.FC<Props> = ({ kicker, title, subtitle, periodBadge, items }) => {
  const [seedlings, reach, interactions, carbon] = items;
  const { getMotionProps, markReady, isReady } = useStaggeredCounters(["seedlings", "reach", "interactions", "carbon"]);
  const prefersReducedMotion = useReducedMotion();
  const seedlingsBackground = getCldImage("feature.mangrove", { width: 1500 });

  return (
    <div className="relative rounded-[32px] bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-eco-900/10 border border-white/60 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { delay: 1, duration: 0.6, ease: [0.25, 0.6, 0.3, 1] } },
              })}
          className="absolute inset-0"
        >
          <CldImage
            image={seedlingsBackground.image}
            alt={seedlingsBackground.alt}
            className="absolute inset-0 h-full w-full object-cover opacity-100"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-white/10" />
        <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-eco-300/25 blur-[140px]" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-eco-200/30 blur-[160px]" />
      </div>

      <div className="relative z-10 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-sm uppercase tracking-normal text-eco-500">{kicker}</p>
            <h2 className="text-3xl font-bold text-earth-900 mt-1">{title}</h2>
            <p className="text-sm text-earth-700">{subtitle}</p>
          </div>
          <span className="px-4 py-2 text-xs font-semibold rounded-full glass-card bg-white/70 border border-white/70 text-eco-700">
            {periodBadge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[minmax(220px,1fr)] gap-5">
          {seedlings && (
            <motion.div
              {...getMotionProps(0)}
              className="h-full lg:row-span-2"
              onAnimationComplete={() => markReady("seedlings")}
            >
              <SeedlingsCard data={{ ...seedlings, icon: Leaf, accent: seedlings.accent ?? "#005900" }} showCounter={isReady("seedlings")} />
            </motion.div>
          )}

          {reach && (
            <motion.div
              {...getMotionProps(0.18)}
              className="h-full lg:col-span-2"
              onAnimationComplete={() => markReady("reach")}
            >
              <WideImpactCard data={{ ...reach, icon: Users, accent: reach.accent ?? "#1d8f72" }} showCounter={isReady("reach")} />
            </motion.div>
          )}

          {interactions && (
            <motion.div
              {...getMotionProps(0.3)}
              className="h-full"
              onAnimationComplete={() => markReady("interactions")}
            >
              <CompactCard data={{ ...interactions, icon: Target, accent: interactions.accent ?? "#ba742d" }} showCounter={isReady("interactions")} />
            </motion.div>
          )}

          {carbon && (
            <motion.div
              {...getMotionProps(0.38)}
              className="h-full"
              onAnimationComplete={() => markReady("carbon")}
            >
              <CompactCard data={{ ...carbon, icon: Activity, accent: carbon.accent ?? "#2563eb" }} showCounter={isReady("carbon")} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
