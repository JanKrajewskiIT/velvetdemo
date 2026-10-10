import { For } from 'solid-js';

import { RAMP_STEPS, TokenRamp } from '../color/TokenRamp';
import styles from './VelvetRampDemo.module.css';

const ROLES = [
  { step: '50', tokens: ['--bg-brand-subtle', '--bg-selected', '--action-soft'] },
  { step: '100', tokens: ['--action-soft-hover', '--bg-selected-hover'] },
  { step: '200', tokens: ['--selection-bg'] },
  { step: '600', tokens: ['--border-focus'] },
  { step: '700', tokens: ['--bg-brand', '--action-primary', '--fg-brand', '--fg-link', '--border-brand'] },
  { step: '800', tokens: ['--action-primary-hover'] },
  { step: '900', tokens: ['--action-primary-active', '--fg-link-hover'] },
] as const;

export const VelvetRampDemo = () => (
  <div class={styles.root}>
    <TokenRamp prefix="--velvet" steps={RAMP_STEPS} current="700" />
    <ul class={styles.roles}>
      <For each={ROLES}>
        {(role) => (
          <li class={styles.role}>
            <span class={styles.swatch} style={{ '--role-color': `var(--velvet-${role.step})` }} aria-hidden="true" />
            <div class={styles.text}>
              <span class={styles.step}>{role.step}</span>
              <span class={styles.tokens}>{role.tokens.join(' · ')}</span>
            </div>
          </li>
        )}
      </For>
    </ul>
  </div>
);
