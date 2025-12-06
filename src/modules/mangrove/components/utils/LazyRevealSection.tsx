import React, { Suspense, useEffect, useRef, useState } from "react";

type LazyRevealSectionProps = {
  children: React.ReactNode;
  fallbackHeight?: number;
  initiallyVisible?: boolean;
};

const SectionPlaceholder = ({ minHeight = 360 }: { minHeight?: number }) => (
  <div
    className="w-full rounded-3xl bg-eco-50/60 animate-pulse border border-eco-100"
    style={{ minHeight }}
    aria-hidden="true"
  />
);

// A small utility wrapper that reveals its children once near the viewport,
// while showing a sized skeleton to reduce layout shift and avoid eager rendering.
const LazyRevealSection = ({
  children,
  fallbackHeight,
  initiallyVisible = false,
}: LazyRevealSectionProps) => {
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (initiallyVisible || isVisible) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [initiallyVisible, isVisible]);

  const placeholder = (
    <SectionPlaceholder minHeight={fallbackHeight ?? 420} />
  );

  return (
    <div
      ref={sentinelRef}
      className="w-full"
      aria-busy={!isVisible}
      data-lazy-section
    >
      {isVisible ? (
        <Suspense fallback={placeholder}>{children}</Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
};

export default LazyRevealSection;
