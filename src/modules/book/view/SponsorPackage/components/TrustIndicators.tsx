import React from "react";
import { ShieldCheck, CheckCircle2, FileCheck2 } from "lucide-react";
import { useLanguage } from "../../../../../context/LanguageContext";

const TrustIndicators: React.FC = () => {
  const { t } = useLanguage();
  const items = [
    { icon: <ShieldCheck className="w-5 h-5" />, label: t("book.sponsorPackage.trust.0") },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: t("book.sponsorPackage.trust.1") },
    { icon: <FileCheck2 className="w-5 h-5" />, label: t("book.sponsorPackage.trust.2") },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 text-earth-700 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-eco-600">{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustIndicators;
