import { useI18n } from '@jankrajewskiit/i18n';
import { createSignal, onCleanup, onMount } from 'solid-js';

import styles from './TypeRoleRow.module.css';
import type { TypeRole, TypeSampleKey } from './typeRoles';

const SAMPLE_KEYS = {
  display: 'library.type.text.samples.display',
  heading: 'library.type.text.samples.heading',
  title: 'library.type.text.samples.title',
  body: 'library.type.text.samples.body',
  label: 'library.type.text.samples.label',
  caption: 'library.type.text.samples.caption',
  overline: 'library.type.text.samples.overline',
  section: 'library.type.text.samples.section',
  button: 'library.type.text.samples.button',
} as const satisfies Record<TypeSampleKey, string>;

export interface TypeRoleRowProps {
  role: TypeRole;
}

export const TypeRoleRow = (props: TypeRoleRowProps) => {
  const { ts } = useI18n();
  const [metrics, setMetrics] = createSignal('');
  const sampleText = () => ('sampleKey' in props.role ? ts(SAMPLE_KEYS[props.role.sampleKey]) : props.role.sample);
  let sample: HTMLSpanElement | undefined;

  const measure = () => {
    if (!sample) return;
    const computed = getComputedStyle(sample);
    setMetrics(`${Math.round(Number.parseFloat(computed.fontSize))} px · ${computed.fontWeight}`);
  };

  onMount(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (sample) observer.observe(sample);
    onCleanup(() => observer.disconnect());
  });

  return (
    <li class={styles.row}>
      <span
        ref={(element) => {
          sample = element;
        }}
        class={styles.sample}
        data-caps={props.role.caps ? '' : undefined}
        style={{
          '--role-font': `var(--type-${props.role.role})`,
          '--role-tracking': `var(--type-${props.role.role}-tracking)`,
        }}
      >
        {sampleText()}
      </span>
      <span class={styles.meta}>
        <code class={styles.token}>{`--type-${props.role.role}`}</code>
        <span class={styles.metrics}>{metrics()}</span>
      </span>
    </li>
  );
};
