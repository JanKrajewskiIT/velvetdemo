import { Glyph } from '@jankrajewskiit/ui';
import { createSignal, onMount } from 'solid-js';

import { formatPx, measureToken } from '../space/tokenValues';
import styles from './IconScaleRow.module.css';

export interface IconScaleRowProps {
  step: string;
  token: string;
  use: string;
}

export const IconScaleRow = (props: IconScaleRowProps) => {
  const [size, setSize] = createSignal('');
  onMount(() => setSize(formatPx(measureToken(props.token))));

  return (
    <li class={styles.row}>
      <span class={styles.stage}>
        <Glyph name="sliders" class={styles.glyph} style={{ '--glyph-size': `var(${props.token})` }} />
      </span>
      <span class={styles.step}>{props.step}</span>
      <code class={styles.token}>{props.token}</code>
      <span class={styles.size}>{size()}</span>
      <span class={styles.use}>{props.use}</span>
    </li>
  );
};
