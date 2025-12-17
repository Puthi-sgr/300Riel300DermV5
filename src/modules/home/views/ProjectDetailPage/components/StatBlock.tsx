import React from "react";
import { Project } from "../../../../projects";

type StatsBlockProps = {
  stats?: Project["stats"];
};

const StatsBlock: React.FC<StatsBlockProps> = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
      {stats.seedlingsPlanted !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.seedlingsPlanted.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">Seedlings planted</p>
        </div>
      )}
      {stats.volunteers !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.volunteers.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">Student volunteers</p>
        </div>
      )}
      {stats.reach !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.reach.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">People reached online</p>
        </div>
      )}
      {stats.co2Tons !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.co2Tons.toLocaleString()} t
          </div>
          <p className="text-sm text-earth-700">CO₂ projected over 20 years</p>
        </div>
      )}
      {stats.targetBooks !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.targetBooks.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">Books targeted</p>
        </div>
      )}
      {stats.targetSchools !== undefined && (
        <div className="rounded-lg bg-eco-50 border border-eco-100 px-3 py-2">
          <div className="text-2xl font-bold text-eco-700">
            {stats.targetSchools.toLocaleString()}
          </div>
          <p className="text-sm text-earth-700">Schools to support</p>
        </div>
      )}
    </div>
  );
};

export default StatsBlock;