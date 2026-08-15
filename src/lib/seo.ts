import { routing } from "@/i18n/routing";

export const SITE_URL = "https://arona.terangadev.com";

/** Absolute URL for a given locale + app path ("/", "/work", "/work/nurapic"…). */
export function urlFor(locale: string, path: string): string {
  const clean = path === "/" ? "" : path;
  return locale === routing.defaultLocale
    ? `${SITE_URL}${clean}`
    : `${SITE_URL}/${locale}${clean}`;
}

/** canonical (self) + hreflang alternates for a page, per Next.js Metadata.alternates. */
export function alternatesFor(locale: string, path: string) {
  return {
    canonical: urlFor(locale, path),
    languages: {
      fr: urlFor("fr", path),
      en: urlFor("en", path),
      "x-default": urlFor("fr", path),
    },
  };
}

export function ogLocale(locale: string): string {
  return locale === "fr" ? "fr_FR" : "en_US";
}
