import { Checkbox } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './IndeterminateGroupDemo.module.css';

const CHANNELS = [
  { id: 'email', label: 'Email' },
  { id: 'push', label: 'Push' },
  { id: 'sms', label: 'SMS' },
];

export const IndeterminateGroupDemo = () => {
  const [selected, setSelected] = createSignal<readonly string[]>(['email', 'push']);
  const allSelected = () => selected().length === CHANNELS.length;
  const someSelected = () => selected().length > 0 && !allSelected();

  const toggleAll = (on: boolean) => setSelected(on ? CHANNELS.map((channel) => channel.id) : []);
  const toggleOne = (id: string, on: boolean) =>
    setSelected(on ? [...selected(), id] : selected().filter((item) => item !== id));

  return (
    <div class={styles.root} role="group" aria-label="Notification channels">
      <Checkbox
        label="All channels"
        checked={allSelected()}
        indeterminate={someSelected()}
        onChange={(event) => toggleAll(event.currentTarget.checked)}
      />
      <div class={styles.children}>
        <For each={CHANNELS}>
          {(channel) => (
            <Checkbox
              label={channel.label}
              checked={selected().includes(channel.id)}
              onChange={(event) => toggleOne(channel.id, event.currentTarget.checked)}
            />
          )}
        </For>
      </div>
    </div>
  );
};
