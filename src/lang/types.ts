export type Language = "en" | "km";

export type Dict = Record<string, string>; //Key, and value (the true content)

/**
 * The shape every dictionary in your app must follow.
 * (shared strings, module strings, per-view strings, etc.)
 */
export type StringsByLanguage = Record<Language, Dict>;