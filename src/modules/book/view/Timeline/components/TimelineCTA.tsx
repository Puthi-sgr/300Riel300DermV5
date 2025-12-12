import React from "react";
import { Leaf } from "lucide-react";
import FullRoundedGradientButton from "../../../components/FullRoundedGradientButton";

const TimelineCTA: React.FC = () => (
  <div className="text-center space-y-4">
    <div className="flex justify-center text-eco-600">
      <Leaf className="w-6 h-6" />
    </div>
    <h3 className="text-2xl sm:text-3xl font-bold text-earth-900">
      Every step brings us closer to brighter futures.
    </h3>
    <FullRoundedGradientButton className="px-6 rounded-xl">Join Our Next Chapter</FullRoundedGradientButton>
  </div>
);

export default TimelineCTA;
