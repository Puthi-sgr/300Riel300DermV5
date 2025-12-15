import React from "react";
import BackgroundBlob from "../../../components/BackgroundBlob";

type TeamLayoutProps = {
  headerNode: React.ReactNode;
  gridNode: React.ReactNode;
  footerNode: React.ReactNode;
};

const TeamLayout: React.FC<TeamLayoutProps> = ({ headerNode, gridNode, footerNode }) => (
  <section className="relative w-full overflow-hidden min-h-screen bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] px-3 sm:px-5 lg:px-6 py-16 sm:py-18 flex flex-col">
    <div className="absolute inset-0 pointer-events-none">
      <BackgroundBlob className="-top-24 -right-10 w-80 h-80" colorClass="bg-eco-200/26" />
      <BackgroundBlob className="-bottom-24 left-0 w-80 h-80" />
    </div>
    <div className="relative max-w-6xl mx-auto space-y-12 flex-1 min-h-[70vh] flex flex-col justify-center">
      {headerNode}

      {gridNode}

      <div className="flex justify-center pt-6">{footerNode}</div>
    </div>
  </section>
);

export default TeamLayout;
