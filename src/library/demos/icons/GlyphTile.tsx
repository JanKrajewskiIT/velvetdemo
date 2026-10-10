import { Glyph } from '@jankrajewskiit/ui';

import styles from './GlyphTile.module.css';

export interface GlyphTileProps {
  name: string;
  selected: boolean;
  onSelect: (name: string) => void;
}

export const GlyphTile = (props: GlyphTileProps) => (
  <button type="button" class={styles.tile} aria-pressed={props.selected} onClick={() => props.onSelect(props.name)}>
    <Glyph name={props.name} class={styles.glyph} />
    <span class={styles.name}>{props.name}</span>
  </button>
);
