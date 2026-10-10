import type { JSX } from 'solid-js';

import styles from './SectionHead.module.css';

export interface SectionHeadProps {
  overline: string;
  title: string;
  children: JSX.Element;
}

export const SectionHead = (props: SectionHeadProps) => (
  <div class={styles.head}>
    <div>
      <div class={styles.overline}>{props.overline}</div>
      <h2 class={styles.title}>{props.title}</h2>
    </div>
    <p>{props.children}</p>
  </div>
);
