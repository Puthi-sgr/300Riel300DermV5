import React from "react";
import { ArrowDown } from "lucide-react";

const ScrollIndicator: React.FC = () => (
  <div className="absolute left-1/2 -bottom-4 -translate-x-1/2">
    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/70 border border-white/80 shadow-sm text-eco-700">
      <ArrowDown className="w-5 h-5" />
    </div>
  </div>
);

export default ScrollIndicator;
