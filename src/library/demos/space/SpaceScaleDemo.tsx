import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { SpaceBar } from './SpaceBar';
import styles from './SpaceScaleDemo.module.css';

const SPACE_TOKENS = [
  '--space-px',
  '--space-0-5',
  '--space-1',
  '--space-1-5',
  '--space-2',
  '--space-2-5',
  '--space-3',
  '--space-3-5',
  '--space-4',
  '--space-5',
  '--space-6',
  '--space-7',
  '--space-8',
  '--space-10',
  '--space-12',
  '--space-16',
  '--space-20',
  '--space-24',
] as const;

export const SpaceScaleDemo = () => (
  <div class={styles.root}>
    <ul class={styles.list}>
      <For each={SPACE_TOKENS}>{(token) => <SpaceBar token={token} />}</For>
    </ul>
    <Text variant="caption" tone="tertiary">
      Whole steps sit on the 4 px grid. The 1, 2, 6, 10 and 14 px steps fill in between.
    </Text>
  </div>
);
