import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  caption?: string;
};

const SponsorsHeader: React.FC<Props> = ({ title, subtitle, caption }) => {
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-normal text-eco-700">{title}</p>
      <h3 className="text-2xl sm:text-3xl font-bold text-earth-900 leading-snug">{subtitle}</h3>
      {caption ? <p className="text-sm text-earth-700">{caption}</p> : null}
    </div>
  );
};

export default SponsorsHeader;
