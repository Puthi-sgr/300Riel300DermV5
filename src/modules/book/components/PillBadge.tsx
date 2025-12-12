import React from "react";

type PillBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

const PillBadge: React.FC<PillBadgeProps> = ({ children, className }) => (
  <div
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pill-eco text-eco-700 font-semibold text-xs uppercase tracking-[0.12em] border border-eco-200 shadow-sm ${className ?? ""}`}
  >
    {children}
  </div>
);

export default PillBadge;
