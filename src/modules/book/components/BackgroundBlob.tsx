import React from "react";
const merge = (...classes: Array<string | undefined | false | null>) =>
  classes.filter(Boolean).join(" ");

type BackgroundBlobProps = {
  className?: string;
  colorClass?: string;
  sizeClass?: string;
  blurClass?: string;
  ariaHidden?: boolean;
};

const BackgroundBlob: React.FC<BackgroundBlobProps> = ({
  className,
  colorClass = "bg-eco-300/22",
  sizeClass = "w-72 h-72",
  blurClass = "blur-[140px]",
  ariaHidden = true,
}) => {
  return (
    <div
      className={merge("absolute rounded-full", colorClass, sizeClass, blurClass, className)}
      aria-hidden={ariaHidden}
    />
  );
};

export default BackgroundBlob;
