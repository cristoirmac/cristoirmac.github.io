import Link from 'next/link';
import { Container, Eyebrow } from '@/components/primitives';

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 font-serif text-title font-medium text-ink">Page not found.</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
      >
        Back to home
      </Link>
    </Container>
  );
}
