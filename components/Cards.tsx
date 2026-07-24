import Link from 'next/link';
import type { CaseStudy, WritingItem } from '@/content/types';
import { formatDate } from '@/lib/content';
import { TagPill } from './primitives';

const TYPE_LABEL: Record<WritingItem['type'], string> = {
  article: 'Article',
  podcast: 'Podcast',
  talk: 'Talk',
  interview: 'Interview',
  presentation: 'Presentation',
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/transformations/${study.slug}/`}
      className="group flex flex-col rounded-xl border border-line bg-surface p-7 transition-all hover:border-accent-soft hover:shadow-[0_10px_40px_-24px_rgba(26,26,24,0.35)]"
    >
      <div className="flex items-center gap-3 text-xs font-medium text-ink-faint">
        {study.eyebrow ? (
          <span className="text-accent">{study.eyebrow}</span>
        ) : (
          <>
            <span className="text-accent">{study.company}</span>
            <span aria-hidden>·</span>
            <span>{study.period}</span>
          </>
        )}
      </div>
      <h3 className="mt-3 font-serif text-xl font-medium leading-snug text-ink group-hover:text-accent">
        {study.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{study.dek}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {study.tags.slice(0, 3).map((t) => (
          <TagPill key={t}>{t}</TagPill>
        ))}
      </div>
    </Link>
  );
}

export function WritingCard({ item }: { item: WritingItem }) {
  const date = formatDate(item.date);
  return (
    <article className="flex flex-col border-t border-line py-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-ink-faint">
        <span className="uppercase tracking-label text-accent">{TYPE_LABEL[item.type]}</span>
        <span aria-hidden>·</span>
        <span>{item.source}</span>
        {date && (
          <>
            <span aria-hidden>·</span>
            <span>{date}</span>
          </>
        )}
      </div>
      <h3 className="mt-2 font-serif text-lg font-medium leading-snug text-ink">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-underline decoration-transparent hover:decoration-accent">
          {item.title}
        </a>
      </h3>
      {!item.needsReview && (
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">{item.summary}</p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {item.tags.map((t) => (
          <TagPill key={t}>{t}</TagPill>
        ))}
      </div>
    </article>
  );
}
