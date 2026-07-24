// Leadership & Operating Model — people-first, four dimensions (people/org · customers ·
// production ownership · technology & economics), with a product-engaged (not CTPO) stance.
// Public surface. Intentionally comprehensive for a review-and-cut pass; trim after review.

export const operatingModel = {
  centralIdea:
    'I build technology organizations as deliberately as I build platforms — designing the structure, leadership, talent, operating practices, and partnerships needed to serve customers and deliver durable business results.',

  lede:
    'This is how I operate as a CTO. Technology leadership reaches well beyond Engineering: building people and organizations, partnering with Product and the commercial team, staying close to customers, owning what happens in production, and running technology with economic discipline. The principles below, and the conditions where I do my best work.',

  principles: [
    {
      heading: 'Build strong leaders and teams',
      body: 'My first responsibility is to build leaders who can run important parts of the organization without waiting for me. I give direct reports clear outcomes, context, candid feedback, and air cover, and I expect them to develop their own leaders, stay close to customers and teams, and exercise judgment — not merely coordinate work.',
    },
    {
      heading: 'Design the organization deliberately',
      body: 'Organization design is an operating decision, not an annual box-moving exercise. I start from the outcomes, capabilities, and decisions the business needs, then shape teams, roles, reporting lines, and ownership around them — watching for overloaded leaders, unclear decision rights, and structures that reward escalation over ownership. I change structure when the benefit is clear, not to look decisive, because reorganizations carry real human and execution cost.',
    },
    {
      heading: 'Recruit, develop, and retain strong people',
      body: 'I invest personally across the talent lifecycle: defining senior roles, recruiting and interviewing leaders, calibrating hiring standards, growing internal talent, and building succession depth. Retention comes from credible leadership, challenging work, growth, trust, and fair recognition. When performance falls short, I try to separate unclear expectations, missing skill, weak support, will, and role fit — then address it directly and fairly and make a decision rather than let ambiguity persist. A strong leadership hire compounds the organization’s judgment; a poor one can cost years.',
    },
    {
      heading: 'Partner across the business',
      body: 'Technology leadership is a team sport. I work closely with Product to shape problems and solutions, with Sales and Customer Success on customer needs and commitments, with Security and Finance on risk and investment, and with the CEO and peers to make business tradeoffs explicit. My job is not to defend Engineering from the business; it is to help the whole company make better technology decisions.',
    },
    {
      heading: 'Create value through Product and Engineering partnership',
      body: 'I am not a CTPO by default; I am a deeply product-engaged CTO. Product should be deeply accountable for the market, customer problems, portfolio choices, positioning, and value realization; Technology for technical strategy, execution, production outcomes, security, economics, and the capabilities that make new product possibilities available. I start from the customer outcome, not the requested feature — customer requests are evidence, not automatically the solution — and I want Product and Engineering shaping scope and sequencing together before a solution hardens. Shipping is a milestone, not the outcome: I care about adoption, value realization, reliability, retention, revenue impact, support burden, and cost-to-serve, and I expect us to release the smallest meaningful version that tests the important assumptions, then stop, simplify, or redirect work that is not earning its keep.',
    },
    {
      heading: 'Earn and protect customer trust',
      body: 'Technology leadership does not stop at the edge of Engineering. I spend time with customers where platform capability, reliability, security, roadmap direction, or delivery confidence matters to the relationship — as an executive sponsor for strategic accounts and a partner to Sales and Customer Success. I listen before diagnosing, separate an isolated escalation from a systemic problem, explain what we do and do not know, and help make commitments we can keep. When trust has been damaged, customers need visible ownership, a credible recovery plan, and progress they can see — not a polished explanation.',
    },
    {
      heading: 'Own what happens in production',
      body: 'Engineering responsibility does not end at deploy. Teams should know how their systems behave for customers, know when something is wrong, and own recovery and improvement. I have operated high-scale cloud platforms where reliability, performance, security, and deliverability had direct customer and commercial consequences. During an incident I value calm ownership, clear roles, accurate communication, and fast recovery; afterward, an honest postmortem of the technical and organizational conditions that allowed it — not a list of individual mistakes.',
    },
    {
      heading: 'Manage R&D and technology as an investment portfolio',
      body: 'I manage R&D as capital, not a feature factory, through two complementary views: by type of work (product growth, customer value and retention, migration and product integration, platform and operational health, efficiency and cost-to-serve, and strategic discovery) and by product line (where the company invests across the portfolio and what outcome each investment should produce). A work-type view keeps platform work, migration obligations, and operating load from disappearing inside a feature roadmap; a product-line view reveals whether spending actually reflects strategy. Cloud cost lives here too — shaped by architecture, data design, and product behavior, not budget pressure alone; I ran a $6M+ AWS budget at SparkPost on that basis. I do not require precise financial return before we learn, but every initiative should have a clear reason to exist, an intended outcome, and a point at which we revisit the thesis.',
    },
    {
      heading: 'Make priorities and tradeoffs clear',
      body: 'Teams perform best when they understand what matters, why it matters, what has been decided, and what is still open. I use writing, metrics, and a light operating cadence to create that clarity — to support conversation and judgment, not replace them. I favor fewer starts and more finishes, and I would rather surface a hard tradeoff early than let it appear late as rework or a missed commitment.',
    },
    {
      heading: 'Use platforms, AI, and integration to amplify people',
      body: 'I invest in platforms, automation, and AI to reduce toil, shorten feedback loops, and help capable people accomplish more — not to remove humans from the work. My AI product instinct starts with a customer workflow that is slow, fragmented, or difficult and asks whether AI can materially improve the outcome while preserving trust, permissions, evaluation, and unit economics — not with where a model can be inserted. I treat product integration and customer migration as one value-realization program: combining technology creates no value if customers cannot move safely, commercial teams cannot explain the destination, or legacy products must be supported forever. At Quorum I consolidated acquired PAC and grassroots products into one platform and migrated the last Phone2Action customers rather than stranding them. Synergies are real, but they have to be underwritten against integration cost and technical reality.',
    },
  ],

  fit:
    'I am most effective where technology is expected to shape business decisions, Product and Engineering share accountability for outcomes, and leadership is willing to make explicit choices about scope, sequencing, investment, and risk.',
} as const;
