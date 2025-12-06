import { cld } from "./cld";
import { cldAssets, CldAssetKey } from "./cldAssets";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as formatAuto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as qualityAuto } from "@cloudinary/url-gen/qualifiers/quality";

type GetCldImageOptions = {
    width?: number;
    height?: number;
    /**
     * Defaults to auto; set to false to skip.
     */
    autoFormat?: boolean;
    /**
     * Defaults to auto; set to false to skip.
     */
    autoQuality?: boolean;
};

export const getCldImage = (key: CldAssetKey, opts: GetCldImageOptions = {}) => {
    const asset = cldAssets[key];
    if (!asset) {
        throw new Error(`Unknown Cloudinary asset key: ${key}`);
    }

    const img = cld.image(asset.publicId);

    if (opts.width != null || opts.height != null) {
        const resize = scale();
        if (opts.width != null) resize.width(opts.width);
        if (opts.height != null) resize.height(opts.height);
        img.resize(resize);
    }

    if (opts.autoFormat !== false) {
        img.delivery(format(formatAuto()));
    }

    if (opts.autoQuality !== false) {
        img.delivery(quality(qualityAuto()));
    }

    return {
        url: img.toURL(),
        alt: asset.alt,
    };
};