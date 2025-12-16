import React from "react";

type Props = {
  headerNode?: React.ReactNode;
  trackNode?: React.ReactNode;
  itemsNode: React.ReactNode;
  itemsRef?: React.Ref<HTMLDivElement>;
};

const PhasesLayout: React.FC<Props> = ({ headerNode, trackNode, itemsNode, itemsRef }) => {
  return (
    <section id="phases" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">{headerNode}</div>

        <div ref={itemsRef} className="relative">
          {trackNode}
          <div className="grid grid-cols-1 gap-6 md:gap-10">{itemsNode}</div>
        </div>
      </div>
    </section>
  );
};

export default PhasesLayout;
