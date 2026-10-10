import type { JSX } from 'solid-js';
import { Show } from 'solid-js';

import { cx } from '../../styles/cx';
import styles from './FoundationTile.module.css';

export interface FoundationTileProps {
  title: string;
  /** Columns of the 12-column foundations grid. */
  span: 5 | 6 | 7 | 12;
  meta?: string;
  children: JSX.Element;
}

const SPAN_CLASS = { 5: styles.span5, 6: styles.span6, 7: styles.span7, 12: styles.span12 } as const;

export const FoundationTile = (props: FoundationTileProps) => (
  <section class={cx(styles.tile, SPAN_CLASS[props.span])}>
    <header class={styles.header}>
      <h3>{props.title}</h3>
      <Show when={props.meta}>{(meta) => <span class={styles.meta}>{meta()}</span>}</Show>
    </header>
    {props.children}
  </section>
);
