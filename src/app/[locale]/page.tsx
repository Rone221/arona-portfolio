import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { featuredProjects } from "@/content/projects";
import { journey } from "@/content/journey";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectRow } from "@/components/project-row";
import { toRowData } from "@/lib/project-view";

type Locale = "fr" | "en";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const l = locale as Locale;
  const statusLabels = {
    production: t("work.statusProduction"),
    tests: t("work.statusTests"),
    dev: t("work.statusDev"),
  };

  return (
    <div id="top">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] pt-20 pb-24 max-sm:pt-12 max-sm:pb-16 max-[960px]:pb-16">
        <div className="grid grid-cols-[1.35fr_1fr] gap-[72px] items-stretch max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <div>
            {/* Eyebrow */}
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-7">
              {t("hero.eyebrowLabel")}
              <span className="text-rule-2 mx-2.5">/</span>
              2026
              <span className="text-rule-2 mx-2.5">/</span>
              {t("hero.eyebrowLocation")}
              <span className="text-rule-2 mx-2.5">/</span>
              <span className="text-accent">{t("hero.available")}</span>
            </div>

            {/* Big name */}
            <h1
              className="font-serif font-medium leading-[0.92] tracking-[-0.035em] text-fg m-0 mb-10"
              style={{ fontSize: "clamp(56px, 11vw, 128px)" }}
            >
              <span className="block italic font-normal">{t("hero.firstName")}</span>
              <span className="block">{t("hero.lastName")}</span>
            </h1>

            {/* Lede */}
            <p
              className="font-serif leading-[1.4] text-fg m-0 mb-5 tracking-[-0.005em] max-w-[42ch]"
              style={{ fontSize: "clamp(20px, 2.2vw, 24px)" }}
            >
              {t("hero.lede")}
            </p>

            {/* Description */}
            <p className="text-base leading-[1.6] text-fg-soft m-0 mb-8 max-w-[48ch]">
              {t("hero.desc")}
            </p>

            {/* CTAs */}
            <div className="flex gap-[22px] items-center flex-wrap">
              <Link
                href="/work"
                className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[14.5px] font-medium bg-accent text-bg no-underline transition-colors hover:bg-accent-2 tracking-[-0.005em]"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[15px] text-fg pb-1 border-b border-fg no-underline hover:text-accent hover:border-accent transition-colors"
              >
                {t("hero.ctaSecondary")}
                <ArrowUpRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Photo — stretches to match the text column, aligning top & bottom */}
          <figure className="m-0 max-[960px]:max-w-[360px]">
            <div className="relative h-full min-h-[440px] w-full bg-wash border border-rule overflow-hidden max-[960px]:aspect-[3/4] max-[960px]:h-auto max-[960px]:min-h-0">
              <Image
                src="/arona-portrait.jpeg"
                alt={`${t("hero.firstName")} ${t("hero.lastName").replace(/\.$/, "")}`}
                fill
                sizes="(max-width: 960px) 360px, 40vw"
                priority
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </figure>
        </div>
      </section>

      {/* ─── §01 Work ───────────────────────────────────────────────── */}
      <section
        id="work"
        className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] pt-24 pb-20 max-sm:pt-16 max-sm:pb-12 border-t border-rule"
      >
        <SectionHead num="01" meta={t("work.sectionMeta")}>
          {t("work.sectionTitle")}{" "}
          <em className="italic font-normal">{t("work.sectionTitleAccent")}</em>
        </SectionHead>

        <ol className="list-none m-0 p-0 border-t border-rule">
          {featuredProjects.map((p, i) => (
            <ProjectRow key={p.slug} {...toRowData(p, i, l, statusLabels)} />
          ))}
        </ol>

        <div className="pt-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors"
          >
            {t("work.seeAll")}
            <ArrowRight size={13} strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* ─── §02 Ventures ───────────────────────────────────────────── */}
      <section
        id="ventures"
        className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-24 max-sm:py-16 border-t border-rule"
      >
        <SectionHead num="02" meta={t("ventures.sectionMeta")}>
          {t("ventures.sectionTitle")} {t("ventures.sectionTitleAccent")}
        </SectionHead>

        <div className="grid grid-cols-2 gap-[72px] border-t border-rule pt-8 max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <VentureBlock
            name={t("ventures.teranga.name")}
            nameAccent={t("ventures.teranga.nameAccent")}
            role={t("ventures.teranga.role")}
            text={t("ventures.teranga.text")}
            link={t("ventures.teranga.link")}
            href="https://terangadev.com"
          />
          <VentureBlock
            name={t("ventures.nurapic.name")}
            role={t("ventures.nurapic.role")}
            text={t("ventures.nurapic.text")}
            link={t("ventures.nurapic.link")}
            href="https://nurapic.com"
          />
        </div>
      </section>

      {/* ─── §03 About ──────────────────────────────────────────────── */}
      <section
        id="about"
        className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-24 max-sm:py-16 border-t border-rule"
      >
        <SectionHead num="03" meta={t("about.sectionMeta")}>
          {t("about.sectionTitle")} {t("about.sectionTitleAccent")}
        </SectionHead>

        <div className="grid grid-cols-2 gap-[72px] border-t border-rule pt-8 max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <div>
            <p className="font-serif text-[19px] leading-[1.55] text-fg m-0 mb-4 max-w-[62ch]">
              {t("about.bio1")}
            </p>
            <p className="font-serif text-[19px] leading-[1.55] text-fg m-0 mb-4 max-w-[62ch]">
              {t("about.bio2")}
            </p>
            <p className="font-serif text-[19px] leading-[1.55] text-fg m-0 mb-6 max-w-[62ch]">
              {t("about.bio3")}
            </p>
            <div className="flex gap-6 items-center flex-wrap">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-fg border-b border-fg pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                {t("nav.about")}
                <ArrowRight size={13} strokeWidth={2} />
              </Link>
              <a
                href="/cv-arona-tounkara.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors"
              >
                {t("about.cvLinkText")} &darr;
              </a>
            </div>
          </div>

          <ol className="list-none m-0 p-0">
            {journey.slice(0, 6).map((entry, i) => (
              <li
                key={i}
                className="grid grid-cols-[90px_1fr] gap-[22px] py-3.5 border-b border-rule items-baseline last:border-b-0"
              >
                <span className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase pt-1">
                  {entry.year}
                </span>
                <div>
                  <strong className="text-[15px] font-medium text-fg tracking-[-0.005em] block mb-0.5">
                    {l === "fr" ? entry.roleFr : entry.roleEn}
                  </strong>
                  <span className="text-muted text-[13.5px]">
                    {l === "fr" ? entry.entityFr : entry.entityEn}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── §04 Contact ────────────────────────────────────────────── */}
      <section
        id="contact"
        className="pt-24 pb-28 max-sm:pt-16 max-sm:pb-16 border-t border-rule bg-wash"
      >
        <div className="max-w-[820px] mx-auto px-10 max-sm:px-[22px] grid grid-cols-[auto_1fr] gap-10 items-start max-[960px]:grid-cols-1 max-[960px]:gap-5">
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted pt-3">
            04
          </div>
          <div>
            <h2
              className="font-serif font-medium tracking-[-0.03em] leading-[1.02] m-0 mb-6"
              style={{ fontSize: "clamp(40px, 5.5vw, 64px)" }}
            >
              {t("contact.sectionTitle")}{" "}
              <em className="italic font-normal text-accent">
                {t("contact.sectionTitleAccent")}
              </em>
              {t("contact.sectionTitleQ")}
            </h2>
            <p className="text-[17px] leading-[1.6] text-fg-soft m-0 mb-9 max-w-[52ch]">
              {t("contact.text")}
            </p>

            <a
              href="mailto:arona.tounkaraa@gmail.com"
              className="inline-block font-serif font-medium tracking-[-0.015em] text-accent border-b-[1.5px] border-accent pb-1 mb-8 no-underline hover:text-accent-2 hover:border-accent-2 transition-colors [overflow-wrap:anywhere]"
              style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
            >
              arona.tounkaraa@gmail.com
            </a>

            <div className="flex gap-7 flex-wrap">
              <ContactLink href="https://github.com/Rone221">GitHub&nbsp;↗</ContactLink>
              <ContactLink href="https://www.linkedin.com/in/arona-tounkara221">
                LinkedIn&nbsp;↗
              </ContactLink>
              <ContactLink href="tel:+221781367845">{t("contact.phone")}</ContactLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────
function SectionHead({
  num,
  meta,
  children,
}: {
  num: string;
  meta: string;
  children: React.ReactNode;
}) {
  return (
    <header className="grid grid-cols-[auto_1fr_auto] gap-8 items-baseline mb-10 max-[960px]:grid-cols-[auto_1fr]">
      <div className="font-mono text-[11px] tracking-[0.14em] text-accent">{num}</div>
      <h2
        className="font-serif font-medium tracking-[-0.025em] leading-[1.05] m-0"
        style={{ fontSize: "clamp(32px, 4vw, 46px)" }}
      >
        {children}
      </h2>
      <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted text-right max-[960px]:col-span-2">
        {meta}
      </div>
    </header>
  );
}

function VentureBlock({
  name,
  nameAccent,
  role,
  text,
  link,
  href,
}: {
  name: string;
  nameAccent?: string;
  role: string;
  text: string;
  link: string;
  href: string;
}) {
  return (
    <article>
      <h3 className="font-serif text-[30px] font-medium tracking-[-0.02em] m-0 mb-1 leading-[1.15]">
        {name}
        {nameAccent ? <span className="text-accent"> {nameAccent}</span> : null}
      </h3>
      <span className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase mb-4 block">
        {role}
      </span>
      <p className="text-base leading-[1.65] text-fg-soft m-0 mb-5">{text}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[11px] tracking-[0.12em] text-fg border-b border-rule-2 pb-1 hover:text-accent hover:border-accent transition-colors"
      >
        {link}&nbsp;↗
      </a>
    </article>
  );
}

function ContactLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted pb-1 border-b border-rule-2 hover:text-fg hover:border-fg transition-colors"
    >
      {children}
    </a>
  );
}
