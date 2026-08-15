import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });
  return {
    title: t("eyebrow"),
    description: t("intro"),
    alternates: alternatesFor(locale, "/contact"),
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div id="top">
      <section className="max-w-[820px] mx-auto px-10 max-sm:px-[22px] pt-24 pb-20 max-sm:pt-14 max-sm:pb-14">
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-7">
          {t("contactPage.eyebrow")}
        </div>

        <h1
          className="font-serif font-medium tracking-[-0.03em] leading-[1.0] text-fg m-0 mb-7"
          style={{ fontSize: "clamp(48px, 8vw, 88px)" }}
        >
          {t("contactPage.title")}{" "}
          <em className="italic font-normal text-accent">
            {t("contactPage.titleAccent")}
          </em>
          {t("contactPage.titleEnd")}
        </h1>

        <p className="text-[18px] leading-[1.6] text-fg-soft m-0 mb-12 max-w-[54ch]">
          {t("contactPage.intro")}
        </p>

        {/* Email — the primary channel */}
        <a
          href="mailto:arona.tounkaraa@gmail.com"
          className="inline-block font-serif font-medium tracking-[-0.015em] text-accent border-b-[1.5px] border-accent pb-1.5 mb-14 no-underline hover:text-accent-2 hover:border-accent-2 transition-colors [overflow-wrap:anywhere]"
          style={{ fontSize: "clamp(26px, 5vw, 44px)" }}
        >
          arona.tounkaraa@gmail.com
        </a>

        {/* Detail rows */}
        <dl className="grid grid-cols-1 gap-0 m-0 border-t border-rule">
          <ContactRow label={t("contactPage.phoneLabel")}>
            <a
              href="tel:+221781367845"
              className="text-fg hover:text-accent transition-colors"
            >
              {t("contact.phone")}
            </a>
          </ContactRow>

          <ContactRow label={t("contactPage.elsewhereLabel")}>
            <span className="flex flex-wrap gap-x-6 gap-y-2">
              <ExternalLink href="https://github.com/Rone221">GitHub</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/arona-tounkara221">
                LinkedIn
              </ExternalLink>
            </span>
          </ContactRow>

          <ContactRow label={t("contactPage.cvLabel")}>
            <a
              href="/cv-arona-tounkara.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-fg hover:text-accent transition-colors"
            >
              {t("contactPage.cvValue")}
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </ContactRow>
        </dl>
      </section>
    </div>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[130px_1fr] gap-6 py-5 border-b border-rule items-baseline max-sm:grid-cols-[90px_1fr] max-sm:gap-4">
      <dt className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
        {label}
      </dt>
      <dd className="m-0 text-[16px]">{children}</dd>
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-fg hover:text-accent transition-colors"
    >
      {children}
      <ArrowUpRight size={14} strokeWidth={2} />
    </a>
  );
}
