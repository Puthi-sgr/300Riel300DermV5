import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../../context/LanguageContext";
import { FormData } from "../../../../../dto/Email.dto";

type Props = {
  formData: FormData;
  isSubmitting: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ContactForm: React.FC<Props> = ({
  formData,
  isSubmitting,
  onInputChange,
  onSubmit,
}) => {
  const { t } = useLanguage();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <h3 className="text-2xl font-semibold text-earth-900">
        {t("contact.title")}
      </h3>
      <form className="space-y-6" onSubmit={onSubmit}>
        <motion.div variants={itemVariants} className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-earth-800"
          >
            {t("contact.name")}
          </label>
          <motion.input
            value={formData.name}
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
    </>
  );
};

export default ContactForm;
