import React from "react";
import WhyUsLayout from "./layout/WhyUsLayout";

const WhyUs: React.FC = () => (
  <WhyUsLayout
    kicker="Why us"
    title="Community-led, transparent, and focused"
    description="We partner closely with local educators, track outcomes, and keep supporters informed."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-earth-800">
      <div className="glass-card bg-card-foam rounded-2xl border border-white/70 p-4 shadow-sm">Local partners</div>
      <div className="glass-card bg-card-grain rounded-2xl border border-white/70 p-4 shadow-sm">Transparent updates</div>
      <div className="glass-card bg-card-fern rounded-2xl border border-white/70 p-4 shadow-sm">Measurable outcomes</div>
    </div>
  </WhyUsLayout>
);

export default WhyUs;
