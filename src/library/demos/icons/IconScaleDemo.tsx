import { useI18n } from '@jankrajewskiit/i18n';
import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './IconScaleDemo.module.css';
import { IconScaleRow } from './IconScaleRow';

const SCALE = [
  { step: 'xs', token: '--size-icon-xs', useKey: 'library.icons.scale.uses.xs' },
  { step: 'sm', token: '--size-icon-sm', useKey: 'library.icons.scale.uses.sm' },
  { step: 'md', token: '--size-icon-md', useKey: 'library.icons.scale.uses.md' },
  { step: 'lg', token: '--size-icon-lg', useKey: 'library.icons.scale.uses.lg' },
  { step: 'xl', token: '--size-icon-xl', useKey: 'library.icons.scale.uses.xl' },
  { step: '2xl', token: '--size-icon-2xl', useKey: 'library.icons.scale.uses.xxl' },
] as const;

export const IconScaleDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <ul class={styles.list}>
        <For each={SCALE}>
          {(entry) => <IconScaleRow step={entry.step} token={entry.token} use={ts(entry.useKey)} />}
        </For>
      </ul>
      <Text variant="caption" tone="tertiary">
        {ts('library.icons.scale.caption')}
      </Text>
    </div>
  );
};
