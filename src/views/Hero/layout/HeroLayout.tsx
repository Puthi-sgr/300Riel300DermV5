
import React from "react";
import { motion, MotionProps } from "framer-motion";
import HeroBackgroundLayers from "../components/HeroBackgroundLayers";
import HeroBlurOrbs from "../components/HeroBlurOrbs";
import HiddenSeoHeadings from "../components/HiddenSeoHeadings";
import HeroLoadingScreen from "../components/HeroLoadingScreen";

interface HeroLayoutProps {
	leftNode: React.ReactNode;
	rightNode: React.ReactNode;
	backgroundMotion?: MotionProps;
	overlayMotion?: (delay: number) => MotionProps;
	contentMotion?: MotionProps;
	onVideoLoaded?: () => void;
	isLoading?: boolean;
}

const HeroLayout: React.FC<HeroLayoutProps> = ({
	leftNode,
	rightNode,
	backgroundMotion,
	overlayMotion,
	contentMotion,
	onVideoLoaded,
	isLoading = false,
}) => {
	return (
		<section
			id="home"
			className="relative overflow-hidden min-h-screen bg-transparent"
		>
			<HeroBackgroundLayers
				backgroundMotion={backgroundMotion!}
				overlayMotion={overlayMotion!}
				onVideoLoaded={onVideoLoaded!}
			/>
			<HiddenSeoHeadings />
			<HeroBlurOrbs />

			<motion.div
				className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-28 lg:py-40"
				{...(contentMotion || {})}
			>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
					<div className="order-2 lg:order-1">{leftNode}</div>
					<div className="order-1 lg:order-2">{rightNode}</div>
				</div>
			</motion.div>

			<HeroLoadingScreen isVisible={isLoading} />
		</section>
	);
};

export default HeroLayout;
