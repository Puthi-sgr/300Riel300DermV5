import { useInView } from "react-intersection-observer";
import { useContactForm } from "../../../contact/hook/useContactForm";
import ContactLayout from "../../../contact/layout/ContactLayout";
import ContactHeader from "../../../contact/components/ContactHeader";
import ContactForm from "../../../contact/components/ContactForm";
import ContactInfo from "../../../contact/components/ContactInfo";

const Contact = () => {
  
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useContactForm();

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
