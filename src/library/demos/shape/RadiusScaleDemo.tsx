import { For } from 'solid-js';

import styles from './RadiusScaleDemo.module.css';
import { RadiusTile } from './RadiusTile';

const RADII = [
  { token: '--radius-none', use: 'Flush edges' },
  { token: '--radius-2xs', use: 'Bars, marks and tracks' },
  { token: '--radius-xs', use: 'Chips and code' },
  { token: '--radius-sm', use: 'Small controls' },
  { token: '--radius-md', use: 'Buttons and fields' },
  { token: '--radius-lg', use: 'Cards and panels' },
  { token: '--radius-xl', use: 'Dialogs and the FAB' },
  { token: '--radius-2xl', use: 'Hero tiles' },
  { token: '--radius-full', use: 'Pills, dots and avatars' },
] as const;

export const RadiusScaleDemo = () => (
  <ul class={styles.grid}>
    <For each={RADII}>{(radius) => <RadiusTile token={radius.token} use={radius.use} />}</For>
  </ul>
);
