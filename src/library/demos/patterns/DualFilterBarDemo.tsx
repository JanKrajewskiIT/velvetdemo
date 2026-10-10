import type { DualFilterOption } from '@jankrajewskiit/ui';
import { DualFilterBar } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './DualFilterBarDemo.module.css';

const RESULTS_PER_FILTER = 11;
const ALL_RESULTS = 73;

const FILTERS: DualFilterOption[] = [
  { value: 'design', label: 'Design', count: 24 },
  { value: 'eng', label: 'Engineering', count: 41 },
  { value: 'research', label: 'Research', count: 8 },
];

const SORTS: DualFilterOption[] = [
  { value: 'new', label: 'Newest' },
  { value: 'az', label: 'A to Z' },
  { value: 'pop', label: 'Popular' },
];

export const DualFilterBarDemo = () => {
  const [filters, setFilters] = createSignal<string[]>(['design']);
  const [query, setQuery] = createSignal('');
  const [sort, setSort] = createSignal('new');

  return (
    <div class={styles.root}>
      <DualFilterBar
        filters={FILTERS}
        filterValue={filters()}
        onFilterChange={setFilters}
        sorts={SORTS}
        sortValue={sort()}
        onSortChange={setSort}
        search={query()}
        onSearchChange={setQuery}
        count={filters().length ? filters().length * RESULTS_PER_FILTER : ALL_RESULTS}
      />
      <DualFilterBar
        variant="simple"
        filters={FILTERS}
        filterValue={filters()}
        onFilterChange={setFilters}
        sorts={SORTS}
        sortValue={sort()}
        onSortChange={setSort}
      />
    </div>
  );
};
