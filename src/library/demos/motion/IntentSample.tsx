import { useI18n } from '@jankrajewskiit/i18n';
import { Glyph } from '@jankrajewskiit/ui';
import { Show } from 'solid-js';

import styles from './IntentSample.module.css';
import type { IntentKind, MotionIntent } from './motionIntents';

interface IntentSampleProps {
  intent: MotionIntent;
  playing: boolean;
  still: boolean;
}

const ICONS: Partial<Record<IntentKind, string>> = {
  chevron: 'chevron-down',
  bounce: 'plus',
};

const NESTED_PART: readonly IntentKind[] = ['switch', 'slide', 'travel', 'progress'];

export const IntentSample = (props: IntentSampleProps) => {
  const { ts } = useI18n();
  const LABELS: Partial<Record<IntentKind, string>> = {
    press: ts('library.motion.sample.press'),
    colour: ts('library.motion.sample.hover'),
    select: ts('library.motion.sample.select'),
    pop: '3',
  };
  return (
    <div
      class={styles.sample}
      data-kind={props.intent.kind}
      data-playing={props.playing ? '' : undefined}
      data-still={props.still ? '' : undefined}
      style={{ '--intent': `var(${props.intent.token})` }}
      aria-hidden="true"
    >
      <Show when={ICONS[props.intent.kind]}>{(name) => <Glyph name={name()} />}</Show>
      {LABELS[props.intent.kind]}
      <Show when={NESTED_PART.includes(props.intent.kind)}>
        <span class={styles.part} />
      </Show>
    </div>
  );
};
