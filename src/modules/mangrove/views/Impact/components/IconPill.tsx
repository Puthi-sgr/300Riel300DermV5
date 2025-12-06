import React from "react";

export const IconPill = ({ Icon, accent }: { Icon: React.ElementType; accent: string }) => (
  <div
    className="h-12 w-12 rounded-2xl glass-card ring-1 ring-white/60 flex items-center justify-center shadow-sm"
    style={{ color: accent }}
  >
    <Icon className="w-6 h-6" />
  </div>
);
