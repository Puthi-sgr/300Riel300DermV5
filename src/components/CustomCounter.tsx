import React from "react";
import CountUp, { CountUpProps } from "react-countup";

interface CustomCounterProps extends Partial<CountUpProps> {
  end: number;
  suffix?: string;
  size?: number;
  trackColor?: string;
  progressColor?: string;
  fillColor?: string;
  progressGradient?: [string, string];
}

const CustomCounter: React.FC<CustomCounterProps> = ({
  end,
  suffix = "",
  start = 0,
  duration = 2.5,
  decimals = 0,
  decimal = ".",
  separator = ",",
  size = 112,
  trackColor = "#E1F2EA",
  progressColor = "#0E8A5C",
  fillColor = "#ffffff",
  progressGradient = ["#0E8A5C", "#9BF2A5"],
  ...rest
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);
  const gradientId = React.useId();

  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setProgress(1);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const radius = React.useMemo(() => (size - 20) / 2, [size]);
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size }}
      className="relative mx-auto"
    >
      <svg width={size} height={size}>
        <defs>
          <linearGradient id={`${gradientId}-progress`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={progressGradient[0]} />
            <stop offset="100%" stopColor={progressGradient[1]} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={10}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - 6}
          fill={fillColor}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressGradient ? `url(#${gradientId}-progress)` : progressColor}
          strokeWidth={10}
          strokeLinecap="round"
          fill="transparent"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: dashOffset,
            transition: "stroke-dashoffset 0.4s ease-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-eco-700">
        <CountUp
          start={start}
          end={end}
          duration={duration}
          decimals={decimals}
          decimal={decimal}
          separator={separator}
          suffix={suffix}
          enableScrollSpy
          scrollSpyOnce
          {...rest}
        >
          {({ countUpRef }) => (
            <span
              ref={countUpRef}
              className="text-xl font-extrabold text-center leading-none"
            />
          )}
        </CountUp>
      </div>
    </div>
  );
};

export default CustomCounter;
