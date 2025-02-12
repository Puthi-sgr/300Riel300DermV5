import React, { useState, useEffect } from "react";
import {
  Facebook,
  ExternalLink,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/LanguageContext";
import { FacebookPost } from "../dto/Facebook.dto";
import { fetchFacebookPosts } from "../services/FacebookService";
import logo from "../Assets/logo2.png";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [facebookPosts, setFacebookPosts] = useState<FacebookPost[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchFacebookPosts();
      console.log(data);
      setFacebookPosts(data);
    };

    getPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-eco-50 to-white"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <Facebook className="w-12 h-12 text-[#1877F2]" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {t("gallery.title")}
          </h2>
        </motion.div>

        {/* Facebook Posts with Horizontal Scroll */}
        <div className="relative">
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
            variants={containerVariants}
            className="overflow-x-auto flex gap-6 pb-6 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {facebookPosts.map((post) => (
              <motion.a
                key={post.id}
                href={post.permalink_url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-none w-[350px] snap-center bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl group"
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
                <div className="p-6">
                  {/* Header with Logo */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#ffffff] flex items-center justify-center">
                      <img
                        src={logo}
                        alt="logo"
                        className="w-auto h-14  overflow-hidden"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      300Riel 300Derm
                    </span>
                  </div>

                  {/* Caption */}
                  <p className="text-gray-700 line-clamp-3 mb-4 group-hover:text-eco-700 transition-colors">
                    {post.message}
                  </p>

                  {/* Date with Calendar Icon */}
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {formatDate(post.created_time)}
                    </span>
                  </div>

                  {/* External Link Indicator */}
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <ExternalLink className="w-4 h-4 text-eco-600 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Follow Button */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.a
            href="https://web.facebook.com/profile.php?id=100091407241732"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-[#1877F2] hover:bg-[#1664d9] text-white font-semibold rounded-lg transition-colors group"
          >
            <Facebook className="mr-2" size={20} />
            {t("gallery.viewMore")}
            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;
