import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../../context/LanguageContext";
import { useContactForm } from "../hook/useContactForm";
import ContactLayout from "../layout/ContactLayout";
import ContactHeader from "../components/ContactHeader";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useContactForm();

  return (
    <>
      <Helmet>
        <title>{t("contact.title") || "Contact Us - 300 Riels 300 Derm"}</title>
      </Helmet>
      
      {/* Added top padding (pt-20) to account for fixed navbar */}
      <div className="pt-20 min-h-screen bg-green-50">
       <ContactLayout
          
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
            animate={true}
        />
      </div>
    </>
  );
};

export default ContactPage;