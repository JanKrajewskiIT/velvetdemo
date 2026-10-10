import { createSignal, For } from 'solid-js';

import styles from './StateWashesDemo.module.css';

interface WashBase {
  name: string;
  token: string;
  onColor?: boolean;
}

interface WashState {
  name: string;
  wash?: string;
  onColorWash?: string;
}

const BASES: readonly WashBase[] = [
  { name: 'raised', token: '--bg-raised' },
  { name: 'subtle', token: '--bg-subtle' },
  { name: 'sunken', token: '--bg-sunken' },
  { name: 'brand', token: '--bg-brand', onColor: true },
];

const STATES: readonly WashState[] = [
  { name: 'rest' },
  { name: 'hover', wash: '--bg-hover', onColorWash: '--on-color-hover' },
  { name: 'pressed', wash: '--bg-pressed', onColorWash: '--on-color-pressed' },
  { name: 'selected', wash: '--bg-selected', onColorWash: '--on-color-subtle' },
  { name: 'selected-hover', wash: '--bg-selected-hover' },
];

const washFor = (base: WashBase, state: WashState): string | undefined =>
  base.onColor ? state.onColorWash : state.wash;

const LiveWash = (props: { base: WashBase }) => {
  const [selected, setSelected] = createSignal(false);
  return (
    <button
      type="button"
      class={styles.live}
      data-on-color={props.base.onColor ? '' : undefined}
      style={{ '--live-base': `var(${props.base.token})` }}
      aria-pressed={selected()}
      onClick={() => setSelected((value) => !value)}
    >
      {props.base.token}
    </button>
  );
};

export const StateWashesDemo = () => (
  <div class={styles.root}>
    <table class={styles.matrix}>
      <caption class={styles.caption}>State washes over each background</caption>
      <thead>
        <tr>
          <td class={styles.corner} />
          <For each={BASES}>
            {(base) => (
              <th scope="col" class={styles.columnHead}>
                {base.name}
              </th>
            )}
          </For>
        </tr>
      </thead>
      <tbody>
        <For each={STATES}>
          {(state) => (
            <tr>
              <th scope="row" class={styles.rowHead}>
                <span>{state.name}</span>
                <code>{state.wash ?? 'no wash'}</code>
              </th>
              <For each={BASES}>
                {(base) => {
                  const wash = washFor(base, state);
                  return (
                    <td class={styles.slot}>
                      <div
                        class={styles.cell}
                        style={{
                          '--cell-base': `var(${base.token})`,
                          '--cell-wash': wash ? `var(${wash})` : 'transparent',
                        }}
                      />
                    </td>
                  );
                }}
              </For>
            </tr>
          )}
        </For>
      </tbody>
    </table>
    <p class={styles.note}>Brand fills swap the wash for the on-color set: hover, pressed and subtle.</p>
    <div class={styles.liveGroup}>
      <p class={styles.liveLabel}>Live. Hover, press, focus and click to select.</p>
      <div class={styles.liveGrid}>
        <For each={BASES}>{(base) => <LiveWash base={base} />}</For>
      </div>
    </div>
  </div>
);
