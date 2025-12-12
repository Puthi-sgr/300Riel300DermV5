import React from "react";
const merge = (...classes: Array<string | undefined | false | null>) =>
  classes.filter(Boolean).join(" ");

type FullRoundedGradientButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  colorClass?: string; // allows future palette swaps (e.g. new Tailwind colors)
};

const FullRoundedGradientButton: React.FC<FullRoundedGradientButtonProps> = ({
  children,
  onClick,
  href,
  className,
  colorClass,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-full font-semibold text-white shadow-btn-soft transition-transform duration-200";

  // default to solid eco palette; can be overridden when new Tailwind colors land
  const paletteClasses = colorClass ?? "bg-eco-600 hover:bg-eco-700";

  if (href) {
    return (
      <a href={href} onClick={onClick} className={merge(baseClasses, paletteClasses, className)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={merge(baseClasses, paletteClasses, className)}>
      {children}
    </button>
  );
};

export default FullRoundedGradientButton;
