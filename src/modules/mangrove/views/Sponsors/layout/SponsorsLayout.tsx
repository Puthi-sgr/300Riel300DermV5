import React from "react";

type Props = {
  headerNode?: React.ReactNode;
  periodNode?: React.ReactNode;
  cardsNode: React.ReactNode;
};

const SponsorsLayout: React.FC<Props> = ({ headerNode, periodNode, cardsNode }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] border border-white/70 shadow-impact p-8 space-y-8">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-16 -left-8 w-60 h-60 rounded-full bg-eco-300/25 blur-[120px]" />
        <div className="absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-eco-200/30 blur-[140px]" />
      </div>

      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">{headerNode}</div>
        <div>{periodNode}</div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">{cardsNode}</div>
    </div>
  );
};

export default SponsorsLayout;
