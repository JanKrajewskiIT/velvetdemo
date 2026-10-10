import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './IconScaleDemo.module.css';
import { IconScaleRow } from './IconScaleRow';

const SCALE = [
  { step: 'xs', token: '--size-icon-xs', use: 'Trailing chevrons in filter chips, external-link marks' },
  { step: 'sm', token: '--size-icon-sm', use: 'Extra-small buttons, stepper dots, picker headers' },
  { step: 'md', token: '--size-icon-md', use: 'Default in buttons, menus, options and breadcrumbs' },
  { step: 'lg', token: '--size-icon-lg', use: 'Toolbars, navigation links and tree carets' },
  { step: 'xl', token: '--size-icon-xl', use: 'Large icon tiles' },
  { step: '2xl', token: '--size-icon-2xl', use: 'Floating action button, bottom navigation, empty states' },
] as const;

export const IconScaleDemo = () => (
  <div class={styles.root}>
    <ul class={styles.list}>
      <For each={SCALE}>{(entry) => <IconScaleRow step={entry.step} token={entry.token} use={entry.use} />}</For>
    </ul>
    <Text variant="caption" tone="tertiary">
      Outline set on a 24 px grid with a 1.75 stroke and round caps. Size follows font-size, colour follows
      currentColor.
    </Text>
  </div>
);
