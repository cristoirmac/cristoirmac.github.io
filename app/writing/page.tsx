import type { Metadata } from 'next';
import { Container, PageHeader, ArrowLink, Eyebrow } from '@/components/primitives';
import { WritingCard } from '@/components/Cards';
import { writing } from '@/content/writing';
import { curatedWritingTitles } from '@/data/featured';
import { formatDate, sortByDateDesc } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Writing & Media',
  description:
    'Selected writing, talks, and interviews by Chris McFadden on cloud and SaaS, engineering leadership, DevOps and SRE, architecture and scale, AI, and acquisition and integration.',
};

export default function WritingPage() {
  // Both sections run newest first. Order in featured.ts is a selection, not a sequence.
  const curated = (
    curatedWritingTitles
      .map((t) => writing.find((w) => w.title === t))
      .filter(Boolean) as typeof writing
  ).sort(sortByDateDesc);
  const curatedSet = new Set(curatedWritingTitles);
  const additional = writing.filter((w) => !curatedSet.has(w.title)).sort(sortByDateDesc);

  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="Writing & Media"
        title="Writing, talks, and interviews."
        dek="Selected writing, talks, and interviews on building and operating software businesses — from cloud platforms and production systems to engineering leadership, product delivery, and applied AI. External links open at the original source."
      />

      <div className="mt-8 max-w-prose rounded-xl border border-line bg-surface p-5">
        <p className="text-sm leading-relaxed text-ink-muted">
          Newest first. Together, these pieces trace how my thinking has evolved from cloud and
          DevOps through software delivery and applied AI. For the operating model behind them, see{' '}
          <ArrowLink href="/operating-model/">How I Lead</ArrowLink>.
        </p>
      </div>

      {/* Selected (curated) */}
      <section className="mt-10">
        <Eyebrow>Selected writing</Eyebrow>
        <div className="mt-2">
          {curated.map((item) => (
            <WritingCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* More writing and media (compact: title, source, date, link) */}
      {additional.length > 0 && (
        <section className="mt-14 border-t border-line pt-10">
          <Eyebrow>More writing and media</Eyebrow>
          <ul className="mt-5 divide-y divide-line">
            {additional.map((item) => {
              const date = formatDate(item.date);
              return (
                <li key={item.title} className="py-3.5">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="font-medium text-ink group-hover:text-accent">
                      {item.title}
                    </span>
                    <span className="shrink-0 text-xs text-ink-faint sm:ml-6">
                      {item.source}
                      {date ? ` · ${date}` : ''}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </Container>
  );
}
