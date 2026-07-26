export interface NavItem {
  label: string;
  href: string;
}

// Top navigation. Six links + Contact rendered separately as a CTA (see SiteHeader).
// Nav labels are short for the bar; page headings differ ("How I Lead" → "Leadership & Operating
// Model"; "Working With Me" → the README page).
export const primaryNav: NavItem[] = [
  { label: 'Experience', href: '/experience/' },
  { label: 'Transformations', href: '/transformations/' },
  { label: 'How I Lead', href: '/operating-model/' },
  { label: 'Working With Me', href: '/readme/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'About', href: '/about/' },
];

// Contact is styled as the header CTA rather than a standard nav item.
export const contactNav: NavItem = { label: 'Contact', href: '/contact/' };

// Footer can afford the full set (stacked). /point-of-view/ is a redirect, so it is not listed.
export const footerNav: NavItem[] = [
  { label: 'Experience', href: '/experience/' },
  { label: 'Transformations', href: '/transformations/' },
  { label: 'Leadership & Operating Model', href: '/operating-model/' },
  { label: 'README (how to work with me)', href: '/readme/' },
  { label: 'Writing & Media', href: '/writing/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
