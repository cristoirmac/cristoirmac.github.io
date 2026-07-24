// Shared content schemas. Edit content in /content and /data; components never hard-code copy.

export type WritingType = 'article' | 'podcast' | 'talk' | 'interview' | 'presentation';

export type Tag =
  | 'Cloud & SaaS'
  | 'Engineering Leadership'
  | 'DevOps & SRE'
  | 'Architecture & Scale'
  | 'AI'
  | 'Product & Engineering'
  | 'Acquisition & Integration';

export interface WritingItem {
  title: string;
  type: WritingType;
  source: string; // publication or event
  /** ISO date or year string. Omit when the public source shows no reliable date. */
  date?: string;
  url: string;
  summary: string;
  tags: Tag[];
  company?: 'Quorum' | 'SparkPost' | 'Discovery' | 'General';
  /** Related case-study slug, if any. */
  relatedCaseStudy?: string;
  featured?: boolean;
  /** Summary drafted from the title and needs Chris's confirmation. */
  needsReview?: boolean;
}

export interface ExperienceChapter {
  slug: string;
  company: string;
  companyUrl?: string;
  companyDescription: string;
  titles: string; // e.g. "VP, then SVP of Engineering"
  period: string;
  /** One-paragraph business context + mandate. */
  context: string;
  scale: string[]; // short scale/scope facts
  changes: string[]; // key changes led
  outcomes: string[]; // selected outcomes (public-safe)
  relatedWriting?: string[]; // writing titles
  relatedCaseStudies?: string[]; // case-study slugs
}

export interface CaseStudySection {
  heading: string;
  /** Markdown body; empty string renders a visible "in progress" note. */
  body: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  company: 'Quorum' | 'SparkPost' | 'Discovery';
  period: string;
  /** Optional override for the company·period line (e.g. cross-company studies). */
  eyebrow?: string;
  tags: Tag[];
  /** One-sentence summary for the index and card. */
  dek: string;
  /** Ordered sections: Context, Challenge, My role, Approach, Decisions & tradeoffs, Outcomes, What I learned. */
  sections: CaseStudySection[];
  relatedWriting?: string[]; // writing titles
  /** Set true when one or more sections are intentionally incomplete. */
  hasGaps?: boolean;
  /** false = archived (not featured or built for launch); undefined/true = live. */
  launch?: boolean;
}
