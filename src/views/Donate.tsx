import React from "react";
import { Heart, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/LanguageContext";
import { CldImage } from "../components/media/CldImage";
import { getCldImage } from "../core/lib/getCldImage";

const Donate = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();
  const { image: qrImage, alt: qrAlt } = getCldImage("qrcode.donation", {
    width: 720,
    autoQuality: true,
    autoFormat: true,
  });

  const handleDonationLink = () => {
    window.open("https://pay.ababank.com/77Lo2oCdT26yWVW98", "_blank");
  };

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
    <section
      id="donate"
      className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-eco-300/25 blur-[140px]" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-eco-200/30 blur-[160px]" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
      >
        <motion.div variants={itemVariants} className="text-center space-y-3">
          <p className="text-sm font-semibold uppercase text-eco-700 tracking-normal">
            {t("donate.title")}
          </p>
          <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl">
            {t("donate.title")}
          </h2>
          <p className="text-lg text-earth-700">{t("donate.subtitle")}</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card bg-card-glass rounded-3xl shadow-impact border border-white/70 p-6 sm:p-8 space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-earth-900">{t("donate.why")}</h3>
              <ul className="space-y-4 text-earth-700 bg-card-foam rounded-2xl p-6 border border-white/70 shadow-sm">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🌱</span>
                  <div>
                    <h4 className="font-semibold text-earth-900">{t("donate.impact.info1.header")}</h4>
                    <p>{t("donate.impact.info1")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🤝</span>
                  <div>
                    <h4 className="font-semibold text-earth-900">{t("donate.impact.info2.header")}</h4>
                    <p>{t("donate.impact.info2")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">📚</span>
                  <div>
                    <h4 className="font-semibold text-earth-900">{t("donate.impact.info3.header")}</h4>
                    <p>{t("donate.impact.info3")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🌊</span>
                  <div>
                    <h4 className="font-semibold text-earth-900">{t("donate.impact.info4.header")}</h4>
                    <p>{t("donate.impact.info4")}</p>
                  </div>
                </li>
              </ul>
              <div className="rounded-2xl border border-white/70 bg-card-foam p-6 shadow-sm">
                <h4 className="font-semibold text-earth-900 mb-3">{t("donate.impact")}</h4>
                <p className="text-earth-700">{t("donate.impact.appreciation")}</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-earth-900">{t("donate.payment")}</h3>
              <div className="rounded-2xl border border-white/70 bg-card-grain p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Smartphone className="w-6 h-6 text-eco-700 mr-2" />
                  <h4 className="text-lg font-semibold text-earth-900">{t("donate.mobile")}</h4>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white/70 rounded-xl border border-white/70 shadow-inner mb-4">
                  <CldImage
                    image={qrImage}
                    alt={qrAlt}
                    className="w-auto h-auto mb-2 rounded-[32px] shadow-sm"
                  />
                  <p className="text-sm text-earth-700 text-center">Scan QR code to make payment</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-earth-700">
                    <span>Account Name:</span>
                    <span className="font-semibold text-earth-900">Nita SOKHA</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-earth-700">
                    <span>Account Number:</span>
                    <span className="font-semibold text-earth-900">009 586 614</span>
                  </div>
                </div>
              </div>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDonationLink}
              className="w-full mt-2 flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-btn-eco shadow-btn-soft"
            >
                <Heart className="mr-2" size={20} />
                {t("donate.link")}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Donate;
