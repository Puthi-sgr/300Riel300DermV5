import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

type ReadyMap<K extends string> = Record<K, boolean>;

export const useStaggeredCounters = <K extends string>(keys: K[]) => {
  const prefersReducedMotion = useReducedMotion();

  const initialReady = useMemo(
    () => keys.reduce<ReadyMap<K>>((acc, key) => ({ ...acc, [key]: prefersReducedMotion }), {} as ReadyMap<K>),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [keys.join("|"), prefersReducedMotion]
  );

  const [ready, setReady] = useState<ReadyMap<K>>(initialReady);

  useEffect(() => {
    if (prefersReducedMotion) {
      setReady((prev) => keys.reduce<ReadyMap<K>>((acc, key) => ({ ...acc, [key]: true }), { ...prev }));
    } else {
      setReady(initialReady);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion, keys.join("|")]);

  const getMotionProps = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0, transition: { duration: 0.45, delay, ease: [0.25, 0.6, 0.3, 1] } },
          viewport: { once: true, amount: 0.2 },
        };

  const markReady = (key: K) =>
    setReady((prev) => (prev[key] ? prev : { ...prev, [key]: true }));

  const isReady = (key: K) => !!ready[key];

  return { getMotionProps, markReady, isReady, prefersReducedMotion };
};
