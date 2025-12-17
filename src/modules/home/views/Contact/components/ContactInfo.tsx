import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../../../../../context/LanguageContext";

const ContactInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
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
    </>
  );
};

export default ContactInfo;
