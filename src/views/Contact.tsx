import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/LanguageContext";
import { emailService } from "../services/EmailService";
import { FormData } from "../dto/Email.dto";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name === "" || formData.email === "" || formData.message === "") {
      alert("Please fill in all fields");
      return;
    }
    try {
      setIsSubmitting(true);
      await emailService(formData);
      if (isMountedRef.current) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      // alerts handled in emailService
    } finally {
      if (isMountedRef.current) {
        setIsSubmitting(false);
      }
    }
  };

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
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] py-16 sm:py-20"
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
          <p className="text-sm font-semibold uppercase text-eco-700 tracking-[0.28em]">
            {t("contact.title")}
          </p>
          <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-earth-700">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="glass-card bg-card-foam rounded-3xl shadow-impact border border-white/70 p-8 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-earth-900">
              {t("contact.title")}
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-earth-800"
                >
                  {t("contact.name")}
                </label>
                <motion.input
                  value={formData.name}
                  onChange={handleInputChange}
                  whileFocus={{ scale: 1.01 }}
                  placeholder="e.g. Puthi"
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-xl border border-white/70 bg-white/80 p-3 shadow-sm focus:border-eco-500 focus:ring-eco-500"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-earth-800"
                >
                  {t("contact.email")}
                </label>
                <motion.input
                  value={formData.email}
                  onChange={handleInputChange}
                  whileFocus={{ scale: 1.01 }}
                  placeholder="example@gmail.com"
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-xl border border-white/70 bg-white/80 p-3 shadow-sm focus:border-eco-500 focus:ring-eco-500"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-earth-800"
                >
                  {t("contact.message")}
                </label>
                <motion.textarea
                  value={formData.message}
                  onChange={handleInputChange}
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  rows={4}
                  placeholder="e.g. How can I help?"
                  className="mt-1 block w-full rounded-xl border border-white/70 bg-white/80 p-3 shadow-sm focus:border-eco-500 focus:ring-eco-500"
                ></motion.textarea>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-impact text-sm font-semibold text-white bg-eco-600 hover:bg-eco-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-500"
              >
                {isSubmitting ? "..." : t("contact.send")}
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card bg-card-glass rounded-3xl shadow-impact border border-white/70 p-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-earth-900 mb-6">
                {t("contact.info")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full glass-card ring-1 ring-white/60 flex items-center justify-center shadow-sm">
                    <Mail className="h-5 w-5 text-eco-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      {t("contact.email.label")}
                    </h4>
                    <p className="text-earth-700">{t("contact.email.value")}</p>
                    <p className="text-earth-600 text-sm mt-1">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full glass-card ring-1 ring-white/60 flex items-center justify-center shadow-sm">
                    <Phone className="h-5 w-5 text-eco-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      {t("contact.phone.label")}
                    </h4>
                    <p className="text-earth-700">{t("contact.phone.value")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full glass-card ring-1 ring-white/60 flex items-center justify-center shadow-sm">
                    <MapPin className="h-5 w-5 text-eco-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      {t("contact.location.label")}
                    </h4>
                    <p className="text-earth-700">{t("contact.location.value")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/70 shadow-impact">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7696716188416!2d104.89076832586723!3d11.56836269408571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517571af5219%3A0x1867ccb59bb50039!2z4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6f4Z-S4Z6Q4Z624Z6T4Z6X4Z624Z6f4Z624Z6U4Z6a4Z6R4Z-B4Z6f!5e0!3m2!1skm!2skh!4v1741784867762!5m2!1skm!2skh"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 260 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
