"server-only";

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { type AbstractIntlMessages } from "next-intl";
import { locales, type Locale } from "./app/[locale]/libs/locales";

const messageImports = {
  en: () => import("./public/locales/en.json"), 
  fr: () => import("./public/locales/fr.json"), 
  es: () => import("./public/locales/es.json"), 
  ar: () => import("./public/locales/ar.json"), 
  de: () => import("./public/locales/de.json")
} as const satisfies Record<Locale, () => Promise<{ default: AbstractIntlMessages }>>;

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale);
}

export default getRequestConfig(async (params) => {
  const baseLocale = new Intl.Locale(params.locale).baseName;
  if (!isValidLocale(baseLocale)) notFound();

  const messages = (await messageImports[baseLocale]()).default;
  return {
    messages,
  };
});