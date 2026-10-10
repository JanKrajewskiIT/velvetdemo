import { Button, type ButtonVariant } from '@jankrajewskiit/ui';
import { For, type JSX } from 'solid-js';

import styles from './ActionStatesDemo.module.css';

interface ActionVariant {
  name: ButtonVariant;
  fg: string;
  rest?: string;
  hover: string;
  pressed: string;
  border?: { rest: string; hover: string };
}

const STATES = ['rest', 'hover', 'pressed', 'disabled', 'focus'] as const;
type ActionState = (typeof STATES)[number];

const VARIANTS: readonly ActionVariant[] = [
  {
    name: 'primary',
    fg: '--action-primary-fg',
    rest: '--action-primary',
    hover: '--action-primary-hover',
    pressed: '--action-primary-active',
  },
  {
    name: 'soft',
    fg: '--action-soft-fg',
    rest: '--action-soft',
    hover: '--action-soft-hover',
    pressed: '--action-soft-hover',
  },
  {
    name: 'secondary',
    fg: '--button-secondary-fg',
    rest: '--button-secondary-bg',
    hover: '--button-secondary-bg-hover',
    pressed: '--bg-sunken',
    border: { rest: '--button-secondary-border', hover: '--button-secondary-border-hover' },
  },
  {
    name: 'ghost',
    fg: '--button-ghost-fg',
    hover: '--button-ghost-bg-hover',
    pressed: '--button-ghost-bg-active',
  },
  {
    name: 'danger',
    fg: '--action-danger-fg',
    rest: '--action-danger',
    hover: '--action-danger-hover',
    pressed: '--action-danger-hover',
  },
];

const fillToken = (variant: ActionVariant, state: ActionState): string | undefined => {
  if (state === 'hover') return variant.hover;
  if (state === 'pressed') return variant.pressed;
  return variant.rest;
};

const cellVars = (variant: ActionVariant, state: ActionState): JSX.CSSProperties => {
  const lifted = state === 'hover' || state === 'pressed';
  const fill = fillToken(variant, state);
  const border = lifted ? variant.border?.hover : variant.border?.rest;
  return {
    '--cell-fg': `var(${variant.fg})`,
    '--cell-bg': fill ? `var(${fill})` : 'transparent',
    '--cell-border': border ? `var(${border})` : 'transparent',
  };
};

export const ActionStatesDemo = () => (
  <div class={styles.root}>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- keyboard users scroll the wide matrix */}
    <div class={styles.scroll} role="region" aria-label="Action states" tabindex="0">
      <table class={styles.matrix}>
        <thead>
          <tr>
            <th scope="col" class={styles.corner}>
              Variant
            </th>
            <For each={STATES}>
              {(state) => (
                <th scope="col" class={styles.columnHead}>
                  {state}
                </th>
              )}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={VARIANTS}>
            {(variant) => (
              <tr>
                <th scope="row" class={styles.rowHead}>
                  <span>{variant.name}</span>
                  <code>{variant.rest ?? variant.fg}</code>
                </th>
                <For each={STATES}>
                  {(state) => (
                    <td>
                      <span
                        class={styles.cell}
                        data-state={state}
                        style={cellVars(variant, state)}
                        role="img"
                        aria-label={`${variant.name} button, ${state}`}
                      >
                        Save
                      </span>
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
    <div class={styles.live}>
      <p class={styles.liveLabel}>Live</p>
      <div class={styles.liveRow}>
        <For each={VARIANTS}>
          {(variant) => (
            <Button size="sm" variant={variant.name}>
              Save
            </Button>
          )}
        </For>
        <Button size="sm" variant="secondary" loading>
          Saving
        </Button>
        <Button size="sm" disabled>
          Disabled
        </Button>
      </div>
    </div>
  </div>
);
