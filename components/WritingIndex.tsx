'use client';

import { useMemo, useState } from 'react';
import type { WritingItem, Tag } from '@/content/types';
import { WritingCard } from './Cards';

// Filterable index. Without JS, the <noscript> path shows every item (see WritingList fallback
// rendered server-side on the page). With JS, filter chips narrow by tag.
export default function WritingIndex({ items, tags }: { items: WritingItem[]; tags: Tag[] }) {
  const [active, setActive] = useState<Tag | 'All'>('All');

  const filtered = useMemo(
    () => (active === 'All' ? items : items.filter((i) => i.tags.includes(active))),
    [items, active],
  );

  const chips: (Tag | 'All')[] = ['All', ...tags];

  return (
    <div>
      <div role="group" aria-label="Filter writing by theme" className="flex flex-wrap gap-2">
        {chips.map((chip) => {
          const isActive = chip === active;
          return (
            <button
              key={chip}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(chip)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-accent bg-accent text-white'
                  : 'border-line bg-surface text-ink-soft hover:border-accent-soft hover:text-accent'
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-ink-faint" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
        {active !== 'All' ? ` · ${active}` : ''}
      </p>

      <div className="mt-2">
        {filtered.map((item) => (
          <WritingCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
