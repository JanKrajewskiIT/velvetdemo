import { useI18n } from '@jankrajewskiit/i18n';
import { Badge, Text, Watermark } from '@jankrajewskiit/ui';

import styles from './WatermarkDemo.module.css';

const VIEWER_LINES = ['anna@velvet.example', '2026-10-06'] as const;

export const WatermarkDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <Watermark text={ts('library.display.watermark.confidential')} class={styles.frame}>
        <article class={styles.document}>
          <header class={styles.header}>
            <Text as="h3" variant="title" class={styles.title}>
              Q3 budget review
            </Text>
            <Badge tone="warning" variant="soft">
              {ts('library.display.watermark.internal')}
            </Badge>
          </header>
          <Text as="p" variant="caption" tone="secondary" class={styles.body}>
            Headcount stays flat, design tooling spend rises by 8 percent and the contractor budget is frozen until
            November.
          </Text>
        </article>
      </Watermark>
      <Watermark lines={VIEWER_LINES} rotate={-18} gap={[72, 56]} fontSize={12} class={styles.frame}>
        <article class={styles.document}>
          <Text as="h3" variant="title" class={styles.title}>
            {ts('library.display.watermark.sharedTitle')}
          </Text>
          <Text as="p" variant="caption" tone="secondary" class={styles.body}>
            {ts('library.display.watermark.sharedBody')}
          </Text>
        </article>
      </Watermark>
    </div>
  );
};
