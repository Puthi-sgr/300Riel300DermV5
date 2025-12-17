import React from "react";

type ViewRoadmapButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const ViewRoadmapButton: React.FC<ViewRoadmapButtonProps> = ({ children, className }) => {
  return (
    <a
      href="#timeline"
      className={[
        "inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold",
        "text-eco-700 border border-eco-600/30 bg-white/70 hover:bg-white/85 transition-colors duration-200",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </a>
  );
};

export default ViewRoadmapButton;

