import type { Metadata } from 'next';
import { Container, PageHeader, Eyebrow, ArrowLink } from '@/components/primitives';
import { operatingModel } from '@/content/operating-model';

export const metadata: Metadata = {
  title: 'Leadership & Operating Model',
  description:
    'How Chris McFadden leads and creates value as a CTO: building leaders and organizations, partnering with Product and customers, owning production and reliability, managing R&D as an investment portfolio, and using platforms and applied AI to amplify strong teams.',
};

export default function OperatingModelPage() {
  const om = operatingModel;
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="Leadership & Operating Model"
        title="How I lead and create value as a CTO."
        dek={om.centralIdea}
      />

      {/* Lede + pointer to Point of View */}
      <div className="mt-12 grid gap-8 md:grid-cols-[220px_1fr]">
        <Eyebrow>In short</Eyebrow>
        <div className="max-w-prose">
          <p className="font-serif text-2xl leading-relaxed text-ink-soft">{om.lede}</p>
          <p className="mt-5 text-sm text-ink-muted">
            For the practical layer — how I communicate, decide, and work with people — see{' '}
            <ArrowLink href="/readme/">Working with me</ArrowLink>.
          </p>
        </div>
      </div>

      {/* Principles */}
      <div className="mt-16 space-y-14">
        {om.principles.map((p, i) => (
          <section key={p.heading} className="grid gap-x-10 gap-y-4 md:grid-cols-[220px_1fr]">
            <div className="md:sticky md:top-24 md:self-start">
              <span className="font-serif text-2xl font-medium text-line" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-1 font-serif text-xl font-medium leading-snug text-ink">
                {p.heading}
              </h2>
            </div>
            <p className="max-w-prose text-[1.05rem] leading-relaxed text-ink-soft">{p.body}</p>
          </section>
        ))}
      </div>

      {/* Affirmative fit statement */}
      <section className="mt-20 border-t border-line pt-12">
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <Eyebrow>Where I do my best work</Eyebrow>
          <p className="max-w-prose font-serif text-2xl leading-relaxed text-ink">{om.fit}</p>
        </div>
      </section>
    </Container>
  );
}
