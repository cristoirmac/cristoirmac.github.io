import type { ExperienceChapter } from '../types';

// Career narrative — executive altitude, not a bullet dump. Public-surface framing:
// no internal Quorum delivery/allocation figures (use the public Haystack numbers); no ARR;
// transaction stated as "2026 strategic investment from Enlightenment Capital"; customer-migration
// stated as a program, not a per-product completion claim.

export const experience: ExperienceChapter[] = [
  {
    slug: 'quorum',
    company: 'Quorum',
    companyUrl: 'https://www.quorum.us',
    companyDescription:
      'A public-affairs software platform (PE-backed B2B SaaS) serving government relations, advocacy, PAC, stakeholder engagement, and compliance teams.',
    titles: 'Chief Technology Officer (2023–present); first VP, then SVP of Engineering (2021–2023)',
    period: '2021 – Present',
    context:
      'Quorum is a PE-backed B2B SaaS company that grew quickly and through acquisition. I joined as its first VP of Engineering, was promoted to SVP, and then to CTO. The mandate evolved from building the leadership and operating model for the next stage to running technology as an efficient platform business — integrating acquired products, maturing reliability and security, and turning applied AI into real value in both the product and the way engineering works.',
    scale: [
      'Lead Engineering, Platform, Data, Reliability, Security, IT, and AI',
      'Globally distributed organization across the U.S., Brazil, and Moldova',
      'Scaled engineering from ~25 to 100+ (2021–2023)',
      'Multi-product public-affairs SaaS platform',
      'Quorum publicly reports working with 45% of the Fortune 100 and 1,800+ policy teams',
      'Publicly named customers span technology and consumer platforms (Stripe, Uber, DoorDash, Expedia), global brands (Toyota, General Motors, Coca-Cola, Walmart, Mastercard, Chipotle, General Mills), federal and state government (U.S. Air Force, SEC, USDA), and advocacy and mission-driven organizations (Sierra Club, Greenpeace, Human Rights Watch, Consumer Technology Association, YMCA)',
    ],
    changes: [
      'Built and developed a distributed leadership team across product engineering, platform, data, AI, reliability, security, and IT, and recruited and developed directors, managers, and senior technical leaders — increasing management depth and reducing dependence on the CTO for routine decisions.',
      'Partnered with Product on portfolio choices, discovery, scope, and sequencing, and with Sales and Customer Success on enterprise commitments, escalations, and renewal risk — and served as a senior technology voice with strategic customers and executive sponsors where reliability, security, product behavior, or delivery confidence affected the relationship.',
      'Led a multi-year consolidation and customer-migration program across acquired PAC and grassroots products, balancing platform simplification with customer continuity.',
      'Strengthened production ownership and platform modernization — cloud operations, reliability, security, incident response, SLOs, observability, and a move to Kubernetes — with clearer escalation across Engineering, Support, and Customer Success.',
      'Shipped Quincy to production and led a portfolio of agentic workflows — released, piloted, or in beta — across meeting preparation, CRM, policy communications, grassroots advocacy, and bill tracking, grounded in proprietary structured data with permission-aware retrieval, evaluation, and cost controls.',
      'Built an AI-enabled engineering system — reusable context, skills, evaluation, guardrails, and automated triage — with broad adoption and contribution across the engineering organization.',
      'Owned security, privacy, compliance, and AI governance (SOC 2 Type II, PCI, GDPR/CCPA, NIST 800-171, vulnerability management, incident response), and improved R&D and infrastructure efficiency through platform consolidation, a distributed operating model, and cloud-cost discipline.',
    ],
    outcomes: [
      'Over 24 months, improved software-delivery flow with the engineering team — 46% faster change lead time, 72% faster release time, 247% higher deployment frequency, and 34% lower rework (public Haystack case study, linked below).',
      'Led the technology, security, and AI work supporting Quorum’s 2026 strategic investment from Enlightenment Capital.',
    ],
    relatedCaseStudies: [
      'quorum-scaling-pe-backed-saas',
      'applied-ai-product-and-delivery',
      'post-acquisition-integration',
    ],
    relatedWriting: [
      'Quorum’s Journey: Scaling Software Delivery with Haystack',
      'Before You Trust AI to Build, Make It Fix Bugs',
    ],
  },
  {
    slug: 'sparkpost',
    company: 'Message Systems / SparkPost',
    companyDescription:
      'An enterprise email-infrastructure company that evolved from founder-led on-premises software into a cloud-native SaaS platform for high-scale delivery, analytics, and deliverability; acquired by MessageBird (now Bird) in 2021.',
    titles: 'VP, then SVP of Engineering (2014–2021); Director of Engineering (2012–2014)',
    period: '2012 – 2021',
    context:
      'SparkPost began as founder-led, on-premises enterprise software (Momentum / Message Systems). The mandate was to build a cloud-native SaaS business alongside — and eventually around — that established product, without losing the enterprise customers who depended on it. I led that transition, first launching the SaaS offering and then building the organization and platform to run it at very high scale.',
    scale: [
      'Built and led an ~80-person Engineering, Data, DevOps, and SRE organization',
      'More than one billion messages per day at peak',
      'Event-driven data pipelines processing billions of events per day',
      'Owned a $6M+ AWS budget with disciplined cost controls',
      'SparkPost publicly reported delivering nearly 40% of the world’s commercial email',
      'Publicly named customers included The New York Times, Adobe, Booking.com, LinkedIn, Twitter, Pinterest, Zillow, Rakuten, and Comcast, among others',
    ],
    changes: [
      'Led the transition from founder-led, on-premises software to a cloud-native, API-first, multi-tenant SaaS platform, launching SparkPost alongside the established on-prem product.',
      'Built an ~80-person global Engineering, Data, DevOps, and SRE organization and its leadership team as the company moved from licensed software to always-on SaaS.',
      'Ran engineering for a platform processing more than a billion messages a day at peak, where reliability, latency, deliverability, and incident response had direct customer and revenue consequences.',
      'Worked directly with enterprise customers, Sales, Customer Success, Deliverability, Product, and Security during incidents, technical evaluations, platform transitions, and high-stakes account situations.',
      'Reoriented the organization around continuous delivery, automated testing, production ownership, and a dedicated SRE practice with observability, incident response, and postmortems.',
      'Owned a $6M+ AWS budget, treating architecture, capacity, data-platform scale, and cloud cost as one economic system.',
      'Integrated the Port25/PowerMTA and eDataSource acquisitions — teams, products, and technology — and led engineering through the MessageBird acquisition, protecting customer continuity and SLA performance.',
    ],
    outcomes: [
      'Grew into a developer-focused, cloud-native SaaS platform approaching $100M ARR at Rule-of-40 performance, running more than a billion messages a day at peak.',
      'Led engineering through a $180M strategic growth investment in January 2021 and, months later, the $600M acquisition by MessageBird — protecting customer continuity and SLA performance through the ownership transition.',
    ],
    relatedCaseStudies: [
      'sparkpost-onprem-to-cloud-native',
      'sparkpost-devops-production-ownership',
      'post-acquisition-integration',
    ],
    relatedWriting: [
      'Our DevOps Journey @SparkPost Engineering',
      'Using Microservices to Build an API That Lasts',
      'Email Infrastructure with Chris McFadden',
    ],
  },
  {
    slug: 'discovery',
    company: 'Discovery Communications',
    companyDescription:
      'A global media company spanning television, digital media, streaming, and e-commerce during a period of rapid digital expansion.',
    titles: 'Director of Engineering (2006–2012); E-Commerce & Digital Media Technical Lead (2000–2006)',
    period: '2000 – 2012',
    context:
      'At Discovery, I led engineering for digital media, streaming, and e-commerce during the company’s shift from broadcast toward digital distribution — working closely with Product, editorial, marketing, and commerce, and integrating acquired digital businesses.',
    scale: [
      'Engineering across digital media, streaming video, and e-commerce',
      'Public-company environment during rapid digital expansion',
    ],
    changes: [
      'Enabled Discovery’s first full-episode streaming architecture and migrated 30,000+ Flash videos to adaptive, cross-device streaming.',
      'Delivered PCI-compliant direct-to-consumer e-commerce and modernized core digital properties (Discovery.com, Discovery News) onto a more scalable platform.',
      'Led post-acquisition integration of Petfinder and HowStuffWorks, and hired and developed engineering teams across digital media, streaming, and e-commerce.',
    ],
    outcomes: [],
    relatedCaseStudies: ['post-acquisition-integration'],
  },
  {
    slug: 'earlier',
    company: 'Earlier career',
    companyDescription:
      'Software engineering and technical leadership foundation before Discovery.',
    titles: 'Software engineering and technical leadership roles',
    period: 'Before 2000',
    context:
      'Database engineering, C++/SQL Server application development, and workflow systems for public-sector and enterprise clients — the hands-on foundation underneath everything that followed.',
    scale: [],
    changes: [],
    outcomes: [],
  },
];
