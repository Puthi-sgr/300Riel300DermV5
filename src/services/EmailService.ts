import axios from "axios";
import emailjs from "@emailjs/browser";
import { FormData } from "../dto/Email.dto";
const EmailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const EmailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const EmailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

export const emailService = async (
  { email, name, message }: FormData,
  setIsSubmitting: (isSubmitting: boolean) => void
) => {
  setIsSubmitting(true);
  try {
    await emailjs.send(
      EmailServiceId,
      EmailTemplateId,
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      EmailPublicKey
    );

    alert("Thank you for sending a message, we will get back to you soon!");
  } catch (error) {
    alert("Failed to send message. Please try again.");
    console.error("Error sending email:", error);
  } finally {
    setIsSubmitting(false);
  }
};
