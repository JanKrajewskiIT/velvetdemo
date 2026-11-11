import { useI18n } from '@jankrajewskiit/i18n';
import { Badge, Button, IconButton, IconTile, Input, Text } from '@jankrajewskiit/ui';
import { For, type JSX } from 'solid-js';

import styles from './IconsInControlsDemo.module.css';

const BUTTON_SIZES = ['xs', 'sm', 'md', 'lg'] as const;

const Group = (props: { caption: string; children: JSX.Element }) => (
  <div class={styles.group}>
    <Text variant="overline" tone="tertiary">
      {props.caption}
    </Text>
    <div class={styles.row}>{props.children}</div>
  </div>
);

export const IconsInControlsDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <Group caption={ts('library.icons.controls.buttons')}>
        <For each={BUTTON_SIZES}>
          {(size) => (
            <Button size={size} variant="secondary" iconLeft="plus">
              {size}
            </Button>
          )}
        </For>
        <Button variant="primary" iconRight="arrow-right">
          {ts('library.icons.controls.continueLabel')}
        </Button>
      </Group>
      <Group caption={ts('library.icons.controls.iconButtons')}>
        <For each={BUTTON_SIZES}>
          {(size) => (
            <IconButton
              size={size}
              variant="secondary"
              icon="settings"
              label={ts('library.icons.controls.settings', { size })}
            />
          )}
        </For>
      </Group>
      <Group caption={ts('library.icons.controls.fields')}>
        <div class={styles.field}>
          <Input
            aria-label={ts('library.icons.controls.searchProjects')}
            iconLeft="search"
            placeholder={ts('library.icons.controls.searchProjects')}
          />
        </div>
      </Group>
      <Group caption={ts('library.icons.controls.badges')}>
        <Badge tone="success" icon="check">
          {ts('library.icons.controls.verified')}
        </Badge>
        <Badge tone="warning" icon="clock">
          {ts('library.icons.controls.pending')}
        </Badge>
        <IconTile icon="folder" tone="brand" />
        <IconTile icon="bell" tone="info" shape="circle" />
      </Group>
    </div>
  );
};
