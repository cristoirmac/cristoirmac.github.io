import type { Metadata } from 'next';
import { Container, PageHeader, Eyebrow, ArrowLink } from '@/components/primitives';
import Markdown from '@/components/Markdown';
import { readme } from '@/content/readme';

export const metadata: Metadata = {
  title: 'README — How to work with me',
  description:
    'A short user manual for working with Chris McFadden as a leader: how he communicates, decides, gives and receives feedback, what he values in a team, and the edges he is working on.',
  alternates: { canonical: '/readme/' },
};

export default function ReadmePage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader eyebrow="README" title="How to work with me." dek={readme.intro} />

      <div className="mt-14 space-y-12">
        {readme.sections.map((s, i) => (
          <section key={s.heading} className="grid gap-x-10 gap-y-4 md:grid-cols-[220px_1fr]">
            <div className="md:sticky md:top-24 md:self-start">
              <span className="font-serif text-2xl font-medium text-line" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-1 font-serif text-xl font-medium leading-snug text-ink">
                {s.heading}
              </h2>
            </div>
            <Markdown className="max-w-prose">{s.body}</Markdown>
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <p className="text-sm text-ink-muted">
          This is the personal, practical layer. For how I run an engineering organization, see{' '}
          <ArrowLink href="/operating-model/">How I Lead</ArrowLink>.
        </p>
      </div>
    </Container>
  );
}
