import React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type PhaseMarker = {
  number: string;
};

type Props = {
  phases: PhaseMarker[];
};

const buildZigZagPath = (nodes: number) => {
  const count = Math.max(nodes, 2);
  const topPad = 10;
  const bottomPad = 10;
  const usable = 100 - topPad - bottomPad;
  const leftX = 30;
  const rightX = 70;

  const points = Array.from({ length: count }).map((_, idx) => {
    const t = idx / (count - 1);
    const y = topPad + t * usable;
    const x = idx % 2 === 0 ? leftX : rightX;
    return { x, y };
  });

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let idx = 1; idx < points.length; idx++) {
    const prev = points[idx - 1];
    const next = points[idx];
    const midY = (prev.y + next.y) / 2;
    d += ` C ${prev.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`;
  }

  return { d, points };
};

const PhasesTrack: React.FC<Props> = ({ phases }) => {
  const reduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const { d, points } = React.useMemo(() => buildZigZagPath(phases.length), [phases.length]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="mangrovePhasesPath" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.10)" />
            <stop offset="40%" stopColor="rgba(16, 185, 129, 0.35)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.12)" />
          </linearGradient>
        </defs>

        <motion.path
          d={d}
          fill="none"
          stroke="url(#mangrovePhasesPath)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 6"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0.7 }}
          animate={reduceMotion ? false : inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.7 }}
          transition={reduceMotion ? undefined : { duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        />

        {points.map((point, idx) => (
          <motion.circle
            key={phases[idx]?.number ?? idx}
            cx={point.x}
            cy={point.y}
            r="1.8"
            fill="rgba(16, 185, 129, 0.95)"
            initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
            animate={reduceMotion ? false : inView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
            transition={reduceMotion ? undefined : { delay: 0.18 + idx * 0.07, duration: 0.35 }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default PhasesTrack;
