import { filledIcon, Glyph, IconFilled, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './FilledTwinsDemo.module.css';

const INITIAL_SELECTION: readonly string[] = ['home', 'bell'];

export const FilledTwinsDemo = () => {
  const [selection, setSelection] = createSignal<ReadonlySet<string>>(new Set(INITIAL_SELECTION));

  const toggle = (name: string) =>
    setSelection((current) => {
      const next = new Set(current);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  return (
    <div class={styles.root}>
      <ul class={styles.grid}>
        <For each={IconFilled}>
          {(name) => (
            <li>
              <button
                type="button"
                class={styles.toggle}
                aria-pressed={selection().has(name)}
                onClick={() => toggle(name)}
              >
                <Glyph name={filledIcon(name, selection().has(name))} class={styles.glyph} />
                <span class={styles.name}>{name}</span>
                <span class={styles.state}>{selection().has(name) ? 'Selected' : 'Rest'}</span>
              </button>
            </li>
          )}
        </For>
      </ul>
      <Text variant="caption" tone="tertiary">
        The filled twin marks a selected state, such as an active tab or a pressed toggle. It is never decoration.
      </Text>
    </div>
  );
};
