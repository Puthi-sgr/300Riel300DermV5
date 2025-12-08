export type CldAssetKey =
    | "hero.main"
    | "mangrove.factImage"
    | "mangrove.seedlings"
    | "sponsors.ktvilla"
    | "sponsors.giantibis"
    | "qrcode.donation"
    | "logo.slogan"
    | "logo.mono"
    | "logo.main"
    | "feature.mangrove"
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
    | "gallery.droneShot2";

export const cldAssets: Record<CldAssetKey, { publicId: string; alt: string }> = {
    "hero.main": { publicId: "Shockwave_vshxyk", alt: "Mangrove video" },
    "mangrove.factImage": { publicId: "trapeang-sangkae-community_nztxcy", alt: "Trapeang Sangkae Community" },
    "mangrove.seedlings": { publicId: "MangroveLaying-min_bsm7xq", alt: "Mangrove seedlings being planted" },
    "sponsors.ktvilla": { publicId: "GI_Logo_imrluu", alt: "KT Villa partner logo" },
    "sponsors.giantibis": { publicId: "partnere1_xemofv", alt: "Giant Ibis partner logo" },
    "qrcode.donation": { publicId: "QR_mqnzk9", alt: "Donation QR code" },
    "logo.slogan": { publicId: "logoxSlogan-min_g6qdyl", alt: "300 Riel slogan logo" },
    "logo.mono": { publicId: "Monochrome-min_jha5qk", alt: "300 Riel monochrome logo" },
    "logo.main": { publicId: "logo2_hq0gp1", alt: "300 Riel primary logo" },
    "feature.mangrove": { publicId: "GroupPictureAtTrampaengSangkae-min_jtdhhp", alt: "Mangrove feature group picture" },
    "gallery.banner": { publicId: "SomeRandomBanner-min_uwfxqs", alt: "Mangrove project banner" },
    "gallery.seyhaPlanting": { publicId: "SeyhaPlanting-min_fgau2c", alt: "Seyha planting mangroves" },
    "gallery.pichtaPlanting": { publicId: "PichtaPlantingInWater-min_rgr4ym", alt: "Pichta planting in water" },
    "gallery.nitaPlanting": { publicId: "NitaPlantingInWater-min_vupwvg", alt: "Nita planting in water" },
    "gallery.ranger": { publicId: "MangroveRanger-min_j8gxdg", alt: "Mangrove ranger portrait" },
    "gallery.droneShot": { publicId: "DroneShot1-min_mqekmf", alt: "Mangrove site drone shot" },
    "gallery.boat": { publicId: "RandomBoat-min_shbf49", alt: "Boat near mangrove site" },
    "gallery.ranger2": { publicId: "MangroveRanger2-min_ivncyn", alt: "Second mangrove ranger portrait" },
    "gallery.eating": { publicId: "EatingActivity-min_uqoxhh", alt: "Team sharing a meal" },
    "gallery.groupVilla": { publicId: "GroupPictureAtDeKtVilla-min_j0ygpd", alt: "Group picture at De KT Villa" },
    "gallery.droneShot2": { publicId: "DroneShot2-min_zeyy5o", alt: "Second mangrove site drone shot" },
};