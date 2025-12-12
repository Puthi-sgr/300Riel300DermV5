import React from "react";
import PillBadge from "../../../components/PillBadge";
import FullRoundedGradientButton from "../../../components/FullRoundedGradientButton";

const MissionCTA: React.FC = () => (
  <div className="text-center space-y-4">
    <div className="flex justify-center">
      <PillBadge className="bg-pill-eco text-eco-700 border-eco-200">Making a Real Difference</PillBadge>
    </div>
    <h3 className="text-3xl sm:text-4xl font-bold text-earth-900">Join us in writing their future.</h3>
    <p className="text-earth-700 max-w-3xl mx-auto">
      Your support makes these objectives a reality. Whether through donation or volunteering, be part of the change
      today.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      <FullRoundedGradientButton className="px-6 rounded-xl">Make a Donation</FullRoundedGradientButton>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold text-eco-700 border border-eco-600/30 bg-white/70 hover:bg-white/85 transition-colors duration-200"
      >
        View Roadmap
      </button>
    </div>
  </div>
);

export default MissionCTA;
