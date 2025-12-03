import React from "react";
import CountUp, { CountUpProps } from "react-countup";

interface MangroveProgressCounterProps extends Partial<CountUpProps> {
  end: number;
  /** Target value used to compute the progress percentage */
  target?: number;
  /** Optional label surfaced above the bar */
  label?: string;
}

const MangroveProgressCounter: React.FC<MangroveProgressCounterProps> = ({
  end,
  target,
  label,
  suffix = "",
  duration = 2,
  start = 0,
  separator = ",",
  decimal = ".",
  decimals = 0,
  ...rest
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const percentage = React.useMemo(() => {
    if (!target || target === 0) return 100;
    return Math.min(100, Math.round((end / target) * 100));
  }, [end, target]);

  const displayedProgress = visible ? percentage : 0;

  return (
    <div ref={containerRef} className="space-y-3">
      {label && (
        <p className="text-xs uppercase tracking-[0.3em] text-eco-500 text-center">
          {label}
        </p>
      )}

      <div className="h-3 rounded-full bg-eco-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-eco-200 via-eco-400 to-eco-600 transition-[width] duration-700 ease-out"
          style={{ width: `${displayedProgress}%` }}
        />
      </div>

      <div className="flex items-baseline justify-between text-earth-900">
        <span className="text-xl font-bold">
          <CountUp
            start={start}
            end={visible ? end : 0}
            duration={duration}
            decimals={decimals}
            decimal={decimal}
            separator={separator}
            suffix={suffix}
            {...rest}
          />
        </span>
        {target && (
          <span className="text-sm text-eco-600 font-semibold">
            {displayedProgress}%
          </span>
        )}
      </div>
    </div>
  );
};

export default MangroveProgressCounter;
