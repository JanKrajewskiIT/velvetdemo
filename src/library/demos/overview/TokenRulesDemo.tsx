import { Glyph } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { cx } from '../../../styles/cx';
import styles from './TokenRulesDemo.module.css';

interface TokenRule {
  area: string;
  read: string;
  never: string;
}

const RULES: readonly TokenRule[] = [
  {
    area: 'Colour',
    read: '--fg-* · --bg-* · --border-* · --action-* · --status-* · comp tokens',
    never: '--velvet-700 · #hex · rgba()',
  },
  {
    area: 'Type',
    read: '--type-<role> · --type-<role>-size · -weight',
    never: '--font-size-* · --font-weight-* · 15px',
  },
  { area: 'Motion', read: '--motion-fast · -move · -enter · -spring', never: '--dur-* · --ease-* · 180ms' },
  { area: 'Depth', read: '--elevation-card · -popover · -dialog', never: '--shadow-* · raw box-shadow' },
  { area: 'Space', read: '--space-* on the 4px grid', never: '5px · 7px · 18px' },
  {
    area: 'Box size',
    read: '--control-height-* · --row-height-* · --hit-target-min',
    never: '28px · 36px · 52px',
  },
  { area: 'Rings', read: '--border-width · -thick · -accent', never: '1.5px · 0 0 0 4px' },
  {
    area: 'Markup',
    read: 'Button · Control · Field · Glyph · Tag · ListItem · IconTile',
    never: 'class="vui-btn" · <select> · <i class="vui-icon">',
  },
];

export const TokenRulesDemo = () => (
  <dl class={styles.rules}>
    <div class={styles.head} aria-hidden="true">
      <span />
      <span class={styles.read}>
        <Glyph name="check" size="xs" />
        Read
      </span>
      <span class={styles.never}>
        <Glyph name="x" size="xs" />
        Never
      </span>
    </div>
    <For each={RULES}>
      {(rule) => (
        <div class={styles.row}>
          <dt class={styles.area}>{rule.area}</dt>
          <dd class={styles.cell}>
            <span class={styles.cellLabel}>Read</span>
            <code class={styles.code}>{rule.read}</code>
          </dd>
          <dd class={styles.cell}>
            <span class={styles.cellLabel}>Never</span>
            <code class={cx(styles.code, styles.struck)}>{rule.never}</code>
          </dd>
        </div>
      )}
    </For>
  </dl>
);
