import React from "react";
import { motion } from "framer-motion";

type Props = {
  variants?: any;
  title: string;
  body: string;
};

const CardWithHalo: React.FC<Props> = ({ variants, title, body }) => (
  <motion.div variants={variants} className="relative">
    <div className="absolute inset-0 rounded-[28px] bg-card-foam blur-2xl opacity-90" aria-hidden />
    <div className="relative glass-card bg-card-glass rounded-[28px] border border-white/70 shadow-impact p-7 sm:p-9 space-y-4 text-earth-900">
      <h3 className="text-3xl font-bold text-earth-900">{title}</h3>
      <p className="text-earth-800 leading-relaxed text-base sm:text-lg">{body}</p>
    </div>
  </motion.div>
);

export default CardWithHalo;
