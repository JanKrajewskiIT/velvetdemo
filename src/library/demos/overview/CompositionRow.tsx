import type { JSX } from 'solid-js';

import styles from './CompositionRow.module.css';

export interface CompositionRowProps {
  need: string;
  compose: string;
  avoid: string;
  children: JSX.Element;
}

export const CompositionRow = (props: CompositionRowProps) => (
  <li class={styles.item}>
    <div class={styles.row}>
      <div class={styles.live}>{props.children}</div>
      <div class={styles.copy}>
        <span class={styles.need}>{props.need}</span>
        <code class={styles.compose}>{props.compose}</code>
        <span class={styles.avoid}>
          Never <s>{props.avoid}</s>
        </span>
      </div>
    </div>
  </li>
);
