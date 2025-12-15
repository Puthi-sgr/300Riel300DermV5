import { getCldImage } from "../../../../../core/lib/getCldImage";

export type GalleryItemShape = {
    key: string;
    image: any;
    src: string;
    thumb: string;
    alt: string;
    subHtml: string;
    sizeClass: string;
};

export const getGalleryItems = (): GalleryItemShape[] => {
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
        "col-span-6 row-span-3",
        "col-span-6 row-span-3",
        "col-span-8 row-span-4",
        "col-span-4 row-span-2",
        "col-span-4 row-span-2",
        "col-span-6 row-span-3",
        "col-span-6 row-span-3",
        "col-span-7 row-span-2",
        "col-span-5 row-span-2",
        "col-span-8 row-span-4",
        "col-span-4 row-span-4",
    ];

    return orderedKeys.map((key, idx) => {
        const main = getCldImage(key, { width: 1400, autoQuality: true, autoFormat: true });
        const thumb = getCldImage(key, { width: 480, autoQuality: true, autoFormat: true });

        return {
            key,
            image: main.image,
            src: main.url,
            thumb: thumb.url,
            alt: main.alt,
            subHtml: `<h4>${main.alt}</h4>`,
            sizeClass: sizeClasses[idx] ?? "col-span-6 row-span-3",
        };
    });
};

export default getGalleryItems;
