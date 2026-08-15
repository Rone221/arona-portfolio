import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { journey } from "@/content/journey";
import { skills } from "@/content/skills";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return {
    title: t("eyebrow"),
    description: t("lead"),
    alternates: alternatesFor(locale, "/about"),
  };
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as "fr" | "en";
  const t = await getTranslations();

  return (
    <div id="top">
      <PageHeader
        eyebrow={t("aboutPage.eyebrow")}
        meta={t("aboutPage.journeyMeta")}
        title={t("aboutPage.title")}
        titleAccent={t("aboutPage.titleAccent")}
        intro={t("aboutPage.lead")}
      />

      {/* Bio + portrait */}
      <section className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-16 max-sm:py-10 grid grid-cols-[1fr_340px] gap-16 items-start max-[960px]:grid-cols-1 max-[960px]:gap-10">
        <div>
          <p className="font-serif text-[20px] leading-[1.55] text-fg m-0 mb-5 max-w-[60ch]">
            {t("about.bio1")}
          </p>
          <p className="font-serif text-[20px] leading-[1.55] text-fg m-0 mb-5 max-w-[60ch]">
            {t("about.bio2")}
          </p>
          <p className="font-serif text-[20px] leading-[1.55] text-fg m-0 mb-8 max-w-[60ch]">
            {t("about.bio3")}
          </p>
          <a
            href="/cv-arona-tounkara.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-fg border-b border-fg pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            {t("aboutPage.cvLink")} &darr;
          </a>
        </div>

        <figure className="m-0 max-[960px]:max-w-[300px]">
          <div className="relative aspect-[3/4] w-full bg-wash border border-rule overflow-hidden">
            <Image
              src="/arona-portrait.jpeg"
              alt="Arona Tounkara"
              fill
              sizes="(max-width: 960px) 300px, 340px"
              className="object-cover"
              style={{ objectPosition: "center 22%" }}
            />
          </div>
        </figure>
      </section>

      {/* Journey */}
      <section className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-16 max-sm:py-10 border-t border-rule">
        <h2 className="font-serif text-[26px] font-medium tracking-[-0.02em] m-0 mb-8">
          {t("aboutPage.journeyHeading")}
        </h2>
        <ol className="list-none m-0 p-0 border-t border-rule">
          {journey.map((entry, i) => (
            <li
              key={i}
              className="grid grid-cols-[120px_1fr_auto] gap-8 py-5 border-b border-rule items-baseline max-[640px]:grid-cols-[90px_1fr] max-[640px]:gap-4"
            >
              <span className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase pt-1">
                {entry.year}
              </span>
              <div>
                <strong className="text-[16px] font-medium text-fg tracking-[-0.005em] block mb-1">
                  {l === "fr" ? entry.roleFr : entry.roleEn}
                </strong>
                {(l === "fr" ? entry.descriptionFr : entry.descriptionEn) ? (
                  <span className="text-muted text-[14px] leading-[1.5]">
                    {l === "fr" ? entry.descriptionFr : entry.descriptionEn}
                  </span>
                ) : null}
              </div>
              <span className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase text-right max-[640px]:col-start-2 max-[640px]:text-left max-[640px]:mt-1">
                {l === "fr" ? entry.entityFr : entry.entityEn}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-16 max-sm:py-10 border-t border-rule">
        <h2 className="font-serif text-[26px] font-medium tracking-[-0.02em] m-0 mb-8">
          {t("aboutPage.skillsHeading")}
        </h2>
        <dl className="grid grid-cols-2 gap-x-16 gap-y-6 m-0 max-[760px]:grid-cols-1 max-[760px]:gap-y-5">
          {skills.map((g) => (
            <div
              key={g.labelEn}
              className="grid grid-cols-[150px_1fr] gap-5 items-baseline border-b border-rule pb-5 max-[640px]:grid-cols-1 max-[640px]:gap-1.5"
            >
              <dt className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent">
                {l === "fr" ? g.labelFr : g.labelEn}
              </dt>
              <dd className="m-0 text-[14.5px] text-fg-soft leading-[1.6]">
                {g.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Certifications + Languages */}
      <section className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-16 max-sm:py-10 border-t border-rule grid grid-cols-2 gap-16 max-[760px]:grid-cols-1 max-[760px]:gap-10">
        <div>
          <h2 className="font-serif text-[26px] font-medium tracking-[-0.02em] m-0 mb-6">
            {t("aboutPage.certsHeading")}
          </h2>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            <li className="text-[15px] text-fg-soft leading-[1.5] pl-4 border-l-2 border-accent">
              {t("certifications.c1")}
            </li>
            <li className="text-[15px] text-fg-soft leading-[1.5] pl-4 border-l-2 border-accent">
              {t("certifications.c2")}
            </li>
            <li className="text-[15px] text-fg-soft leading-[1.5] pl-4 border-l-2 border-accent">
              {t("certifications.c3")}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-[26px] font-medium tracking-[-0.02em] m-0 mb-6">
            {t("aboutPage.languagesHeading")}
          </h2>
          <p className="text-[15.5px] text-fg-soft leading-[1.7] m-0">
            {t("aboutPage.languagesValue")}
          </p>
        </div>
      </section>
    </div>
  );
}
