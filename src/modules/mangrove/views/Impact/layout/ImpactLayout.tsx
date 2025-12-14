import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const ImpactLayout: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <section className={`rounded-[40px] border border-white/60 bg-gradient-to-br from-[#eef9f3] via-white to-[#f5fff9] p-6 sm:p-8 lg:p-12 space-y-10 ${className}`}>
      {children}
    </section>
  );
};

export default ImpactLayout;
