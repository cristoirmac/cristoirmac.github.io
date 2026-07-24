export interface NavItem {
  label: string;
  href: string;
}

// Top navigation. Six links + Contact rendered separately as a CTA (see SiteHeader).
// Nav label "How I Lead" is short for the bar; the page heading stays "Leadership & Operating Model".
export const primaryNav: NavItem[] = [
  { label: 'Experience', href: '/experience/' },
  { label: 'Transformations', href: '/transformations/' },
  { label: 'Point of View', href: '/point-of-view/' },
  { label: 'How I Lead', href: '/operating-model/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'About', href: '/about/' },
];
// README (/readme/) is intentionally NOT in the primary nav — it's linked from How I Lead and About
// as "Working with me," and remains in the footer. (Reviewer round 5.)

// Contact is styled as the header CTA rather than a standard nav item.
export const contactNav: NavItem = { label: 'Contact', href: '/contact/' };

// Footer can afford the full set (stacked), including Point of View.
export const footerNav: NavItem[] = [
  { label: 'Experience', href: '/experience/' },
  { label: 'Transformations', href: '/transformations/' },
  { label: 'Point of View', href: '/point-of-view/' },
  { label: 'Leadership & Operating Model', href: '/operating-model/' },
  { label: 'README (how to work with me)', href: '/readme/' },
  { label: 'Writing & Media', href: '/writing/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
