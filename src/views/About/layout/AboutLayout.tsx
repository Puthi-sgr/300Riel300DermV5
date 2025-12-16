import React from "react";

type Props = {
  headerNode?: React.ReactNode;
  heroNode?: React.ReactNode;
  objectivesHeaderNode?: React.ReactNode;
  objectivesGridNode?: React.ReactNode;
};

const AboutLayout: React.FC<Props> = ({ headerNode, heroNode, objectivesHeaderNode, objectivesGridNode }) => {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-eco-300/22 blur-[140px]" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-eco-200/26 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {headerNode}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">{heroNode}</div>
      </div>

      <div className="relative bg-gradient-to-br from-white via-[#f7faf7] to-[#eef5ef] border-t border-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
          {objectivesHeaderNode}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">{objectivesGridNode}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutLayout;
