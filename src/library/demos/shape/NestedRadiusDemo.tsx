import { Segmented, SegmentedItem, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import { NestedDiagram } from './NestedDiagram';
import styles from './NestedRadiusDemo.module.css';

const RANGES = ['Day', 'Week', 'Month'] as const;

export const NestedRadiusDemo = () => {
  const [range, setRange] = createSignal<(typeof RANGES)[number]>('Week');

  return (
    <div class={styles.root}>
      <div class={styles.live}>
        <Text variant="overline" tone="tertiary">
          Live track
        </Text>
        <Segmented role="radiogroup" aria-label="Range">
          <For each={RANGES}>
            {(item) => (
              <SegmentedItem role="radio" selected={range() === item} onClick={() => setRange(item)}>
                {item}
              </SegmentedItem>
            )}
          </For>
        </Segmented>
        <Text variant="caption" tone="tertiary">
          The track radius is --radius-nested: the outer radius minus the --track-pad inset keeps corners concentric.
        </Text>
      </div>
      <div class={styles.diagrams}>
        <NestedDiagram title="Segmented track · 3× zoom" outerRadius="--radius-md" inset="--track-pad" />
        <NestedDiagram title="Card with inset media · 3× zoom" outerRadius="--radius-xl" inset="--space-2" />
      </div>
    </div>
  );
};
