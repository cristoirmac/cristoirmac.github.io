// "README" — an engineering leader's user manual (how to work with me).
// Grounded in Chris's Operating Model source. Public surface: plain voice, specific, no slop.
// Relational (what people can expect from him), not only procedural.

export const readme = {
  intro:
    'A short user manual for working with me — how I communicate, decide, give feedback, what you can expect from me, and where my edges are. It is meant to shorten the trust-building curve. Treat it as a starting point; I adapt to the people and the situation.',

  sections: [
    {
      heading: 'How I communicate',
      body: 'I default to writing. I use it to separate facts from interpretation, make reasoning visible, and keep decisions from drifting from what is actually happening. Expect written context ahead of significant decisions, and "my read is…" framing that separates what I know from what I am inferring. In person I am calm and direct; I would rather surface an uncomfortable issue early than let it appear late. I lean asynchronous, and I prefer short, frequent check-ins over long status meetings. I move quickly when something is genuinely urgent; routine work should not need crisis framing.',
    },
    {
      heading: 'How I make decisions',
      body: 'I try to make the real situation and tradeoffs visible, decide explicitly, and say who owns the decision. I move quickly on reversible decisions and carefully on irreversible ones. I push decisions down to whoever holds the context and escalate to myself only when a tradeoff crosses teams or carries real risk. I am biased toward fewer starts and more finishes. And I change my mind when the evidence changes — I will tell you when I have.',
    },
    {
      heading: 'How I give and receive feedback',
      body: 'Public confidence, private accountability: I back the team in the room and work the hard things directly and privately. Feedback from me is specific and timely, aimed at the work and the system rather than the person, and paired with what I saw and what I would do. I value the same directness in return. Tell me when I am wrong, when I am moving too fast, or when I have taken something off your plate that you wanted to own. I read direct challenge as a sign of trust, not disrespect.',
    },
    {
      heading: 'What you can expect from me',
      body:
        'What working with me looks like, by relationship:\n\n- **As a direct report:** clear expectations, regular context, honest feedback, room to own your decisions, and support when the stakes rise. I will not take credit for your work, surprise you with performance feedback, or leave you exposed after backing a reasonable decision.\n- **As a peer:** no surprises, respect for your domain, and a willingness to share accountability rather than push problems across boundaries. I will flag risk early, and I expect us to work through disagreements directly.\n- **As a Product partner:** I engage early in the customer problem, not only after requirements are written — bringing technical possibilities, architecture, data, operating cost, delivery risk, and evidence from production. I respect Product’s accountability for the market, customer needs, and value thesis, and I expect us to shape scope and sequencing together and agree on what evidence would justify further investment. I challenge both overbuilding and underbuilding: sometimes the right answer is a fast experiment, sometimes a decision is expensive to reverse and deserves deliberate design.\n- **As a Sales or Customer Success partner:** bring me into important customer situations early — where technology affects confidence, a renewal, a strategic sale, or an executive relationship. I will listen before diagnosing, separate the immediate account need from the underlying product or platform issue, and help us make a commitment we can actually deliver. I will not hide behind technical language or leave you alone to explain a hard engineering reality, and I will be direct when the responsible answer is not the one the customer first wants.\n- **As a customer or executive sponsor:** candor, preparation, and follow-through. I will explain technical issues in business terms, acknowledge uncertainty, and avoid promising dates before the team has enough evidence. When something goes wrong, I focus on recovery, communication, and preventing recurrence — not defending the organization.',
    },
    {
      heading: 'During an incident',
      body: 'Expect me calm, direct, and focused on customer impact. I want clear ownership, a shared factual picture, rapid recovery, and communication that separates what we know from what we are still investigating. I do not want people protecting their function or debating blame while customers are affected. Once service is stable, we examine what happened honestly — the technical and organizational conditions, not individual mistakes — and make the changes that reduce recurrence.',
    },
    {
      heading: 'How I think about people, performance, and hiring',
      body:
        'Most people want to do strong work and deserve clarity about what the role requires, how they are doing, and where to grow. Feedback should be timely enough to be useful; no one should first hear about a material performance problem in a formal review. I separate the person from the problem — a gap can come from skill, experience, unclear expectations, weak support, org design, or role fit — and my job is to diagnose it honestly, offer real support, and then decide rather than let ambiguity persist. High standards and dignity are compatible.\n\nOn hiring, I care more about evidence, judgment, learning ability, ownership, and how someone works with others than about polished interview performance. Senior hiring deserves real executive attention: a strong leader compounds the organization’s judgment, and a poor leadership hire can cost years of time and trust.',
    },
    {
      heading: 'How I think about product investment',
      body: 'Roadmap capacity is capital. Every initiative carries delivery cost, operating cost, opportunity cost, and future maintenance. I do not require false precision before we learn, but I expect a clear reason for the investment, an intended outcome, and a point at which we assess whether the thesis is holding. I look at R&D two ways — by type of work (growth, retention, migration and integration, platform and risk, efficiency, discovery) and by product line — so platform and migration work do not hide inside a feature roadmap and spending actually reflects strategy.',
    },
    {
      heading: 'What I value in a team',
      body: 'Ownership of outcomes, not just tasks. Candor over comfort. Production evidence over reassuring narratives. Finishing important work over starting a lot of it. Evidence over adjectives. People who raise risks and problems early and who can disagree well. I would rather have a small team that owns its work end to end than a large one that hands off at every seam.',
    },
    {
      heading: 'What I’m working on (my edges)',
      body:
        'A few I already know about:\n\n- I favor developing leaders internally over hiring senior managers from outside. It builds durable capability, but it can leave a senior gap open longer than it should. Push me when I am being slow to hire.\n- I repair systems instinctively, so I can intervene too early and solve a problem before its owner has had to. I am working on giving leaders enough room to own the full problem and build judgment before I step in — tell me when I am not.\n- My default is steady and precise. Under pressure that can read as distance or rigidity. If my calm looks like I am not hearing the urgency, say so; I almost certainly am.',
    },
    {
      heading: 'How to get the best from me',
      body: 'Bring me the real problem, what is getting in the way, and your read — not a pre-sanitized version. Be explicit about what is decided versus still open. Tell me what you actually need: a decision, a sounding board, air cover, or just to be kept informed. Assume good intent, and I will do the same.',
    },
  ],
} as const;
