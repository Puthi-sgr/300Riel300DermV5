import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import { getCldImage } from "../core/lib/getCldImage";

const MetaTags = () => {
  const { language } = useLanguage();
  const { url: logoUrl } = getCldImage("logo.slogan", { width: 1200, autoQuality: true, autoFormat: true });

  const title = {
    en: "Plant Mangroves in Cambodia | 300Riel 300Derm - Restore Nature",
    km: "ដាំដើមកោងកាងនៅកម្ពុជា | ៣០០រៀល ៣០០ដើម - ស្ដារបរិស្ថាន",
  };

  const description = {
    en: "Support Cambodia's mangrove reforestation project! Plant trees, restore coastal ecosystems, fight climate change, and empower local communities for a greener future.",
    km: "គាំទ្រគម្រោងដាំដើមកោងកាងនៅកម្ពុជា! ដាំដើម, ស្ដារបរិស្ថានឆ្នេរសមុទ្រ,ប្រយុទ្ធនឹងការប្រែប្រួលអាកាសធាតុ, និងពង្រឹងសហគមន៍ដើម្បីអនាគតបៃតង។",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "300Riel 300Derm",
    url: "https://300riel300derm.com/",
    logo: logoUrl,
    description: description[language],
    areaServed: "Cambodia",
    sameAs: [
      "https://www.facebook.com/profile.php?id=100091407241732",
    ],
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{title[language]}</title>
      <meta name="description" content={description[language]} />
      <meta
        name="keywords"
        content="plant mangroves Cambodia, mangrove tree planting, reforestation Cambodia, coastal protection, climate action, eco-projects Cambodia, sustainable forestry, green Cambodia, volunteer tree planting, community conservation, marine ecosystem restoration, biodiversity conservation, environmental sustainability, eco-tourism Cambodia, carbon offset projects, climate resilience, blue carbon initiatives, Khmer environmental NGO, habitat restoration, coastline protection, sustainable development goals"
      />
      <meta
        name="subject"
        content="Cambodia mangrove restoration and environmental conservation"
      />
      <meta name="category" content="Environment" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="300Riel 300Derm" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="300Riel 300Derm" />
      <meta property="og:url" content="https://300riel300derm.com/" />
      <meta property="og:title" content={title[language]} />
      <meta property="og:description" content={description[language]} />
      <meta
        property="og:image:secure_url"
        content={logoUrl}
      />
      <meta
        property="og:image"
        content={logoUrl}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@300Riel300Derm" />
      <meta name="twitter:creator" content="@300Riel300Derm" />
      <meta name="twitter:title" content={title[language]} />
      <meta name="twitter:description" content={description[language]} />
      <meta
        name="twitter:image"
        content={logoUrl}
      />
      <meta
        name="twitter:image:alt"
        content="300Riel 300Derm Mangrove Planting Initiative"
      />

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
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default MetaTags;
