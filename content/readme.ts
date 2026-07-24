// "README" — an engineering leader's user manual (how to work with me).
// Public surface: plain voice, specific, affirmative. Six sections. R&D-portfolio thinking
// lives on How I Lead, not here.

export const readme = {
  intro:
    'A short user manual for working with me — how I communicate and decide, what you can expect, how I partner with Product, go-to-market, and customers, and where my edges are. It is meant to shorten the trust-building curve. Treat it as a starting point; I adapt to the people and the situation.',

  sections: [
    {
      heading: 'How I communicate and decide',
      body: 'I default to writing — to separate facts from interpretation, make reasoning visible, and keep decisions from drifting from what is actually happening. Expect written context ahead of significant decisions, and “my read is…” framing that separates what I know from what I am inferring. In person I am calm and direct, and I would rather surface an uncomfortable issue early than let it appear late. On decisions, I try to make the real situation and the choices visible, decide clearly, and say who owns the decision — moving quickly on reversible calls and carefully on irreversible ones. I push decisions to whoever holds the context, favor fewer starts and more finishes, and I change my mind when the evidence changes — I will tell you when I have. I reserve urgency for situations that genuinely require it.',
    },
    {
      heading: 'Feedback and what you can expect',
      body: 'Public confidence, private accountability: I back the team in the room and work the hard things directly and privately. Feedback from me is specific and timely, aimed at the work and the system rather than the person, and paired with what I saw and what I would do — and I value the same directness in return. Tell me when I am wrong or moving too fast; I read direct challenge as a sign of trust.\n\nAs a direct report, you can expect clear expectations, regular context, honest feedback, visible credit for your work, room to own your decisions, and support when the stakes rise. As a peer, expect respect for your domain, shared accountability, and risks raised early rather than pushed across a boundary. I value ownership of outcomes, candor over comfort, evidence over adjectives, and finishing important work over starting a lot of it.',
    },
    {
      heading: 'How I partner with Product, go-to-market, and customers',
      body: 'With **Product**, I engage early in the customer problem, not only after requirements are written — bringing technical possibilities, architecture, data, operating cost, and evidence from production, and shaping scope and sequencing together. With **Sales and Customer Success**, bring me into important customer situations early; I will explain engineering reality plainly and help us make commitments the organization can deliver. With **customers and executive sponsors**, expect candor, preparation, and follow-through — I explain technical issues in business terms, acknowledge uncertainty, and when something goes wrong I focus on recovery, clear communication, and preventing recurrence.',
    },
    {
      heading: 'Incidents and operational accountability',
      body: 'During an incident, expect me calm and focused on customer impact. I want clear ownership, a shared factual picture, rapid recovery, and communication that separates what we know from what we are still investigating. Once service is stable, we examine what happened honestly — the technical and organizational conditions, not individual mistakes — and make the changes that reduce recurrence.',
    },
    {
      heading: 'People, performance, and hiring',
      body: 'Most people want to do strong work and deserve clarity about what the role requires, how they are doing, and where to grow. Feedback should be timely enough to be useful; no one should first hear about a material performance problem in a formal review. I separate the person from the problem — a gap can come from skill, experience, unclear expectations, weak support, org design, or role fit — and my job is to diagnose it honestly, offer real support, and then decide rather than let ambiguity persist. High standards and dignity are compatible. On hiring, I care more about evidence, judgment, learning ability, and ownership than polished interview performance, and senior hiring gets sustained executive attention because a strong leader shapes the organization for years.',
    },
    {
      heading: 'My edges, and how to work well with me',
      body: 'A few edges I already know about:\n\n- I favor developing leaders internally over hiring senior managers from outside. It builds lasting capability, but it can leave a senior gap open longer than it should. Push me when I am being slow to hire.\n- I repair systems instinctively, so I can step in too early and solve a problem before its owner has had to. I am working on giving leaders room to own the whole problem and build judgment before I step in — tell me when I am not.\n- My default is steady and precise. Under pressure that can read as distance or rigidity. If my calm looks like I am not hearing the urgency, say so; I almost certainly am.\n\nTo work well with me: bring the real problem, what is getting in the way, and your read — not a pre-sanitized version. Be clear about what is decided versus still open, and tell me what you actually need: a decision, a sounding board, air cover, or just to be kept informed. Assume good intent, and I will do the same.',
    },
  ],
} as const;
