import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './PolishDemo.module.css';

const ALPHABET = 'ĄĆĘŁŃÓŚŹŻ ąćęłńóśźż';
const PANGRAM = 'Pchnąć w tę łódź jeża lub ośm skrzyń fig.';

const FAMILIES = [
  { token: '--font-display', name: 'Space Grotesk', weight: '--font-weight-semibold' },
  { token: '--font-sans', name: 'Hanken Grotesk', weight: '--font-weight-regular' },
  { token: '--font-mono', name: 'JetBrains Mono', weight: '--font-weight-regular' },
] as const;

export const PolishDemo = () => (
  <div class={styles.demo} lang="pl">
    <ul class={styles.families}>
      <For each={FAMILIES}>
        {(family) => (
          <li class={styles.family} style={{ '--family': `var(${family.token})`, '--weight': `var(${family.weight})` }}>
            <span class={styles.name} lang="en">
              {family.name}
            </span>
            <span class={styles.alphabet}>{ALPHABET}</span>
            <span class={styles.pangram}>{PANGRAM}</span>
          </li>
        )}
      </For>
    </ul>
    <article class={styles.context}>
      <Text as="h4" variant="h3" class={styles.heading}>
        Ustawienia konta
      </Text>
      <Text as="p" variant="body" tone="secondary" class={styles.body}>
        Zmiany zapisują się automatycznie. Pola oznaczone gwiazdką są wymagane, a powiadomienia możesz wyłączyć w
        dowolnej chwili.
      </Text>
      <Text as="span" variant="caption" tone="tertiary">
        Ostatnia zmiana: dziś, 14:32 · zażółć gęślą jaźń
      </Text>
    </article>
  </div>
);
