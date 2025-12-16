import React from "react";

type Props = {
  children: React.ReactNode;
};

const SponsorsGrid: React.FC<Props> = ({ children }) => {
  return <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>;
};

export default SponsorsGrid;
