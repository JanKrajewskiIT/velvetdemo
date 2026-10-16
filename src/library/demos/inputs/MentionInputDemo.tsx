import { MentionInput, type MentionOption, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './MentionInputDemo.module.css';

const PEOPLE: readonly MentionOption[] = [
  { id: 'anna', label: 'Anna Kowalska', description: 'Design lead' },
  { id: 'tomasz', label: 'Tomasz Wrobel', description: 'Frontend engineer' },
  { id: 'maria', label: 'Maria Nowak', description: 'Product manager' },
  { id: 'piotr', label: 'Piotr Zielinski', description: 'QA engineer' },
  { id: 'ewa', label: 'Ewa Maj', description: 'Technical writer' },
];

const TAGS: readonly MentionOption[] = [
  { id: 'release', label: 'release' },
  { id: 'accessibility', label: 'accessibility' },
  { id: 'tokens', label: 'tokens' },
];

export const MentionInputDemo = () => {
  const [value, setValue] = createSignal('Thanks @Anna Kowalska, please review #release');
  const [lastMention, setLastMention] = createSignal('');

  return (
    <div class={styles.root}>
      <MentionInput
        label="Comment"
        hint="Type @ for people or # for tags"
        placeholder="Write a comment"
        users={PEOPLE}
        tags={TAGS}
        value={value()}
        onValueChange={setValue}
        onMention={(option, trigger) => setLastMention(`${trigger}${option.label}`)}
      />
      <Text as="p" variant="caption" tone="secondary" class={styles.status} aria-live="polite">
        Value: {value()}
      </Text>
      <Text as="p" variant="caption" tone="secondary" class={styles.status}>
        <Show when={lastMention()} fallback="No mention inserted yet">
          Last mention: {lastMention()}
        </Show>
      </Text>
    </div>
  );
};
