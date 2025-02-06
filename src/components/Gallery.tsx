import React from 'react';
import { Facebook, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const facebookPosts = [
    {
      id: 1,
      content: "Exciting day at our mangrove planting event! Over 100 community members joined us to plant 500 new mangrove seedlings. Together, we're making a difference! 🌱 #MangroveConservation #CommunityAction",
      image: 'https://images.unsplash.com/photo-1624963759505-923493f6cd3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'March 15, 2024',
      url: 'https://web.facebook.com/profile.php?id=100091407241732'
    },
    {
      id: 2,
      content: 'Environmental education workshop with local students! Teaching the next generation about the importance of mangrove conservation. 🎓 #EnvironmentalEducation #YouthEngagement',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'March 12, 2024',
      url: 'https://web.facebook.com/profile.php?id=100091407241732'
    },
    {
      id: 3,
      content: 'Meet our dedicated volunteers! These amazing individuals contribute their time and energy to protect our coastal ecosystems. Thank you for your commitment! 👏 #Volunteers #Conservation',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'March 8, 2024',
      url: 'https://web.facebook.com/profile.php?id=100091407241732'
    },
    {
      id: 4,
      content: 'Celebrating World Mangrove Day with our community! Join us in protecting these vital ecosystems. 🌿 #WorldMangroveDay #Conservation',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'March 5, 2024',
      url: 'https://web.facebook.com/profile.php?id=100091407241732'
    },
    {
      id: 5,
      content: 'New research findings on mangrove restoration success rates! Check out our latest report. 📊 #Research #MangroveRestoration',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'March 1, 2024',
      url: 'https://web.facebook.com/profile.php?id=100091407241732'
    }
  ];

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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-eco-50 to-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <Facebook className="w-12 h-12 text-[#1877F2]" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our journey on Facebook to stay updated with our latest activities and impact
          </p>
        </motion.div>

        {/* Facebook Posts with Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-eco-600" />
          </button>
          <button
            onClick={() => scroll('right')}
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
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {facebookPosts.map((post) => (
              <motion.a
                key={post.id}
                href={post.url}
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
                    src={post.image}
                    alt="Post"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Header with Logo */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">EcoVoice</span>
                  </div>

                  {/* Caption */}
                  <p className="text-gray-700 line-clamp-3 mb-4 group-hover:text-eco-700 transition-colors">
                    {post.content}
                  </p>

                  {/* Date with Calendar Icon */}
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{post.date}</span>
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
            View More on Facebook
            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;