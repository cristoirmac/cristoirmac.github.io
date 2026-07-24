// Point of View page — the intellectual through-line across a decade of public writing.
// Do not present "Fly" as achieved. No AWS attribution for the stages
// (descriptive Crawl/Walk/Run/Fly, not an attributed "levels" scheme).

export const pointOfView = {
  thesis:
    'Across DevOps, cloud, SaaS, platform engineering, and now AI-enabled delivery systems, one question keeps recurring in my work: how do we increase organizational leverage and move the limiting constraint upward? The technologies have changed far more than the underlying idea.',

  plainOpening:
    'Put plainly: the hardest limit on most engineering organizations is not how fast they write code. It is how quickly the whole business can turn an idea into something customers actually use and trust. Most of my career has been about moving that limit — first by making individual engineers and teams more effective, then by improving how the whole organization builds, and now by using AI so that software helps build and operate software.',

  // Keep verbatim — the recursion is the point.
  recursivePhrase: 'I build an organization that builds the software that builds the software.',
  recursiveGloss:
    'Increasingly, that means teams create not only customer-facing software but also the tools, context, evaluations, guardrails, and agents used to build and operate it — while people stay responsible for intent, judgment, and outcomes.',

  // The ladder of leverage.
  ladder: [
    'Improve the productivity of an individual engineer.',
    'Build teams that deliver effectively.',
    'Build an organization that reliably builds software.',
    'Build software that improves how the organization builds software.',
    'Move the limiting constraint beyond engineering capacity — toward customer insight, validation, adoption, and willingness to pay.',
  ],

  // Descriptive stages, grouped by what is real today vs. where it may lead.
  stages: [
    {
      name: 'Crawl',
      group: 'today' as const,
      body: 'AI assists discrete individual tasks. The constraint is individual proficiency.',
    },
    {
      name: 'Walk',
      group: 'today' as const,
      body: 'AI becomes a default part of team delivery. The constraint is workflow and adoption.',
    },
    {
      name: 'Run',
      group: 'today' as const,
      body: 'AI is embedded in the engineering operating system through reusable context, skills, guardrails, evaluations, telemetry, and workflows.',
    },
    {
      name: 'Fly',
      group: 'mayLead' as const,
      body: 'Governed agents take responsibility for increasingly large units of execution, with durable context, validation, escalation paths, and human oversight. This is a direction, not a claim that engineering capacity has ceased to be a constraint.',
    },
  ],

  // Where the organization actually is, stated plainly and without overclaiming.
  todayStatement:
    'Today, the organization operates at Run: the AI-enabled development system is in daily use, while graduated autonomy in triage and remediation provides early evidence for what may come next. I do not claim that Fly has arrived.',

  // The arc, oldest first, with the writing that documents it.
  timeline: [
    {
      era: '2016–2018 · SparkPost',
      constraint: 'Infrastructure toil, deploy/release process, and team boundaries.',
      move: 'Get engineers off undifferentiated toil; make teams own production end to end.',
      writing: [
        { title: 'Why Choose AWS Over a Data Center', year: '2016', url: 'https://www.linkedin.com/pulse/why-sparkpost-chose-aws-over-data-center-chris-mcfadden/' },
        { title: 'Our DevOps Journey @SparkPost Engineering', year: '2017', url: 'https://www.linkedin.com/pulse/our-devops-journey-sparkpost-engineering-chris-mcfadden/' },
      ],
    },
    {
      era: '2024 · Quorum',
      constraint: 'The operating model itself — flow, work-in-progress, finishing.',
      move: 'Make the system the unit of leverage; outcomes over ceremony.',
      writing: [
        { title: 'Quorum’s Lightweight Kanplan Development Methodology', year: '2024', url: 'https://www.linkedin.com/pulse/quorums-lightweight-kanplan-development-methodology-chris-mcfadden-3y16e/' },
      ],
    },
    {
      era: '2025 · AI becomes part of the default engineering workflow',
      constraint: 'Context, judgment, and validation increasingly matter more than producing code.',
      move: '“Your value is shifting from typing to thinking.”',
      writing: [
        { title: 'AI-First Engineering at Quorum', year: '2025', url: 'https://www.linkedin.com/pulse/ai-first-engineering-quorum-chris-mcfadden-d1oaf/' },
      ],
    },
    {
      era: '2026 · AI-enabled delivery systems',
      constraint: 'Understanding, context, judgment, and customer reality.',
      move: 'Software helps build software; judgment becomes the scarce resource.',
      writing: [
        { title: 'Leaving the Cave: Building Software in an Age of Abundance', year: '2026', url: 'https://www.linkedin.com/pulse/leaving-cave-building-software-age-abundance-chris-mcfadden-iacwe' },
        { title: 'Claude Code Is the Most Important Engineering Management Tool Since Jira', year: '2026', url: 'https://www.linkedin.com/pulse/claude-code-most-important-engineering-management-tool-chris-mcfadden-sbwle' },
        { title: 'Before You Trust AI to Build, Make It Fix Bugs', year: '2026', url: 'https://www.linkedin.com/pulse/before-you-trust-ai-build-make-fix-bugs-chris-mcfadden-n5vie' },
        { title: 'We Set Out to Build an AI Tool to Estimate Engineering Work. What We Built Was a Mirror.', year: '2026', url: 'https://www.linkedin.com/pulse/we-set-out-build-ai-tool-estimate-engineering-work-what-mcfadden-phfqe' },
      ],
    },
  ],

  closing:
    'The consistent pattern is not a methodology or a trend. It is this: understand the system, make reality visible, clarify decisions and ownership, build strong leaders and teams, improve production feedback, apply technology and AI where they create real leverage, and leave the organization stronger and less dependent on any one person.',
} as const;
