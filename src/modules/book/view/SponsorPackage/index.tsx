import React from "react";
import SponsorPackageLayout from "./layout/SponsorPackageLayout";

const SponsorPackage: React.FC = () => (
  <SponsorPackageLayout
    kicker="Sponsor packages"
    title="Ways to support"
    description="Flexible options for partners to contribute funds, materials, or services."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-earth-800">
      <div className="glass-card bg-card-foam rounded-2xl border border-white/70 p-4 shadow-sm">Books & materials</div>
      <div className="glass-card bg-card-grain rounded-2xl border border-white/70 p-4 shadow-sm">Logistics support</div>
      <div className="glass-card bg-card-fern rounded-2xl border border-white/70 p-4 shadow-sm">Funding milestones</div>
    </div>
  </SponsorPackageLayout>
);

export default SponsorPackage;
