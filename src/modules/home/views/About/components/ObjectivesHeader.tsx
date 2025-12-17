import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const ObjectivesHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-semibold uppercase tracking-normal text-eco-700">{title}</p>
      <h3 className="text-2xl sm:text-3xl font-bold text-earth-900">{subtitle ?? title}</h3>
    </div>
  );
};

export default ObjectivesHeader;
