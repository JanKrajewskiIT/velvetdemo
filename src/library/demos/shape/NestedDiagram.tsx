import { createSignal, onMount } from 'solid-js';

import { formatPx, measureLength } from '../space/tokenValues';
import styles from './NestedDiagram.module.css';

export interface NestedDiagramProps {
  title: string;
  outerRadius: string;
  inset: string;
}

export const NestedDiagram = (props: NestedDiagramProps) => {
  const [formula, setFormula] = createSignal('');
  onMount(() => {
    const outer = formatPx(measureLength(`var(${props.outerRadius})`));
    const inset = formatPx(measureLength(`var(${props.inset})`));
    const inner = formatPx(measureLength(`calc(var(${props.outerRadius}) - var(${props.inset}))`));
    setFormula(`${outer} − ${inset} = ${inner}`);
  });

  return (
    <figure class={styles.figure}>
      <div
        class={styles.outer}
        style={{
          '--outer-radius': `var(${props.outerRadius})`,
          '--inset': `var(${props.inset})`,
          '--inner-radius': `calc(var(${props.outerRadius}) - var(${props.inset}))`,
        }}
        aria-hidden="true"
      >
        <span class={styles.inner} />
      </div>
      <figcaption class={styles.caption}>
        <span class={styles.title}>{props.title}</span>
        <code class={styles.code}>
          {props.outerRadius} − {props.inset}
        </code>
        <span class={styles.formula}>{formula()}</span>
      </figcaption>
    </figure>
  );
};
