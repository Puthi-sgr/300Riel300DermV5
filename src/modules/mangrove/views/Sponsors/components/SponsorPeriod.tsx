import React from "react";

type Props = {
  period: string;
};

const SponsorPeriod: React.FC<Props> = ({ period }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full glass-card bg-white/80 border border-white/70 text-eco-700 shadow-xs">
      {period}
    </span>
  );
};

export default SponsorPeriod;
