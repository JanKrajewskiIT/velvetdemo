import { Autocomplete } from '@jankrajewskiit/ui';
import { onCleanup } from 'solid-js';

import styles from './AutocompleteDemo.module.css';
import { CITIES, COUNTRIES, DEPARTMENTS } from './selectionData';

const LOAD_DELAY_MS = 400;
const FAILING_QUERY = 'fail';

export const AutocompleteDemo = () => {
  const pending = new Set<number>();
  onCleanup(() => {
    for (const timer of pending) window.clearTimeout(timer);
    pending.clear();
  });

  const searchCities = (query: string) =>
    new Promise<string[]>((resolve, reject) => {
      const timer = window.setTimeout(() => {
        pending.delete(timer);
        const needle = query.trim().toLowerCase();
        if (needle === FAILING_QUERY) {
          reject(new Error('Simulated outage'));
          return;
        }
        resolve(CITIES.filter((city) => city.toLowerCase().includes(needle)));
      }, LOAD_DELAY_MS);
      pending.add(timer);
    });

  return (
    <div class={styles.root}>
      <Autocomplete label="Country" options={COUNTRIES} placeholder="Start typing" hint="Filters a local list" />
      <Autocomplete
        label="City"
        loadOptions={searchCities}
        placeholder="Search cities"
        hint="Loads after a short delay; type “fail” to see retry"
      />
      <Autocomplete
        label="Department"
        options={DEPARTMENTS}
        allowCustom
        placeholder="Pick or type"
        hint="Free text is accepted"
      />
    </div>
  );
};
