import Link from 'next/link';
import { profile } from '@/data/profile';
import { footerNav } from '@/data/navigation';
import { Container } from './primitives';

export default function SiteFooter() {
  const year = 2026; // static build; avoids per-request date
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-lg font-semibold text-ink">Chris McFadden</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
            {profile.role} — enterprise SaaS, applied AI, platform and reliability.
          </p>
          <p className="mt-4 text-sm text-ink-faint">{profile.location}</p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow mb-3">Site</p>
          <ul className="space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-sm text-ink-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-3">Connect</p>
          <ul className="space-y-2">
            <li>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-ink-soft"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-ink-soft"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.contact.email}`}
                className="link-underline text-sm text-ink-soft"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-line py-6">
        <p className="text-xs text-ink-faint">© {year} Chris McFadden. All rights reserved.</p>
      </Container>
    </footer>
  );
}
