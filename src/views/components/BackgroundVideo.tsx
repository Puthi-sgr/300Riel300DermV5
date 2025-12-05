import React from "react";
import { AdvancedVideo } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { boomerang } from "@cloudinary/url-gen/actions/effect";
import { cld } from "../../core/lib/cld";

export type BackgroundVideoProps = {
  publicId?: string;
  className?: string;
  ariaLabel?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  onLoadedData?: React.VideoHTMLAttributes<HTMLVideoElement>["onLoadedData"];
};

const DEFAULT_BACKGROUND_ID = "AbstractHeroBackground_ygvxwe";
const DEFAULT_DIMENSIONS = { width: 2560, height: 1440 };

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  publicId = DEFAULT_BACKGROUND_ID,
  className,
  ariaLabel = "Animated hero background",
  style,
  width = DEFAULT_DIMENSIONS.width,
  height = DEFAULT_DIMENSIONS.height,
  autoPlay = true,
  loop = true,
  muted = true,
  onLoadedData,
}) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const videoAsset = React.useMemo(() => {
    return cld
      .video(publicId)
      .format("webm")
      .quality("auto")
      .resize(fill().width(width).height(height))
      .effect(boomerang());
  }, [publicId, width, height]);

  React.useEffect(() => {
    const currentVideo = videoRef.current;

    return () => {
      if (!currentVideo) return;
      currentVideo.pause();
      currentVideo.removeAttribute("src");
      currentVideo.load();
      const cldPlayer = (currentVideo as unknown as {
        cloudinaryVideo?: { destroy?: () => void };
      }).cloudinaryVideo;
      if (cldPlayer?.destroy) {
        cldPlayer.destroy();
      }
    };
  }, [videoAsset]);

  return (
    <AdvancedVideo
      cldVid={videoAsset}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      aria-label={ariaLabel}
      innerRef={videoRef}
      className={`absolute inset-0 h-full w-full object-cover ${className ?? ""}`}
      style={style}
      onLoadedData={onLoadedData}
    />
  );
};

export default BackgroundVideo;
