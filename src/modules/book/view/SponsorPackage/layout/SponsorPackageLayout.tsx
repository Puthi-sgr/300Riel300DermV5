import React from "react";
import BackgroundBlob from "../../../components/BackgroundBlob";

type SponsorPackageLayoutProps = {
  children: React.ReactNode;
};

const SponsorPackageLayout: React.FC<SponsorPackageLayoutProps> = ({ children }) => (
  <section className="relative w-full overflow-hidden min-h-screen bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] px-3 sm:px-5 lg:px-6 py-16 sm:py-18 flex flex-col">
    <div className="absolute inset-0 pointer-events-none">
      <BackgroundBlob className="-top-24 -left-10 w-80 h-80" />
      <BackgroundBlob className="-bottom-24 right-0 w-80 h-80" colorClass="bg-eco-200/28" />
    </div>
    <div className="relative max-w-6xl mx-auto space-y-12 flex-1 min-h-[70vh] flex flex-col justify-center">
      {children}
    </div>
  </section>
);

export default SponsorPackageLayout;
