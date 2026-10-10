import type { FilterDef, FilterValue } from '@jankrajewskiit/ui';
import { Button, FilterBar } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const TOTAL_CUSTOMERS = 128;
const PER_STATUS = 7;
const PER_PLAN = 11;

const FACETS: FilterDef[] = [
  {
    key: 'status',
    label: 'Status',
    options: [
      { value: 'active', label: 'Active', dot: 'success', count: 84 },
      { value: 'trial', label: 'Trial', dot: 'info', count: 31 },
      { value: 'paused', label: 'Paused', dot: 'warning', count: 9 },
      { value: 'churned', label: 'Churned', dot: 'danger', count: 4 },
    ],
  },
  {
    key: 'plan',
    label: 'Plan',
    icon: 'tag',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
      { value: 'team', label: 'Team' },
      { value: 'ent', label: 'Enterprise' },
    ],
  },
  {
    key: 'owner',
    label: 'Owner',
    icon: 'user',
    multiple: false,
    options: [
      { value: 'me', label: 'Me' },
      { value: 'anna', label: 'Anna K.' },
      { value: 'jan', label: 'Jan N.' },
    ],
  },
];

export const FilterBarDemo = () => {
  const [value, setValue] = createSignal<FilterValue>({ status: ['active'], plan: ['pro', 'team'] });
  const matches = () =>
    Math.max(0, TOTAL_CUSTOMERS - (value().status?.length ?? 0) * PER_STATUS - (value().plan?.length ?? 0) * PER_PLAN);

  return (
    <FilterBar
      filters={FACETS}
      value={value()}
      onChange={setValue}
      searchPlaceholder="Search customers"
      resultCount={matches()}
      resultLabel="customers"
      actions={
        <Button variant="secondary" size="sm" iconLeft="download">
          Export
        </Button>
      }
    />
  );
};
