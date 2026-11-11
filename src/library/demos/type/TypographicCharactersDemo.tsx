import { useI18n } from '@jankrajewskiit/i18n';
import { For } from 'solid-js';

import styles from './TypographicCharactersDemo.module.css';

interface TypographicCharacter {
  glyph: string;
  name: string;
  codePoint: string;
  example: string;
}

export const TypographicCharactersDemo = () => {
  const { ts } = useI18n();

  const CHARACTERS: readonly TypographicCharacter[] = [
    {
      glyph: '–',
      name: ts('library.type.characters.enDash.name'),
      codePoint: 'U+2013',
      example: ts('library.type.characters.enDash.example'),
    },
    {
      glyph: '—',
      name: ts('library.type.characters.emDash.name'),
      codePoint: 'U+2014',
      example: ts('library.type.characters.emDash.example'),
    },
    {
      glyph: '−',
      name: ts('library.type.characters.minus.name'),
      codePoint: 'U+2212',
      example: ts('library.type.characters.minus.example'),
    },
    {
      glyph: '×',
      name: ts('library.type.characters.multiplication.name'),
      codePoint: 'U+00D7',
      example: ts('library.type.characters.multiplication.example'),
    },
    {
      glyph: '…',
      name: ts('library.type.characters.ellipsis.name'),
      codePoint: 'U+2026',
      example: ts('library.type.characters.ellipsis.example'),
    },
    {
      glyph: '“ ”',
      name: ts('library.type.characters.curlyQuotes.name'),
      codePoint: 'U+201C U+201D',
      example: ts('library.type.characters.curlyQuotes.example'),
    },
    {
      glyph: '’',
      name: ts('library.type.characters.apostrophe.name'),
      codePoint: 'U+2019',
      example: ts('library.type.characters.apostrophe.example'),
    },
    {
      glyph: '·',
      name: ts('library.type.characters.middleDot.name'),
      codePoint: 'U+00B7',
      example: ts('library.type.characters.middleDot.example'),
    },
  ];

  return (
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
};
