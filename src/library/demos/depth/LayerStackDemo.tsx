import { useI18n } from '@jankrajewskiit/i18n';

import styles from './LayerStackDemo.module.css';

export const LayerStackDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.layers}>
      <div class={styles.page}>
        <p class={styles.caption}>
          <code>--bg-page</code>
          <span>{ts('library.depth.layers.flat')}</span>
        </p>
        <div class={styles.subtle}>
          <p class={styles.caption}>
            <code>--bg-subtle</code>
            <span>{ts('library.depth.layers.flatHairline')}</span>
          </p>
          <div class={styles.raised}>
            <p class={styles.caption}>
              <code>--bg-raised</code>
              <span>--elevation-card</span>
            </p>
            <div class={styles.overlay}>
              <p class={styles.caption}>
                <code>--bg-overlay</code>
                <span>--elevation-popover</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class={styles.note}>{ts('library.depth.layers.note')}</p>
    </div>
  );
};
