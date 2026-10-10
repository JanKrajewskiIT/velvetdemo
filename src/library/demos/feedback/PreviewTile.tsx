import type { JSX } from 'solid-js';

import { cx } from '../../../styles/cx';
import styles from './PreviewTile.module.css';

export interface PreviewTileProps {
  caption: string;
  class?: string;
  children: JSX.Element;
}

export const PreviewTile = (props: PreviewTileProps) => (
  <figure class={cx(styles.tile, props.class)}>
    <div class={styles.stage}>{props.children}</div>
    <figcaption class={styles.caption}>{props.caption}</figcaption>
  </figure>
);
