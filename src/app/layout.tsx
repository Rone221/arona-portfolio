import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arona.terangadev.com"),
  title: {
    default: "Arona Tounkara — Fullstack Developer & Co-founder",
    template: "%s · Arona Tounkara",
  },
  description:
    "Développeur fullstack et co-founder basé à Dakar. Je conçois et je livre des produits web, de la spec au serveur.",
  authors: [{ name: "Arona Tounkara", url: "https://arona.terangadev.com" }],
  creator: "Arona Tounkara",
  openGraph: {
    type: "website",
    siteName: "Arona Tounkara",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AronaTounkara",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
