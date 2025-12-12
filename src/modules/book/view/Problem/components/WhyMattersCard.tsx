import React from "react";

type WhyMattersCardProps = {
  title: string;
  body: string;
};

const WhyMattersCard: React.FC<WhyMattersCardProps> = ({ title, body }) => (
  <div className="glass-card bg-white/85 rounded-2xl border border-white/70 shadow-sm p-5 flex gap-3">
    <div className="w-1 bg-amber-400 rounded-full" aria-hidden />
    <div className="space-y-2">
      <h4 className="text-lg font-semibold text-earth-900">{title}</h4>
      <p className="text-earth-800 text-sm sm:text-base leading-relaxed">{body}</p>
    </div>
  </div>
);

export default WhyMattersCard;
