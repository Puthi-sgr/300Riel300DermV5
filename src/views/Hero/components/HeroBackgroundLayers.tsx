
import React from "react";
import { motion, MotionProps } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo";

type BackgroundLayersProps = {
  backgroundMotion: MotionProps;
  overlayMotion: (delay: number) => MotionProps;
  onVideoLoaded: () => void;
};

const HeroBackgroundLayers: React.FC<BackgroundLayersProps> = ({
  backgroundMotion,
  overlayMotion,
  onVideoLoaded,
}) => (
  <>
    <motion.div
      className="absolute inset-0 -z-7"
      {...backgroundMotion}
      aria-hidden="true"
    >
      <BackgroundVideo
        className="h-full w-full object-cover opacity-55 blur-[900px]"
        style={{
          filter: "saturate(0.7) brightness(1.2) hue-rotate(85deg) contrast(0.95)",
        }}
        onLoadedData={onVideoLoaded}
      />
    </motion.div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-emerald-200/70 via-lime-50/60 to-emerald-300/80 mix-blend-screen pointer-events-none -z-25"
      {...overlayMotion(0.2)}
      aria-hidden="true"
    />
    <motion.div
      className="absolute inset-0 bg-emerald-50/80 mix-blend-screen backdrop-blur-[1100px] pointer-events-none -z-20"
      {...overlayMotion(0.35)}
      aria-hidden="true"
    />
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-eco-50 via-white to-eco-100 opacity-90 pointer-events-none -z-10"
      {...overlayMotion(0.5)}
      aria-hidden="true"
    />
  </>
);

export default HeroBackgroundLayers;
