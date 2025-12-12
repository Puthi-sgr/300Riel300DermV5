import React from "react";

type ChallengeCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({ icon, title, description }) => (
  <div className="glass-card bg-white/90 rounded-2xl border border-white/70 shadow-sm p-5 space-y-3 hover:-translate-y-1 transition duration-200 ease-out">
    <div className="h-12 w-12 rounded-full bg-eco-50 text-eco-700 flex items-center justify-center shadow-sm border border-eco-100">
      {icon}
    </div>
    <div className="space-y-1">
      <p className="font-semibold text-earth-900">{title}</p>
      <p className="text-sm text-earth-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default ChallengeCard;
