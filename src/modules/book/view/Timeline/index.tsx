import React from "react";
import TimelineLayout from "./layout/TimelineLayout";

const Timeline: React.FC = () => (
  <TimelineLayout
    kicker="Roadmap"
    title="Project milestones"
    description="Key phases from preparation through delivery and follow-up."
  >
    <div className="glass-card bg-card-foam rounded-2xl border border-white/70 p-5 text-earth-800 shadow-sm space-y-3">
      <p>• Preparation & partner coordination</p>
      <p>• Procurement & packaging of materials</p>
      <p>• Delivery to Avlatan Primary School</p>
      <p>• Post-delivery evaluation and next steps</p>
    </div>
  </TimelineLayout>
);

export default Timeline;
