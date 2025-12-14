//Strings data translation logic
import type { Dict, Language, StringsByLanguage } from "./types";

const mergeLang = (lang: Language, parts: StringsByLanguage[]): Dict => {
    const out: Dict = {};
    const seen = new Set<string>();

    for (const part of parts) {
        const dict = part[lang] ?? {};
        for (const [key, value] of Object.entries(dict)) {
            if (import.meta.env.DEV && (key in out) && !seen.has(`${lang}:${key}`)) {
                // Warn once per key per language (helps detect collisions).
                // eslint-disable-next-line no-console
                console.warn(`[lang] duplicate key "${key}" for "${lang}" — last one wins`);
                seen.add(`${lang}:${key}`);
            }
            out[key] = value;
        }
    }

    return out;
};

export const mergeStrings = (...parts: StringsByLanguage[]): StringsByLanguage => ({
    // The mergeLang function will take care of merging based on the language like english or khmer
    en: mergeLang("en", parts),
    km: mergeLang("km", parts),
});