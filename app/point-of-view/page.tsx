import type { Metadata } from 'next';
import { Container, PageHeader, Eyebrow, ArrowLink } from '@/components/primitives';
import { pointOfView } from '@/content/point-of-view';

export const metadata: Metadata = {
  title: 'Point of View',
  description:
    'Chris McFadden on how technology leadership is changing: as producing software gets cheaper, the harder work moves to understanding customers, choosing the right problem, validating quality, earning adoption, and operating responsibly.',
  alternates: { canonical: '/point-of-view/' },
};

export default function PointOfViewPage() {
  const pov = pointOfView;

  return (
    <Container className="py-16 sm:py-20">
      <PageHeader eyebrow="Point of View" title={pov.title} dek={pov.thesis} />

      {/* Plain-English opening */}
      <p className="mt-10 max-w-prose text-lg leading-relaxed text-ink-soft">{pov.plainOpening}</p>

      {/* Recursive phrase + plain explanation */}
      <section className="mt-16 border-y border-line py-12">
        <blockquote className="max-w-3xl">
          <p className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
            “{pov.governingPhrase}”
          </p>
        </blockquote>
        <p className="mt-6 max-w-prose text-[1.05rem] leading-relaxed text-ink-soft">
          {pov.governingGloss}
        </p>
      </section>

      {/* Historical arc */}
      <section className="mt-16">
        <Eyebrow>How the work has shifted</Eyebrow>
        <div className="mt-8 space-y-8">
          {pov.arc.map((step) => (
            <article key={step.era} className="grid gap-x-10 gap-y-3 md:grid-cols-[220px_1fr]">
              <div className="md:sticky md:top-24 md:self-start">
                <h3 className="font-serif text-lg font-medium text-ink">{step.era}</h3>
              </div>
              <div className="max-w-prose">
                <p className="text-[1.02rem] leading-relaxed text-ink-soft">{step.body}</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {step.writing.map((w) => (
                    <li key={w.url}>
                      <a
                        href={w.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent hover:text-ink"
                      >
                        {w.title} <span className="text-ink-faint">({w.year})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mt-20 border-t border-line pt-12">
        <p className="max-w-prose font-serif text-2xl leading-relaxed text-ink">{pov.closing}</p>
        <p className="mt-5 text-sm text-ink-muted">
          For how this shows up in day-to-day operating decisions, see{' '}
          <ArrowLink href="/operating-model/">How I Lead</ArrowLink>.
        </p>
      </section>
    </Container>
  );
}
