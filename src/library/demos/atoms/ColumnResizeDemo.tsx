import { Button, ColumnResize, Stack, Text, VisuallyHidden } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './ColumnResizeDemo.module.css';

const INITIAL_WIDTH = 160;

export const ColumnResizeDemo = () => {
  const [width, setWidth] = createSignal(INITIAL_WIDTH);
  const reset = () => setWidth(INITIAL_WIDTH);

  return (
    <Stack gap={3}>
      <Text variant="body-sm" tone="secondary">
        Drag the name column edge, use the left and right arrow keys, or double-click to reset.
      </Text>
      <table class={styles.table}>
        <VisuallyHidden as="caption">Project ownership with a resizable name column</VisuallyHidden>
        <colgroup>
          <col style={{ width: `${width()}px` }} />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th class={styles.heading} scope="col">
              Name
              <ColumnResize
                label="Resize name column"
                width={width()}
                min={80}
                max={240}
                onResize={setWidth}
                onReset={reset}
              />
            </th>
            <th class={styles.cell} scope="col">
              Owner
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class={styles.cell}>Design system</td>
            <td class={styles.cell}>Anna</td>
          </tr>
          <tr>
            <td class={styles.cell}>Storefront</td>
            <td class={styles.cell}>Tomasz</td>
          </tr>
        </tbody>
      </table>
      <Stack direction="row" gap={3} align="center" wrap>
        <Text variant="caption" tabular>
          Name width: {Math.round(width())} px
        </Text>
        <Button variant="secondary" size="sm" onClick={reset}>
          Reset width
        </Button>
      </Stack>
    </Stack>
  );
};
