import React, { useMemo } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { useLanguage } from "../../../context/LanguageContext";
import { getCldImage } from "../../../core/lib/getCldImage";
import { CldImage } from "../../../components/media/CldImage";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const GallerySection = () => {
  const { t } = useLanguage();

  const galleryItems = useMemo(() => {
    // Fixed layout (no randomization) to match the provided mosaic style.
    const orderedKeys: Array<
      | "gallery.banner"
      | "gallery.seyhaPlanting"
      | "gallery.pichtaPlanting"
      | "gallery.nitaPlanting"
      | "gallery.ranger"
      | "gallery.droneShot"
      | "gallery.boat"
      | "gallery.ranger2"
      | "gallery.eating"
      | "gallery.groupVilla"
      | "gallery.droneShot2"
    > = [
      "gallery.groupVilla",
      "gallery.banner",
      "gallery.droneShot2",
      "gallery.seyhaPlanting",
      "gallery.nitaPlanting",
       "gallery.pichtaPlanting",
      "gallery.ranger",
      "gallery.boat",
      "gallery.ranger2",
      "gallery.droneShot",
      "gallery.eating",
      
       
    ];

    const sizeClasses = [
      "col-span-6 row-span-3", // 1
      "col-span-6 row-span-3", // 2
      "col-span-8 row-span-4", // 3
      "col-span-4 row-span-2", // 4
      "col-span-4 row-span-2", // 5
      "col-span-6 row-span-3", // 6
      "col-span-6 row-span-3", // 7
      "col-span-7 row-span-2", // 8 (mirror start)
      "col-span-5 row-span-2", // 9
      "col-span-8 row-span-4", // 10
      "col-span-4 row-span-4", // 11
    ];

    return orderedKeys.map((key, idx) => {
      const { image, url, alt } = getCldImage(key, { width: 1400, autoQuality: true, autoFormat: true });
      return {
        key,
        image,
        src: url,
        thumb: url,
        alt,
        subHtml: `<h4>${alt}</h4>`,
        sizeClass: sizeClasses[idx] ?? "col-span-6 row-span-3",
      };
    });
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
          mode="lg-fade"
          speed={500}
          zoomFromOrigin={false}
          // Adjust `grid-cols-*` utilities below to change the number of columns at each breakpoint.
          // Adjust `auto-rows-[140px]` to make each mosaic row taller/shorter.
          elementClassNames="grid grid-cols-12 gap-4 auto-rows-[120px] md:auto-rows-[140px] lg:auto-rows-[160px]"
        >
          {galleryItems.map((item, index) => (
            <a
              key={`${item.src}-${index}`}
              href={item.src}
              data-lg-size="1600-900"
                data-thumb={item.thumb}
              data-sub-html={item.subHtml}
              className={`group block h-full w-full rounded-xl overflow-hidden bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] ${item.sizeClass}`}
            >
              <CldImage
                image={item.image}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default GallerySection;
