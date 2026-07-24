import type { CaseStudy } from '../types';

// Each case study uses the same seven-part structure. Bodies are markdown.
// Public-surface framing throughout: no confidential deal terms, no Quorum ARR figures.
// Where a public metric is not available, the section stays qualitative or carries a
// visible "_To add:_" marker rather than inventing a number.

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
        heading: 'Context',
        body: 'Message Systems sold Momentum, a founder-led, on-premises message-transfer platform used by large senders to run their own email infrastructure. The market was moving to cloud services. Building a SaaS product meant standing up multi-tenant cloud infrastructure, public APIs, and a self-service experience — while the on-prem business kept paying the bills.',
      },
      {
        heading: 'Challenge',
        body: 'Two products with two very different operating models had to coexist. The on-prem product assumed customer-run infrastructure and infrequent releases. A SaaS platform needed continuous delivery, multi-tenancy, elastic scale, and an API surface durable enough to build a developer ecosystem on. The risk was building a second-rate cloud product that cannibalized the first, or destabilizing the enterprise base chasing the new one.',
      },
      {
        heading: 'My role',
        body: 'As Director, then VP and SVP of Engineering, I led the launch of the SaaS offering and built the organization and architecture to run it. I owned the platform architecture direction, the API strategy, the cloud infrastructure, and the engineering organization that delivered them.',
      },
      {
        heading: 'Approach',
        body:
          'We built the cloud platform as its own multi-tenant, API-first system rather than bolting SaaS onto the on-prem codebase.\n\n- **API-first.** The public API was treated as the product, with versioning and developer experience as first-order concerns, not an afterthought.\n- **Cloud-native infrastructure on AWS**, chosen deliberately over running our own data centers, so the team could spend its time on the product instead of the plumbing.\n- **Real-time analytics** (Momentum Analytics) built early, because deliverability intelligence — not just sending — was the durable differentiator.\n- **Reuse the deep domain engine** where it made sense, so the SaaS product inherited SparkPost’s hard-won delivery expertise instead of reinventing it.',
      },
      {
        heading: 'Decisions and tradeoffs',
        body: 'We accepted running two products for an extended period rather than forcing a migration the market and customers were not ready for. We invested in API design and versioning up front, which slowed early delivery but avoided years of breaking changes later. We chose managed cloud services over self-managed infrastructure, trading some control and unit cost for speed and focus — a tradeoff I would make again at that stage.',
      },
      {
        heading: 'Outcomes',
        body: 'SparkPost became a developer-focused, cloud-native SaaS platform that grew toward nearly $100M ARR at Rule-of-40 performance, running more than a billion messages a day at peak. The API-first bet made it credible with developers; the analytics bet made it credible on deliverability. The public writing below is contemporaneous evidence of the choices, made while they were live rather than in hindsight.',
      },
      {
        heading: 'What I learned',
        body: 'A platform transition is an organizational change as much as a technical one. The hardest calls were about sequencing and what *not* to migrate, not about which technology to use. And an API you intend to keep for a decade is worth designing deliberately.',
      },
    ],
    relatedWriting: [
      'Why Choose AWS Over a Data Center',
      'Using Microservices to Build an API That Lasts',
      'How to Build an API Developers Love',
      'SparkPost Delivers and Analyzes Billions of Emails Daily on AWS',
      '4 Questions to Ask Before Migrating Your App or Service to the Cloud',
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
        heading: 'Context',
        body: 'The on-prem heritage came with an on-prem release cadence: large, infrequent releases handed from development to a separate operations group. A cloud SaaS platform running at high scale cannot work that way. Teams need to deploy frequently, own what they ship, and know how their software behaves in production before customers tell them.',
      },
      {
        heading: 'Challenge',
        body: 'Silos between development and operations, manual release processes, and long cycle times were incompatible with running a real-time platform at a billion-plus messages a day. Reliability had to improve while release frequency went up — the opposite of how many organizations experience change.',
      },
      {
        heading: 'My role',
        body: 'I led the engineering organization through the DevOps transition and the creation of a dedicated Site Reliability Engineering practice, and set the expectation that teams own production outcomes for what they build.',
      },
      {
        heading: 'Approach',
        body:
          '- **Cross-functional teams** that broke down the development-versus-operations divide.\n- **Automation of the release path** so deployment stopped being a manual event.\n- **Continuous delivery**, moving from quarterly releases toward several deployments a week.\n- **A Site Reliability Engineering team** (established in 2016) to make reliability an owned engineering discipline with observability, SLOs, and incident learning.\n- **Production ownership** as a norm: the team that builds a service runs it.',
      },
      {
        heading: 'Decisions and tradeoffs',
        body: 'We invested in automation and observability before it paid off in visible feature velocity — a real short-term cost. We also asked engineers to take on operational responsibility many had never held, which required hiring, coaching, and patience rather than a mandate.',
      },
      {
        heading: 'Outcomes',
        body: 'SparkPost moved from quarterly, on-prem-style releases to continuous deployment with several releases per week, cut cycle time, and stood up an SRE practice that kept a high-scale platform reliable as release frequency rose. The DevOps journey was documented publicly at the time (see below).',
      },
      {
        heading: 'What I learned',
        body: 'Reliability and speed are not opposites when ownership is clear. The organizations that ship fastest are usually the ones that feel their own production pain directly.',
      },
    ],
    relatedWriting: [
      'Our DevOps Journey @SparkPost Engineering',
      'Operating DNS on the AWS Network: Challenges and Lessons',
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'scaling-global-engineering-org',
    launch: false, // additional (not featured); listed under "Additional case studies"
    title: 'Scaling a global engineering organization through rapid SaaS growth',
    company: 'SparkPost',
    period: '2014 – 2021',
    tags: ['Engineering Leadership', 'Architecture & Scale'],
    dek: 'Building and leading an ~80-person, globally distributed Engineering, Data, DevOps, and SRE organization for a high-scale platform.',
    sections: [
      {
        heading: 'Context',
        body: 'A cloud platform growing toward nearly $100M ARR needs an organization that can grow with it — across engineering, data, and reliability — without every decision routing through a few people.',
      },
      {
        heading: 'Challenge',
        body: 'Scaling headcount is easy to do badly. Growth can dilute standards, blur ownership, and create coordination overhead that slows the very delivery it was meant to speed up. The organization had to scale while keeping quality, reliability, and a coherent architecture.',
      },
      {
        heading: 'My role',
        body: 'I built and led the ~80-person Engineering, Data, DevOps, and SRE organization, including its leadership layer, operating model, and technical standards.',
      },
      {
        heading: 'Approach',
        body:
          '- **Stable teams with clear ownership** rather than pools of interchangeable engineers — I move work before I reshuffle people.\n- **Managers as outcome owners**, close enough to the customer problem to make execution tradeoffs without escalating everything.\n- **A microservices architecture with deliberate boundaries**, so teams could own and evolve their services independently.\n- **Shared standards and platform capabilities** so scale did not mean fragmentation.',
      },
      {
        heading: 'Decisions and tradeoffs',
        body: 'Clear service boundaries and team ownership added some duplication and coordination cost versus a single shared codebase — a price worth paying for independent delivery at scale. I favored developing leaders internally over always hiring senior managers in, which is slower but builds durable capability.',
      },
      {
        heading: 'Outcomes',
        body: 'The organization sustained a high-scale, real-time platform through years of growth and an acquisition, with reliability and delivery intact. I documented the architecture and organizational choices in public talks and articles, including the QCon presentation linked below.',
      },
      {
        heading: 'What I learned',
        body: 'Architecture and org design are the same conversation. Service boundaries that don’t match team ownership create friction no process can fix.',
      },
    ],
    relatedWriting: [
      'Microservices for Startups: An Interview with Chris McFadden of SparkPost',
      '7 Principles for Using Microservices to Build an API That Lasts',
      'How to Run a Hackathon at Your Company',
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────────────
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
        heading: 'Context',
        body: 'I have led integration work across three companies: Petfinder and HowStuffWorks at Discovery; Port25/PowerMTA and eDataSource at SparkPost; and a multi-product PAC and grassroots portfolio at Quorum. The most complete example is Quorum’s "One Platform" consolidation, which included sunsetting the acquired Phone2Action product and migrating its customers.',
      },
      {
        heading: 'Challenge',
        body: 'Acquisition integration is where value is quietly created or destroyed. Overzealous integration breaks working products and loses customers; under-integration leaves permanent operating drag and a confusing product surface. The teams that come with an acquisition have their own identity, tooling, and expectations. The hard part is sequencing and honesty about cost.',
      },
      {
        heading: 'My role',
        body: 'I owned the technology and organizational integration decisions — what to consolidate, what to migrate, what to sunset, and in what order — and the customer-continuity tradeoffs that came with them.',
      },
      {
        heading: 'Approach',
        body:
          '- **Decide deliberately for each asset:** integrate, migrate, sunset, or leave alone. Not everything should be merged.\n- **Sequence around customer continuity**, so migrations protect the revenue and workflows customers depend on.\n- **Underwrite the synergy case, don’t assume it** — name the integration cost and sequencing the upside actually depends on.\n- **Bring acquired teams in with clear ownership** instead of dissolving them into the org chart and losing their context.',
      },
      {
        heading: 'Decisions and tradeoffs',
        body: 'At Quorum we chose a multi-year consolidation over a fast, disruptive merge, accepting slower headline "integration" in exchange for customer continuity and a simpler long-term operating model. Sunsetting Phone2Action meant committing to migrate every remaining customer rather than stranding them — more work up front, less drag forever.',
      },
      {
        heading: 'Outcomes',
        body: 'The Quorum consolidation completed, including migration of all remaining Phone2Action customers, simplifying the operating model and improving efficiency while protecting continuity. Earlier integrations at SparkPost (Port25/PowerMTA, eDataSource) and Discovery (Petfinder, HowStuffWorks) folded acquired technology and teams into the platform.',
      },
      {
        heading: 'What I learned',
        body: 'The best integration decision is often "leave it alone for now." Premature integration — merging things because it looks tidy on a slide — is one of the most reliable ways to destroy acquired value.',
      },
    ],
    relatedWriting: [],
    hasGaps: false,
  },

  // 5 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'quorum-scaling-pe-backed-saas',
    title: 'Scaling a PE-backed SaaS engineering organization at Quorum',
    company: 'Quorum',
    period: '2021 – Present',
    tags: ['Engineering Leadership', 'Product & Engineering', 'Acquisition & Integration'],
    dek: 'From first VP of Engineering to CTO: building the organization, operating model, and platform for a PE-backed B2B SaaS business.',
    sections: [
      {
        heading: 'Context',
        body: 'Quorum is a PE-backed public-affairs SaaS company that had grown quickly and through acquisition. I joined as its first VP of Engineering, was promoted to SVP, and then to CTO, with scope expanding to Engineering, Platform, Data, Reliability, Security, IT, and AI.',
      },
      {
        heading: 'Challenge',
        body: 'The company needed to scale its engineering leadership and operating model, consolidate acquired products, and increasingly apply AI — all under the efficiency expectations of a PE-backed business. Growth, margin, reliability, and platform durability had to be managed together, not traded off one at a time.',
      },
      {
        heading: 'My role',
        body: 'As CTO I lead Engineering, Platform, Data, Reliability, Security, IT, and AI for a globally distributed organization across the U.S., Brazil, and Moldova. I manage R&D as an investment: balancing growth, efficiency, margin, and long-term platform durability.',
      },
      {
        heading: 'Approach',
        body:
          '- **Build the leadership layer and a product-aligned operating model** as the org scaled from ~25 to 100+.\n- **Consolidate the platform** through a multi-year integration of acquired PAC and grassroots products.\n- **Treat AI as leverage** across both the product and the way engineering works.\n- **Run R&D as an investment** with explicit tradeoffs, limited work in progress, and a bias toward finishing.\n- **Mature reliability and security** as owned engineering disciplines.',
      },
      {
        heading: 'Decisions and tradeoffs',
        body: 'I consistently chose fewer, better-owned teams over spreading people thin, and finishing over starting. I invested in applied AI and platform consolidation even when the near-term cost was visible, because both compound. I managed to operating leverage rather than raw headcount growth.',
      },
      {
        heading: 'Outcomes',
        body: 'The organization scaled from about 25 to more than 100 people, completed a major platform consolidation, and later increased delivery capacity while reducing cycle time and operational rework. (The specific delivery numbers are in the delivery-flow case study; the transaction is covered under Experience.)',
      },
      {
        heading: 'What I learned',
        body: 'In a PE-backed business, credibility comes from predictability. Delivering steadily and explaining constraints honestly earns more room than any single heroic result.',
      },
    ],
    relatedWriting: [
      'Quorum’s Lightweight Kanplan Development Methodology',
      'Quorum’s Journey: Scaling Software Delivery with Haystack',
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'applied-ai-product-and-delivery',
    title: 'Applying AI to product workflows and engineering delivery',
    company: 'Quorum',
    period: '2024 – Present',
    tags: ['AI', 'Product & Engineering'],
    dek: 'Shipping AI products grounded in proprietary, permissioned data — and using AI as real leverage inside engineering.',
    sections: [
      {
        heading: 'Context',
        body: 'Quorum sits on a large body of proprietary, structured public-affairs data. That is exactly the ground where applied AI can be defensible rather than commodity — if it is built on clear intent, permissions, evaluation, and cost discipline.',
      },
      {
        heading: 'Challenge',
        body: 'Many AI programs stall at the demonstration stage — demos without production use, evaluation, permission boundaries, or cost visibility. The challenge was to ship product AI that customers use and to make engineering itself more effective with AI, grounded in real data, with guardrails that hold up in production.',
      },
      {
        heading: 'My role',
        body: 'I lead the technology and engineering foundation for AI across the company: customer-facing agents grounded in Quorum’s permissioned data, and an AI-enabled engineering operating model built around reusable context, skills, evaluation, and guardrails. The two share principles, domain tools, and guardrails, but they are different systems — a product architecture and an engineering operating model — not a single platform.',
      },
      {
        heading: 'Approach',
        body:
          '- **Ground product AI in proprietary structured data** with a canonical entity model and permission-aware retrieval, so answers are grounded and access-safe.\n- **Distinguish production from pilots.** Quincy is in production; additional agentic workflows are released, piloted, or in beta across several public-affairs use cases.\n- **Build the engineering side as an operating model** — reusable context and skills, evaluation, and guardrails — so AI improves how engineering works, not just individual output.\n- **Make evaluation and cost controls first-class** in both the product and the engineering system.\n- **Graduate agent autonomy.** For more autonomous engineering workflows, we used triage, remediation, and vulnerability work as proving grounds before giving agents responsibility for larger units of feature delivery (see the writing below).',
      },
      {
        heading: 'Decisions and tradeoffs',
        body: 'We stayed model-flexible rather than betting the product on a single vendor, because stronger models make a well-grounded foundation more valuable, not less. We invested in evaluation and permissions before scaling usage, accepting slower initial rollout for durability and trust.',
      },
      {
        heading: 'Outcomes',
        body: 'Quincy is in production, with a portfolio of agentic workflows released, piloted, or in beta. On the engineering side, an AI-enabled operating model — reusable context, skills, evaluation, and guardrails — is in daily use across teams. Quincy and the product agents draw on Quorum’s structured, permissioned data and entity model; the engineering system draws on code repositories, planning artifacts, architecture context, telemetry, and reusable skills and standards. They share governance principles and some domain tools, but they solve different problems on different foundations.',
      },
      {
        heading: 'What I learned',
        body: 'The defensibility is not primarily in the model. It comes from the data, entity resolution, permission model, workflow integration, and evaluation discipline around it. AI is leverage on a good foundation and noise on a weak one.',
      },
    ],
    relatedWriting: [
      'Before You Trust AI to Build, Make It Fix Bugs',
      'Claude Code Is the Most Important Engineering Management Tool Since Jira',
      'We Set Out to Build an AI Tool to Estimate Engineering Work. What We Built Was a Mirror.',
      'AI-First Engineering at Quorum',
    ],
  },

  // 7 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'ai-enabled-engineering-operating-system',
    launch: false, // additional (not featured); listed under "Additional case studies"
    title: 'Building an AI-enabled software-development operating system',
    company: 'Quorum',
    period: '2025 – Present',
    tags: ['AI', 'Engineering Leadership', 'DevOps & SRE'],
    dek: 'Reusable skills, guardrails, evaluation, and automated triage — applied AI inside how engineering actually works, with broad contribution.',
    sections: [
      {
        heading: 'Context',
        body: 'Agentic coding tools change how engineering work is planned, delegated, and reviewed. Used well, they are leverage. Used carelessly, they generate volume without value and quietly erode standards. The opportunity was to build a durable operating system around them, not just adopt a tool.',
      },
      {
        heading: 'Challenge',
        body: 'Getting real, broad, durable value from AI-assisted engineering — not a few enthusiasts and a spike of activity — requires clear intent, standards, evaluation, permissions, and guardrails. Adoption without discipline produces churn; discipline without adoption produces nothing.',
      },
      {
        heading: 'My role',
        body: 'I built and lead the AI-enabled engineering system: the practices, reusable assets, guardrails, and instrumentation, and the expectation that this is how the organization works, including hands-on use by engineering managers.',
      },
      {
        heading: 'Approach',
        body:
          '- **Reusable skills and steering context** so good practice is encoded once and shared, not re-improvised.\n- **Guardrails and governed shipping lanes** that scale review and keep risk bounded.\n- **Evaluation and instrumentation** so the system is measured, not assumed.\n- **Automated triage** to cut the operational load that steals engineering time.\n- **Make it the operating model**, with adoption and contribution spread across the organization rather than centralized in one team.',
      },
      {
        heading: 'Decisions and tradeoffs',
        body: 'I invested in shared assets, evaluation, and governance — overhead that only pays off at scale — rather than letting each team reinvent its own approach. I set clear guardrails even though they constrain the fastest possible individual usage, because unbounded AI output is a liability in a production business.',
      },
      {
        heading: 'Outcomes',
        body: 'The system reached adoption across every engineering team, with contribution from dozens of engineers across the U.S., Brazil, and Moldova rather than one central group — alongside measurable gains in cycle time and throughput (detailed in the delivery-flow case study). I have written publicly about what this changes for engineering leadership (see below).',
      },
      {
        heading: 'What I learned',
        body: 'The tool is the easy part. The value comes from the intent, standards, evaluation, and guardrails around it — and from treating it as an operating model the whole organization owns, including its managers.',
      },
    ],
    relatedWriting: [
      'Claude Code Is the Most Important Engineering Management Tool Since Jira',
      'We Set Out to Build an AI Tool to Estimate Engineering Work. What We Built Was a Mirror.',
      'AI-First Engineering at Quorum',
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'engineering-leverage-reliability-flow',
    launch: false, // additional (not featured); listed under "Additional case studies"
    title: 'Improving engineering leverage, reliability, and delivery flow',
    company: 'Quorum',
    period: '2023 – Present',
    tags: ['Engineering Leadership', 'DevOps & SRE'],
    dek: 'More predictable delivery and lower operational load through limited WIP, production ownership, and honest metrics.',
    sections: [
      {
        heading: 'Context',
        body: 'A PE-backed SaaS business needs engineering to be a source of leverage: more customer value per unit of effort, delivered predictably, without reliability or quality slipping. That is an operating-model problem as much as a technical one.',
      },
      {
        heading: 'Challenge',
        body: 'Too much work in progress hides dependencies, ages work, and makes teams feel busy while outcomes slow down. Defect and operational rework quietly eat capacity. And metrics can become blame scorecards instead of tools for seeing the system.',
      },
      {
        heading: 'My role',
        body: 'I own the engineering operating model, engineering-health metrics, and the cross-functional escalation model governing how client issues reach Engineering.',
      },
      {
        heading: 'Approach',
        body:
          '- **Fewer starts, more finishes** — limit work in progress and pull work when it is genuinely ready and funded.\n- **Watch the edges**, where flow degrades before averages move: aging work, stalled dependencies, and items outside expected response windows.\n- **DORA-style and flow metrics as a flashlight**, not a scorecard — to make trends visible enough to act on.\n- **A cross-functional escalation model** with client-impact prioritization, defect-versus-expected-behavior triage, and automated deep triage.\n- **Reliability as owned engineering work** — SLOs, observability, incident learning, and platform modernization on Kubernetes.',
      },
      {
        heading: 'Decisions and tradeoffs',
        body: 'I replaced premature point estimates with directional ranges that tightened as risks and dependencies became clearer. I treated defect and operational load as a first-class capacity line rather than invisible overhead.',
      },
      {
        heading: 'Outcomes',
        body: 'Over about two years, median epic cycle time fell from 26 to 13 days while roughly 95% of completed work remained roadmap-aligned — with a smaller coding team than in 2024. Over the same period, the share of engineering work spent on defects and operational rework fell from about 43% to 34%, lowering operational load and freeing more capacity for roadmap and client-facing improvements.',
      },
      {
        heading: 'What I learned',
        body: 'Predictability builds trust. An engineering organization earns greater strategic latitude when it delivers steadily, makes constraints visible early, and avoids late surprises.',
      },
    ],
    relatedWriting: [
      'Quorum’s Lightweight Kanplan Development Methodology',
      'Quorum’s Journey: Scaling Software Delivery with Haystack',
    ],
  },
];
