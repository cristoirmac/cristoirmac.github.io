import type { ExperienceChapter } from '../types';

// Career narrative — executive altitude, not a bullet dump. Public-surface framing:
// no Quorum ARR figures; transaction stated as "2026 strategic investment from Enlightenment Capital."

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
      'Quorum is a PE-backed B2B SaaS company that grew quickly and through acquisition. I joined as its first VP of Engineering, was promoted to SVP, and then to CTO. The mandate evolved from building the management structure and operating model required for the next stage to running technology as a durable, efficient platform business — integrating acquired products, maturing reliability and security, and turning applied AI into leverage across both the product and the way engineering works.',
    scale: [
      'Lead Engineering, Platform, Data, Reliability, Security, IT, and AI',
      'Globally distributed organization across the U.S., Brazil, and Moldova',
      'Scaled engineering from ~25 to 100+ (2021–2023)',
      'Multi-product public-affairs SaaS platform',
    ],
    changes: [
      'Built the engineering leadership team and a product-aligned operating model as the org scaled.',
      'Completed a multi-year "One Platform" consolidation of acquired PAC and grassroots products, including migrating all remaining Phone2Action customers, while protecting customer continuity.',
      'Built an AI-enabled engineering system — reusable skills, guardrails, evaluation, and automated triage — adopted across every engineering team, with contribution from dozens of engineers rather than one central group.',
      'Shipped Quincy to production and led a portfolio of agentic workflows — released, piloted, or in beta — across meeting preparation, CRM, policy communications, grassroots advocacy, and bill tracking, grounded in proprietary structured data with permission-aware retrieval, evaluation, and cost controls.',
      'Modernized core infrastructure on Kubernetes and reduced change lead time.',
      'Owned security, privacy, compliance, and AI governance (SOC 2 Type II, PCI, GDPR/CCPA, NIST 800-171, vulnerability management, incident response).',
    ],
    outcomes: [
      'Over about two years, increased delivery capacity with a smaller coding team than in 2024 — cutting median epic cycle time from 26 to 13 days while roughly 95% of completed work stayed roadmap-aligned.',
      'Cut the share of engineering work spent on defects and operational rework from about 43% to 34% over the same period, lowering operational load and freeing more capacity for roadmap and client-facing improvements.',
      'Led the technology, security, and AI work supporting Quorum’s 2026 strategic investment from Enlightenment Capital.',
    ],
    relatedCaseStudies: [
      'quorum-scaling-pe-backed-saas',
      'applied-ai-product-and-delivery',
      'post-acquisition-integration',
    ],
    relatedWriting: [
      'Claude Code Is the Most Important Engineering Management Tool Since Jira',
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
      'Supported growth to nearly $100M ARR at Rule-of-40 performance',
    ],
    changes: [
      'Led the transition from founder-led, on-premises software to a cloud-native, API-first, multi-tenant SaaS platform.',
      'Launched SparkPost as a developer-focused SaaS offering — core cloud infrastructure, public APIs, and a web UI — alongside the established on-prem product.',
      'Launched Momentum Analytics, a real-time email analytics platform that became a foundation for later SaaS analytics and deliverability capabilities.',
      'Reoriented the organization around continuous delivery, automated testing, and production ownership (DevOps and SRE).',
      'Integrated the Port25/PowerMTA and eDataSource acquisitions, including their teams, products, and technology.',
    ],
    outcomes: [
      'As SVP, led SparkPost engineering through its $600M acquisition by MessageBird, protecting customer continuity and SLA performance through the ownership transition.',
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
      'At Discovery, I led engineering for digital media, streaming, and e-commerce initiatives during the company’s shift from broadcast toward digital distribution, including integrating acquired digital businesses.',
    scale: [
      'Engineering across digital media, streaming video, and e-commerce',
      'Public-company environment during rapid digital expansion',
    ],
    changes: [
      'Enabled Discovery’s first full-episode streaming architecture and migrated 30,000+ Flash videos to adaptive, cross-device streaming.',
      'Delivered PCI-compliant direct-to-consumer e-commerce.',
      'Modernized core digital properties (Discovery.com, Discovery News) onto a more scalable platform.',
      'Led post-acquisition integration of Petfinder and HowStuffWorks.',
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
      'Database engineering, C++/SQL Server application development, and workflow systems for public-sector and enterprise clients — the technical foundation underneath everything that followed.',
    scale: ['Database engineering', 'C++/SQL Server application development', 'Workflow systems for public-sector and enterprise clients'],
    changes: [],
    outcomes: [],
  },
];
