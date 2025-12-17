import React from "react";
import ImpactCard, { ImpactCardData } from "./ImpactCard";

interface ImpactGridProps {
  cards: readonly ImpactCardData[];
  isInView: boolean;
  animateBars: boolean;
  stripRef: React.RefObject<HTMLDivElement>;
}

const ImpactGrid: React.FC<ImpactGridProps> = ({
  cards,
  isInView,
  animateBars,
  stripRef,
}) => {
  return (
    <div
      ref={stripRef}
      className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-0 lg:flex-nowrap"
    >
      {cards.map((card, idx) => (
        <ImpactCard
          key={card.labelKey}
          data={card}
          index={idx}
          isInView={isInView}
          animateBars={animateBars}
          totalCards={cards.length}
        />
      ))}
    </div>
  );
};

export default ImpactGrid;
