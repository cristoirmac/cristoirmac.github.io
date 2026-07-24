import Link from 'next/link';
import type { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-content px-6 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** Standard page header: eyebrow + large serif title + optional dek. */
export function PageHeader({
  eyebrow,
  title,
  dek,
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
}) {
  return (
    <header className="border-b border-line pb-10">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="mt-3 max-w-4xl font-serif text-title font-medium text-ink">{title}</h1>
      {dek && <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">{dek}</p>}
    </header>
  );
}

export function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}

/** Text link with a small arrow, used for "read more" affordances. */
export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const cls =
    'group inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-accent transition-colors hover:text-ink';
  const inner = (
    <>
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
