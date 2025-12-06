// src/core/lib/cldAssets.ts
export type CldAssetKey =
    | "hero.main"
    | "mangrove.factImage";

export const cldAssets: Record<CldAssetKey, { publicId: string; alt: string }> = {
    "hero.main": { publicId: "Shockwave_vshxyk", alt: "Mangrove video" },
    "mangrove.factImage": { publicId: "trapeang-sangkae-community_nztxcy", alt: "Trapeang Sangkae Community" },
};