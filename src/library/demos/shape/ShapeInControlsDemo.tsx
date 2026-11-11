import { useI18n } from '@jankrajewskiit/i18n';
import { Badge, Button, Card, IconButton, IconTile, Input, Surface, Text } from '@jankrajewskiit/ui';

import { ShapeCell } from './ShapeCell';
import styles from './ShapeInControlsDemo.module.css';

export const ShapeInControlsDemo = () => {
  const { ts } = useI18n();

  return (
    <ul class={styles.grid}>
      <ShapeCell name="Button" token="--button-radius → --radius-md">
        <Button variant="primary">{ts('library.shape.shapeInControls.saveChanges')}</Button>
      </ShapeCell>
      <ShapeCell name="Field" token="--control-radius → --radius-md">
        <div class={styles.field}>
          <Input
            aria-label={ts('library.shape.shapeInControls.projectName')}
            placeholder={ts('library.shape.shapeInControls.projectName')}
          />
        </div>
      </ShapeCell>
      <ShapeCell name="Card" token="--surface-radius → --radius-lg">
        <Card
          class={styles.card}
          title={ts('library.shape.shapeInControls.reportTitle')}
          description={ts('library.shape.shapeInControls.updatedToday')}
        />
      </ShapeCell>
      <ShapeCell name="Dialog panel" token="--dialog-radius → --radius-xl">
        <Surface variant="dialog" padding="md" class={styles.panel}>
          <Text variant="title">{ts('library.shape.shapeInControls.deleteTitle')}</Text>
          <Text variant="body-sm" tone="secondary">
            {ts('library.shape.shapeInControls.deleteBody')}
          </Text>
        </Surface>
      </ShapeCell>
      <ShapeCell name="Badge" token="--badge-radius → --radius-full">
        <Badge tone="success" dot>
          {ts('library.shape.shapeInControls.active')}
        </Badge>
      </ShapeCell>
      <ShapeCell name="Circular controls" token="--radius-full">
        <div class={styles.tiles}>
          <IconTile icon="bell" tone="info" size="lg" shape="circle" />
          <IconButton
            icon="more-horizontal"
            label={ts('library.shape.shapeInControls.moreActions')}
            variant="secondary"
            shape="circle"
          />
        </div>
      </ShapeCell>
    </ul>
  );
};
