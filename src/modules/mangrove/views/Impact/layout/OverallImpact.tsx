import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Target, Users, Activity } from "lucide-react";
import { SeedlingsCard } from "../components/SeedlingsCard";
import { WideImpactCard } from "../components/WideImpactCard";
import { CompactCard } from "../components/CompactCard";
import { mangroveImpact2025 } from "../../../data/impactData";
import { useStaggeredCounters } from "../../../../../hooks/useStaggeredCounters";
import { getCldImage } from "../../../../../core/lib/getCldImage";
import { CldImage } from "../../../../../components/media/CldImage";

const ImpactSection = () => {
  const [seedlings, reach, interactions, carbon] = mangroveImpact2025.items;
  const { getMotionProps, markReady, isReady } = useStaggeredCounters(["seedlings", "reach", "interactions", "carbon"]);
  const prefersReducedMotion = useReducedMotion();
  const seedlingsBackground = getCldImage("mangrove.seedlings", { width: 1600 });

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
            <p className="text-sm uppercase tracking-[0.3em] text-eco-500">Impact Dashboard</p>
            <h2 className="text-3xl font-bold text-earth-900 mt-1">{mangroveImpact2025.title}</h2>
            <p className="text-sm text-earth-700">Highlighting key environmental and community achievements.</p>
          </div>
          <span className="px-4 py-2 text-xs font-semibold rounded-full glass-card bg-white/70 border border-white/70 text-eco-700">
            2025 Snapshot
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[minmax(220px,1fr)] gap-5">
          {seedlings && (
            <motion.div
              {...getMotionProps(0)}
              className="h-full lg:row-span-2"
              onAnimationComplete={() => markReady("seedlings")}
            >
              <SeedlingsCard
                data={{
                  ...seedlings,
                  icon: Leaf,
                  accent: "#005900",
                  badge: "+12%",
                  helper: "Our reforestation efforts expand to 3 new regions.",
                }}
                showCounter={isReady("seedlings")}
              />
            </motion.div>
          )}

          {reach && (
            <motion.div
              {...getMotionProps(0.18)}
              className="h-full lg:col-span-2"
              onAnimationComplete={() => markReady("reach")}
            >
              <WideImpactCard
                data={{
                  ...reach,
                  icon: Users,
                  accent: "#1d8f72",
                  badge: "Global Reach",
                  helper: "Engaging communities in 12+ regions this year.",
                }}
                showCounter={isReady("reach")}
              />
            </motion.div>
          )}

          {interactions && (
            <motion.div
              {...getMotionProps(0.3)}
              className="h-full"
              onAnimationComplete={() => markReady("interactions")}
            >
              <CompactCard
                data={{
                  ...interactions,
                  icon: Target,
                  accent: "#ba742d",
                  badge: "Yearly Growth",
                }}
                showCounter={isReady("interactions")}
              />
            </motion.div>
          )}

          {carbon && (
            <motion.div
              {...getMotionProps(0.38)}
              className="h-full"
              onAnimationComplete={() => markReady("carbon")}
            >
              <CompactCard
                data={{
                  ...carbon,
                  icon: Activity,
                  accent: "#2563eb",
                  badge: "Sequestration",
                }}
                showCounter={isReady("carbon")}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
