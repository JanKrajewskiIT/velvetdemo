import { QRCode } from '@jankrajewskiit/ui';

import styles from './QrCodeDemo.module.css';

const LINK = 'https://example.com/velvet';
const SMALL_SIZE_PX = 96;
const LARGE_SIZE_PX = 160;

export const QrCodeDemo = () => (
  <div class={styles.root}>
    <figure class={styles.figure}>
      <QRCode value={LINK} size={LARGE_SIZE_PX} label="QR code for the Velvet page" />
      <figcaption class={styles.caption}>
        <span class={styles.label}>Default level M</span>
        <code class={styles.value}>{LINK}</code>
      </figcaption>
    </figure>
    <figure class={styles.figure}>
      <QRCode value={LINK} size={SMALL_SIZE_PX} level="H" margin={2} label="Compact QR code for the Velvet page" />
      <figcaption class={styles.caption}>
        <span class={styles.label}>Compact, level H</span>
        <code class={styles.value}>{LINK}</code>
      </figcaption>
    </figure>
    <figure class={styles.figure}>
      <QRCode value={LINK} size={SMALL_SIZE_PX} logo="sparkles" label="QR code with a logo for the Velvet page" />
      <figcaption class={styles.caption}>
        <span class={styles.label}>With a centre logo</span>
        <code class={styles.value}>{LINK}</code>
      </figcaption>
    </figure>
  </div>
);
