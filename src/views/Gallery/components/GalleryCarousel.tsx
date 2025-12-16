import React from "react";
import { ChevronLeft, ChevronRight, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { FacebookPost } from "../../../dto/Facebook.dto";
import { CldImage } from "../../../components/media/CldImage";
import { getCldImage } from "../../../core/lib/getCldImage";

type Props = {
  posts: FacebookPost[];
  prefersReducedMotion?: boolean;
};

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.2, 0.6, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.2, 0.6, 0.3, 1] },
  },
};

const GalleryCarousel: React.FC<Props> = ({ posts, prefersReducedMotion = false }) => {
  const { image: logoImage, alt: logoAlt } = getCldImage("logo.main", { width: 112, autoQuality: true, autoFormat: true });
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-eco-600" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-eco-600" />
      </button>

      {/* Scrollable Container */}
      <motion.div
        ref={scrollContainerRef}
        variants={prefersReducedMotion ? undefined : containerVariants}
        viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.15 }}
        className="overflow-x-auto flex gap-6 pb-6 snap-x snap-mandatory scroll-smooth hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {posts.map((post) => (
          <motion.a
            key={post.id}
            href={post.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            variants={prefersReducedMotion ? undefined : itemVariants}
            whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            className="flex-none w-[350px] snap-center glass-card bg-card-foam rounded-3xl shadow-md overflow-hidden border border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
          >
            {/* Post Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.full_picture}
                alt="Post"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Post Content */}
            <div className="p-6 space-y-3">
              {/* Header with Logo */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-14 h-14 rounded-full glass-card ring-1 ring-white/60 flex items-center justify-center overflow-hidden">
                  <CldImage
                    image={logoImage}
                    alt={logoAlt}
                    className="w-auto h-14"
                  />
                </div>
                <span className="text-sm font-semibold text-earth-900">
                  300Riel 300Derm
                </span>
              </div>

              {/* Caption */}
              <p className="text-earth-700 line-clamp-3 group-hover:text-eco-700 transition-colors">
                {post.message}
              </p>

              {/* Date with Calendar Icon */}
              <div className="flex items-center space-x-2 text-earth-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {formatDate(post.created_time)}
                </span>
              </div>

              {/* External Link Indicator */}
              <div className="flex justify-end pt-4 border-t border-white/70">
                <ExternalLink className="w-4 h-4 text-eco-600 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default GalleryCarousel;
