import React from "react";

export type ImpactCardProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  icon: React.ElementType;
  accent: string;
  className?: string;
  badge?: string;
  helper?: string;
};

