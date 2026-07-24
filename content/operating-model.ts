// Leadership & Operating Model — six principles, affirmative. Public surface.
// Deliberately concise (~1,000 words): show judgment, don't catalogue it. No poor-fit list,
// no "theater/humiliation" language, no Product failure-mode catalogue. The intellectual arc and
// the recursive phrase live on the Point of View page.

export const operatingModel = {
  centralIdea:
    'I create value by designing systems in which reality becomes visible early, decisions are explicit, teams can finish important work, and good judgment scales beyond any one leader.',

  lede:
    'This is how I operate as a CTO — not a methodology, but a way of running technology as one system, with a single aim: move the limiting constraint upward, so the organization can turn intent into working software faster and more reliably over time. Six principles, and the conditions where I do my best work.',

  principles: [
    {
      heading: 'Run technology as a business system',
      body: 'I run technology as one system — architecture, organization, process, incentives, customer outcomes, and economics together — rather than optimizing Engineering in isolation. The job is to improve how the business decides, delivers, and adapts. I use process the way Lean does: as a flashlight to reveal queues, aging work, and decision gaps, and then act on what it shows. Artifacts earn their place only when they reduce ambiguity or improve a decision. At SparkPost, moving off on-premises software was at once an architecture, an organization, and a unit-economics problem — I led it as one system, not three separate projects.',
    },
    {
      heading: 'Make constraints and tradeoffs visible early',
      body: 'Most expensive problems are constraints that stayed hidden — capacity that was quietly overcommitted, architecture nearing a limit, or work that was started but never truly funded. I make them visible before they compound. I am explicit about what we know, what we do not know yet, what is directional, and what is committed, and about which tradeoff leadership is actually making. That is not slower decision-making. It is how you avoid false confidence, rework, and commitments the system cannot support. In planning, that means replacing early date promises with directional ranges that tighten as risk is retired.',
    },
    {
      heading: 'Build for production ownership and reliability',
      body: 'Software value is realized in production, so teams own more than features: reliability, security, performance, data correctness, observability, and cost to serve. A team should know its software is working before a customer tells it otherwise. I invest in SLOs, telemetry, incident learning, and fast rollback, and I treat reliability, security, privacy, and compliance as business capabilities that shape enterprise readiness, customer trust, and sales cycles — not as specialist side functions. At SparkPost this meant standing up SRE and production ownership for a platform running more than a billion messages a day.',
    },
    {
      heading: 'Design teams and leadership for clear ownership',
      body: 'I build the organization that builds the product: strong leaders, clear decision rights, and stable teams that own meaningful parts of the platform. I move work more often than I reorganize people, because context and trust compound over time. I expect managers to be outcome owners — close enough to the customer and the team to make tradeoffs without escalating everything. Product and Engineering bring different responsibilities to a shared outcome: Product leads the customer problem, desired outcomes, and prioritization; Engineering shapes the solution, feasibility, quality, and production outcomes; scope and sequencing are shared tradeoffs, made explicit before execution. I surface the seams between them early, while they are still cheap to resolve. At SparkPost, teams owned their full pipeline — build, deploy, and monitoring; at Quorum I built that ownership across a distributed organization that grew to more than 100 engineers.',
    },
    {
      heading: 'Apply AI where it creates measurable leverage',
      body: 'I treat AI as leverage that has to show up in the work, not a demonstration. Many AI programs stall at the demo stage; the ones that do not are grounded in clear intent, permissioned data, evaluation, cost visibility, and human review — in products and in how engineering works. In products, the test is whether AI makes a real customer workflow faster, more accurate, or newly possible. In engineering, whether it improves cycle time, quality, triage, and consistency. I build reusable context, skills, guardrails, and evaluations rather than relying on individual enthusiasm, so the gains are durable and measurable. In practice: Quincy in production on permissioned data, and an AI-enabled engineering system adopted across every team.',
    },
    {
      heading: 'Manage R&D, platforms, and acquisitions as investments',
      body: 'I manage technology as an economic system — R&D, infrastructure, staffing mix, platform consolidation, and technical debt — and spend where it creates durable advantage rather than compensating for avoidable complexity. I favor fewer starts and more finishes: limit work in progress, fund work with real capacity, and pull new work only when a team can absorb it. Acquisitions are a portfolio of choices — what to integrate, migrate, retire, or leave alone, and in what sequence. Synergies are real, but they have to be underwritten against integration cost and technical reality, not assumed. At Quorum I consolidated acquired PAC and grassroots products into one platform and migrated the last Phone2Action customers rather than stranding them.',
    },
  ],

  fit:
    'I am most effective where technology is expected to shape business decisions, Product and Engineering share accountability for outcomes, and leadership is willing to make explicit choices about scope, sequencing, investment, and risk.',
} as const;
