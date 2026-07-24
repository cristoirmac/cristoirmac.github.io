import type { Metadata } from 'next';
import { Container, PageHeader, Eyebrow } from '@/components/primitives';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Chris McFadden about CTO and senior engineering leadership roles involving meaningful platform, organizational, or AI transformation.',
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl">
        <PageHeader eyebrow="Contact" title="Let’s talk about the right mandate." />

        <p className="mt-10 max-w-prose font-serif text-2xl leading-relaxed text-ink-soft">
          {profile.contactStatement}
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div>
            <Eyebrow>Email</Eyebrow>
            <a
              href={`mailto:${profile.contact.email}`}
              className="mt-3 block text-base text-ink link-underline"
            >
              {profile.contact.email}
            </a>
          </div>
          <div>
            <Eyebrow>LinkedIn</Eyebrow>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-base text-ink link-underline"
            >
              /in/chrismcfadden
            </a>
          </div>
          <div>
            <Eyebrow>Résumé</Eyebrow>
            <a
              href={`mailto:${profile.contact.email}?subject=${encodeURIComponent(profile.resume.mailtoSubject)}`}
              className="mt-3 block text-base text-ink link-underline"
            >
              {profile.resume.label}
            </a>
          </div>
        </div>

        <p className="mt-14 max-w-prose text-sm leading-relaxed text-ink-faint">
          Based in the {profile.location}. Open to remote-first and hybrid roles with periodic travel.
        </p>
      </div>
    </Container>
  );
}
