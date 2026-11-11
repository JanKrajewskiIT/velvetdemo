import type { useI18n } from '@jankrajewskiit/i18n';
import type { ComparisonItem, ComparisonRow } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

export const createCandidates = (ts: Ts): ComparisonItem[] => [
  {
    id: 'anna',
    label: 'Anna Kowalska',
    description: ts('library.dataViz.demo.candidateRoles.seniorDesigner'),
    score: '92',
    scores: { craft: 95, systems: 90, research: 60, writing: 80, lead: 70, delivery: 88 },
  },
  {
    id: 'marek',
    label: 'Marek Nowak',
    description: ts('library.dataViz.demo.candidateRoles.engineeringManager'),
    score: '88',
    scores: { craft: 70, systems: 85, research: 75, writing: 72, lead: 94, delivery: 90 },
  },
  {
    id: 'ewa',
    label: 'Ewa Zielińska',
    description: ts('library.dataViz.demo.candidateRoles.productDesigner'),
    score: '81',
    scores: { craft: 82, systems: 70, research: 90, writing: 85, lead: 65, delivery: 74 },
  },
];

export const createComparisonCriteria = (ts: Ts, locale: () => string): ComparisonRow[] => [
  {
    label: ts('library.dataViz.demo.criteria.experience'),
    hint: ts('library.dataViz.demo.criteria.years'),
    values: [9, 12, 6],
    best: 'max',
  },
  {
    label: ts('library.dataViz.demo.criteria.salaryAsk'),
    hint: ts('library.dataViz.demo.criteria.plnPerMonth'),
    values: [24000, 28000, 21000],
    best: 'min',
    format: (value) => (typeof value === 'number' ? value.toLocaleString(locale()) : (value ?? '—')),
  },
  {
    label: ts('library.dataViz.demo.criteria.noticePeriod'),
    values: [
      ts('library.dataViz.demo.notice.oneMonth'),
      ts('library.dataViz.demo.notice.threeMonths'),
      ts('library.dataViz.demo.notice.twoWeeks'),
    ],
  },
];
