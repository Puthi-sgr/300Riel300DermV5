import React from "react";
import TeamLayout from "./layout/TeamLayout";

const Team: React.FC = () => (
  <TeamLayout
    kicker="Meet the team"
    title="Students and partners behind the project"
    description="Collaborating across roles to deliver resources and track impact."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-earth-800">
      <div className="glass-card bg-card-foam rounded-2xl border border-white/70 p-4 shadow-sm">Project leads</div>
      <div className="glass-card bg-card-grain rounded-2xl border border-white/70 p-4 shadow-sm">Field coordinators</div>
      <div className="glass-card bg-card-fern rounded-2xl border border-white/70 p-4 shadow-sm">Community partners</div>
    </div>
  </TeamLayout>
);

export default Team;
