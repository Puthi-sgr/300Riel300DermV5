import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { emailService } from "../../services/EmailService";
import { FormData } from "../../dto/Email.dto";
import ContactLayout from "./layout/ContactLayout";
import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

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

  return (
    <ContactLayout
      containerRef={ref}
      animate={inView}
      headerNode={<ContactHeader />}
      leftNode={
        <ContactForm
          formData={formData}
          isSubmitting={isSubmitting}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      }
      rightNode={<ContactInfo />}
    />
  );
};

export default Contact;
