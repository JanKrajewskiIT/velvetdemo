import { useI18n } from '@jankrajewskiit/i18n';
import type { FilterDef, FilterValue } from '@jankrajewskiit/ui';
import { Button, FilterBar } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const TOTAL_CUSTOMERS = 128;
const PER_STATUS = 7;
const PER_PLAN = 11;

export const FilterBarDemo = () => {
  const { ts } = useI18n();
  const facets: FilterDef[] = [
    {
      key: 'status',
      label: ts('library.patterns.filterBar.status'),
      options: [
        { value: 'active', label: ts('library.patterns.filterBar.active'), dot: 'success', count: 84 },
        { value: 'trial', label: ts('library.patterns.filterBar.trial'), dot: 'info', count: 31 },
        { value: 'paused', label: ts('library.patterns.filterBar.paused'), dot: 'warning', count: 9 },
        { value: 'churned', label: ts('library.patterns.filterBar.churned'), dot: 'danger', count: 4 },
      ],
    },
    {
      key: 'plan',
      label: ts('library.patterns.filterBar.plan'),
      icon: 'tag',
      options: [
        { value: 'free', label: ts('library.patterns.filterBar.free') },
        { value: 'pro', label: ts('library.patterns.filterBar.pro') },
        { value: 'team', label: ts('library.patterns.filterBar.team') },
        { value: 'ent', label: ts('library.patterns.filterBar.enterprise') },
      ],
    },
    {
      key: 'owner',
      label: ts('library.patterns.filterBar.owner'),
      icon: 'user',
      multiple: false,
      options: [
        { value: 'me', label: ts('library.patterns.filterBar.me') },
        { value: 'anna', label: 'Anna K.' },
        { value: 'jan', label: 'Jan N.' },
      ],
    },
  ];
  const [value, setValue] = createSignal<FilterValue>({ status: ['active'], plan: ['pro', 'team'] });
  const matches = () =>
    Math.max(0, TOTAL_CUSTOMERS - (value().status?.length ?? 0) * PER_STATUS - (value().plan?.length ?? 0) * PER_PLAN);

  return (
    <FilterBar
      filters={facets}
      value={value()}
      onChange={setValue}
      searchPlaceholder={ts('library.patterns.filterBar.searchPlaceholder')}
      resultCount={matches()}
      resultLabel={ts('library.patterns.filterBar.resultLabel')}
      actions={
        <Button variant="secondary" size="sm" iconLeft="download">
          {ts('library.patterns.filterBar.export')}
        </Button>
      }
    />
  );
};
