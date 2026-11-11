import { useI18n } from '@jankrajewskiit/i18n';
import { Autocomplete } from '@jankrajewskiit/ui';
import { onCleanup } from 'solid-js';

import styles from './AutocompleteDemo.module.css';
import { CITIES, COUNTRIES, DEPARTMENTS } from './selectionData';

const LOAD_DELAY_MS = 400;
const FAILING_QUERY = 'fail';

export const AutocompleteDemo = () => {
  const { ts } = useI18n();
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
      <Autocomplete
        label={ts('library.selection.demos.autocomplete.countryLabel')}
        options={COUNTRIES}
        placeholder={ts('library.selection.demos.autocomplete.countryPlaceholder')}
        hint={ts('library.selection.demos.autocomplete.countryHint')}
      />
      <Autocomplete
        label={ts('library.selection.demos.autocomplete.cityLabel')}
        loadOptions={searchCities}
        placeholder={ts('library.selection.demos.autocomplete.cityPlaceholder')}
        hint={ts('library.selection.demos.autocomplete.cityHint')}
      />
      <Autocomplete
        label={ts('library.selection.demos.autocomplete.departmentLabel')}
        options={DEPARTMENTS}
        allowCustom
        placeholder={ts('library.selection.demos.autocomplete.departmentPlaceholder')}
        hint={ts('library.selection.demos.autocomplete.departmentHint')}
      />
    </div>
  );
};
