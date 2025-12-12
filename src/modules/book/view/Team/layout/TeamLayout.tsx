import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import BackgroundBlob from "../../../components/BackgroundBlob";

type TeamLayoutProps = {
  title: string;
  kicker?: string;
  description: string;
  children?: React.ReactNode;
};

const TeamLayout: React.FC<TeamLayoutProps> = ({ title, kicker, description, children }) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#f6fbf7] via-white to-[#eef6ee] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
    <div className="absolute inset-0 pointer-events-none">
      <BackgroundBlob className="-top-24 -right-10 w-72 h-72" colorClass="bg-eco-200/26" />
      <BackgroundBlob className="-bottom-24 left-0 w-72 h-72" />
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

export default TeamLayout;
