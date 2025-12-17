import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ObjectiveCircle: React.FC<Props> = ({ icon, title, description }) => (
  <div className="glass-card bg-white/90 rounded-3xl border border-white/80 shadow-impact p-6 lg:p-7 text-center flex flex-col items-center gap-3">
    <div className="h-16 w-16 rounded-full glass-card ring-1 ring-white/70 flex items-center justify-center shadow-sm bg-card-foam">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="font-semibold text-earth-900 text-lg leading-tight">{title}</h4>
      <p className="text-sm text-earth-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default ObjectiveCircle;
