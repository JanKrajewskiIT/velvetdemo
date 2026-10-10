import { Glyph } from '@jankrajewskiit/ui';

import styles from './MediaBlock.module.css';

export interface MediaBlockProps {
  icon: string;
}

export const MediaBlock = (props: MediaBlockProps) => (
  <div class={styles.block} aria-hidden="true">
    <Glyph name={props.icon} size={32} />
  </div>
);
