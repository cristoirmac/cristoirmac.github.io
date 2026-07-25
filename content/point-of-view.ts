// Point of View — one differentiated idea, plus a short historical arc. People-first.
// Deliberately compact (~600–800 words on the page). No maturity framework.

export const pointOfView = {
  title: 'From code to customer value.',

  thesis:
    'As producing software becomes faster and cheaper, more of the difficult work moves elsewhere: understanding the customer, choosing the right problem, supplying context, validating quality, earning adoption, and operating the result responsibly.',

  plainOpening:
    'The goal is not simply to help Engineering produce more software. It is to help the whole business — Product, Engineering, Sales, and Customer Success — turn customer needs into reliable products, and to build an organization where good decisions do not depend on the CTO being in every room.',

  // Kept once — a memorable way to describe the current frontier.
  recursivePhrase: 'I build an organization that builds the software that builds the software.',
  recursiveGloss:
    'Increasingly, strong teams create not only customer-facing software but also the tools, context, evaluations, and guardrails that help build and operate it — while people stay responsible for intent, judgment, customer context, and outcomes.',

  // A short historical arc, oldest first, with the writing that documents it.
  arc: [
    {
      era: 'Cloud and DevOps',
      body: 'Reduce infrastructure and release toil so teams can own production.',
      writing: [
        { title: 'Our DevOps Journey @SparkPost Engineering', year: '2017', url: 'https://www.linkedin.com/pulse/our-devops-journey-sparkpost-engineering-chris-mcfadden/' },
      ],
    },
    {
      era: 'SaaS and organizational scale',
      body: 'Build leadership depth, stable teams, and operating practices that make delivery repeatable, so customers see steady progress rather than occasional bursts.',
      writing: [
        { title: 'Quorum’s Lightweight Kanplan Development Methodology', year: '2024', url: 'https://www.linkedin.com/pulse/quorums-lightweight-kanplan-development-methodology-chris-mcfadden-3y16e/' },
      ],
    },
    {
      era: 'Applied AI',
      body: 'Use software to help build and operate software, so people can spend more time on intent, customer understanding, judgment, and validation.',
      writing: [
        { title: 'AI-First Engineering at Quorum', year: '2025', url: 'https://www.linkedin.com/pulse/ai-first-engineering-quorum-chris-mcfadden-d1oaf/' },
        { title: 'Before You Trust AI to Build, Make It Fix Bugs', year: '2026', url: 'https://www.linkedin.com/pulse/before-you-trust-ai-build-make-fix-bugs-chris-mcfadden-n5vie' },
      ],
    },
  ],

  closing:
    'The destination is not an autonomous engineering organization. It is one where capable people have better tools, clearer context, faster feedback, and more time for the work that takes judgment and human understanding.',
} as const;
