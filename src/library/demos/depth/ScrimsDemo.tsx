import { useI18n } from '@jankrajewskiit/i18n';
import type { JSX } from 'solid-js';

import styles from './ScrimsDemo.module.css';

interface ScrimFrameProps {
  token: string;
  use: string;
  children: JSX.Element;
}

const ScrimFrame = (props: ScrimFrameProps) => (
  <figure class={styles.figure}>
    <div class={styles.frame} style={{ '--frame-scrim': `var(${props.token})` }}>
      <div class={styles.art} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div class={styles.scrim} aria-hidden="true" />
      <div class={styles.content}>{props.children}</div>
    </div>
    <figcaption class={styles.caption}>
      <code>{props.token}</code>
      <span>{props.use}</span>
    </figcaption>
  </figure>
);

export const ScrimsDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.grid}>
      <ScrimFrame token="--scrim-backdrop" use={ts('library.depth.scrims.backdrop')}>
        <div class={styles.dialog}>
          <span class={styles.dialogTitle}>{ts('library.depth.scrims.dialogTitle')}</span>
          <span class={styles.dialogLine} />
        </div>
      </ScrimFrame>
      <ScrimFrame token="--scrim-image" use={ts('library.depth.scrims.image')}>
        <p class={styles.imageCaption}>
          <strong>{ts('library.depth.scrims.imageTitle')}</strong>
          <span>{ts('library.depth.scrims.imageMeta')}</span>
        </p>
      </ScrimFrame>
      <ScrimFrame token="--scrim-media" use={ts('library.depth.scrims.media')}>
        <p class={styles.viewer}>{ts('library.depth.scrims.viewer')}</p>
      </ScrimFrame>
    </div>
  );
};
