import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { cx } from '../../../styles/cx';
import styles from './TokenRamp.module.css';

export const RAMP_STEPS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;

export interface TokenRampProps {
  prefix: string;
  steps: readonly string[];
  current?: string;
}

export const TokenRamp = (props: TokenRampProps) => (
  <div class={styles.ramp}>
    <Text variant="caption" tone="tertiary" mono>
      {props.prefix}-*
    </Text>
    <ol class={styles.steps}>
      <For each={props.steps}>
        {(step) => (
          <li class={cx(styles.step, step === props.current && styles.current)}>
            <span class={styles.swatch} style={{ '--ramp-color': `var(${props.prefix}-${step})` }} aria-hidden="true" />
            <span class={styles.label}>{step}</span>
          </li>
        )}
      </For>
    </ol>
  </div>
);
