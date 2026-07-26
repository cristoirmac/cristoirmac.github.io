// Leadership & Operating Model — six principles across people/org · Product & customers ·
// production · R&D portfolio · clarity · platforms & AI. Public surface, affirmative voice.

export const operatingModel = {
  centralIdea:
    'I build technology organizations as deliberately as I build platforms — designing the structure, leadership, talent, and partnerships needed to serve customers and deliver lasting business results.',

  lede:
    'This is how I operate as a CTO. Technology leadership reaches well beyond Engineering: building people and organizations, partnering with Product and the commercial team, staying close to customers, owning what happens in production, and investing in platforms, cloud, and AI with economic discipline. Taken together, the aim is simple: I build organizations that make strong results repeatable.',

  principles: [
    {
      heading: 'Build leaders and design the organization',
      body: 'I treat the team as the primary unit of delivery, learning, and accumulated judgment. I start from the capabilities, decisions, and outcomes the business needs, then shape durable teams, leadership roles, reporting lines, and ownership around them. Teams that stay together build product knowledge and customer context, so I do not reorganize them casually — but I will change the structure when strategy, ownership, or organizational health requires it. I invest personally in recruiting and interviewing senior leaders, developing them, and building succession and retention. When performance falls short, I work to separate unclear expectations, missing skill, weak support, willingness, and role fit; I address it directly, give people a fair chance to improve, and then make a decision rather than let ambiguity persist, because each person affects what the team can deliver. Senior leadership hiring deserves sustained executive attention, because those leaders shape the organization, its standards, and its ability to grow for years.',
    },
    {
      heading: 'Partner across Product, the business, and customers',
      body:
        'Technology leadership is a team sport. I am a product-engaged CTO who works in close partnership with strong Product leadership — from customer problem and investment thesis through solution shaping, iteration, production learning, and value realization. Product and Engineering should share objectives and key results with clear owners, and work from one visible roadmap that includes customer capabilities, platform investment, reliability, security, integration, and modernization. The roadmap is a shared statement of priorities and tradeoffs, not a Product roadmap with a separate Engineering backlog hidden behind it.\n\nI give honest counsel before a hard company decision, then back it and help my organization deliver. I keep the resulting tradeoffs visible so the leadership team can manage them together. I start from the customer outcome, not the requested feature. Customer requests and sales opportunities are important signals, but the task is to understand the underlying need and choose a response that is strategically sound and broadly useful. I work with Sales and Customer Success on commitments and renewal risk, and directly with customers as an executive sponsor when reliability, security, roadmap, or delivery confidence matters. Shipping is a milestone, not the outcome: I care about adoption, value realization, retention, revenue impact, support burden, and cost to serve.',
    },
    {
      heading: 'Own what happens in production',
      body: 'Engineering responsibility does not end at deploy. Teams should know how their systems behave for customers, know when something is wrong, and own recovery and improvement. I have operated high-scale cloud platforms where reliability, performance, security, and deliverability had direct customer and commercial consequences. During an incident I keep the team focused on customer impact, shared facts, clear ownership, accurate communication, and fast recovery. Once service is stable, we examine the technical and organizational causes honestly and make the changes that reduce recurrence — not a document that closes the issue without changing the system.',
    },
    {
      heading: 'Manage R&D and technology as an investment portfolio',
      body:
        'I manage R&D and technology as an investment portfolio, not a feature factory. I look at investment by type of work — product growth, customer value and retention, migration and integration, platform and operational health, efficiency and cost to serve, and discovery — and by product line, so the leadership team can see where the company is investing and what each investment is intended to produce.\n\nI work closely with Finance on annual planning, R&D budgets, infrastructure and cost-of-service forecasting, and managing within the commitments we make. The goal is not merely to report spend after the fact, but to maintain a credible forward view, explain variances early, and connect financial choices to architecture, capacity, product behavior, and strategy. I ran a $6M+ AWS budget at SparkPost on that basis.\n\nI do not require precise financial returns before we learn, but every initiative should have a clear reason to exist, an intended outcome, and a point at which we revisit the investment.',
    },
    {
      heading: 'Create context for judgment and speed',
      body:
        'My role is to create the context in which good decentralized decisions are possible. Teams and leaders need to understand company strategy, product direction, customer pressures, current challenges, constraints, standards, and what has already been decided. I make that context visible — often in writing — and bring engineering leaders into the problem early so they can help shape the answer rather than simply receive instructions.\n\nWith shared context and standards, decisions can move to the people closest to the work without creating silos or local optimization. Time to market matters, and I want speed we can repeat. I use a few honest metrics and a light operating cadence to support judgment, not replace it. I favor fewer starts and more finishes, and I would rather surface a hard choice and its risks early than discover them in a missed commitment. Repeated haste returns as defects, rework, and burnout; I would rather remove recurring friction than ask people to absorb it.',
    },
    {
      heading: 'Use platforms, integration, and AI to amplify people',
      body: 'As producing software becomes easier, judgment, customer understanding, adoption, reliability, and responsible operation matter more. I invest in platforms, automation, and AI to improve the whole delivery system — planning, context, evaluation, quality, and operations — not simply to generate more code, so capable teams spend more time on customer problems, design, and judgment. My AI product instinct starts with a customer workflow that is slow, fragmented, or difficult and asks whether AI can materially improve the outcome while preserving trust, permissions, evaluation, and unit economics — not with where a model can be inserted. I treat product integration and customer migration as one value-realization program: combining products creates no value if customers cannot move safely or the destination is unclear. Synergies are real, but they have to be underwritten against integration cost and technical reality.',
    },
  ],

  fit:
    'I am most effective where technology is expected to shape business decisions, Product and Engineering share accountability for outcomes, and leadership is willing to make clear choices about scope, sequencing, investment, and risk.',
} as const;
