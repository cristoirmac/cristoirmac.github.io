// Single source of truth for identity, positioning, contact, and public-safe facts.
// The website is a PUBLIC surface and uses public / LinkedIn framing only.

export const SITE_URL = 'https://chrismcfadden.com'; // change on domain confirmation

export const profile = {
  name: 'Chris McFadden',
  role: 'Chief Technology Officer',
  positioningLine:
    'Applied AI in products and engineering · Enterprise SaaS · PE-backed software · Platform & reliability',

  location: 'Washington, DC area (Silver Spring, MD)',

  // Home hero.
  headline: 'Building the technology organization for the next stage of B2B SaaS.',
  subhead:
    'I build strong engineering organizations and lead them through platform modernization, applied AI, and cloud operations — improving customer trust, delivery, reliability, and operating leverage.',

  // One-paragraph intro (home). Grounded, specific; founder-led is used as evidence, not a category.
  intro:
    'I work with growing B2B SaaS companies whose technology organization and operating model need to evolve for the next stage — without losing the speed, customer knowledge, and technical strengths that got them there. I have led two major technology and operating-model transformations: SparkPost’s move from founder-led, on-premises software to a high-scale cloud platform, and Quorum’s growth as a PE-backed SaaS business integrating acquired products, strengthening its operating model, and shipping applied AI. Across more than 20 years I have built globally distributed engineering teams, led a platform processing more than a billion messages a day, and guided technology through acquisition in public-company and PE-backed environments serving enterprise customers.',

  // Shorter invitation for the Home page; the fuller version lives on Contact.
  invitationShort:
    'I am interested in CTO and senior engineering leadership roles involving platform modernization, operating-model change, acquisition integration, or applied AI — particularly in mature or late-growth B2B SaaS and PE-backed software. At this stage, I care more about fit and a clear mandate than title.',

  contact: {
    email: 'chris.c.mcf@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chrismcfadden/',
    github: 'https://github.com/cristoirmac',
    // No phone number, no home address (policy).
  },

  resume: {
    // Not hosted on the public site — available by email on request, so the tailored résumé
    // stays out of a public download.
    mailtoSubject: 'Résumé request',
    label: 'Available on request',
  },

  // Three areas where Chris creates value. Reliability, security, and cost live inside these.
  valueAreas: [
    {
      title: 'Build organizations and leaders that scale',
      body: 'I design engineering organizations around the capabilities the business needs, then recruit, develop, and retain the leaders and teams to deliver them — structure, role clarity, management depth, and the hard talent decisions when they are needed.',
    },
    {
      title: 'Earn customer trust and partner across the business',
      body: 'I work with Product, Sales, Customer Success, and executive peers — and directly with customers as an executive sponsor during strategic sales, escalations, incidents, and renewal risk. Trust comes from credible commitments and follow-through, not reassurance.',
    },
    {
      title: 'Run reliable, economically sound platforms',
      body: 'I own production — reliability, incident response, postmortems, security, and observability — and treat cloud cost as an architectural and customer concern. Platform modernization and applied AI sit inside this system, improving customer value and operating leverage.',
    },
  ],

  // Contact-page statement — affirmative, no availability-desperation.
  contactStatement:
    'I am interested in serious conversations about CTO and senior engineering leadership roles where the mandate involves meaningful platform modernization, engineering operating-model change, acquisition integration, or applied-AI work — mature or late-growth B2B SaaS, PE-backed transformation, or post-acquisition platform consolidation. At this stage I care more about fit and a clear mandate than about title.',

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
    'Chris McFadden is a CTO and engineering executive who has led two major technology and operating-model transformations — cloud-native re-platforming at SparkPost, and PE-backed scaling and applied AI at Quorum.',
  ogImagePath: '/og.png',
} as const;
