import React from "react";

type OverviewCardProps = {
  children: React.ReactNode;
};

const OverviewCard: React.FC<OverviewCardProps> = ({ children }) => (
  <div className="glass-card bg-white/70 border border-white/60 rounded-2xl p-4 shadow-sm text-earth-800">
    {children}
  </div>
);

export default OverviewCard;
