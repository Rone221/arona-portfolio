import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";

export async function Nav() {
  const t = await getTranslations("nav");

  return (
    <header className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-4 flex flex-wrap items-center justify-between gap-x-6 border-b border-rule">
      {/* Row 1 · left — wordmark */}
      <Link
        href="/"
        aria-label={t("home")}
        className="order-1 font-serif text-[17px] font-medium tracking-[-0.01em] text-fg py-1"
      >
        <em className="italic font-normal">Arona</em> Tounkara
      </Link>

      {/* Row 1 · right — language + theme (desktop: far right) */}
      <div className="order-2 sm:order-3 flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {/* Row 2 on mobile (full-width, under a rule) · inline on desktop */}
      <nav
        aria-label={t("ariaPrimary")}
        className="order-3 sm:order-2 w-full sm:w-auto mt-3 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-rule"
      >
        <ul className="flex justify-between sm:justify-start sm:gap-7 items-baseline list-none m-0 p-0">
          <NavLink href="/work">{t("work")}</NavLink>
          <NavLink href="/about">{t("about")}</NavLink>
          <NavLink href="/uses">{t("uses")}</NavLink>
          <NavLink href="/contact">{t("contact")}</NavLink>
        </ul>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-block font-mono text-[11px] tracking-[0.14em] uppercase text-muted py-2.5 sm:py-1 border-b border-transparent hover:text-fg hover:border-fg transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
