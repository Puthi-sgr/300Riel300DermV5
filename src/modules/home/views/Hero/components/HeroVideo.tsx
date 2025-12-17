import React from "react";
import { AdvancedVideo } from "@cloudinary/react";
import type { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../../../../../core/lib/cld";

export interface HeroVideoProps {
	publicId: string;
	className?: string;
	ariaLabel?: string;
	width?: number;
	height?: number;
}

const DEFAULT_DIMENSIONS = { width: 1080, height: 1280 };

const HeroVideo: React.FC<HeroVideoProps> = ({
	publicId,
	className,
	ariaLabel = "Hero video",
	width = DEFAULT_DIMENSIONS.width,
	height = DEFAULT_DIMENSIONS.height,
}) => {
	const videoRef = React.useRef<HTMLVideoElement | null>(null);
	const videoAsset = React.useMemo(() => {
		const cloudinary = cld as Cloudinary;
		return cloudinary
			.video(publicId) 
			.format("mp4")
			.quality("auto")
			.resize(fill().width(width).height(height));
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
			autoPlay
			loop
			muted
			playsInline
			aria-label={ariaLabel}
			innerRef={videoRef}
			className={`h-full w-full object-cover ${className ?? ""}`}
		/>
	);
};

export default HeroVideo;
