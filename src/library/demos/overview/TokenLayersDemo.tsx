import { Button, FieldLabel, Glyph, Surface, Text } from '@jankrajewskiit/ui';
import { For, type JSX } from 'solid-js';

import styles from './TokenLayersDemo.module.css';

type PreviewKind = 'color' | 'ink' | 'shadow';

interface TokenStep {
  token: string;
  kind: PreviewKind;
}

interface LayerPath {
  label: string;
  steps: readonly [TokenStep, TokenStep, TokenStep];
  uiName: string;
  ui: () => JSX.Element;
}

const LAYERS = ['ref', 'sys', 'comp', 'ui'] as const;

const PATHS: readonly LayerPath[] = [
  {
    label: 'Action colour',
    steps: [
      { token: '--velvet-700', kind: 'color' },
      { token: '--action-primary', kind: 'color' },
      { token: '--button-primary-bg', kind: 'color' },
    ],
    uiName: '.vui-btn--primary',
    ui: () => <Button size="sm">Save changes</Button>,
  },
  {
    label: 'Text colour',
    steps: [
      { token: '--neutral-900', kind: 'ink' },
      { token: '--fg-primary', kind: 'ink' },
      { token: '--field-label-fg', kind: 'ink' },
    ],
    uiName: '.vui-label',
    ui: () => <FieldLabel as="span">Email address</FieldLabel>,
  },
  {
    label: 'Depth',
    steps: [
      { token: '--shadow-sm', kind: 'shadow' },
      { token: '--elevation-card', kind: 'shadow' },
      { token: '--surface-shadow', kind: 'shadow' },
    ],
    uiName: '.vui-surface',
    ui: () => (
      <Surface padding="sm">
        <Text variant="caption" tone="secondary">
          Surface
        </Text>
      </Surface>
    ),
  },
];

export const TokenLayersDemo = () => (
  <div class={styles.demo}>
    <ol class={styles.paths}>
      <For each={PATHS}>
        {(path) => (
          <li class={styles.path}>
            <Text variant="label">{path.label}</Text>
            <ol class={styles.steps}>
              <For each={path.steps}>
                {(step, index) => (
                  <li class={styles.step}>
                    <span class={styles.layer}>{LAYERS[index()]}</span>
                    <span class={styles.row}>
                      <span
                        class={styles.preview}
                        data-kind={step.kind}
                        style={{ '--preview': `var(${step.token})` }}
                      />
                      <Glyph name="arrow-right" class={styles.arrow} />
                    </span>
                    <code class={styles.token}>{step.token}</code>
                  </li>
                )}
              </For>
              <li class={styles.step}>
                <span class={styles.layer}>{LAYERS[3]}</span>
                <span class={styles.ui}>{path.ui()}</span>
                <code class={styles.token}>{path.uiName}</code>
              </li>
            </ol>
          </li>
        )}
      </For>
    </ol>
    <Text variant="caption" tone="secondary">
      Dark mode repoints --action-primary at --velvet-600; the comp token and the class above it do not change.
    </Text>
  </div>
);
