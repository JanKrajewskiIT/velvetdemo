import { useI18n } from '@jankrajewskiit/i18n';
import { QRCode } from '@jankrajewskiit/ui';

import styles from './QrCodeDemo.module.css';

const LINK = 'https://example.com/velvet';
const SMALL_SIZE_PX = 96;
const LARGE_SIZE_PX = 160;

export const QrCodeDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <figure class={styles.figure}>
        <QRCode value={LINK} size={LARGE_SIZE_PX} label={ts('library.display.qr.standard')} />
        <figcaption class={styles.caption}>
          <span class={styles.label}>{ts('library.display.qr.levelM')}</span>
          <code class={styles.value}>{LINK}</code>
        </figcaption>
      </figure>
      <figure class={styles.figure}>
        <QRCode value={LINK} size={SMALL_SIZE_PX} level="H" margin={2} label={ts('library.display.qr.compact')} />
        <figcaption class={styles.caption}>
          <span class={styles.label}>{ts('library.display.qr.levelH')}</span>
          <code class={styles.value}>{LINK}</code>
        </figcaption>
      </figure>
      <figure class={styles.figure}>
        <QRCode value={LINK} size={SMALL_SIZE_PX} logo="sparkles" label={ts('library.display.qr.logo')} />
        <figcaption class={styles.caption}>
          <span class={styles.label}>{ts('library.display.qr.centreLogo')}</span>
          <code class={styles.value}>{LINK}</code>
        </figcaption>
      </figure>
    </div>
  );
};
