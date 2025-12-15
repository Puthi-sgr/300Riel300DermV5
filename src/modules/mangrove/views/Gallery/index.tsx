import React from "react";
import GalleryLayout from "./layout/GalleryLayout";
import { useLanguage } from "../../../../context/LanguageContext";
import GalleryHeader from "./components/GalleryHeader";
import GalleryGrid from "./components/GalleryGrid";
import getGalleryItems from "./components/getGalleryItems";

const GalleryPage: React.FC = () => {
  const { t } = useLanguage();

  const title = t("mangrove.gallery.title") || "Gallery";
  const description = t("mangrove.gallery.description") || undefined;

  const items = getGalleryItems();

  const galleryHeader = <GalleryHeader title={title} description={description} />;
  const galleryGrid = <GalleryGrid items={items} />
  return (
    <GalleryLayout
      headerNode={galleryHeader}
      galleryNode={galleryGrid}
    />
  );
};

export default GalleryPage;
