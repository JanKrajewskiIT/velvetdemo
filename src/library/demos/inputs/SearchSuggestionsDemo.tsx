import { useI18n } from '@jankrajewskiit/i18n';
import { SearchInput } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './SearchSuggestionsDemo.module.css';

const TOPICS = ['Design systems', 'Design tokens', 'Developer experience', 'Accessibility', 'Animation', 'Typography'];

export const SearchSuggestionsDemo = () => {
  const { ts } = useI18n();
  const [picked, setPicked] = createSignal('');
  return (
    <div class={styles.root}>
      <SearchInput
        label={ts('library.inputs.demos.search.label')}
        placeholder={ts('library.inputs.demos.search.placeholder')}
        suggestions={TOPICS}
        onSelect={(item) => setPicked(item.label)}
      />
      <p class={styles.status} aria-live="polite">
        <Show when={picked()} fallback={ts('library.inputs.demos.search.empty')}>
          {ts('library.inputs.demos.search.selected', { topic: picked() })}
        </Show>
      </p>
    </div>
  );
};
