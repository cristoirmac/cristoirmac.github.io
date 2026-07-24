import type { Metadata } from 'next';
import { Container, PageHeader, Eyebrow, ArrowLink } from '@/components/primitives';
import Markdown from '@/components/Markdown';
import { bio } from '@/content/bio';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Professional biography of Chris McFadden — 20+ years in software and engineering leadership across enterprise SaaS, high-scale cloud platforms, acquisitions, and AI, based in the Washington, DC area.',
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader eyebrow="About" title="Chris McFadden" />

      {/* Portrait — shown at the top on mobile; on desktop it lives in the sidebar beside the story */}
      <div className="mt-10 lg:hidden">
        <img
          src="/images/chris-mcfadden-960.jpg"
          srcSet="/images/chris-mcfadden-480.jpg 480w, /images/chris-mcfadden-960.jpg 960w"
          sizes="192px"
          width={960}
          height={960}
          alt="Chris McFadden"
          className="block h-auto w-48 rounded-xl border border-line"
        />
      </div>

      <div className="mt-14 grid gap-x-14 gap-y-10 lg:grid-cols-[1fr_280px]">
        <div className="max-w-prose">
          <Markdown>{bio.body}</Markdown>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <div className="hidden overflow-hidden rounded-xl border border-line bg-surface lg:block">
            <img
              src="/images/chris-mcfadden-960.jpg"
              srcSet="/images/chris-mcfadden-480.jpg 480w, /images/chris-mcfadden-960.jpg 960w"
              sizes="(min-width: 1024px) 280px, 100vw"
              width={960}
              height={960}
              alt="Chris McFadden"
              className="block h-auto w-full"
            />
          </div>

          <div className="rounded-xl border border-line bg-surface p-6">
            <Eyebrow>At a glance</Eyebrow>
            <ul className="mt-4 space-y-3">
              {bio.facts.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                  <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-line bg-surface p-6">
            <Eyebrow>Education</Eyebrow>
            <ul className="mt-4 space-y-3">
              {profile.education.map((e) => (
                <li key={e.school} className="text-sm leading-relaxed text-ink-muted">
                  <span className="block font-medium text-ink">{e.school}</span>
                  {e.detail}
                </li>
              ))}
            </ul>
          </div>

          {profile.recognition.length > 0 && (
            <div className="rounded-xl border border-line bg-surface p-6">
              <Eyebrow>Recognition</Eyebrow>
              <ul className="mt-4 space-y-3">
                {profile.recognition.map((r) => (
                  <li key={r.text} className="text-sm leading-relaxed text-ink-muted">
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink link-underline"
                    >
                      {r.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-3">
            <ArrowLink href="/readme/">Working with me</ArrowLink>
            <div>
              <ArrowLink href="/contact/">Get in touch</ArrowLink>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
