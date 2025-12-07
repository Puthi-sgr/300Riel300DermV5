import React from "react";
import { Heart, QrCode, Smartphone, CreditCard, Building2 } from "lucide-react";
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
  const { image: qrImage, alt: qrAlt } = getCldImage("qrcode.donation", { width: 720, autoQuality: true, autoFormat: true });

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
      className="py-20 bg-gradient-to-b from-eco-50 via-white to-eco-50"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("donate.title")}
          </h2>
          <p className="mt-4 text-xl text-gray-600">{t("donate.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Why Support Matters */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              {t("donate.why")}
            </h3>

            <div className="space-y-6">
              <div className="bg-eco-50 rounded-lg p-6">
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🌱</span>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t("donate.impact.info1.header")}
                      </h4>
                      <p>{t("donate.impact.info1")}</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t("donate.impact.info2.header")}
                      </h4>
                      <p>{t("donate.impact.info2")}</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t("donate.impact.info3.header")}
                      </h4>
                      <p>{t("donate.impact.info3")}</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t("donate.impact.info4.header")}
                      </h4>
                      <p>{t("donate.impact.info4")}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-earth-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-3">
                  {t("donate.impact")}
                </h4>
                <p className="text-gray-600">
                  {t("donate.impact.appreciation")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Payment Methods */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              {t("donate.payment")}
            </h3>

            <div className="space-y-6">
              {/* Mobile Payment Section with QR Code */}
              <div className="border-2 border-eco-100 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Smartphone className="w-6 h-6 text-eco-600 mr-2" />
                  <h4 className="text-lg font-medium text-gray-900">
                    {t("donate.mobile")}
                  </h4>
                </div>

                {/* QR Code Placeholder */}
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 mb-4">
                  <CldImage
                    image={qrImage}
                    alt={qrAlt}
                    className="w-auto h-auto mb-2 rounded-[32px]"
                  />

                  <p className="text-sm text-gray-500 text-center">
                    Scan QR code to make payment
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-medium text-gray-900">
                      Nita SOKHA
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Account Number:</span>
                    <span className="font-medium text-gray-900">
                      009 586 614
                    </span>
                  </div>
                </div>
              </div>

              {/* Other Payment Methods */}
              {/* <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CreditCard className="w-6 h-6 text-eco-600 mr-3" />
                  <div>
                    <h5 className="font-medium text-gray-900">
                      {t("donate.credit")}
                    </h5>
                    <p className="text-sm text-gray-600">Coming soon</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Building2 className="w-6 h-6 text-eco-600 mr-3" />
                  <div>
                    <h5 className="font-medium text-gray-900">
                      {t("donate.bank")}
                    </h5>
                    <p className="text-sm text-gray-600">
                      Contact us for details
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDonationLink}
              className="w-full mt-8 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-eco-600 hover:bg-eco-700"
            >
              <Heart className="mr-2" size={20} />
              {t("donate.link")}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Donate;
