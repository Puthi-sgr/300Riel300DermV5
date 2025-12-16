import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const AboutHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="text-center text-earth-900 space-y-2">
      <p className="text-sm font-semibold uppercase tracking-normal text-eco-700">{title}</p>
      <h2 className="text-3xl sm:text-4xl font-bold">{subtitle ?? title}</h2>
    </div>
  );
};

export default AboutHeader;
