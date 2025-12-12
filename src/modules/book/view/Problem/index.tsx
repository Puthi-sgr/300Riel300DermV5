import React from "react";
import ProblemLayout from "./layout/ProblemLayout";

const Problem: React.FC = () => (
  <ProblemLayout
    kicker="The gap"
    title="Limited access to books on remote islands"
    description="Students in Avlatan Primary lack quality reading materials and essentials to build strong literacy skills."
  >
    <div className="glass-card bg-card-foam rounded-2xl border border-white/70 p-5 text-earth-800 shadow-sm">
      <ul className="list-disc list-inside space-y-2">
        <li>Few age-appropriate books available.</li>
        <li>Insufficient supplies for daily learning.</li>
        <li>Long-term literacy support is fragile.</li>
      </ul>
    </div>
  </ProblemLayout>
);

export default Problem;
