import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, PageHeader, ArrowLink } from '@/components/primitives';
import { experience } from '@/content/experience';
import { getCaseStudy } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'The executive career narrative of Chris McFadden — Quorum, SparkPost / Message Systems / MessageBird, Discovery Communications, and earlier technical foundation.',
};

function List({ label, items }: { label: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="Experience"
        title="A career built on scale, transformation, and applied AI."
        dek="Business context, mandate, scale, the changes led, and selected outcomes for each chapter."
      />

      <div className="mt-16 space-y-20">
        {experience.map((chapter) => {
          const studies = (chapter.relatedCaseStudies ?? []).map(getCaseStudy).filter(Boolean);
          return (
            <article key={chapter.slug} className="grid gap-x-12 gap-y-8 md:grid-cols-[260px_1fr]">
              <div className="md:sticky md:top-24 md:self-start">
                <h2 className="font-serif text-2xl font-medium text-ink">{chapter.company}</h2>
                <p className="mt-1 text-sm font-medium text-accent">{chapter.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{chapter.titles}</p>
                {chapter.companyUrl && (
                  <a
                    href={chapter.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-ink-soft link-underline"
                  >
                    {chapter.companyUrl.replace(/^https?:\/\/(www\.)?/, '')}
                  </a>
                )}
              </div>

              <div className="space-y-8">
                <p className="text-sm italic leading-relaxed text-ink-faint">
                  {chapter.companyDescription}
                </p>
                <p className="max-w-prose text-lg leading-relaxed text-ink-soft">{chapter.context}</p>

                <div className="grid gap-8 sm:grid-cols-2">
                  <List label="Scale & scope" items={chapter.scale} />
                  <List label="Selected outcomes" items={chapter.outcomes} />
                </div>
                <List label="Key changes led" items={chapter.changes} />

                {studies.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6">
                    {studies.map((s) => (
                      <Link
                        key={s!.slug}
                        href={`/transformations/${s!.slug}/`}
                        className="text-sm font-medium text-accent transition-colors hover:text-ink"
                      >
                        {s!.title} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-20 border-t border-line pt-10">
        <ArrowLink href="/contact/">Start a conversation</ArrowLink>
      </div>
    </Container>
  );
}
