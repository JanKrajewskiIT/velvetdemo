import { createSignal, onCleanup, onMount } from 'solid-js';

import styles from './TypeRoleRow.module.css';
import type { TypeRole } from './typeRoles';

export interface TypeRoleRowProps {
  role: TypeRole;
}

export const TypeRoleRow = (props: TypeRoleRowProps) => {
  const [metrics, setMetrics] = createSignal('');
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
        {props.role.sample}
      </span>
      <span class={styles.meta}>
        <code class={styles.token}>{`--type-${props.role.role}`}</code>
        <span class={styles.metrics}>{metrics()}</span>
      </span>
    </li>
  );
};
