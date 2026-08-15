import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-9 pb-11 border-t border-rule">
      <div className="flex justify-between flex-wrap gap-5">
        <div className="flex gap-[22px] flex-wrap items-center">
          <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted">
            {t("copyright")}
          </span>
          <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted">
            {t("location")}
          </span>
        </div>
        <div className="flex gap-[22px] flex-wrap items-center">
          <Link
            href="/uses"
            className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted hover:text-fg transition-colors"
          >
            {t("stackLink")}
          </Link>
          <a
            href="#top"
            className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted hover:text-fg transition-colors"
          >
            {t("backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
}
