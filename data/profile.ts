// Single source of truth for identity, positioning, contact, and public-safe facts.
// The website is a PUBLIC surface and uses public / LinkedIn framing only.
// Posture: a portfolio, not a job-search page. No target-role / mandate / availability copy.

// Canonical origin. Drives canonical tags, og:url, sitemap, and robots.
// Must match where the site is actually served. NOTE: chrismcfadden.com is registered to
// someone else — do not point at it. Update only if a custom domain is configured in Pages
// (repo CNAME + DNS) and confirmed serving.
export const SITE_URL = 'https://cristoirmac.github.io';

export const profile = {
  name: 'Chris McFadden',
  role: 'Chief Technology Officer',
  positioningLine:
    'Applied AI in products and engineering · Enterprise SaaS · PE-backed software · Platform & reliability',

  location: 'Washington, DC area',

  // Home hero.
  headline: 'Building the technology organization for the next stage of B2B SaaS.',
  subhead:
    'I build and lead global engineering organizations through platform modernization, product integration, cloud operations, and applied AI — developing strong leaders, partnering closely with Product and customers, and improving reliability, delivery, and economics.',

  // One-paragraph intro (home "In brief").
  intro:
    'Across more than 20 years at Discovery, SparkPost, and Quorum, I have built global engineering organizations, operated cloud platforms at billion-message scale, integrated acquired products and teams, and applied AI in both customer workflows and engineering. The common thread is building organizations that turn customer needs into reliable products — without losing the strengths that made them successful.',

  // Home "Connect" invitation. Portfolio posture — comparing notes, not seeking a role.
  invitationShort:
    'I write and speak about engineering leadership, product and R&D investment, cloud platforms, customer trust, acquisition integration, and applied AI. I enjoy comparing notes with founders, operators, investors, and Product and technology leaders working through similar questions.',

  contact: {
    email: 'chris.c.mcf@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chrismcfadden/',
    github: 'https://github.com/cristoirmac',
    // No phone number, no home address (policy).
  },

  // Three areas where Chris creates value.
  valueAreas: [
    {
      title: 'Build organizations and leaders that scale',
      body: 'I design engineering organizations around the capabilities the business needs, then recruit, develop, and retain the leaders and teams required to deliver them — with clear structure, role definition, management depth, and thoughtful performance management.',
    },
    {
      title: 'Partner with Product and customers to create value',
      body: 'I work with Product, Sales, Customer Success, executive peers, and customers to understand the real problem, shape the solution, test value through iteration, and make sound R&D investment choices.',
    },
    {
      title: 'Own production and technology economics',
      body: 'I have deep experience in cloud operations, reliability, incidents, postmortems, security, and cloud-cost engineering. When technology affects customer trust, revenue, or retention, I take ownership.',
    },
  ],

  // Contact-page statement — affirmative, portfolio posture.
  contactStatement:
    'I welcome thoughtful conversations about building technology organizations, developing strong leaders, product and R&D investment, cloud platforms, customer trust, acquisition integration, and applied AI. The best way to reach me is by email or LinkedIn.',

  education: [
    { school: 'The Johns Hopkins University', detail: 'M.S., Information Systems and Technology' },
    { school: 'George Mason University', detail: 'B.S., Computer Science' },
  ],

  additional: [
    'External Advisory Board Member, George Mason University Computer Science Department',
    'Dual U.S. / Irish citizen',
  ],

  recognition: [
    {
      text: 'Inducted into the George Mason University Computer Science Dean’s Academy of Excellence (2026)',
      href: 'https://cs.gmu.edu/news/2026-04/alumnus-chris-mcfadden-bs-96-inducted-deans-academy-excellence',
    },
    {
      text: 'External Advisory Board Member, George Mason University Computer Science Department (2021–present)',
      href: 'https://cs.gmu.edu/connections/advisory-board',
    },
  ],
} as const;

export const seo = {
  siteName: 'Chris McFadden',
  title: 'Chris McFadden — CTO & Engineering Executive',
  description:
    'Chris McFadden is a CTO and engineering executive who builds technology organizations and leaders, partners with Product and customers, owns production, and invests in platforms, cloud, and applied AI — proven at SparkPost and Quorum.',
  ogImagePath: '/og.png',
} as const;
