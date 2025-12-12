import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import WhyMattersCard from "./WhyMattersCard";
import ProblemImageCard from "./ProblemImageCard";

type ProblemIntroProps = {
  heading: string;
  highlight: string;
  body: string;
  whyTitle: string;
  whyBody: string;
};

const ProblemIntro: React.FC<ProblemIntroProps> = ({ heading, highlight, body, whyTitle, whyBody }) => {
  const [pre, post] = heading.split(highlight);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-eco-600">Background</p>
        <SectionHeader
          kicker={undefined}
          title={
            <span className="block text-3xl sm:text-4xl font-bold text-earth-900">
              {pre}
              <span className="text-eco-600"> {highlight}</span>
              {post}
            </span>
          }
          subtitle={body}
          className="space-y-3"
        />
        <WhyMattersCard title={whyTitle} body={whyBody} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <ProblemImageCard />
      </motion.div>
    </div>
  );
};

export default ProblemIntro;
