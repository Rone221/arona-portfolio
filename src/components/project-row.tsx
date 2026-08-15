import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export type ProjectRowData = {
  index: string; // roman numeral
  slug: string;
  title: string;
  desc: string;
  stack: string[];
  years: string;
  role: string;
  statusText: string;
  isProduction: boolean;
  ariaLabel: string;
};

export function ProjectRow(p: ProjectRowData) {
  const metaLine = `${p.years} · ${p.role}`;

  return (
    <li className="border-b border-rule">
      <Link
        href={`/work/${p.slug}`}
        aria-label={p.ariaLabel}
        className="grid grid-cols-[48px_1fr_190px_32px] gap-7 items-baseline py-8 no-underline transition-colors group hover:bg-wash max-[960px]:grid-cols-[32px_1fr_28px] max-[960px]:gap-4"
      >
        <span className="font-mono text-[11px] tracking-[0.1em] text-muted pt-2">
          {p.index}
        </span>

        <div>
          <h3
            className="font-serif font-medium tracking-[-0.02em] m-0 mb-2.5 leading-[1.05] text-fg group-hover:text-accent transition-colors"
            style={{ fontSize: "clamp(27px, 3.2vw, 38px)" }}
          >
            {p.title}
          </h3>
          <p className="text-[15.5px] leading-[1.55] text-fg-soft m-0 mb-3 max-w-[56ch]">
            {p.desc}
          </p>
          <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted flex flex-wrap gap-x-3.5 gap-y-1">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

          {/* Mobile-only meta (kept in flow so nothing is hidden on phones) */}
          <div className="hidden max-[960px]:flex flex-wrap gap-x-2 mt-3 font-mono text-[10.5px] tracking-[0.1em] uppercase text-muted">
            <span>{metaLine}</span>
            <span aria-hidden="true">·</span>
            <span className={p.isProduction ? "text-accent" : ""}>{p.statusText}</span>
          </div>
        </div>

        {/* Desktop meta column */}
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted text-right leading-[1.9] max-[960px]:hidden">
          <div>{metaLine}</div>
          <div className={p.isProduction ? "text-accent" : ""}>{p.statusText}</div>
        </div>

        <div className="self-center text-muted group-hover:text-accent group-hover:translate-x-1.5 transition-all max-[960px]:justify-self-end">
          <ArrowRight size={20} strokeWidth={1.5} />
        </div>
      </Link>
    </li>
  );
}
