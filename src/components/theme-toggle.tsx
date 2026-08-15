"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("nav");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  // Visible text = the theme you switch TO (mounted), placeholder before hydration.
  const label = mounted ? (isDark ? t("themeToggleLight") : t("themeToggleDark")) : "—";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      // Accessible name contains the visible word (WCAG 2.5.3)
      aria-label={mounted ? `${label} — ${t("themeAria")}` : t("themeAria")}
      className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted hover:text-fg transition-colors bg-transparent border-0 cursor-pointer px-1 -mx-1 py-2 -my-2"
    >
      {label}
    </button>
  );
}
