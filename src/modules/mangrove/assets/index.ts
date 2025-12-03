export type MangroveImage = {
  src: string;
  alt: string;
  credit?: string;
};

/**
 * Drop image files in this folder and register them here for easy reuse across
 * the mangrove module. Example:
 *
 * import hero from "./hero.jpg";
 * export const mangroveImages = {
 *   hero: { src: hero, alt: "Mangrove replanting day" },
 * };
 */
export const mangroveImages: Record<string, MangroveImage> = {};

export const getMangroveImage = (key: keyof typeof mangroveImages) =>
  mangroveImages[key];
