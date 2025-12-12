import React from "react";
import { ArrowRight } from "lucide-react";
import FullRoundedGradientButton from "../../../components/FullRoundedGradientButton";

const CTAGroup: React.FC = () => (
  <div className="flex flex-wrap gap-3 items-center">
    <FullRoundedGradientButton className="px-6 rounded-xl">
      <span className="flex items-center gap-2">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </span>
    </FullRoundedGradientButton>
    <button
      type="button"
      className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold text-eco-700 border border-eco-600/30 bg-white/60 hover:bg-white/80 transition-colors duration-200"
    >
      Support This Project <span className="text-rose-500">♥</span>
    </button>
  </div>
);

export default CTAGroup;
