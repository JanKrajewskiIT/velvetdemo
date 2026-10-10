import { Badge, Button, Card, IconButton, IconTile, Input, Surface, Text } from '@jankrajewskiit/ui';

import { ShapeCell } from './ShapeCell';
import styles from './ShapeInControlsDemo.module.css';

export const ShapeInControlsDemo = () => (
  <ul class={styles.grid}>
    <ShapeCell name="Button" token="--button-radius → --radius-md">
      <Button variant="primary">Save changes</Button>
    </ShapeCell>
    <ShapeCell name="Field" token="--control-radius → --radius-md">
      <div class={styles.field}>
        <Input aria-label="Project name" placeholder="Project name" />
      </div>
    </ShapeCell>
    <ShapeCell name="Card" token="--surface-radius → --radius-lg">
      <Card class={styles.card} title="Quarterly report" description="Updated today" />
    </ShapeCell>
    <ShapeCell name="Dialog panel" token="--dialog-radius → --radius-xl">
      <Surface variant="dialog" padding="md" class={styles.panel}>
        <Text variant="title">Delete project?</Text>
        <Text variant="body-sm" tone="secondary">
          This cannot be undone.
        </Text>
      </Surface>
    </ShapeCell>
    <ShapeCell name="Badge" token="--badge-radius → --radius-full">
      <Badge tone="success" dot>
        Active
      </Badge>
    </ShapeCell>
    <ShapeCell name="Circular controls" token="--radius-full">
      <div class={styles.tiles}>
        <IconTile icon="bell" tone="info" size="lg" shape="circle" />
        <IconButton icon="more-horizontal" label="More actions" variant="secondary" shape="circle" />
      </div>
    </ShapeCell>
  </ul>
);
