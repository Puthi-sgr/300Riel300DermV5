import React from "react";
import GlassCard from "../../../components/GlassCard";

type CommitmentCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const CommitmentCard: React.FC<CommitmentCardProps> = ({ icon, title, description }) => (
  <GlassCard className="bg-card-glass-emerald rounded-2xl border border-l-white p-5 shadow-sm space-y-2">
    <div className="h-10 w-10 rounded-full bg-eco-50 text-eco-700 flex items-center justify-center shadow-sm border border-eco-100">
      {icon}
    </div>
    <p className="text-lg font-semibold text-earth-900">{title}</p>
    <p className="text-sm text-earth-700 leading-relaxed">{description}</p>
  </GlassCard>
);

export default CommitmentCard;
