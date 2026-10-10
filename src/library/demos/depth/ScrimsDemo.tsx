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

export const ScrimsDemo = () => (
  <div class={styles.grid}>
    <ScrimFrame token="--scrim-backdrop" use="Behind dialogs and drawers">
      <div class={styles.dialog}>
        <span class={styles.dialogTitle}>Discard draft?</span>
        <span class={styles.dialogLine} />
      </div>
    </ScrimFrame>
    <ScrimFrame token="--scrim-image" use="Under text on imagery">
      <p class={styles.imageCaption}>
        <strong>Harbour at dusk</strong>
        <span>Photograph, 2 min read</span>
      </p>
    </ScrimFrame>
    <ScrimFrame token="--scrim-media" use="Full-bleed media viewer">
      <p class={styles.viewer}>Viewer</p>
    </ScrimFrame>
  </div>
);
