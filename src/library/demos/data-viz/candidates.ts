import type { ComparisonItem, ComparisonRow } from '@jankrajewskiit/ui';

export const CANDIDATES: ComparisonItem[] = [
  {
    id: 'anna',
    label: 'Anna Kowalska',
    description: 'Senior designer',
    score: '92',
    scores: { craft: 95, systems: 90, research: 60, writing: 80, lead: 70, delivery: 88 },
  },
  {
    id: 'marek',
    label: 'Marek Nowak',
    description: 'Engineering manager',
    score: '88',
    scores: { craft: 70, systems: 85, research: 75, writing: 72, lead: 94, delivery: 90 },
  },
  {
    id: 'ewa',
    label: 'Ewa Zielińska',
    description: 'Product designer',
    score: '81',
    scores: { craft: 82, systems: 70, research: 90, writing: 85, lead: 65, delivery: 74 },
  },
];

export const CRITERIA: ComparisonRow[] = [
  { label: 'Experience', hint: 'years', values: [9, 12, 6], best: 'max' },
  {
    label: 'Salary ask',
    hint: 'PLN / month',
    values: [24000, 28000, 21000],
    best: 'min',
    format: (value) => (typeof value === 'number' ? value.toLocaleString('en') : (value ?? '—')),
  },
  { label: 'Notice period', values: ['1 month', '3 months', '2 weeks'] },
];
