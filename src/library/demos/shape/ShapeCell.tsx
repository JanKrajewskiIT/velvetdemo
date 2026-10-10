import type { JSX } from 'solid-js';

import styles from './ShapeCell.module.css';

export interface ShapeCellProps {
  name: string;
  token: string;
  children: JSX.Element;
}

export const ShapeCell = (props: ShapeCellProps) => (
  <li class={styles.cell}>
    <div class={styles.stage}>{props.children}</div>
    <span class={styles.name}>{props.name}</span>
    <code class={styles.token}>{props.token}</code>
  </li>
);
