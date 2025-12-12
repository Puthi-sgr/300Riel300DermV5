import React from "react";

type StatusPillProps = {
  children: React.ReactNode;
  className?: string;
};

const StatusPill: React.FC<StatusPillProps> = ({ children, className }) => (
  <span
    className={`px-3 py-1 text-xs font-semibold rounded-full border border-eco-200 bg-eco-100 text-eco-500 shadow-[0_0_18px_rgba(0,150,0,0.12)] ${className ?? ""}`}
  >
    {children}
  </span>
);

export default StatusPill;
