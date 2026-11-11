import { useI18n } from '@jankrajewskiit/i18n';
import { createSignal, For } from 'solid-js';

import styles from './StateWashesDemo.module.css';

const BASE_LABEL_KEYS = {
  raised: 'library.state.washes.raised',
  subtle: 'library.state.washes.subtle',
  sunken: 'library.state.washes.sunken',
  brand: 'library.state.washes.brand',
} as const;

const STATE_LABEL_KEYS = {
  rest: 'library.state.washes.rest',
  hover: 'library.state.washes.hover',
  pressed: 'library.state.washes.pressed',
  selected: 'library.state.washes.selected',
  'selected-hover': 'library.state.washes.selectedHover',
} as const;

interface WashBase {
  name: keyof typeof BASE_LABEL_KEYS;
  token: string;
  onColor?: boolean;
}

interface WashState {
  name: keyof typeof STATE_LABEL_KEYS;
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

export const StateWashesDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <table class={styles.matrix}>
        <caption class={styles.caption}>{ts('library.state.washes.caption')}</caption>
        <thead>
          <tr>
            <td class={styles.corner} />
            <For each={BASES}>
              {(base) => (
                <th scope="col" class={styles.columnHead}>
                  {ts(BASE_LABEL_KEYS[base.name])}
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
                  <span>{ts(STATE_LABEL_KEYS[state.name])}</span>
                  <code>{state.wash ?? ts('library.state.washes.noWash')}</code>
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
      <p class={styles.note}>{ts('library.state.washes.note')}</p>
      <div class={styles.liveGroup}>
        <p class={styles.liveLabel}>{ts('library.state.washes.liveLabel')}</p>
        <div class={styles.liveGrid}>
          <For each={BASES}>{(base) => <LiveWash base={base} />}</For>
        </div>
      </div>
    </div>
  );
};
