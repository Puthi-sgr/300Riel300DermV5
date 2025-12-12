import React from "react";
import MissionLayout from "./layout/MissionLayout";

const Mission: React.FC = () => (
  <MissionLayout
    kicker="Our mission"
    title="Literacy access for remote students"
    description="Delivering books, materials, and learning support to Avlatan Primary School so every child can thrive."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-earth-800">
      <div className="glass-card bg-card-foam rounded-2xl border border-white/70 p-5 shadow-sm">
        <p>Focus on equitable access to quality reading materials.</p>
      </div>
      <div className="glass-card bg-card-grain rounded-2xl border border-white/70 p-5 shadow-sm">
        <p>Partner with local teachers to sustain literacy growth.</p>
      </div>
    </div>
  </MissionLayout>
);

export default Mission;
