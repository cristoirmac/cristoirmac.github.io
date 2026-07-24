// Point of View page — how strong teams turn technology into business leverage.
// People-first framing. Do not present "Fly" as achieved. No AWS attribution for the stages
// (descriptive Crawl/Walk/Run/Fly, not an attributed "levels" scheme).

export const pointOfView = {
  title: 'Building leverage through people, teams, and technology.',

  thesis:
    'Across cloud, SaaS, platform modernization, and applied AI, the pattern in my work has been consistent: build strong leaders and teams, give them clear ownership, connect them closely to customers and business priorities, and use technology to increase what the whole organization can accomplish.',

  plainOpening:
    'The goal is not simply to help Engineering produce more software. It is to help Product, Engineering, Sales, Customer Success, and the rest of the business turn customer needs into reliable products more quickly — and to build an organization where good decisions do not depend on the CTO being in every room.',

  // Keep verbatim — a memorable way to describe the current frontier.
  recursivePhrase: 'I build an organization that builds the software that builds the software.',
  recursiveGloss:
    'Increasingly, strong teams create not only customer-facing software but also the tools, context, evaluations, guardrails, and agents that help build and operate it — while people stay responsible for intent, judgment, customer context, and outcomes.',

  // The ladder of leverage — each rung is about what the organization can do, not just Engineering.
  ladder: [
    'Help an individual engineer do their best work.',
    'Build teams that deliver effectively together.',
    'Build an organization that reliably turns ideas into working software.',
    'Build software and tooling that help the organization build and operate software.',
    'Move the limit beyond engineering capacity — toward customer insight, validation, and adoption.',
  ],

  // Descriptive stages, grouped by what is real today vs. where it may lead.
  stages: [
    {
      name: 'Crawl',
      group: 'today' as const,
      body: 'Individuals learn to use AI effectively in their own work.',
    },
    {
      name: 'Walk',
      group: 'today' as const,
      body: 'Teams incorporate AI into their normal delivery.',
    },
    {
      name: 'Run',
      group: 'today' as const,
      body: 'Shared tools, context, standards, and evaluation make the gains repeatable across the organization.',
    },
    {
      name: 'Fly',
      group: 'mayLead' as const,
      body: 'Governed agents take on larger units of execution, while people retain responsibility for intent, judgment, customer context, and outcomes. A direction, not a claim that we are there.',
    },
  ],

  // Where the organization actually is, stated plainly and without overclaiming.
  todayStatement:
    'Today, the organization operates at Run: the AI-enabled development system is in daily use, while graduated autonomy in triage and remediation provides early evidence for what may come next. I do not claim that Fly has arrived.',

  // The arc, oldest first, with the writing that documents it.
  timeline: [
    {
      era: '2016–2018 · SparkPost',
      focus: 'Getting engineers off undifferentiated toil and giving teams end-to-end ownership.',
      move: 'Move to the cloud; adopt DevOps and SRE; align teams to services they own.',
      writing: [
        { title: 'Why Choose AWS Over a Data Center', year: '2016', url: 'https://www.linkedin.com/pulse/why-sparkpost-chose-aws-over-data-center-chris-mcfadden/' },
        { title: 'Our DevOps Journey @SparkPost Engineering', year: '2017', url: 'https://www.linkedin.com/pulse/our-devops-journey-sparkpost-engineering-chris-mcfadden/' },
      ],
    },
    {
      era: '2024 · Quorum',
      focus: 'Making the operating model — flow, work-in-progress, finishing — the unit of leverage.',
      move: 'Lightweight flow over ceremony; outcomes over story points.',
      writing: [
        { title: 'Quorum’s Lightweight Kanplan Development Methodology', year: '2024', url: 'https://www.linkedin.com/pulse/quorums-lightweight-kanplan-development-methodology-chris-mcfadden-3y16e/' },
      ],
    },
    {
      era: '2025 · AI becomes part of the default engineering workflow',
      focus: 'Shifting where people spend their time — from producing code toward context, thinking, and judgment.',
      move: '“Your value is shifting from typing to thinking.”',
      writing: [
        { title: 'AI-First Engineering at Quorum', year: '2025', url: 'https://www.linkedin.com/pulse/ai-first-engineering-quorum-chris-mcfadden-d1oaf/' },
      ],
    },
    {
      era: '2026 · AI-enabled delivery systems',
      focus: 'Understanding, context, judgment, and customer reality as the scarce, human parts of the work.',
      move: 'Software helps build software; people own intent, judgment, and outcomes.',
      writing: [
        { title: 'Leaving the Cave: Building Software in an Age of Abundance', year: '2026', url: 'https://www.linkedin.com/pulse/leaving-cave-building-software-age-abundance-chris-mcfadden-iacwe' },
        { title: 'Claude Code Is the Most Important Engineering Management Tool Since Jira', year: '2026', url: 'https://www.linkedin.com/pulse/claude-code-most-important-engineering-management-tool-chris-mcfadden-sbwle' },
        { title: 'Before You Trust AI to Build, Make It Fix Bugs', year: '2026', url: 'https://www.linkedin.com/pulse/before-you-trust-ai-build-make-fix-bugs-chris-mcfadden-n5vie' },
        { title: 'We Set Out to Build an AI Tool to Estimate Engineering Work. What We Built Was a Mirror.', year: '2026', url: 'https://www.linkedin.com/pulse/we-set-out-build-ai-tool-estimate-engineering-work-what-mcfadden-phfqe' },
      ],
    },
  ],

  closing:
    'The consistent pattern is people first: build strong leaders and teams, give them clear ownership and customer context, make priorities and tradeoffs explicit, and use technology and AI to amplify what they can do — leaving the organization stronger and less dependent on any one person.',
} as const;
