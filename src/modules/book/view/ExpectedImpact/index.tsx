import React from "react";
import ExpectedImpactLayout from "./layout/ExpectedImpactLayout";

const ExpectedImpact: React.FC = () => (
  <ExpectedImpactLayout
    kicker="Expected impact"
    title="Building lasting literacy gains"
    description="Anticipated outcomes for students, teachers, and the wider community."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-earth-800">
      <div className="glass-card bg-card-foam rounded-2xl border border-white/70 p-4 shadow-sm">
        Improved reading proficiency
      </div>
      <div className="glass-card bg-card-grain rounded-2xl border border-white/70 p-4 shadow-sm">
        Better classroom engagement
      </div>
      <div className="glass-card bg-card-fern rounded-2xl border border-white/70 p-4 shadow-sm">
        Stronger community support
      </div>
    </div>
  </ExpectedImpactLayout>
);

export default ExpectedImpact;
