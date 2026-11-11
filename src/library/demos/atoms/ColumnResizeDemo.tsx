import { useI18n } from '@jankrajewskiit/i18n';
import { Button, ColumnResize, Stack, Text, VisuallyHidden } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './ColumnResizeDemo.module.css';

const INITIAL_WIDTH = 160;

export const ColumnResizeDemo = () => {
  const { ts } = useI18n();
  const [width, setWidth] = createSignal(INITIAL_WIDTH);
  const reset = () => setWidth(INITIAL_WIDTH);

  return (
    <Stack gap={3}>
      <Text variant="body-sm" tone="secondary">
        {ts('library.atoms.columnResize.lead')}
      </Text>
      <table class={styles.table}>
        <VisuallyHidden as="caption">{ts('library.atoms.columnResize.caption')}</VisuallyHidden>
        <colgroup>
          <col style={{ width: `${width()}px` }} />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th class={styles.heading} scope="col">
              {ts('library.atoms.columnResize.name')}
              <ColumnResize
                label={ts('library.atoms.columnResize.resizeName')}
                width={width()}
                min={80}
                max={240}
                onResize={setWidth}
                onReset={reset}
              />
            </th>
            <th class={styles.cell} scope="col">
              {ts('library.atoms.columnResize.owner')}
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
          {ts('library.atoms.columnResize.nameWidth', { width: Math.round(width()) })}
        </Text>
        <Button variant="secondary" size="sm" onClick={reset}>
          {ts('library.atoms.columnResize.resetWidth')}
        </Button>
      </Stack>
    </Stack>
  );
};
