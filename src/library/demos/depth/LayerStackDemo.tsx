import styles from './LayerStackDemo.module.css';

export const LayerStackDemo = () => (
  <div class={styles.layers}>
    <div class={styles.page}>
      <p class={styles.caption}>
        <code>--bg-page</code>
        <span>flat</span>
      </p>
      <div class={styles.subtle}>
        <p class={styles.caption}>
          <code>--bg-subtle</code>
          <span>flat, hairline</span>
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
    <p class={styles.note}>
      Light surfaces share white and separate by elevation. Dark surfaces get lighter with every step.
    </p>
  </div>
);
