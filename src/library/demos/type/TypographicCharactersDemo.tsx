import { For } from 'solid-js';

import styles from './TypographicCharactersDemo.module.css';

interface TypographicCharacter {
  glyph: string;
  name: string;
  codePoint: string;
  example: string;
}

const CHARACTERS: readonly TypographicCharacter[] = [
  { glyph: '–', name: 'En dash', codePoint: 'U+2013', example: 'Open 09:00–17:00' },
  { glyph: '—', name: 'Em dash', codePoint: 'U+2014', example: 'Saved — nothing to publish' },
  { glyph: '−', name: 'Minus', codePoint: 'U+2212', example: 'Change −12.4%' },
  { glyph: '×', name: 'Multiplication', codePoint: 'U+00D7', example: 'Canvas 1280 × 720' },
  { glyph: '…', name: 'Ellipsis', codePoint: 'U+2026', example: 'Searching…' },
  { glyph: '“ ”', name: 'Curly quotes', codePoint: 'U+201C U+201D', example: '“Release notes”' },
  { glyph: '’', name: 'Apostrophe', codePoint: 'U+2019', example: 'It’s saved' },
  { glyph: '·', name: 'Middle dot', codePoint: 'U+00B7', example: 'Draft · 12 slides' },
];

export const TypographicCharactersDemo = () => (
  <ul class={styles.grid}>
    <For each={CHARACTERS}>
      {(character) => (
        <li class={styles.cell}>
          <span class={styles.glyph} aria-hidden="true">
            {character.glyph}
          </span>
          <span class={styles.name}>{character.name}</span>
          <span class={styles.example}>{character.example}</span>
          <code class={styles.code}>{character.codePoint}</code>
        </li>
      )}
    </For>
  </ul>
);
