import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Eyebrow, TagPill, ArrowLink } from '@/components/primitives';
import Markdown from '@/components/Markdown';
import { caseStudies } from '@/content/case-studies';
import { getCaseStudy, getWritingByTitle } from '@/lib/content';
import { SITE_URL } from '@/data/profile';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.dek,
    alternates: { canonical: `/transformations/${study.slug}/` },
    openGraph: {
      title: `${study.title} · Chris McFadden`,
      description: study.dek,
      url: `${SITE_URL}/transformations/${study.slug}/`,
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const related = (study.relatedWriting ?? []).map(getWritingByTitle).filter(Boolean);

  return (
    <article>
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <Link href="/transformations/" className="text-sm font-medium text-accent hover:text-ink">
            ← All transformations
          </Link>
          <div className="mt-6 flex items-center gap-3 text-sm font-medium text-ink-faint">
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
          <h1 className="mt-3 font-serif text-title font-medium text-ink">{study.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-ink-soft">{study.dek}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </div>
        </div>

        {study.hasGaps && (
          <div className="mt-10 max-w-3xl rounded-lg border border-line bg-surface px-5 py-4">
            <p className="text-sm text-ink-muted">
              <span className="font-semibold text-ink">Note:</span> some outcome details for this
              story are held as private interview material and are intentionally not published.
              Those places are marked in the text.
            </p>
          </div>
        )}

        <div className="mt-14 grid gap-x-14 gap-y-12 lg:grid-cols-[1fr_260px]">
          {/* Body */}
          <div className="max-w-prose space-y-12">
            {study.sections.map((section) => (
              <section key={section.heading} className="print-break-avoid">
                <Eyebrow>{section.heading}</Eyebrow>
                <div className="mt-3">
                  {section.body.trim() ? (
                    <Markdown>{section.body}</Markdown>
                  ) : (
                    <p className="text-sm italic text-ink-faint">
                      In progress — content to be added.
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Related writing rail */}
          {related.length > 0 && (
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-line bg-surface p-6">
                <Eyebrow>Related writing &amp; media</Eyebrow>
                <ul className="mt-4 space-y-4">
                  {related.map((w) => (
                    <li key={w!.title}>
                      <a
                        href={w!.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium leading-snug text-ink hover:text-accent"
                      >
                        {w!.title}
                      </a>
                      <p className="mt-1 text-xs text-ink-faint">
                        {w!.source}
                        {w!.date ? ` · ${w!.date.slice(0, 4)}` : ''}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-line pt-4">
                  <ArrowLink href="/writing/">Full writing index</ArrowLink>
                </div>
              </div>
            </aside>
          )}
        </div>
      </Container>
    </article>
  );
}
