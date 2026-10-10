import type { JSX } from 'solid-js';

import styles from './LogoFigure.module.css';

export interface LogoFigureProps {
  caption: string;
  children: JSX.Element;
}

export const LogoFigure = (props: LogoFigureProps) => (
  <figure class={styles.figure}>
    <div class={styles.stage}>{props.children}</div>
    <figcaption class={styles.caption}>{props.caption}</figcaption>
  </figure>
);
