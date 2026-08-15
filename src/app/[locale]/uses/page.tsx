import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { skills } from "@/content/skills";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/uses">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "usesPage" });
  return {
    title: t("eyebrow"),
    description: t("intro"),
    alternates: alternatesFor(locale, "/uses"),
  };
}

export default async function UsesPage({ params }: PageProps<"/[locale]/uses">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as "fr" | "en";
  const t = await getTranslations();

  return (
    <div id="top">
      <PageHeader
        eyebrow={t("usesPage.eyebrow")}
        meta={t("usesPage.meta")}
        title={t("usesPage.title")}
        titleAccent={t("usesPage.titleAccent")}
        intro={t("usesPage.intro")}
      />

      <section className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-16 max-sm:py-10">
        <div className="border-t border-rule">
          {skills.map((g, i) => (
            <div
              key={g.labelEn}
              className="grid grid-cols-[220px_1fr] gap-10 py-7 border-b border-rule items-baseline max-[760px]:grid-cols-1 max-[760px]:gap-3"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tracking-[0.1em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-[24px] font-medium tracking-[-0.015em] m-0 leading-[1.1]">
                  {l === "fr" ? g.labelFr : g.labelEn}
                </h2>
              </div>
              <ul className="list-none m-0 p-0 flex flex-wrap gap-x-2.5 gap-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[12.5px] text-fg-soft border border-rule px-2.5 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
