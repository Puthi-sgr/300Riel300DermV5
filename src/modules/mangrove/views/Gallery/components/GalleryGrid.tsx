import React from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import GalleryItem, { ItemShape } from "./GalleryItem";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

type Props = {
  items: ItemShape[];
};

const GalleryGrid: React.FC<Props> = ({ items }) => {
  return (
    <div className="rounded-xl bg-eco-50/60 p-4">
      <LightGallery
        plugins={[lgZoom, lgThumbnail]}
        mode="lg-fade"
        speed={500}
        zoomFromOrigin={false}
        elementClassNames="grid grid-cols-12 gap-4 auto-rows-[120px] md:auto-rows-[140px] lg:auto-rows-[160px]"
      >
        {items.map((item, idx) => (
          <GalleryItem key={`${item.src}-${idx}`} item={item} index={idx} />
        ))}
      </LightGallery>
    </div>
  );
};

export default GalleryGrid;
