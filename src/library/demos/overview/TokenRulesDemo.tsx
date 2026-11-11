import { useI18n } from '@jankrajewskiit/i18n';
import { Glyph } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { cx } from '../../../styles/cx';
import styles from './TokenRulesDemo.module.css';

interface TokenRule {
  area: string;
  read: string;
  never: string;
}

export const TokenRulesDemo = () => {
  const { ts } = useI18n();

  const rules: readonly TokenRule[] = [
    {
      area: ts('library.overview.rules.areas.colour'),
      read: '--fg-* · --bg-* · --border-* · --action-* · --status-* · comp tokens',
      never: '--velvet-700 · #hex · rgba()',
    },
    {
      area: ts('library.overview.rules.areas.type'),
      read: '--type-<role> · --type-<role>-size · -weight',
      never: '--font-size-* · --font-weight-* · 15px',
    },
    {
      area: ts('library.overview.rules.areas.motion'),
      read: '--motion-fast · -move · -enter · -spring',
      never: '--dur-* · --ease-* · 180ms',
    },
    {
      area: ts('library.overview.rules.areas.depth'),
      read: '--elevation-card · -popover · -dialog',
      never: '--shadow-* · raw box-shadow',
    },
    {
      area: ts('library.overview.rules.areas.space'),
      read: '--space-* on the 4px grid',
      never: '5px · 7px · 18px',
    },
    {
      area: ts('library.overview.rules.areas.boxSize'),
      read: '--control-height-* · --row-height-* · --hit-target-min',
      never: '28px · 36px · 52px',
    },
    {
      area: ts('library.overview.rules.areas.rings'),
      read: '--border-width · -thick · -accent',
      never: '1.5px · 0 0 0 4px',
    },
    {
      area: ts('library.overview.rules.areas.markup'),
      read: 'Button · Control · Field · Glyph · Tag · ListItem · IconTile',
      never: 'class="vui-btn" · <select> · <i class="vui-icon">',
    },
  ];

  return (
    <dl class={styles.rules}>
      <div class={styles.head} aria-hidden="true">
        <span />
        <span class={styles.read}>
          <Glyph name="check" size="xs" />
          {ts('library.overview.read')}
        </span>
        <span class={styles.never}>
          <Glyph name="x" size="xs" />
          {ts('library.overview.never')}
        </span>
      </div>
      <For each={rules}>
        {(rule) => (
          <div class={styles.row}>
            <dt class={styles.area}>{rule.area}</dt>
            <dd class={styles.cell}>
              <span class={styles.cellLabel}>{ts('library.overview.read')}</span>
              <code class={styles.code}>{rule.read}</code>
            </dd>
            <dd class={styles.cell}>
              <span class={styles.cellLabel}>{ts('library.overview.never')}</span>
              <code class={cx(styles.code, styles.struck)}>{rule.never}</code>
            </dd>
          </div>
        )}
      </For>
    </dl>
  );
};
