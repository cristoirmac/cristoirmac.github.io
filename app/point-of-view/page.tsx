import type { Metadata } from 'next';
import { Container } from '@/components/primitives';
import Redirector from './Redirector';

// /point-of-view/ was folded into How I Lead. This route stays alive only so existing
// external links keep working: canonical points at the destination, the page is noindex,
// and it forwards immediately on the client with a visible fallback link for no-JS.
const DESTINATION = '/operating-model/';

export const metadata: Metadata = {
  title: 'Point of View',
  description: 'This page has moved to Leadership & Operating Model.',
  alternates: { canonical: DESTINATION },
  robots: { index: false, follow: true },
};

export default function PointOfViewRedirectPage() {
  return (
    <Container className="py-24">
      <Redirector to={DESTINATION} />
      <div className="max-w-prose">
        <h1 className="font-serif text-title font-medium text-ink">This page has moved.</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          My point of view now lives inside{' '}
          <a href={DESTINATION} className="link-underline text-ink">
            Leadership &amp; Operating Model
          </a>
          . You should be redirected automatically.
        </p>
      </div>
    </Container>
  );
}
