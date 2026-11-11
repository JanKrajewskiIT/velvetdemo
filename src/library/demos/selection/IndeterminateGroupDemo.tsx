import { useI18n } from '@jankrajewskiit/i18n';
import { Checkbox } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './IndeterminateGroupDemo.module.css';

const CHANNELS = [
  { id: 'email', labelKey: 'library.selection.demos.indeterminate.email' },
  { id: 'push', labelKey: 'library.selection.demos.indeterminate.push' },
  { id: 'sms', labelKey: 'library.selection.demos.indeterminate.sms' },
] as const;

export const IndeterminateGroupDemo = () => {
  const { ts } = useI18n();
  const [selected, setSelected] = createSignal<readonly string[]>(['email', 'push']);
  const allSelected = () => selected().length === CHANNELS.length;
  const someSelected = () => selected().length > 0 && !allSelected();

  const toggleAll = (on: boolean) => setSelected(on ? CHANNELS.map((channel) => channel.id) : []);
  const toggleOne = (id: string, on: boolean) =>
    setSelected(on ? [...selected(), id] : selected().filter((item) => item !== id));

  return (
    <div class={styles.root} role="group" aria-label={ts('library.selection.demos.indeterminate.groupLabel')}>
      <Checkbox
        label={ts('library.selection.demos.indeterminate.allChannels')}
        checked={allSelected()}
        indeterminate={someSelected()}
        onChange={(event) => toggleAll(event.currentTarget.checked)}
      />
      <div class={styles.children}>
        <For each={CHANNELS}>
          {(channel) => (
            <Checkbox
              label={ts(channel.labelKey)}
              checked={selected().includes(channel.id)}
              onChange={(event) => toggleOne(channel.id, event.currentTarget.checked)}
            />
          )}
        </For>
      </div>
    </div>
  );
};
