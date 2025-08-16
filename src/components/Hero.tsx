import React from "react";
import { Facebook, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import heroImg from "../assets/HeroPictureCompressed.jpg";
const Hero = () => {
  const { t } = useLanguage();

  const scrollToDonate = () => {
    const donateSection = document.getElementById("donate");
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkToFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100091407241732",
      "_blank"
    );
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div style={{ display: "none" }} aria-hidden="true">
        <h1>Cambodia mangrove tree planting eco restoration project</h1>
        <h2>environmental conservation coastal reforestation climate action</h2>
        <h3>sustainable development community forestry biodiversity protection</h3>
        <h4>carbon sequestration habitat revival green initiative Southeast Asia</h4>
        <h5>renewable resources blue carbon mangrove nursery ocean safety</h5>
        <h6>eco education nature preservation ecosystem regeneration Cambodia</h6>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          aria-label="Plant mangrove trees in Cambodia to restore coastal ecosystems and fight climate change"
        >
          {t("hero.title")}
          <span className="sr-only">
            Cambodia mangrove tree planting environmental conservation eco project climate resilience blue carbon biodiversity restoration
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-200 mb-8"
        >
          {t("hero.subtitle")}
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToDonate}
            className="inline-flex items-center px-6 py-3 bg-eco-600 hover:bg-eco-700 text-white font-semibold rounded-lg"
          >
            <Heart className="mr-2" size={20} />
            {t("hero.donate")}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={linkToFacebook}
            className="inline-flex items-center px-6 py-3 bg-[#1877F2] hover:bg-[#1e4d8a] text-white font-semibold rounded-lg"
          >
            <Facebook className="mr-2" size={20} />
            {t("hero.follow")}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
