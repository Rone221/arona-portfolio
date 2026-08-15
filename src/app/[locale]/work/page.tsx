import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { projects } from "@/content/projects";
import { PageHeader } from "@/components/page-header";
import { ProjectRow } from "@/components/project-row";
import { toRowData } from "@/lib/project-view";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/work">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: alternatesFor(locale, "/work"),
  };
}

export default async function WorkPage({ params }: PageProps<"/[locale]/work">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const l = locale as "fr" | "en";
  const labels = {
    production: t("work.statusProduction"),
    tests: t("work.statusTests"),
    dev: t("work.statusDev"),
  };

  return (
    <div id="top">
      <PageHeader
        eyebrow={t("workPage.eyebrow")}
        meta={t("workPage.meta")}
        title={t("workPage.title")}
        titleAccent={t("workPage.titleAccent")}
        intro={t("workPage.intro")}
      />

      <section className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-16 max-sm:py-10">
        <ol className="list-none m-0 p-0 border-t border-rule">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} {...toRowData(p, i, l, labels)} />
          ))}
        </ol>
      </section>
    </div>
  );
}
