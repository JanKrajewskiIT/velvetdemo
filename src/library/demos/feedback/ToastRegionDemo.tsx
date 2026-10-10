import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Stack, Toast, ToastRegion } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './ToastRegionDemo.module.css';

export const ToastRegionDemo = () => {
  const { ts } = useI18n();
  const [messages, setMessages] = createSignal<number[]>([]);
  let sequence = 0;

  const add = () => {
    sequence += 1;
    setMessages((items) => [...items, sequence].slice(-3));
  };
  const dismiss = (id: number) => setMessages((items) => items.filter((item) => item !== id));

  return (
    <Stack gap={3}>
      <Button size="sm" variant="secondary" onClick={add}>
        {ts('library.feedback.region.add')}
      </Button>
      <div class={styles.stage}>
        <ToastRegion class={styles.region}>
          <For each={messages()}>
            {(id) => (
              <Toast
                tone="success"
                title={ts('library.feedback.region.message', { id })}
                description={ts('library.feedback.region.description')}
                duration={5000}
                onClose={() => dismiss(id)}
              />
            )}
          </For>
        </ToastRegion>
      </div>
    </Stack>
  );
};
