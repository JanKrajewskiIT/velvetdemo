import { SearchInput } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './SearchSuggestionsDemo.module.css';

const TOPICS = ['Design systems', 'Design tokens', 'Developer experience', 'Accessibility', 'Animation', 'Typography'];

export const SearchSuggestionsDemo = () => {
  const [picked, setPicked] = createSignal('');
  return (
    <div class={styles.root}>
      <SearchInput
        label="Search topics"
        placeholder="Try design"
        suggestions={TOPICS}
        onSelect={(item) => setPicked(item.label)}
      />
      <p class={styles.status} aria-live="polite">
        <Show when={picked()} fallback="Nothing selected">
          Selected: {picked()}
        </Show>
      </p>
    </div>
  );
};
