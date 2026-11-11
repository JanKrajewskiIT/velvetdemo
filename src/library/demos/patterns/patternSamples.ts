import type { QueryField, QueryGroup } from '@jankrajewskiit/data';
import type { useI18n } from '@jankrajewskiit/i18n';
import type { AiSection, AiSource } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

export const createQueryFields = (ts: Ts): QueryField[] => [
  {
    key: 'status',
    label: ts('library.patterns.filterBar.status'),
    type: 'select',
    options: [
      { value: 'active', label: ts('library.patterns.filterBar.active') },
      { value: 'trial', label: ts('library.patterns.filterBar.trial') },
      { value: 'churned', label: ts('library.patterns.filterBar.churned') },
    ],
  },
  {
    key: 'plan',
    label: ts('library.patterns.filterBar.plan'),
    type: 'select',
    options: [
      { value: 'pro', label: ts('library.patterns.filterBar.pro') },
      { value: 'team', label: ts('library.patterns.filterBar.team') },
    ],
  },
  { key: 'seats', label: ts('library.patterns.query.fields.seats'), type: 'number' },
  {
    key: 'email',
    label: ts('library.patterns.query.fields.email'),
    type: 'text',
    operators: ['contains', 'eq', 'empty'],
  },
  { key: 'signup', label: ts('library.patterns.query.fields.signedUp'), type: 'date' },
];

export const QUERY: QueryGroup = {
  id: 'root',
  combinator: 'and',
  rules: [
    { id: 'rule-status', field: 'status', op: 'eq', value: 'active' },
    {
      id: 'group-plan',
      combinator: 'or',
      rules: [
        { id: 'rule-plan', field: 'plan', op: 'eq', value: 'team' },
        { id: 'rule-seats', field: 'seats', op: 'gt', value: '10' },
      ],
    },
  ],
};

export const createAiSections = (ts: Ts): AiSection[] => [
  {
    title: ts('library.patterns.aiSections.strengths'),
    icon: 'check',
    tone: 'success',
    items: [ts('library.patterns.aiSections.experienceYears'), ts('library.patterns.aiSections.designSystem')],
  },
  {
    title: ts('library.patterns.aiSections.gaps'),
    icon: 'triangle-alert',
    tone: 'warning',
    items: [ts('library.patterns.aiSections.noGraphql')],
  },
];

export const createAiSources = (ts: Ts): AiSource[] => [
  { label: ts('library.patterns.analysisFlow.report.evidenceSource'), detail: 'Anna_Kowalska_CV.pdf' },
  { label: ts('library.patterns.analysisFlow.sources.job'), detail: 'Senior Frontend Engineer' },
];
