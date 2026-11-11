import { useI18n } from '@jankrajewskiit/i18n';
import { Segmented, SegmentedItem, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import { NestedDiagram } from './NestedDiagram';
import styles from './NestedRadiusDemo.module.css';

const RANGES = [
  { id: 'day', labelKey: 'library.shape.nestedRadius.ranges.day' },
  { id: 'week', labelKey: 'library.shape.nestedRadius.ranges.week' },
  { id: 'month', labelKey: 'library.shape.nestedRadius.ranges.month' },
] as const;

type RangeId = (typeof RANGES)[number]['id'];

export const NestedRadiusDemo = () => {
  const { ts } = useI18n();
  const [range, setRange] = createSignal<RangeId>('week');

  return (
    <div class={styles.root}>
      <div class={styles.live}>
        <Text variant="overline" tone="tertiary">
          {ts('library.shape.nestedRadius.live')}
        </Text>
        <Segmented role="radiogroup" aria-label={ts('library.shape.nestedRadius.range')}>
          <For each={RANGES}>
            {(item) => (
              <SegmentedItem role="radio" selected={range() === item.id} onClick={() => setRange(item.id)}>
                {ts(item.labelKey)}
              </SegmentedItem>
            )}
          </For>
        </Segmented>
        <Text variant="caption" tone="tertiary">
          {ts('library.shape.nestedRadius.caption', { radius: '--radius-nested', inset: '--track-pad' })}
        </Text>
      </div>
      <div class={styles.diagrams}>
        <NestedDiagram
          title={ts('library.shape.nestedRadius.trackTitle')}
          outerRadius="--radius-md"
          inset="--track-pad"
        />
        <NestedDiagram title={ts('library.shape.nestedRadius.cardTitle')} outerRadius="--radius-xl" inset="--space-2" />
      </div>
    </div>
  );
};
