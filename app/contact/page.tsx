import type { Metadata } from 'next';
import { Container, PageHeader, Eyebrow } from '@/components/primitives';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Chris McFadden — conversations about engineering organizations, leadership, product and R&D investment, cloud platforms, customer trust, acquisition integration, and applied AI.',
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl">
        <PageHeader eyebrow="Contact" title="Let’s connect." />

        <p className="mt-10 max-w-prose font-serif text-2xl leading-relaxed text-ink-soft">
          {profile.contactStatement}
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
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
        </div>

        <p className="mt-14 max-w-prose text-sm leading-relaxed text-ink-faint">
          Based in the {profile.location}.
        </p>
      </div>
    </Container>
  );
}
