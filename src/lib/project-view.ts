import type { Project } from "@/content/projects";
import type { ProjectRowData } from "@/components/project-row";

const ROMAN = ["I.", "II.", "III.", "IV.", "V.", "VI.", "VII.", "VIII."];

export type StatusLabels = { production: string; tests: string; dev: string };

export function statusTextFor(status: Project["status"], labels: StatusLabels) {
  return status === "production"
    ? labels.production
    : status === "tests"
    ? labels.tests
    : labels.dev;
}

export function yearRangeFor(p: Project) {
  return p.yearTo ? `${p.yearFrom}–${String(p.yearTo).slice(2)}` : `${p.yearFrom} —`;
}

export function toRowData(
  p: Project,
  index: number,
  locale: "fr" | "en",
  labels: StatusLabels
): ProjectRowData {
  const statusText = statusTextFor(p.status, labels);
  return {
    index: ROMAN[index] ?? `${index + 1}.`,
    slug: p.slug,
    title: p.name,
    desc: locale === "fr" ? p.descriptionFr : p.descriptionEn,
    stack: p.stack,
    years: yearRangeFor(p),
    role: p.role.split(" · ")[0],
    statusText,
    isProduction: p.status === "production",
    ariaLabel: `${p.name} — ${statusText}`,
  };
}
