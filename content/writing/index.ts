import type { WritingItem, Tag } from '../types';

// Source: public LinkedIn Pulse index "Featured Articles & Podcasts — Chris McFadden".
// Items WITHOUT needsReview have summaries verified against the actual source. Items still marked
// needsReview: true have NOT been verified — the UI suppresses their drafted summaries.
// Add new items here — no component changes needed.

export const TAGS: Tag[] = [
  'Cloud & SaaS',
  'Engineering Leadership',
  'DevOps & SRE',
  'Architecture & Scale',
  'AI',
  'Product & Engineering',
  'Acquisition & Integration',
];

export const writing: WritingItem[] = [
  // ——— Featured (home page) ———
  {
    title: 'Our DevOps Journey @SparkPost Engineering',
    type: 'article',
    source: 'LinkedIn',
    date: '2017-02-15',
    url: 'https://www.linkedin.com/pulse/our-devops-journey-sparkpost-engineering-chris-mcfadden/',
    summary:
      'A contemporaneous account of SparkPost’s shift from quarterly on-premises releases to continuous cloud deployment — agile adoption, cross-functional teams, automation, and the formation of an SRE team, with shared responsibility for production.',
    tags: ['DevOps & SRE', 'Cloud & SaaS'],
    company: 'SparkPost',
    relatedCaseStudy: 'sparkpost-devops-production-ownership',
    featured: true,
  },
  {
    title: 'Claude Code Is the Most Important Engineering Management Tool Since Jira',
    type: 'article',
    source: 'LinkedIn',
    date: '2026-05-09',
    url: 'https://www.linkedin.com/pulse/claude-code-most-important-engineering-management-tool-chris-mcfadden-sbwle',
    summary:
      'Agentic coding tools are as much a management and observability instrument as a code generator: they make work-in-progress visible and reward clear intent, ownership, and review discipline. The bottleneck shifts from writing code to shaping work and moving customer value through the system.',
    tags: ['AI', 'Engineering Leadership'],
    company: 'Quorum',
    relatedCaseStudy: 'applied-ai-product-and-delivery',
    featured: true,
  },
  {
    title: 'Email Infrastructure with Chris McFadden',
    type: 'podcast',
    source: 'Software Engineering Daily',
    date: '2017-01-10',
    url: 'https://softwareengineeringdaily.com/2017/01/10/email-infrastructure-with-chris-mcfadden/',
    summary:
      'A conversation on operating high-scale email infrastructure: the architecture, deliverability, and engineering behind sending at very large volume.',
    tags: ['Architecture & Scale', 'Cloud & SaaS'],
    company: 'SparkPost',
    featured: true,
  },
  {
    title: 'Using Microservices to Build an API That Lasts',
    type: 'talk',
    source: 'QCon San Francisco 2017',
    date: '2017',
    // The SparkPost blog post is gone (redirects to a generic Bird product page);
    // the QCon session page is the primary source and is live.
    url: 'https://qconsf.com/sf2017/sf2017/presentation/using-microservices-build-api-lasts.html',
    summary:
      'Designing durable, developer-first APIs on a microservices foundation: API-first design, versioning, decoupling deployment from release, and aligning service boundaries with team ownership.',
    tags: ['Architecture & Scale', 'Product & Engineering'],
    company: 'SparkPost',
    relatedCaseStudy: 'sparkpost-onprem-to-cloud-native',
    featured: true,
  },
  {
    title: 'Before You Trust AI to Build, Make It Fix Bugs',
    type: 'article',
    source: 'LinkedIn',
    date: '2026-06-14',
    url: 'https://www.linkedin.com/pulse/before-you-trust-ai-build-make-fix-bugs-chris-mcfadden-n5vie',
    summary:
      'AI agents should earn trust on bug-fixing and remediation before net-new development, because the real ceiling is undocumented context, not model capability — with graduated autonomy (triage, then fix, then feature) and real evaluation.',
    tags: ['AI', 'Engineering Leadership'],
    company: 'Quorum',
    relatedCaseStudy: 'applied-ai-product-and-delivery',
    featured: true,
  },

  // ——— Quorum / AI ———
  {
    title:
      'We Set Out to Build an AI Tool to Estimate Engineering Work. What We Built Was a Mirror.',
    type: 'article',
    source: 'LinkedIn',
    date: '2026-07-18',
    url: 'https://www.linkedin.com/pulse/we-set-out-build-ai-tool-estimate-engineering-work-what-mcfadden-phfqe',
    summary:
      'An attempt to build an AI estimation tool became a mirror: greater estimate precision did not create predictability. The lever is the operating model — scope clarity, WIP limits, dependencies, and learning loops — which AI amplifies rather than replaces.',
    tags: ['AI', 'Engineering Leadership', 'Product & Engineering'],
    company: 'Quorum',
    relatedCaseStudy: 'applied-ai-product-and-delivery',
  },
  {
    title: 'AI-First Engineering at Quorum',
    type: 'article',
    source: 'LinkedIn',
    date: '2025-05-23',
    url: 'https://www.linkedin.com/pulse/ai-first-engineering-quorum-chris-mcfadden-d1oaf/',
    summary:
      'Formalizing AI in daily engineering work, framed as a shift from typing to thinking: AI handling an increasing share of code generation, with engineers spending more time on intent, architecture, context, validation, and judgment.',
    tags: ['AI', 'Engineering Leadership'],
    company: 'Quorum',
    relatedCaseStudy: 'applied-ai-product-and-delivery',
  },
  {
    title: 'Leaving the Cave: Building Software in an Age of Abundance',
    type: 'article',
    source: 'LinkedIn',
    date: '2026-03-08',
    url: 'https://www.linkedin.com/pulse/leaving-cave-building-software-age-abundance-chris-mcfadden-iacwe',
    summary:
      'As the cost of generating code falls, the binding constraint moves from writing software to understanding customers. Uses Plato’s cave to argue that production and real usage — not artifacts — are where reality lives, and judgment becomes the scarce resource.',
    tags: ['AI', 'Architecture & Scale'],
    company: 'Quorum',
  },
  {
    title: 'Quorum’s Lightweight Kanplan Development Methodology',
    type: 'article',
    source: 'LinkedIn',
    date: '2024-11-15',
    url: 'https://www.linkedin.com/pulse/quorums-lightweight-kanplan-development-methodology-chris-mcfadden-3y16e/',
    summary:
      'A lightweight, flow-based development model: continuous flow and WIP limits over sprints and ceremony, outcomes over story points, and DORA metrics as signals — being agile rather than doing agile.',
    tags: ['Engineering Leadership', 'Product & Engineering'],
    company: 'Quorum',
    relatedCaseStudy: 'quorum-scaling-pe-backed-saas',
  },
  {
    title: 'Quorum Enhances Developer Experience with Augment’s Context-Aware AI Assistant',
    type: 'interview',
    source: 'Augment Code',
    date: '2025-10-01',
    url: 'https://www.augmentcode.com/customers/quorum',
    summary:
      'A customer case study on Quorum’s move to context-aware AI coding assistance across a ~70-developer organization, with Chris quoted on response quality and on AI coding tools becoming as integral to development as the IDE.',
    tags: ['AI', 'Engineering Leadership'],
    company: 'Quorum',
    relatedCaseStudy: 'applied-ai-product-and-delivery',
  },
  {
    title: 'Quorum’s Journey: Scaling Software Delivery with Haystack',
    type: 'interview',
    source: 'Haystack',
    date: '2025',
    url: 'https://www.usehaystack.io/customers/quorums-journey-scaling-software-delivery-with-haystack',
    summary:
      'A case study on measuring and improving software-delivery flow at Quorum: real-time delivery and DORA metrics used to find bottlenecks and empower teams, with substantial improvement over two years.',
    tags: ['Engineering Leadership', 'DevOps & SRE'],
    company: 'Quorum',
    relatedCaseStudy: 'quorum-scaling-pe-backed-saas',
  },

  // ——— SparkPost / cloud, API, DevOps, architecture ———
  {
    title: 'Why Choose AWS Over a Data Center',
    type: 'article',
    source: 'LinkedIn',
    date: '2016-09-22',
    url: 'https://www.linkedin.com/pulse/why-sparkpost-chose-aws-over-data-center-chris-mcfadden/',
    summary:
      'The reasoning behind running SparkPost on AWS instead of self-managed data centers: freeing engineers from hardware and undifferentiated operations to focus on the product, with elastic scale and pay-for-use economics.',
    tags: ['Cloud & SaaS', 'DevOps & SRE'],
    company: 'SparkPost',
    relatedCaseStudy: 'sparkpost-onprem-to-cloud-native',
  },
  {
    title: 'Microservices for Startups: An Interview with Chris McFadden of SparkPost',
    type: 'interview',
    source: 'dev.to',
    date: '2018-04-16',
    url: 'https://dev.to/jakelumetta/microservices-for-startups-an-interview-with-chris-mcfadden-of-sparkpost-gc2',
    summary:
      'On building a microservices engineering culture at SparkPost: a dozen services alongside the core engine, teams owning the full pipeline, decoupling deployment from release, and high cohesion with loose coupling.',
    tags: ['Architecture & Scale', 'Engineering Leadership'],
    company: 'SparkPost',
    relatedCaseStudy: 'sparkpost-onprem-to-cloud-native',
  },
  {
    title: 'SparkPost Delivers and Analyzes Billions of Emails Daily on AWS',
    type: 'interview',
    // AWS retired the page; it now redirects to a generic index. Linking the archived copy,
    // which was verified to be the original SparkPost case study.
    source: 'AWS Case Studies (archived)',
    url: 'https://web.archive.org/web/20250414180159/https://aws.amazon.com/solutions/case-studies/sparkpost/',
    summary:
      'An AWS case study on how SparkPost ran a high-scale, cloud-native email and analytics platform on AWS.',
    tags: ['Cloud & SaaS', 'Architecture & Scale'],
    company: 'SparkPost',
    relatedCaseStudy: 'sparkpost-onprem-to-cloud-native',
  },
  {
    title: 'Media Interview at AWS re:Invent (theCUBE)',
    type: 'interview',
    source: 'theCUBE / AWS re:Invent',
    date: '2018',
    url: 'https://www.youtube.com/watch?v=DpQkkPgtQRI',
    summary:
      'A video interview on running cloud-native email infrastructure and analytics at scale on AWS.',
    tags: ['Cloud & SaaS', 'Architecture & Scale'],
    company: 'SparkPost',
    needsReview: true,
  },
  {
    title: '10 Rules for an API Developers Love',
    type: 'article',
    source: 'Medium',
    date: '2017-06-13',
    url: 'https://medium.com/@chrismcfadden/10-rules-for-an-api-developers-love-9480d7fbae57',
    summary:
      'Lessons from building SparkPost’s developer-first email API — design principles, versioning, and developer experience.',
    tags: ['Architecture & Scale', 'Product & Engineering'],
    company: 'SparkPost',
  },
  {
    title: 'RESTful API Versioning Best Practices: Why v1 Is #1',
    type: 'article',
    source: 'dev.to',
    date: '2017-09-19',
    url: 'https://dev.to/sparkpost/restful-api-versioning-best-practices-why-v1-is-1',
    summary:
      'Argues that careful API design and governance — avoiding breaking changes — can keep a single public API version viable long-term, rather than managing multiple versions.',
    tags: ['Architecture & Scale'],
    company: 'SparkPost',
  },
  {
    title: '4 Questions to Ask Before Migrating Your App or Service to the Cloud',
    type: 'article',
    source: 'LLR Partners',
    date: '2019-05-31',
    url: 'https://www.llrpartners.com/growth-bit/4-questions-to-ask-before-migrating-to-the-cloud/',
    summary:
      'Guidance for leaders weighing a cloud migration, from a practitioner who has run one.',
    tags: ['Cloud & SaaS', 'Engineering Leadership'],
    company: 'SparkPost',
    relatedCaseStudy: 'sparkpost-onprem-to-cloud-native',
    needsReview: true,
  },
  {
    title: 'Operating DNS on the AWS Network: Challenges and Lessons',
    type: 'article',
    source: 'LinkedIn',
    date: '2017-06-08',
    url: 'https://www.linkedin.com/pulse/operating-dns-aws-network-challenges-lessons-chris-mcfadden/',
    summary: 'Hard-won operational lessons running DNS at scale on AWS.',
    tags: ['DevOps & SRE', 'Cloud & SaaS'],
    company: 'SparkPost',
    needsReview: true,
  },
  {
    title: 'How to Run a Hackathon at Your Company',
    type: 'article',
    source: 'LinkedIn',
    date: '2016-12-29',
    url: 'https://www.linkedin.com/pulse/how-run-hackathon-your-company-chris-mcfadden/',
    summary:
      'A practical playbook for running an internal engineering hackathon that produces real outcomes.',
    tags: ['Engineering Leadership'],
    company: 'SparkPost',
  },
  {
    title: '7 Principles for Using Microservices to Build an API That Lasts',
    type: 'interview',
    source: 'DevOps.com',
    date: '2018-02-07',
    url: 'https://devops.com/7-principles-for-using-microservices-to-build-an-api-that-lasts/',
    summary: 'A featured interview distilling principles for durable microservice-based APIs.',
    tags: ['Architecture & Scale', 'DevOps & SRE'],
    company: 'SparkPost',
  },
];

export const featuredWriting = writing.filter((w) => w.featured);
