import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  BookText as TikTok,
  Heart,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import logo from "../Assets/Monochrome.png";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: TikTok, href: "https://tiktok.com", label: "TikTok" },
  ];

  const quickLinks = [
    { name: t("footer.about"), href: "#about" },
    { name: t("footer.gallery"), href: "#gallery" },
    { name: t("footer.donate"), href: "#donate" },
    { name: t("footer.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-eco-900 to-eco-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-eco-100">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t("footer.about")}
            </h3>
            <p className="text-eco-200 mb-4">{t("footer.about.subtitle")}</p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-eco-300 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-eco-200 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission Statement */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t("footer.mission")}
            </h3>
            <p className="text-eco-200 mb-4">{t("footer.mission.subtitle")}</p>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="pt-8 mt-8 border-t border-eco-700">
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Logo */}
            <motion.div className="h-auto">
              <img src={logo} alt="Logo" className="h-32" />
            </motion.div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-eco-300 text-sm">{t("footer.copyright")}</p>
              <p className="text-eco-400 text-xs mt-1 flex items-center justify-center">
                {t("footer.privacy")} | {t("footer.terms")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
