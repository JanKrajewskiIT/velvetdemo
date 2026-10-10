import { Badge, Watermark } from '@jankrajewskiit/ui';

import styles from './WatermarkDemo.module.css';

const VIEWER_LINES = ['anna@velvet.example', '2026-10-06'] as const;

export const WatermarkDemo = () => (
  <div class={styles.root}>
    <Watermark text="Confidential" class={styles.frame}>
      <article class={styles.document}>
        <header class={styles.header}>
          <h3 class={styles.title}>Q3 budget review</h3>
          <Badge tone="warning" variant="soft">
            Internal
          </Badge>
        </header>
        <p class={styles.body}>
          Headcount stays flat, design tooling spend rises by 8 percent and the contractor budget is frozen until
          November.
        </p>
      </article>
    </Watermark>
    <Watermark lines={VIEWER_LINES} rotate={-18} gap={[72, 56]} fontSize={12} class={styles.frame}>
      <article class={styles.document}>
        <h3 class={styles.title}>Shared with the viewer's details</h3>
        <p class={styles.body}>Multi-line stamps identify who opened a shared document.</p>
      </article>
    </Watermark>
  </div>
);
