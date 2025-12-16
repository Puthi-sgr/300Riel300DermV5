import React, { ReactNode } from "react";

interface ImpactLayoutProps {
  headerNode: ReactNode;
  cardsNode: ReactNode;
}

const ImpactLayout: React.FC<ImpactLayoutProps> = ({
  headerNode,
  cardsNode,
}) => {
  return (
    <section
      id="impact"
      className="bg-gradient-to-b from-white via-[#f8fdfa] to-[#eef7f1] text-earth-900 py-16 sm:py-20"
      aria-labelledby="impact-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">{headerNode}</div>

        <div className="flex justify-center">{cardsNode}</div>
      </div>
    </section>
  );
};

export default ImpactLayout;
