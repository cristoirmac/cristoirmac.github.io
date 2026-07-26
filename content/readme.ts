// "README" — an engineering leader's user manual (how to work with me).
// Public surface: plain voice, specific, affirmative. Six sections. R&D-portfolio thinking
// lives on How I Lead, not here.

export const readme = {
  intro:
    'A short user manual for working with me — how I communicate and decide, what you can expect, how I partner with Product, go-to-market, and customers, and where my edges are. It is meant to shorten the trust-building curve. Treat it as a starting point; I adapt to the people and the situation.',

  sections: [
    {
      heading: 'How I communicate and decide',
      body: 'I default to writing — to separate facts from interpretation, make reasoning visible, and keep decisions from drifting from what is actually happening. Expect written context ahead of significant decisions, and “my read is…” framing that separates what I know from what I am inferring. In person I am calm and direct, and I would rather surface an uncomfortable issue early than let it appear late. On decisions, I try to make the real situation and the choices visible, decide clearly, and say who owns the decision — moving quickly on reversible calls and carefully on irreversible ones. I push decisions to whoever holds the context, favor fewer starts and more finishes, and I change my mind when the evidence changes — I will tell you when I have. My default under pressure is to get quieter and more focused, which can make my urgency less visible. I work to make the priority, owner, decision, and expected pace explicit, including what a new priority displaces. Genuine crises should be rare, not the operating model.',
    },
    {
      heading: 'Feedback and what you can expect',
      body: 'Public confidence, private accountability: I back the team in the room and work the hard things directly and privately. Feedback from me is specific and timely, aimed at the work and the system rather than the person, and paired with what I saw and what I would do — and I value the same directness in return. Tell me when I am wrong or moving too fast; I read direct challenge as a sign of trust.\n\nAs a direct report, you can expect clear expectations, regular context, honest feedback, visible credit for your work, room to own your decisions, and support when the stakes rise. As a peer, expect respect for your domain, shared accountability, and risks raised early rather than pushed across a boundary. I value ownership of outcomes, candor over comfort, evidence over adjectives, and finishing important work over starting a lot of it.',
    },
    {
      heading: 'How I partner with Product, go-to-market, and customers',
      body: 'With **Product**, I engage early in the customer problem, not only after requirements are written, and expect us to shape scope and sequencing together. With **Sales, Customer Success, and Support**, bring me into important customer situations early. I work to keep Support and Engineering closely connected, with clear escalation paths and a habit of fixing recurring causes, not just handling the next escalation. I will explain engineering reality plainly and help us make commitments the organization can deliver. With **customers and executive sponsors**, expect candor, preparation, and follow-through — I explain technical issues in business terms and acknowledge uncertainty.',
    },
    {
      heading: 'Incidents and operational accountability',
      body: 'During an incident, expect me to be calm, focused on mitigating customer impact, and driving rapid recovery. I want clear ownership, a shared factual picture, and communication that separates what we know from what we are still investigating. Once service is stable, we examine what happened honestly — the technical and organizational conditions, not individual mistakes — and make the changes that reduce recurrence.',
    },
    {
      heading: 'People, teams, performance, and hiring',
      body:
        'I treat the team as the primary unit of delivery. I expect leaders and teams to operate autonomously, with room for their own judgment and style. That autonomy sits within shared standards, metrics, priorities, and a common operating model. Common does not mean identical: teams can adapt practices to their context, but substantially different ways of working make onboarding, cross-team collaboration, and changes to team structure harder. I stay close enough to ask informed questions and correct course when a local optimization could weaken the broader organization.\n\nWhen performance falls short, I try to diagnose the cause before prescribing the answer. A gap can come from skill, experience, expectations, support, organization design, role fit, or willingness. I look at both skill and will: whether someone can do the work and whether they are willing to take ownership, learn, and improve. Support should be real, expectations clear, and feedback timely — no one should first hear about a material performance problem in a formal review. If the gap remains, I will make a decision rather than leave the person and team in prolonged ambiguity. High standards and dignity are compatible.\n\nI prefer to develop leaders internally when they are willing to grow, dig into hard problems, and take ownership beyond their current role. I hire externally when the organization needs capability or readiness we do not yet have.',
    },
    {
      heading: 'My edges, and how to work well with me',
      body: 'A few edges I already know about:\n\n- I can leave a senior gap open too long while betting on someone growing into it. Push me when I am being slow to hire.\n- I repair systems instinctively, so I can step in too early and solve a problem before its owner has had to. I am working on giving leaders room to own the whole problem and build judgment before I step in — tell me when I am not.\n\nTo work well with me: bring the real problem, what is getting in the way, and your read — not a pre-sanitized version. Be clear about what is decided versus still open, and tell me what you actually need: a decision, a sounding board, air cover, or just to be kept informed. Assume good intent, and I will do the same.',
    },
  ],
} as const;
