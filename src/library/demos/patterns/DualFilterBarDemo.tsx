import { useI18n } from '@jankrajewskiit/i18n';
import type { DualFilterOption } from '@jankrajewskiit/ui';
import { DualFilterBar } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './DualFilterBarDemo.module.css';

const RESULTS_PER_FILTER = 11;
const ALL_RESULTS = 73;

export const DualFilterBarDemo = () => {
  const { ts } = useI18n();
  const filters: DualFilterOption[] = [
    { value: 'design', label: ts('library.patterns.dualFilter.design'), count: 24 },
    { value: 'eng', label: ts('library.patterns.dualFilter.engineering'), count: 41 },
    { value: 'research', label: ts('library.patterns.dualFilter.research'), count: 8 },
  ];
  const sorts: DualFilterOption[] = [
    { value: 'new', label: ts('library.patterns.dualFilter.newest') },
    { value: 'az', label: ts('library.patterns.dualFilter.alphabetical') },
    { value: 'pop', label: ts('library.patterns.dualFilter.popular') },
  ];
  const [selectedFilters, setSelectedFilters] = createSignal<string[]>(['design']);
  const [query, setQuery] = createSignal('');
  const [sort, setSort] = createSignal('new');

  return (
    <div class={styles.root}>
      <DualFilterBar
        filters={filters}
        filterValue={selectedFilters()}
        onFilterChange={setSelectedFilters}
        sorts={sorts}
        sortValue={sort()}
        onSortChange={setSort}
        search={query()}
        onSearchChange={setQuery}
        count={selectedFilters().length ? selectedFilters().length * RESULTS_PER_FILTER : ALL_RESULTS}
      />
      <DualFilterBar
        variant="simple"
        filters={filters}
        filterValue={selectedFilters()}
        onFilterChange={setSelectedFilters}
        sorts={sorts}
        sortValue={sort()}
        onSortChange={setSort}
      />
    </div>
  );
};
