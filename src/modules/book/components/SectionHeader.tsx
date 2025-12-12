import React from "react";
const merge = (...classes: Array<string | undefined | false | null>) =>
  classes.filter(Boolean).join(" ");

type SectionHeaderProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  className,
  align = "left",
}) => {
  const isCenter = align === "center";
  return (
    <div className={merge("space-y-2", isCenter ? "text-center" : "text-left", className)}>
      {kicker ? (
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-eco-700">{kicker}</p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-bold text-earth-900">{title}</h2>
      {subtitle ? <p className="text-earth-700 text-base sm:text-lg">{subtitle}</p> : null}
    </div>
  );
};

export default SectionHeader;
