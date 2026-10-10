import { Button, SplitPane, Stack, Surface, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './SplitPaneDemo.module.css';

const MESSAGES = [
  { from: 'Anna Kowalska', subject: 'Re: Component audit — done' },
  { from: 'Marek Nowak', subject: 'Dark mode notes' },
  { from: 'Julia Wiśniewska', subject: 'Rebrand files' },
  { from: 'Tomasz Piątek', subject: 'Sprint retro' },
] as const;

const MIN_PERCENT = 22;
const MAX_PERCENT = 60;
const DEFAULT_PERCENT = 36;
const DETAIL_PERCENT = 62;
const DETAIL_MIN_PX = 60;

export const SplitPaneDemo = () => {
  const [selected, setSelected] = createSignal(0);
  const [size, setSize] = createSignal(DEFAULT_PERCENT);
  const message = () => MESSAGES[selected()];

  return (
    <Stack gap={2}>
      <Surface variant="raised" clip class={styles.frame}>
        <SplitPane
          size={size()}
          onSizeChange={setSize}
          min={MIN_PERCENT}
          max={MAX_PERCENT}
          collapsible
          label="Resize message list"
        >
          <Stack gap={1} class={styles.list}>
            <For each={MESSAGES}>
              {(item, index) => (
                <Button
                  variant={index() === selected() ? 'soft' : 'ghost'}
                  aria-pressed={index() === selected()}
                  onClick={() => setSelected(index())}
                >
                  {item.from}
                </Button>
              )}
            </For>
          </Stack>
          <SplitPane
            direction="vertical"
            defaultSize={DETAIL_PERCENT}
            minPx={DETAIL_MIN_PX}
            label="Resize activity log"
          >
            <Stack gap={1} class={styles.detail}>
              <Text variant="title" as="p">
                {message()?.subject}
              </Text>
              <Text variant="caption" tone="tertiary">
                {message()?.from}
              </Text>
            </Stack>
            <Surface variant="subtle" padding="md">
              <Text variant="caption">Activity log</Text>
            </Surface>
          </SplitPane>
        </SplitPane>
      </Surface>
      <Text variant="caption" tone="tertiary" tabular>
        List pane {Math.round(size())}% — drag a handle, or focus it and use the arrow keys. Drag the left handle fully
        left to collapse; Enter restores.
      </Text>
    </Stack>
  );
};
