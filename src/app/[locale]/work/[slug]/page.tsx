import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { statusTextFor, yearRangeFor } from "@/lib/project-view";
import { alternatesFor } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const description = locale === "fr" ? project.descriptionFr : project.descriptionEn;
  return {
    title: project.name,
    description,
    alternates: alternatesFor(locale, `/work/${slug}`),
    openGraph: { title: project.name, description },
  };
}

export default async function ProjectDetail({
  params,
}: PageProps<"/[locale]/work/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as "fr" | "en";
  const t = await getTranslations();

  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];
  if (!project) notFound();

  const next = projects[(idx + 1) % projects.length];
  const labels = {
    production: t("work.statusProduction"),
    tests: t("work.statusTests"),
    dev: t("work.statusDev"),
  };
  const statusText = statusTextFor(project.status, labels);
  const tagline = l === "fr" ? project.taglineFr : project.taglineEn;
  const description = l === "fr" ? project.descriptionFr : project.descriptionEn;

  return (
    <div id="top">
      {/* Header */}
      <header className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] pt-16 pb-14 max-sm:pt-10 max-sm:pb-10 border-b border-rule">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-muted hover:text-fg transition-colors mb-10"
        >
          <ArrowLeft size={13} strokeWidth={2} />
          {t("projectDetail.back")}
        </Link>

        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-6">
          {t("projectDetail.eyebrow")}
          <span className="text-rule-2 mx-2.5">/</span>
          <span className={project.status === "production" ? "text-accent" : "text-muted"}>
            {statusText}
          </span>
        </div>

        <h1
          className="font-serif font-medium tracking-[-0.03em] leading-[1.0] text-fg m-0 mb-5 max-w-[14ch]"
          style={{ fontSize: "clamp(44px, 7vw, 82px)" }}
        >
          {project.name}
        </h1>
        <p className="font-serif text-[21px] leading-[1.4] text-fg-soft m-0 max-w-[46ch]">
          {tagline}
        </p>
      </header>

      {/* Body: overview + meta panel */}
      <section className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] py-16 max-sm:py-10 grid grid-cols-[1fr_300px] gap-16 max-[960px]:grid-cols-1 max-[960px]:gap-10">
        <div>
          <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted m-0 mb-5">
            {t("projectDetail.overview")}
          </h2>
          <p className="font-serif text-[20px] leading-[1.55] text-fg m-0 mb-8 max-w-[60ch]">
            {description}
          </p>

          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14.5px] font-medium bg-accent text-bg no-underline hover:bg-accent-2 transition-colors"
            >
              {t("projectDetail.visit")}
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          ) : null}
        </div>

        {/* Meta panel */}
        <aside className="border-t border-rule pt-6 h-fit max-[960px]:border-t-0 max-[960px]:pt-0">
          <MetaRow label={t("projectDetail.roleLabel")} value={project.role} />
          <MetaRow label={t("projectDetail.yearsLabel")} value={yearRangeFor(project)} />
          <MetaRow
            label={t("projectDetail.statusLabel")}
            value={statusText}
            accent={project.status === "production"}
          />
          <div className="py-4 border-b border-rule last:border-b-0">
            <div className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-muted mb-2.5">
              {t("projectDetail.stackLabel")}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] text-fg-soft border border-rule px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* Next project */}
      <section className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] border-t border-rule">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-baseline justify-between gap-6 py-10 no-underline"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-2">
              {t("projectDetail.nextLabel")}
            </div>
            <div
              className="font-serif font-medium tracking-[-0.02em] text-fg group-hover:text-accent transition-colors leading-[1.1]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              {next.name}
            </div>
          </div>
          <ArrowRight
            size={26}
            strokeWidth={1.5}
            className="self-center text-muted group-hover:text-accent group-hover:translate-x-1.5 transition-all shrink-0"
          />
        </Link>
      </section>
    </div>
  );
}

function MetaRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="py-4 border-b border-rule">
      <div className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-muted mb-1.5">
        {label}
      </div>
      <div className={`text-[15px] ${accent ? "text-accent" : "text-fg"}`}>{value}</div>
    </div>
  );
}
