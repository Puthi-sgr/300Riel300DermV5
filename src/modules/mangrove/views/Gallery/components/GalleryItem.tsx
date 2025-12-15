import React from "react";
import { CldImage } from "../../../../../components/media/CldImage";

export type ItemShape = {
  key: string;
  image: any;
  src: string;
  thumb: string;
  alt: string;
  subHtml?: string;
  sizeClass?: string;
};

type Props = {
  item: ItemShape;
  index?: number;
};

const GalleryItem: React.FC<Props> = ({ item, index = 0 }) => {
  return (
    <a
      key={`${item.src}-${index}`}
      href={item.src}
      data-lg-size="1600-900"
      data-thumb={item.thumb}
      data-sub-html={item.subHtml}
      className={`group block h-full w-full rounded-xl overflow-hidden bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] ${item.sizeClass ?? ""}`}
    >
      <CldImage
        image={item.image}
        alt={item.alt}
        className="h-full w-full object-cover"
      />
    </a>
  );
};

export default GalleryItem;
