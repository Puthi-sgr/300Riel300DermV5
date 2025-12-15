import React from "react";

type Props = {
  overallNode?: React.ReactNode;
  socialNode?: React.ReactNode;
  className?: string;
};

const ImpactLayout: React.FC<Props> = ({ overallNode, socialNode, className = "" }) => {
  return (
    <section className={`rounded-[40px] border border-white/60 bg-gradient-to-br from-[#eef9f3] via-white to-[#f5fff9] p-6 sm:p-8 lg:p-12 space-y-10 ${className}`}>
      {overallNode}

      {socialNode}
    </section>
  );
};

export default ImpactLayout;
