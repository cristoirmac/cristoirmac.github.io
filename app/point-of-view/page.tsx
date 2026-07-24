import type { Metadata } from 'next';
import { Container, PageHeader, Eyebrow, ArrowLink } from '@/components/primitives';
import { pointOfView } from '@/content/point-of-view';

export const metadata: Metadata = {
  title: 'Point of View',
  description:
    'How Chris McFadden builds leverage through people, teams, and technology — from DevOps and cloud to AI-enabled delivery — so the whole organization turns customer needs into reliable products.',
  alternates: { canonical: '/point-of-view/' },
};

function StageCard({ name, body }: { name: string; body: string }) {
  return (
    <div className="flex flex-col rounded-xl border border-line bg-surface p-6">
      <h3 className="font-serif text-xl font-medium text-ink">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
    </div>
  );
}

export default function PointOfViewPage() {
  const pov = pointOfView;
  const today = pov.stages.filter((s) => s.group === 'today');
  const mayLead = pov.stages.filter((s) => s.group === 'mayLead');

  return (
    <Container className="py-16 sm:py-20">
      <PageHeader eyebrow="Point of View" title={pov.title} dek={pov.thesis} />

      {/* Plain-English opening */}
      <p className="mt-10 max-w-prose text-lg leading-relaxed text-ink-soft">{pov.plainOpening}</p>

      {/* Recursive phrase + plain explanation */}
      <section className="mt-16 border-y border-line py-12">
        <blockquote className="max-w-3xl">
          <p className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
            “{pov.recursivePhrase}”
          </p>
        </blockquote>
        <p className="mt-6 max-w-prose text-[1.05rem] leading-relaxed text-ink-soft">
          {pov.recursiveGloss}
        </p>
      </section>

      {/* Ladder of leverage */}
      <section className="mt-16">
        <Eyebrow>A ladder of leverage</Eyebrow>
        <ol className="mt-6 space-y-4">
          {pov.ladder.map((rung, i) => (
            <li key={rung} className="flex gap-5 border-b border-line pb-4">
              <span className="font-serif text-2xl font-medium text-line" aria-hidden>
                {i + 1}
              </span>
              <p className="max-w-prose pt-1 text-lg leading-relaxed text-ink-soft">{rung}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Maturity model — grouped by what is real today vs. where it may lead */}
      <section className="mt-16">
        <Eyebrow>Crawl · Walk · Run · Fly</Eyebrow>
        <p className="mt-4 max-w-prose text-ink-muted">
          The story is not simply more automation. It is how much of the path from idea to production a
          well-supported organization can own.
        </p>

        <h3 className="mt-8 font-sans text-sm font-semibold uppercase tracking-label text-ink">
          In practice today
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {today.map((s) => (
            <StageCard key={s.name} name={s.name} body={s.body} />
          ))}
        </div>

        <h3 className="mt-10 font-sans text-sm font-semibold uppercase tracking-label text-ink">
          Where this may lead
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {mayLead.map((s) => (
            <StageCard key={s.name} name={s.name} body={s.body} />
          ))}
        </div>

        <p className="mt-8 max-w-prose text-[1.05rem] leading-relaxed text-ink-soft">
          {pov.todayStatement}
        </p>
      </section>

      {/* Timeline */}
      <section className="mt-20 border-t border-line pt-12">
        <Eyebrow>One idea, maturing — 2016 to 2026</Eyebrow>
        <div className="mt-8 space-y-10">
          {pov.timeline.map((t) => (
            <article key={t.era} className="grid gap-x-10 gap-y-3 md:grid-cols-[220px_1fr]">
              <div className="md:sticky md:top-24 md:self-start">
                <h3 className="font-serif text-lg font-medium text-ink">{t.era}</h3>
              </div>
              <div className="max-w-prose">
                <p className="text-[0.98rem] leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">The focus:</span> {t.focus}
                </p>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-muted">
                  <span className="font-semibold text-ink">The move:</span> {t.move}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {t.writing.map((w) => (
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
