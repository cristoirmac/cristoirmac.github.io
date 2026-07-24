import { caseStudies } from '@/content/case-studies';
import { writing } from '@/content/writing';
import { experience } from '@/content/experience';
import type { CaseStudy, WritingItem } from '@/content/types';

// Primary (featured) case studies vs. additional ones. All are built; the "additional" set
// (launch: false) is listed separately rather than featured in the main grid.
export const launchCaseStudies: CaseStudy[] = caseStudies.filter((c) => c.launch !== false);
export const additionalCaseStudies: CaseStudy[] = caseStudies.filter((c) => c.launch === false);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudiesByCompany(company: CaseStudy['company']): CaseStudy[] {
  return caseStudies.filter((c) => c.company === company);
}

export function getWritingByTitle(title: string): WritingItem | undefined {
  return writing.find((w) => w.title === title);
}

export function getExperience(slug: string) {
  return experience.find((e) => e.slug === slug);
}

/** Human date: "Jul 2026", "2017", or "" when no date is set. */
export function formatDate(date?: string): string {
  if (!date) return '';
  if (/^\d{4}$/.test(date)) return date;
  const d = new Date(date + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

export function sortByDateDesc(a: WritingItem, b: WritingItem): number {
  const av = a.date ?? '0000';
  const bv = b.date ?? '0000';
  return bv.localeCompare(av);
}
