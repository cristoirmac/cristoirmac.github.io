import Link from 'next/link';
import { primaryNav, contactNav } from '@/data/navigation';
import { Container } from './primitives';

// No-JS friendly: mobile menu is a native <details> disclosure. Contact is a CTA, not a plain link.
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Chris McFadden — home"
          className="font-serif text-xl font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          Chris McFadden
        </Link>

        {/* Desktop nav + Contact CTA */}
        <nav aria-label="Primary" className="hidden items-center gap-5 nav:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={contactNav.href}
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            {contactNav.label}
          </Link>
        </nav>

        {/* Compact menu (below the nav breakpoint) */}
        <details className="relative nav:hidden">
          <summary
            className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-ink-soft [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
          >
            Menu
            <span aria-hidden>≡</span>
          </summary>
          <div className="absolute right-0 mt-3 w-56 rounded-lg border border-line bg-surface p-2 shadow-lg">
            <ul className="flex flex-col">
              {[...primaryNav, contactNav].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-paper hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </Container>
    </header>
  );
}
