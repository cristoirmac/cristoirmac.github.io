import type { CaseStudy } from '../types';

// Five case studies, each in the same five-part structure: Situation · What I did ·
// The important choices · Results · What shaped my leadership. Bodies are markdown.
// Public-surface framing throughout: no confidential deal terms, no ARR beyond the public
// SparkPost figure, no internal Quorum delivery/allocation numbers (use public Haystack metrics),
// and customer migration stated as a program rather than a per-product completion claim.

export const caseStudies: CaseStudy[] = [
  // 1 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'sparkpost-onprem-to-cloud-native',
    title: 'From on-premises enterprise software to cloud-native SaaS',
    company: 'SparkPost',
    period: '2012 – 2021',
    tags: ['Cloud & SaaS', 'Architecture & Scale'],
    dek: 'Building a cloud-native, API-first SaaS platform around a founder-led on-premises product — without losing the enterprise customers who depended on it.',
    sections: [
      {
        heading: 'Situation',
        body: 'Message Systems sold Momentum, a founder-led, on-premises platform that large senders ran themselves. The market was moving to cloud services, but the enterprise base paid the bills. Building a multi-tenant SaaS platform — public APIs, elastic scale, self-service — had to happen without a second-rate cloud product cannibalizing the first or destabilizing the customers who depended on the original.',
      },
      {
        heading: 'What I did',
        body: 'As Director, then VP and SVP of Engineering, I led the launch of the SaaS offering and built the organization and architecture to run it.\n\n- Built the cloud platform as its own multi-tenant, API-first system rather than bolting SaaS onto the on-prem codebase.\n- Treated the public API as the product, with versioning and developer experience as first-order concerns.\n- Ran it on AWS instead of our own data centers, so the team spent its time on the product, not the plumbing.\n- Built real-time analytics (Momentum Analytics) early, because deliverability intelligence — not just sending — was the durable differentiator.\n- Reused the deep delivery engine where it made sense, so the SaaS product inherited hard-won expertise.',
      },
      {
        heading: 'The important choices',
        body: 'We accepted running two products for an extended period rather than forcing a migration customers were not ready for. We invested in API design and versioning up front — slower early delivery, but years of breaking changes avoided. We chose managed cloud services over self-managed infrastructure, trading some control and unit cost for speed and focus. And because existing enterprise customers needed continuity, I worked with Product, Sales, Customer Success, Deliverability, and customers directly through the change.',
      },
      {
        heading: 'Results',
        body: 'SparkPost became a developer-focused, cloud-native SaaS platform approaching $100M ARR at Rule-of-40 performance, running more than a billion messages a day at peak. The API-first bet made it credible with developers; the analytics bet made it credible on deliverability. The writing below is contemporaneous evidence of the choices, made while they were live rather than in hindsight.',
      },
      {
        heading: 'What shaped my leadership',
        body: 'A platform transition is an organizational change as much as a technical one. The hardest calls were about sequencing and what *not* to migrate, not which technology to use. I still design an API I intend to keep for a decade deliberately — and I connect platform choices to the customers who have to live with them.',
      },
    ],
    relatedWriting: [
      'Why Choose AWS Over a Data Center',
      'Using Microservices to Build an API That Lasts',
      'How to Build an API Developers Love',
      'SparkPost Delivers and Analyzes Billions of Emails Daily on AWS',
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'sparkpost-devops-production-ownership',
    title: 'Building a DevOps and production-ownership culture',
    company: 'SparkPost',
    period: '2014 – 2021',
    tags: ['DevOps & SRE', 'Engineering Leadership'],
    dek: 'Moving from quarterly on-premises releases to continuous cloud deployment, cross-functional ownership, and an SRE practice.',
    sections: [
      {
        heading: 'Situation',
        body: 'The on-prem heritage came with an on-prem cadence: large, infrequent releases handed from development to a separate operations group. A real-time cloud platform running at a billion-plus messages a day cannot work that way. Teams needed to deploy frequently and own what they shipped — and reliability had to improve while release frequency went up, the opposite of how most organizations experience change.',
      },
      {
        heading: 'What I did',
        body: 'I led the engineering organization through the DevOps transition and the creation of a dedicated Site Reliability Engineering practice, and set the expectation that teams own production outcomes for what they build.\n\n- Cross-functional teams that broke down the development-versus-operations divide.\n- Automation of the release path, so deployment stopped being a manual event.\n- Continuous delivery, moving from quarterly releases toward several deployments a week.\n- An SRE team (established 2016) with observability, SLOs, and incident learning.\n- Production ownership as a norm: the team that builds a service runs it.',
      },
      {
        heading: 'The important choices',
        body: 'We invested in automation and observability before it paid off in visible feature velocity — a real short-term cost. We asked engineers to take on operational responsibility many had never held, which took hiring, coaching, and patience rather than a mandate. And I connected reliability, incidents, and postmortems directly to customer trust with Support and customers, rather than leaving them an internal metric.',
      },
      {
        heading: 'Results',
        body: 'SparkPost moved from quarterly, on-prem-style releases to continuous deployment with several releases a week, cut cycle time, and stood up an SRE practice that kept a high-scale platform reliable as release frequency rose. The DevOps journey was documented publicly at the time (see below).',
      },
      {
        heading: 'What shaped my leadership',
        body: 'Reliability and speed are not opposites when ownership is clear. The organizations that ship fastest are usually the ones that feel their own production pain directly — and DevOps was a people change far more than a tooling change.',
      },
    ],
    relatedWriting: [
      'Our DevOps Journey @SparkPost Engineering',
      'Operating DNS on the AWS Network: Challenges and Lessons',
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'post-acquisition-integration',
    title: 'Post-acquisition platform and organizational integration',
    company: 'Quorum',
    period: '2006 – 2026',
    eyebrow: 'Across Discovery, SparkPost, and Quorum · 2006–2026',
    tags: ['Acquisition & Integration', 'Cloud & SaaS'],
    dek: 'Deciding what to integrate, migrate, sunset, or leave alone — and sequencing it so revenue and customer trust survive the transition.',
    sections: [
      {
        heading: 'Situation',
        body: 'I have led integration across three companies: Petfinder and HowStuffWorks at Discovery; Port25/PowerMTA and eDataSource at SparkPost; and a multi-product PAC and grassroots portfolio at Quorum. Acquisition integration is where value is quietly created or destroyed. Overzealous integration breaks working products and loses customers; under-integration leaves permanent operating drag and a confusing product surface. Acquired teams arrive with their own identity, tooling, and expectations. The hard part is sequencing and honesty about cost.',
      },
      {
        heading: 'What I did',
        body: 'I owned the technology and organizational integration decisions — what to consolidate, migrate, sunset, or leave alone, and in what order — and the customer-continuity tradeoffs that came with them.\n\n- Decide deliberately for each asset: integrate, migrate, sunset, or leave alone. Not everything should be merged.\n- Sequence around customer continuity, so migrations protect the revenue and workflows customers depend on.\n- Underwrite the synergy case rather than assume it — name the integration cost the upside depends on.\n- Bring acquired teams in with clear ownership instead of dissolving them into the org chart and losing their context.',
      },
      {
        heading: 'The important choices',
        body: 'At Quorum we chose a multi-year consolidation rather than a fast, disruptive merge — accepting slower headline integration in exchange for customer continuity and a simpler long-term model. That required a clear product destination, careful migration sequencing, and close partnership with Product, Sales, and Customer Success to preserve customer relationships throughout the transition.',
      },
      {
        heading: 'Results',
        body: 'The Quorum program simplified the platform and operating model while sequencing customer migration to protect continuity. Earlier integrations at SparkPost (Port25/PowerMTA, eDataSource) and Discovery (Petfinder, HowStuffWorks) folded acquired technology and teams into the platform.',
      },
      {
        heading: 'What shaped my leadership',
        body: 'The best integration decision is often "leave it alone for now." Premature integration — merging things because it looks tidy on a slide — is one of the most reliable ways to destroy acquired value. Integration is mostly about people and trust: acquired teams do their best work when they keep their identity and gain clear ownership.',
      },
    ],
    relatedWriting: [],
    hasGaps: false,
  },

  // 4 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'quorum-scaling-pe-backed-saas',
    title: 'Scaling a PE-backed SaaS engineering organization at Quorum',
    company: 'Quorum',
    period: '2021 – Present',
    tags: ['Engineering Leadership', 'Product & Engineering', 'Acquisition & Integration'],
    dek: 'From first VP of Engineering to CTO: building the organization, operating model, and platform for a PE-backed B2B SaaS business.',
    sections: [
      {
        heading: 'Situation',
        body: 'Quorum is a PE-backed public-affairs SaaS company that had grown quickly and through acquisition. I joined as its first VP of Engineering, was promoted to SVP, and then to CTO, with scope expanding to Engineering, Platform, Data, Reliability, Security, IT, and AI. The company needed to scale its engineering leadership and operating model, consolidate acquired products, and increasingly apply AI — all under the efficiency expectations of a PE-backed business, with growth, margin, reliability, and platform health managed together.',
      },
      {
        heading: 'What I did',
        body: 'As CTO I lead a globally distributed organization across the U.S., Brazil, and Moldova, and manage R&D as an investment.\n\n- Built the leadership layer and a product-aligned operating model as the org scaled from ~25 to 100+.\n- Consolidated the platform through a multi-year integration of acquired PAC and grassroots products.\n- Made AI real in both the product and the way engineering works.\n- Ran R&D as an investment — limited work in progress, a bias toward finishing, and a clear reason for each investment.\n- Matured reliability and security as owned engineering disciplines.',
      },
      {
        heading: 'The important choices',
        body: 'I consistently chose fewer, better-owned teams over spreading people thin, and finishing over starting. I invested in applied AI and platform consolidation even when the near-term cost was visible. And scaling was primarily a leadership problem: I built management depth, gave directors and managers clearer ownership, recruited and developed leaders across three countries, and joined strategic customer and executive-sponsor conversations where technology affected the relationship.',
      },
      {
        heading: 'Results',
        body: 'The organization scaled from about 25 to more than 100 people and completed a major platform consolidation. Over 24 months it improved software-delivery flow — 46% faster change lead time, 72% faster release time, 247% higher deployment frequency, and 34% lower rework (public Haystack case study, linked below).',
      },
      {
        heading: 'What shaped my leadership',
        body: 'In a PE-backed business, credibility comes from predictability. Delivering steadily and explaining choices honestly earns more room than any single heroic result. As the organization became distributed, written context and clear decision rights helped — but sustained trust came from one-to-one relationships and leaders knowing they had room to operate.',
      },
    ],
    relatedWriting: [
      'Quorum’s Lightweight Kanplan Development Methodology',
      'Quorum’s Journey: Scaling Software Delivery with Haystack',
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'applied-ai-product-and-delivery',
    title: 'Applying AI to product workflows and engineering delivery',
    company: 'Quorum',
    period: '2024 – Present',
    tags: ['AI', 'Product & Engineering'],
    dek: 'Shipping AI products grounded in proprietary, permissioned data — and using AI as real leverage inside engineering.',
    sections: [
      {
        heading: 'Situation',
        body: 'Quorum sits on a large body of proprietary, structured public-affairs data — exactly the ground where applied AI can be defensible rather than commodity, if it is built on clear intent, permissions, evaluation, and cost discipline. Many AI programs stall at the demonstration stage: demos without production use, evaluation, permission boundaries, or cost visibility. The challenge was to ship product AI that customers use, and to make engineering itself more effective with AI, with guardrails that hold up in production.',
      },
      {
        heading: 'What I did',
        body: 'I lead the technology and engineering foundation for AI across the company: customer-facing agents grounded in Quorum’s permissioned data, and an AI-enabled engineering system built around reusable context, skills, evaluation, and guardrails.\n\n- Ground product AI in proprietary structured data with a canonical entity model and permission-aware retrieval, so answers are grounded and access-safe.\n- Distinguish production from pilots: Quincy is in production; additional agentic workflows are released, piloted, or in beta.\n- Build the engineering side as a system — reusable context and skills, evaluation, and guardrails — so AI improves how engineering works, not just individual output.\n- Make evaluation and cost controls first-class in both.\n- Graduate agent autonomy: triage, remediation, and vulnerability work as proving grounds before larger units of feature delivery (see the writing below).',
      },
      {
        heading: 'The important choices',
        body: 'We stayed model-flexible rather than betting the product on a single vendor, because stronger models make a well-grounded foundation more valuable, not less. We invested in evaluation and permissions before scaling usage, accepting slower initial rollout for trust. And the gains came from adoption, not a tool: I built shared context, skills, guardrails, and evaluation so engineers across the organization could use AI well, and set the expectation — including for managers — that this is how the organization works.',
      },
      {
        heading: 'Results',
        body: 'Quincy is in production, with a portfolio of agentic workflows released, piloted, or in beta. On the engineering side, an AI-enabled system — reusable context, skills, evaluation, and guardrails — is in daily use with broad adoption across teams. The product agents draw on Quorum’s structured, permissioned data and entity model; the engineering system draws on code repositories, planning artifacts, architecture context, telemetry, and reusable skills and standards. They share governance principles and some domain tools, but solve different problems on different foundations.',
      },
      {
        heading: 'What shaped my leadership',
        body: 'The defensibility is not primarily in the model. It comes from the data, entity resolution, permission model, workflow integration, and evaluation discipline around it. AI is real leverage on a good foundation and noise on a weak one — and the value comes from adoption across the organization, not from any single tool.',
      },
    ],
    relatedWriting: [
      'Before You Trust AI to Build, Make It Fix Bugs',
      'Claude Code Is the Most Important Engineering Management Tool Since Jira',
      'We Set Out to Build an AI Tool to Estimate Engineering Work. What We Built Was a Mirror.',
      'AI-First Engineering at Quorum',
    ],
  },
];
