"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchTo = locale === "fr" ? "en" : "fr";

  const onClick = () => {
    startTransition(() => {
      router.replace(pathname, { locale: switchTo });
    });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isPending}
      aria-label={`FR · EN — ${t("langAria")}`}
      className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted hover:text-fg transition-colors bg-transparent border-0 cursor-pointer disabled:opacity-50 px-1 -mx-1 py-2 -my-2"
    >
      <span className={locale === "fr" ? "text-fg font-semibold" : "font-normal"}>
        FR
      </span>
      <span className="text-muted-2 mx-1" aria-hidden="true">
        ·
      </span>
      <span className={locale === "en" ? "text-fg font-semibold" : "font-normal"}>
        EN
      </span>
    </button>
  );
}
