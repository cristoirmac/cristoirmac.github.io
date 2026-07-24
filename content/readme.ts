// "README" — an engineering leader's user manual (how to work with me).
// Grounded in Chris's Operating Model source (communication style, public-confidence/private-
// accountability, and the real, self-aware edges). Public surface: plain voice, specific, no slop,
// blind spots that are concrete and actionable (not humblebrags).

export const readme = {
  intro:
    'A short user manual for working with me — how I communicate, decide, give feedback, and where my edges are. It is meant to shorten the trust-building curve. Treat it as a starting point; I adapt to the people and the situation.',

  sections: [
    {
      heading: 'How I communicate',
      body: 'I default to writing. I use it to separate facts from interpretation, make reasoning visible, and keep decisions from drifting from what is actually happening. Expect written context ahead of significant decisions, and "my read is…" framing that separates what I know from what I am inferring. In person I am calm and direct; I would rather name an uncomfortable constraint early than let it surface late. I lean asynchronous, and I prefer short, frequent check-ins over long status meetings. I move quickly when something is genuinely urgent; routine work should not need crisis framing.',
    },
    {
      heading: 'How I make decisions',
      body: 'I try to make the real constraints and tradeoffs visible, decide explicitly, and say who owns the decision. I move quickly on reversible decisions and carefully on irreversible ones. I push decisions down to whoever holds the context and escalate to myself only when a tradeoff crosses teams or carries real risk. I am biased toward fewer starts and more finishes. And I change my mind when the evidence changes — I will tell you when I have.',
    },
    {
      heading: 'How I give and receive feedback',
      body: 'Public confidence, private accountability: I back the team in the room and work the hard things directly and privately. Feedback from me is specific and timely, aimed at the work and the system rather than the person, and paired with what I saw and what I would do. I value the same directness in return. Tell me when I am wrong, when I am moving too fast, or when I have taken something off your plate that you wanted to own. I read direct challenge as a sign of trust, not disrespect.',
    },
    {
      heading: 'What I value in a team',
      body: 'Ownership of outcomes, not just tasks. Candor over comfort. Production evidence over reassuring narratives. Finishing important work over starting a lot of it. Evidence over adjectives. People who surface constraints early and who can disagree well. I would rather have a small team that owns its work end to end than a large one that hands off at every seam.',
    },
    {
      heading: 'What I’m working on (my edges)',
      body:
        'A few I already know about:\n\n- I favor developing leaders internally over hiring senior managers from outside. It builds durable capability, but it can leave a senior gap open longer than it should. Push me when I am being slow to hire.\n- I repair systems instinctively, so I can intervene too early and solve a problem before its owner has had to. I am working on giving leaders enough room to own the full problem and build judgment before I step in — tell me when I am not.\n- My default is steady and precise. Under pressure that can read as distance or rigidity. If my calm looks like I am not hearing the urgency, say so; I almost certainly am.',
    },
    {
      heading: 'How to get the best from me',
      body: 'Bring me the real problem, the constraints, and your read — not a pre-sanitized version. Be explicit about what is decided versus still open. Tell me what you actually need: a decision, a sounding board, air cover, or just to be kept informed. Assume good intent, and I will do the same.',
    },
  ],
} as const;
