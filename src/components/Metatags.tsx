import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import logoSlogan from "../Assets/logoxSlogan.jpg";
const MetaTags = () => {
  const { language } = useLanguage();

  const title = {
    en: "Plant Mangroves in Cambodia | 300Riel 300Derm - Restore Nature",
    km: "ដាំដើមកោងកាងនៅកម្ពុជា | ៣០០រៀល ៣០០ដើម - ស្ដារបរិស្ថាន",
  };

  const description = {
    en: "Support Cambodia's mangrove reforestation project! Plant trees, restore coastal ecosystems, fight climate change, and empower local communities for a greener future.",
    km: "គាំទ្រគម្រោងដាំដើមកោងកាងនៅកម្ពុជា! ដាំដើម, ស្ដារបរិស្ថានឆ្នេរសមុទ្រ,ប្រយុទ្ធនឹងការប្រែប្រួលអាកាសធាតុ, និងពង្រឹងសហគមន៍ដើម្បីអនាគតបៃតង។",
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{title[language]}</title>
      <meta name="description" content={description[language]} />
      <meta
        name="keywords"
        content="plant mangroves Cambodia, mangrove tree planting, reforestation Cambodia, coastal protection, climate action, eco-projects Cambodia, sustainable forestry, green Cambodia, volunteer tree planting, community conservation, marine ecosystem restoration, biodiversity conservation, environmental sustainability, eco-tourism Cambodia"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title[language]} />
      <meta property="og:description" content={description[language]} />
      <meta property="og:image" content={logoSlogan} />
      <meta property="og:url" content="https://300riel300derm.com/" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title[language]} />
      <meta name="twitter:description" content={description[language]} />
      <meta name="twitter:image" content={logoSlogan} />

      {/* Language alternates */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://300riel300derm.com/?lang=en"
      />
      <link
        rel="alternate"
        hrefLang="km"
        href="https://300riel300derm.com/?lang=km"
      />
      <link rel="canonical" href="https://300riel300derm.com/" />
    </Helmet>
  );
};

export default MetaTags;
