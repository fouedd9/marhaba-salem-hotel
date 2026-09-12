export const supportedLocales = ["fr", "en"] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = "fr";
export const localeLabels: Record<Locale, string> = { fr: "Français", en: "English" };
