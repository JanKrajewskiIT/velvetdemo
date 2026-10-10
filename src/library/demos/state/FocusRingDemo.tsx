import { Button, Checkbox, Input } from '@jankrajewskiit/ui';
import type { JSX } from 'solid-js';

import styles from './FocusRingDemo.module.css';

interface RingFigureProps {
  token: string;
  use: string;
  children: JSX.Element;
}

const RingFigure = (props: RingFigureProps) => (
  <figure class={styles.figure}>
    <div class={styles.stage} aria-hidden="true">
      {props.children}
    </div>
    <figcaption class={styles.caption}>
      <code>{props.token}</code>
      <span>{props.use}</span>
    </figcaption>
  </figure>
);

export const FocusRingDemo = () => (
  <div class={styles.root}>
    <div class={styles.grid}>
      <RingFigure token="--focus-ring" use="Buttons, fields and cards">
        <span class={styles.button}>Save</span>
      </RingFigure>
      <RingFigure token="--focus-ring-danger" use="Invalid fields">
        <span class={styles.field} />
      </RingFigure>
      <RingFigure token="--focus-ring-inset" use="Rows inside clipped containers">
        <span class={styles.list}>
          <span class={styles.row}>Inbox</span>
          <span class={styles.focusedRow}>Archive</span>
        </span>
      </RingFigure>
      <RingFigure token="--focus-outline" use="Swatches, media and free-form targets">
        <span class={styles.free} />
      </RingFigure>
    </div>
    <p class={styles.note}>
      Forced-colors mode paints no box-shadow, so a ring disappears there. A custom control that must stay visible adds{' '}
      <code>--focus-outline</code>.
    </p>
    <div class={styles.live}>
      <p class={styles.liveLabel}>Live. Press Tab to move through.</p>
      <div class={styles.liveRow}>
        <Button size="sm">Save</Button>
        <Button size="sm" variant="secondary">
          Cancel
        </Button>
        <Checkbox label="Subscribe" />
        <div class={styles.input}>
          <Input size="sm" aria-label="Search" placeholder="Search" />
        </div>
      </div>
    </div>
  </div>
);
