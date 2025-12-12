import React from "react";
const merge = (...classes: Array<string | undefined | false | null>) =>
  classes.filter(Boolean).join(" ");

type TranslucentCirclePillProps = {
  className?: string;
  children: React.ReactNode;
};

const TranslucentCirclePill: React.FC<TranslucentCirclePillProps> = ({ className, children }) => {
  return (
    <div
      className={merge(
        "glass-card ring-1 ring-white/60 bg-white/70 rounded-full shadow-sm flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TranslucentCirclePill;
