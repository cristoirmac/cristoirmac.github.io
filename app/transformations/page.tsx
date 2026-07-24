import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, PageHeader, Eyebrow } from '@/components/primitives';
import { CaseStudyCard } from '@/components/Cards';
import { launchCaseStudies, additionalCaseStudies } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Transformation stories',
  description:
    'Concise case studies from the transformations Chris McFadden has led — cloud-native re-platforming, DevOps culture, global org scaling, post-acquisition integration, PE-backed SaaS scaling, and applied AI.',
};

const ORDER = ['SparkPost', 'Quorum', 'Discovery'] as const;

export default function TransformationsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="Transformation stories"
        title="Case studies in scale, platform change, and applied AI."
        dek="Selected examples of technology, organizational, product, and customer change across Discovery, SparkPost, and Quorum."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {launchCaseStudies
          .slice()
          .sort((a, b) => ORDER.indexOf(a.company) - ORDER.indexOf(b.company))
          .map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
      </div>

      {additionalCaseStudies.length > 0 && (
        <section className="mt-16 border-t border-line pt-10">
          <Eyebrow>Additional case studies</Eyebrow>
          <ul className="mt-5 divide-y divide-line">
            {additionalCaseStudies.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/transformations/${study.slug}/`}
                  className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="font-serif text-lg font-medium text-ink group-hover:text-accent">
                    {study.title}
                  </span>
                  <span className="max-w-md text-sm text-ink-muted">{study.dek}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
