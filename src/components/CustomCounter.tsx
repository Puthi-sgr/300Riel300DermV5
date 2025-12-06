import React from "react";
import CountUp, { CountUpProps } from "react-countup";

interface CustomCounterProps extends Partial<CountUpProps> {
  end: number;
}

const CustomCounter: React.FC<CustomCounterProps> = ({
  end,
  start = 0,
  duration = 1.2,
  decimals = 0,
  decimal = ".",
  separator = ",",
  prefix = "",
  suffix = "",
  className,
  ...rest
}) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      decimals={decimals}
      decimal={decimal}
      separator={separator}
      prefix={prefix}
      suffix={suffix}
      enableScrollSpy
      scrollSpyOnce
      {...rest}
    >
      {({ countUpRef }) => <span ref={countUpRef} className={className} />}
    </CountUp>
  );
};

export default CustomCounter;
