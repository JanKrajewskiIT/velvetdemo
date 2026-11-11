import { useI18n } from '@jankrajewskiit/i18n';
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

export const FocusRingDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <div class={styles.grid}>
        <RingFigure token="--focus-ring" use={ts('library.state.focus.buttons')}>
          <span class={styles.button}>{ts('library.state.focus.save')}</span>
        </RingFigure>
        <RingFigure token="--focus-ring-danger" use={ts('library.state.focus.invalidFields')}>
          <span class={styles.field} />
        </RingFigure>
        <RingFigure token="--focus-ring-inset" use={ts('library.state.focus.clippedRows')}>
          <span class={styles.list}>
            <span class={styles.row}>{ts('library.state.focus.inbox')}</span>
            <span class={styles.focusedRow}>{ts('library.state.focus.archive')}</span>
          </span>
        </RingFigure>
        <RingFigure token="--focus-outline" use={ts('library.state.focus.freeForm')}>
          <span class={styles.free} />
        </RingFigure>
      </div>
      <p class={styles.note}>
        {ts('library.state.focus.forcedColors')} <code>--focus-outline</code>.
      </p>
      <div class={styles.live}>
        <p class={styles.liveLabel}>{ts('library.state.focus.liveLabel')}</p>
        <div class={styles.liveRow}>
          <Button size="sm">{ts('library.state.focus.save')}</Button>
          <Button size="sm" variant="secondary">
            {ts('library.state.focus.cancel')}
          </Button>
          <Checkbox label={ts('library.state.focus.subscribe')} />
          <div class={styles.input}>
            <Input
              size="sm"
              aria-label={ts('library.state.focus.search')}
              placeholder={ts('library.state.focus.search')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
