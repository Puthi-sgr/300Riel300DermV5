export type CldAssetKey =
    | "hero.main"
    | "mangrove.factImage"
    | "sponsors.ktvilla"
    | "sponsors.giantibis"
    | "qrcode.donation"
    | "logo.slogan"
    | "logo.mono"
    | "logo.main"

export const cldAssets: Record<CldAssetKey, { publicId: string; alt: string }> = {
    "hero.main": { publicId: "Shockwave_vshxyk", alt: "Mangrove video" },
    "mangrove.factImage": { publicId: "trapeang-sangkae-community_nztxcy", alt: "Trapeang Sangkae Community" },
    "sponsors.ktvilla": { publicId: "GI_Logo_imrluu", alt: "KT Villa partner logo" },
    "sponsors.giantibis": { publicId: "partnere1_xemofv", alt: "Giant Ibis partner logo" },
    "qrcode.donation": { publicId: "QR_mqnzk9", alt: "Donation QR code" },
    "logo.slogan": { publicId: "logoxSlogan-min_g6qdyl", alt: "300 Riel slogan logo" },
    "logo.mono": { publicId: "Monochrome-min_jha5qk", alt: "300 Riel monochrome logo" },
    "logo.main": { publicId: "logo2_hq0gp1", alt: "300 Riel primary logo" },
};