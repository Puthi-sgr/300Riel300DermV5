import React from "react";

type SponsorsListProps = {
  sponsors?: string[];
};

const SponsorsList: React.FC<SponsorsListProps> = ({ sponsors }) => {
  if (!sponsors?.length) {
    return <p className="text-earth-700">No sponsors listed yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {sponsors.map((sponsor, index) => (
        <span
          key={`${sponsor}-${index}`}
          className="px-3 py-2 text-sm rounded-full bg-sand-100 text-earth-900 border border-sand-200"
        >
          {sponsor}
        </span>
      ))}
    </div>
  );
};

export default SponsorsList;
