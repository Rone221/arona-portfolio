import { Newsreader } from "next/font/google";

// Serif éditoriale embarquée (self-hosted par next/font) — garantit l'identité
// typographique partout, y compris sur Android où le stack système s'effondre.
// Newsreader : old-style humaniste à italique calligraphique forte, non-cliché.
export const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-newsreader",
  adjustFontFallback: true,
});
