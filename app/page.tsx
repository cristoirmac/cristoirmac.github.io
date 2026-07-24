import Link from 'next/link';
import { Container, Eyebrow, ArrowLink } from '@/components/primitives';
import { CaseStudyCard, WritingCard } from '@/components/Cards';
import { profile } from '@/data/profile';
import { featuredCaseStudies, featuredWritingTitles } from '@/data/featured';
import { getCaseStudy, getWritingByTitle } from '@/lib/content';

export default function HomePage() {
  const studies = featuredCaseStudies.map(getCaseStudy).filter(Boolean);
  const writing = featuredWritingTitles.map(getWritingByTitle).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <Eyebrow>Chief Technology Officer</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-display font-medium text-ink">
            {profile.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink-soft">{profile.subhead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/transformations/"
              className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              View transformations
            </Link>
            <ArrowLink href="/contact/">Start a conversation</ArrowLink>
          </div>

          {/* Restrained proof line — grounds the claim without résumé metrics */}
          <div className="mt-12 max-w-2xl border-t border-line pt-6">
            <p className="text-xs font-semibold uppercase tracking-label text-ink-faint">
              SparkPost · Quorum · Discovery Communications
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              High-scale SaaS · Global engineering · Applied AI · Post-acquisition integration
            </p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="border-b border-line">
        <Container className="grid gap-8 py-16 md:grid-cols-[220px_1fr]">
          <Eyebrow>In brief</Eyebrow>
          <p className="max-w-prose font-serif text-2xl leading-relaxed text-ink-soft">
            {profile.intro}
          </p>
        </Container>
      </section>

      {/* Value areas */}
      <section className="border-b border-line">
        <Container className="py-16">
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            <Eyebrow>How I create value</Eyebrow>
            <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {profile.valueAreas.map((area) => (
                <div key={area.title} className="print-break-avoid">
                  <h3 className="font-serif text-lg font-medium text-ink">{area.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-muted">{area.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Selected transformations */}
      <section className="border-b border-line">
        <Container className="py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Selected transformations</Eyebrow>
              <h2 className="mt-3 font-serif text-title font-medium text-ink">
                Two major transformations, led end to end.
              </h2>
            </div>
            <div className="hidden shrink-0 sm:block">
              <ArrowLink href="/transformations/">All case studies</ArrowLink>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {studies.map((s) => (
              <CaseStudyCard key={s!.slug} study={s!} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <ArrowLink href="/transformations/">All case studies</ArrowLink>
          </div>
        </Container>
      </section>

      {/* Point of View */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16">
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            <Eyebrow>Point of view</Eyebrow>
            <div className="max-w-prose">
              <p className="font-serif text-2xl leading-relaxed text-ink">
                Across cloud, SaaS, platform modernization, and applied AI, the pattern in my work is
                the same: build strong leaders and teams, give them clear ownership and customer
                context, and use technology to increase what the whole organization can accomplish.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                “I build an organization that builds the software that builds the software.” The goal is
                not just more code — it is helping the whole business turn customer needs into reliable
                products, with judgment and customer context staying firmly human.
              </p>
              <div className="mt-6">
                <ArrowLink href="/point-of-view/">Read the point of view</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected writing */}
      <section className="border-b border-line">
        <Container className="py-16">
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            <div>
              <Eyebrow>Selected writing &amp; media</Eyebrow>
              <div className="mt-4 hidden md:block">
                <ArrowLink href="/writing/">Full index</ArrowLink>
              </div>
            </div>
            <div className="-mt-6">
              {writing.map((w) => (
                <WritingCard key={w!.title} item={w!} />
              ))}
              <div className="mt-8 md:hidden">
                <ArrowLink href="/writing/">Full index</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Invitation */}
      <section>
        <Container className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Conversations</Eyebrow>
            <p className="mt-4 font-serif text-2xl leading-relaxed text-ink">
              {profile.invitationShort}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${profile.contact.email}`}
                className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
              >
                Email Chris
              </a>
              <ArrowLink href={profile.contact.linkedin} external>
                LinkedIn
              </ArrowLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
