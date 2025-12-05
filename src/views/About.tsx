import React from "react";
import { Target, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              {t("about.mission")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("about.missionText")}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">
              {t("about.story")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("about.storyText")}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-4">
              {t("about.objectives")}
            </h3>
            <ul className="space-y-12">
              {[
                {
                  icon: Target,
                  text: t("about.objective1"),
                },
                // { icon: Heart, text: t("about.objective2") },
                { icon: Users, text: t("about.objective3") },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start p-4 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="bg-eco-50 p-2 rounded-full">
                    <item.icon className="flex-shrink-0 h-6 w-6 text-eco-500 mt-1" />
                  </div>
                  <span className="ml-4 text-gray-600 text-xl leading-relaxed">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
