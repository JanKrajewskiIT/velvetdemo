import type { AiSection, AiSource, QueryField, QueryGroup } from '@jankrajewskiit/ui';

export const QUERY_FIELDS: QueryField[] = [
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'trial', label: 'Trial' },
      { value: 'churned', label: 'Churned' },
    ],
  },
  {
    key: 'plan',
    label: 'Plan',
    type: 'select',
    options: [
      { value: 'pro', label: 'Pro' },
      { value: 'team', label: 'Team' },
    ],
  },
  { key: 'seats', label: 'Seats', type: 'number' },
  { key: 'email', label: 'Email', type: 'text', operators: ['contains', 'eq', 'empty'] },
  { key: 'signup', label: 'Signed up', type: 'date' },
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

export const AI_SECTIONS: AiSection[] = [
  {
    title: 'Strengths',
    icon: 'check',
    tone: 'success',
    items: ['Four years of React and TypeScript', 'Led a design-system migration'],
  },
  { title: 'Gaps', icon: 'triangle-alert', tone: 'warning', items: ['No GraphQL experience'] },
];

export const AI_SOURCES: AiSource[] = [
  { label: 'CV, page 1', detail: 'Anna_Kowalska_CV.pdf' },
  { label: 'Job offer', detail: 'Senior Frontend Engineer' },
];
