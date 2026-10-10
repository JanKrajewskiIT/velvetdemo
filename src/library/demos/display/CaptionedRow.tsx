import { SectionLabel } from '@jankrajewskiit/ui';
import type { JSX } from 'solid-js';

import styles from './CaptionedRow.module.css';

export interface CaptionedRowProps {
  caption: string;
  children: JSX.Element;
}

export const CaptionedRow = (props: CaptionedRowProps) => (
  <div class={styles.row}>
    <SectionLabel>{props.caption}</SectionLabel>
    <div class={styles.items}>{props.children}</div>
  </div>
);
