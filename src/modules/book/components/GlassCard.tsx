import React from "react";
const merge = (...classes: Array<string | undefined | false | null>) =>
  classes.filter(Boolean).join(" ");

type GlassCardProps = {
  className?: string;
  children: React.ReactNode;
};

const GlassCard: React.FC<GlassCardProps> = ({ className, children }) => {
  return (
    <div
      className={merge(
        "glass-card bg-card-glass rounded-3xl border border-white/70 shadow-impact",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
