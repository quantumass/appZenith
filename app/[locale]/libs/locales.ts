export const locales = ["en", "fr", "es", "ar", "de"] as const;
export type Locale = (typeof locales)[number];