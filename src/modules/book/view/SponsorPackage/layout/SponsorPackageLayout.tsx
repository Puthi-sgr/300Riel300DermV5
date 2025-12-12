import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import BackgroundBlob from "../../../components/BackgroundBlob";

type SponsorPackageLayoutProps = {
  title: string;
  kicker?: string;
  description: string;
  children?: React.ReactNode;
};

const SponsorPackageLayout: React.FC<SponsorPackageLayoutProps> = ({ title, kicker, description, children }) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
    <div className="absolute inset-0 pointer-events-none">
      <BackgroundBlob className="-top-24 -left-10 w-72 h-72" />
      <BackgroundBlob className="-bottom-24 right-0 w-72 h-72" colorClass="bg-eco-200/28" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-6xl mx-auto space-y-6"
    >
      <SectionHeader kicker={kicker} title={title} subtitle={description} />
      {children}
    </motion.div>
  </section>
);

export default SponsorPackageLayout;
