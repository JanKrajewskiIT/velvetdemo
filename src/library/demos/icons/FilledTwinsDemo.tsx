import { useI18n } from '@jankrajewskiit/i18n';
import { filledIcon, Glyph, IconFilled, SectionLabel, Text, VelvetIcons } from '@jankrajewskiit/ui';
import { createSignal, For, Show } from 'solid-js';

import styles from './FilledTwinsDemo.module.css';

const INITIAL_SELECTION: readonly string[] = ['home', 'bell'];
const TWINS = IconFilled.filter((name) => name in VelvetIcons);
const FILLED_ONLY = IconFilled.filter((name) => !(name in VelvetIcons)).map((name) => filledIcon(name, true));

export const FilledTwinsDemo = () => {
  const { ts } = useI18n();
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
      <SectionLabel>{ts('library.icons.filled.paired')}</SectionLabel>
      <ul class={styles.grid}>
        <For each={TWINS}>
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
                <span class={styles.state}>
                  <Show when={selection().has(name)} fallback={ts('library.icons.filled.rest')}>
                    {ts('library.icons.filled.selected')}
                  </Show>
                </span>
              </button>
            </li>
          )}
        </For>
      </ul>
      <Show when={FILLED_ONLY.length > 0}>
        <SectionLabel>{ts('library.icons.filled.print')}</SectionLabel>
        <ul class={styles.grid}>
          <For each={FILLED_ONLY}>
            {(name) => (
              <li class={styles.tile}>
                <Glyph name={name} class={styles.glyph} />
                <span class={styles.name}>{name}</span>
                <span class={styles.state}>{ts('library.icons.filled.printState')}</span>
              </li>
            )}
          </For>
        </ul>
      </Show>
      <Text variant="caption" tone="tertiary">
        {ts('library.icons.filled.caption')}
      </Text>
    </div>
  );
};
