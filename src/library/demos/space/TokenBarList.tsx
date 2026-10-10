import { createSignal, For, onMount } from 'solid-js';

import styles from './TokenBarList.module.css';
import { formatPx, measureToken, readTokenValue } from './tokenValues';

interface Measured {
  token: string;
  px: number;
  label: string;
}

export interface TokenBarListProps {
  tokens: readonly string[];
  /** Viewport width in px; marks the largest token that does not exceed it. */
  viewport?: number;
}

const measure = (token: string): Measured => {
  const px = measureToken(token);
  const raw = readTokenValue(token);
  return { token, px, label: raw.endsWith('ch') ? `${raw} ≈ ${formatPx(px)}` : formatPx(px) };
};

export const TokenBarList = (props: TokenBarListProps) => {
  const [rows, setRows] = createSignal<readonly Measured[]>([]);
  onMount(() => setRows(props.tokens.map(measure)));

  const maxPx = () => Math.max(1, ...rows().map((row) => row.px));
  const currentToken = (): string | undefined => {
    const viewport = props.viewport;
    if (viewport === undefined) return undefined;
    return rows()
      .filter((row) => row.px <= viewport)
      .at(-1)?.token;
  };

  return (
    <ul class={styles.list}>
      <For each={rows()}>
        {(row) => (
          <li class={styles.row} aria-current={row.token === currentToken() ? 'true' : undefined}>
            <code class={styles.token}>{row.token}</code>
            <span class={styles.track} aria-hidden="true">
              <span class={styles.bar} style={{ '--bar-ratio': `${row.px / maxPx()}` }} />
            </span>
            <span class={styles.value}>{row.label}</span>
          </li>
        )}
      </For>
    </ul>
  );
};
