import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { alternatesFor, ogLocale, urlFor } from "@/lib/seo";
import { newsreader } from "@/app/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "fr"
      ? "Arona Tounkara — Développeur fullstack & co-founder"
      : "Arona Tounkara — Fullstack developer & co-founder";
  const description =
    locale === "fr"
      ? "Développeur fullstack et co-founder basé à Dakar. Je conçois et je livre des produits web, de la spec au serveur."
      : "Fullstack developer and co-founder based in Dakar. I design and ship web products, from spec to server.";

  return {
    title: { default: title, template: "%s · Arona Tounkara" },
    description,
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      type: "website",
      siteName: "Arona Tounkara",
      title,
      description,
      url: urlFor(locale, "/"),
      locale: ogLocale(locale),
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("nav");

  // JSON-LD Person for rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arona Tounkara",
    url: urlFor(locale, "/"),
    jobTitle: locale === "fr" ? "Développeur fullstack & co-founder" : "Fullstack developer & co-founder",
    address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
    email: "mailto:arona.tounkaraa@gmail.com",
    sameAs: [
      "https://github.com/Rone221",
      "https://www.linkedin.com/in/arona-tounkara221",
    ],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={newsreader.variable}
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-bg focus:text-fg focus:px-4 focus:py-2 focus:border focus:border-fg"
            >
              {t("skipToContent")}
            </a>
            <Nav />
            <main id="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
