import React from "react";
import { Heart, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../../context/LanguageContext";
import { CldImage } from "../../../../../components/media/CldImage";
import { getCldImage } from "../../../../../core/lib/getCldImage";

type Props = {
  onDonateClick: () => void;
};

const PaymentInfo: React.FC<Props> = ({ onDonateClick }) => {
  const { t } = useLanguage();
  const { image: qrImage, alt: qrAlt } = getCldImage("qrcode.donation", {
    width: 720,
    autoQuality: true,
    autoFormat: true,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
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
        onClick={onDonateClick}
        className="w-full mt-2 flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-btn-eco shadow-btn-soft"
      >
        <Heart className="mr-2" size={20} />
        {t("donate.link")}
      </motion.button>
    </div>
  );
};

export default PaymentInfo;
