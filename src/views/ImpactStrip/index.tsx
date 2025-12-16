import React from "react";
import { Sprout, Users, Share2, Leaf } from "lucide-react";
import { useInView } from "framer-motion";
import ImpactLayout from "./layout/ImpactLayout";
import ImpactHeader from "./components/ImpactHeader";
import ImpactGrid from "./components/ImpactGrid";
import { ImpactCardData } from "./components/ImpactCard";

const ImpactStrip = () => {
  const [animateBars, setAnimateBars] = React.useState(false);
  const stripRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(stripRef, { once: true, amount: 0.25 });

  React.useEffect(() => {
    if (isInView) setAnimateBars(true);
  }, [isInView]);

  const cards: ImpactCardData[] = [
    {
      value: 300,
      labelKey: "impact.seedlings",
      suffix: "+",
      detail: "Seedlings planted",
      icon: <Sprout className="w-6 h-6" />,
      backgroundClass: "bg-card-fern",
    },
    {
      value: 48,
      labelKey: "impact.volunteers",
      suffix: "+",
      detail: "Student volunteers",
      icon: <Users className="w-6 h-6" />,
      backgroundClass: "bg-card-grain",
    },
    {
      value: 47200,
      labelKey: "impact.reach",
      suffix: "+",
      detail: "People reached",
      icon: <Share2 className="w-6 h-6" />,
      backgroundClass: "bg-card-foam",
    },
    {
      value: 270,
      labelKey: "impact.co2",
      suffix: " t",
      detail: "Projected CO2 over 20 years",
      icon: <Leaf className="w-6 h-6" />,
      backgroundClass: "bg-card-mist",
    },
  ];

  const cardsNode = (
    <ImpactGrid
          cards={cards}
          isInView={isInView}
          animateBars={animateBars}
          stripRef={stripRef}
        />
  )

  return (
    <ImpactLayout
      headerNode={<ImpactHeader />}
      cardsNode={
        cardsNode
      }
    />
  );
};

export default ImpactStrip;
