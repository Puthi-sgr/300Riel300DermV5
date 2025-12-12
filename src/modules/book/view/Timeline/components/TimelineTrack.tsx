import React from "react";

type TimelineTrackProps = {
  nodes: number;
};

const TimelineTrack: React.FC<TimelineTrackProps> = ({ nodes }) => (
  <div className="absolute inset-0 flex justify-center">
    <div className="relative h-full w-px border-r border-dashed border-eco-200/70">
      {Array.from({ length: nodes }).map((_, idx) => (
        <div
          key={idx}
          className="absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-eco-500 shadow-[0_0_18px_rgba(31,185,106,0.35)]"
          style={{ top: `${(idx / Math.max(nodes - 1, 1)) * 100}%` }}
        />
      ))}
    </div>
  </div>
);

export default TimelineTrack;
