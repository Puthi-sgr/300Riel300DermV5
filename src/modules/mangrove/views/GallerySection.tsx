import React, { useMemo } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { useLanguage } from "../../../context/LanguageContext";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const GallerySection = () => {
  const { t } = useLanguage();

  const galleryItems = useMemo(() => {
    const tiles = [
      {
        src: "https://cdn.dribbble.com/userupload/6394144/file/original-8710c150db3cd4c4b6cb7727dfde7f2a.png?resize=2048x1536&vertical=center",
        thumb:
          "https://cdn.dribbble.com/userupload/6394144/file/original-8710c150db3cd4c4b6cb7727dfde7f2a.png?resize=2048x1536&vertical=center",
        subHtml: "<h4>Placeholder image</h4><p>Replace with your gallery items.</p>",
      },

    ];

    const sizeClasses = [
      "row-span-1 col-span-1",
      "row-span-2 col-span-1",
      "row-span-1 col-span-2",
      "row-span-2 col-span-3",
    ];

    return tiles.map((tile) => ({
      ...tile,
      sizeClass:
        sizeClasses[Math.floor(Math.random() * sizeClasses.length)],
    }));
  }, []);

  return (
    <div className="rounded-2xl bg-white shadow-lg p-6 space-y-3">
      <div className="flex items-center justify-center gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold uppercase tracking-wide text-eco-700 text-center">
            {t("project.gallery.title")}
          </h2>
          <p className="text-sm text-earth-700">{t("project.gallery.description")}</p>
        </div>
      </div>

      <div className="rounded-xl bg-eco-50/60 p-4">
        <LightGallery
          plugins={[lgZoom, lgThumbnail]}
          // Adjust `grid-cols-*` utilities below to change the number of columns at each breakpoint.
          // Adjust `auto-rows-[140px]` to make each mosaic row taller/shorter.
          elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] grid-flow-row-dense"
        >
          {galleryItems.map((item, index) => (
            <a
              key={`${item.src}-${index}`}
              href={item.src}
              data-lg-size="1600-1066"
              data-sub-html={item.subHtml}
              className={`group block h-full w-full rounded-xl overflow-hidden bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] ${item.sizeClass}`}
            >
              <img
                src={item.thumb}
                alt="Gallery placeholder"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default GallerySection;
