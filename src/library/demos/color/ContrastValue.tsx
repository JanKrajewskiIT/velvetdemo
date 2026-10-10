import { Badge, type StatusTone } from '@jankrajewskiit/ui';
import { createSignal, mergeProps, onCleanup, onMount, Show } from 'solid-js';

import { type ContrastLevel, contrastLevel, formatRatio } from './contrast';
import styles from './ContrastValue.module.css';
import { measureContrast } from './resolveColor';

const LEVEL_TONE: Record<ContrastLevel, StatusTone> = {
  AAA: 'success',
  AA: 'success',
  'AA large': 'warning',
  Fail: 'danger',
};

export interface ContrastValueProps {
  foreground: string;
  background: string;
  over?: string;
}

export const ContrastValue = (props: ContrastValueProps) => {
  const merged = mergeProps({ over: '--bg-raised' } satisfies Partial<ContrastValueProps>, props);
  const [ratio, setRatio] = createSignal<number>();
  let probe: HTMLSpanElement | undefined;

  const measure = () => {
    if (probe) setRatio(measureContrast(probe, merged.foreground, merged.background, merged.over));
  };

  onMount(() => {
    measure();
    const observer = new MutationObserver(measure);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    onCleanup(() => observer.disconnect());
  });

  return (
    <span
      ref={(element) => {
        probe = element;
      }}
      class={styles.value}
    >
      <Show when={ratio()} fallback="—">
        {(value) => (
          <>
            <span class={styles.ratio}>{formatRatio(value())}</span>
            <Badge size="sm" tone={LEVEL_TONE[contrastLevel(value())]}>
              {contrastLevel(value())}
            </Badge>
          </>
        )}
      </Show>
    </span>
  );
};
