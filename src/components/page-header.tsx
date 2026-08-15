import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  meta,
  title,
  titleAccent,
  titleEnd,
  intro,
}: {
  eyebrow: string;
  meta?: string;
  title: string;
  titleAccent?: string;
  titleEnd?: string;
  intro?: ReactNode;
}) {
  return (
    <header className="max-w-[1120px] mx-auto px-10 max-sm:px-[22px] pt-20 pb-14 max-sm:pt-12 max-sm:pb-10 border-b border-rule">
      <div className="flex items-baseline justify-between gap-6 mb-8 max-sm:mb-6">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent">
          {eyebrow}
        </span>
        {meta ? (
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted text-right">
            {meta}
          </span>
        ) : null}
      </div>

      <h1
        className="font-serif font-medium tracking-[-0.03em] leading-[1.0] text-fg m-0 mb-6 max-w-[16ch]"
        style={{ fontSize: "clamp(44px, 7vw, 80px)" }}
      >
        {title}
        {titleAccent ? (
          <>
            {" "}
            <em className="italic font-normal">{titleAccent}</em>
          </>
        ) : null}
        {titleEnd}
      </h1>

      {intro ? (
        <p className="text-[18px] leading-[1.6] text-fg-soft m-0 max-w-[58ch]">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
