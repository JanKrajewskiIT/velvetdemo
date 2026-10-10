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

export const IconsInControlsDemo = () => (
  <div class={styles.root}>
    <Group caption="Buttons">
      <For each={BUTTON_SIZES}>
        {(size) => (
          <Button size={size} variant="secondary" iconLeft="plus">
            {size}
          </Button>
        )}
      </For>
      <Button variant="primary" iconRight="arrow-right">
        Continue
      </Button>
    </Group>
    <Group caption="Icon buttons">
      <For each={BUTTON_SIZES}>
        {(size) => <IconButton size={size} variant="secondary" icon="settings" label={`Settings, ${size}`} />}
      </For>
    </Group>
    <Group caption="Fields">
      <div class={styles.field}>
        <Input aria-label="Search projects" iconLeft="search" placeholder="Search projects" />
      </div>
    </Group>
    <Group caption="Badges and tiles">
      <Badge tone="success" icon="check">
        Verified
      </Badge>
      <Badge tone="warning" icon="clock">
        Pending
      </Badge>
      <IconTile icon="folder" tone="brand" />
      <IconTile icon="bell" tone="info" shape="circle" />
    </Group>
  </div>
);
