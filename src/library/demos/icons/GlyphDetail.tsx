import { CopyButton, Glyph } from '@jankrajewskiit/ui';

import styles from './GlyphDetail.module.css';

export interface GlyphDetailProps {
  name: string;
}

export const GlyphDetail = (props: GlyphDetailProps) => (
  <div class={styles.detail}>
    <span class={styles.preview}>
      <Glyph name={props.name} class={styles.glyph} />
    </span>
    <div class={styles.meta}>
      <code class={styles.name}>{props.name}</code>
      <code class={styles.snippet}>{`<Glyph name="${props.name}" />`}</code>
    </div>
    <CopyButton value={props.name} label="Copy name" />
  </div>
);
