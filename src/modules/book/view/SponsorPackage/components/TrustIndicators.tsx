import React from "react";
import { ShieldCheck, CheckCircle2, FileCheck2 } from "lucide-react";

const TrustIndicators: React.FC = () => {
  const items = [
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Secure Payment" },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: "Verified Charity" },
    { icon: <FileCheck2 className="w-5 h-5" />, label: "Tax Deductible" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 text-earth-700 text-sm">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className="text-eco-600">{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustIndicators;
