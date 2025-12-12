import React from "react";

type ObjectiveCardProps = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ number, icon, title, description }) => (
  <div className="relative glass-card bg-white rounded-[22px] border border-white/70 shadow-impact p-6 space-y-3">
    <div className="absolute top-4 right-5 text-3xl font-extrabold text-eco-200 select-none">{number}</div>
    <div className="h-12 w-12 rounded-full bg-eco-50 text-eco-700 flex items-center justify-center shadow-sm border border-eco-100">
      {icon}
    </div>
    <div className="space-y-2">
      <p className="text-lg font-semibold text-earth-900">{title}</p>
      <p className="text-sm text-earth-700 leading-relaxed">{description}</p>
    </div>
    <button
      type="button"
      className="inline-flex items-center gap-2 text-sm font-semibold text-eco-700 hover:text-eco-800"
    >
      Learn More <span aria-hidden>→</span>
    </button>
  </div>
);

export default ObjectiveCard;
