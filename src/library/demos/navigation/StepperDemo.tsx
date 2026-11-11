import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Stepper } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { STEPS } from './navigationData';
import styles from './StepperDemo.module.css';

const LAST_STEP = STEPS.length - 1;
const FAILED_STEP = 2;

export const StepperDemo = () => {
  const { ts } = useI18n();
  const [current, setCurrent] = createSignal(1);

  return (
    <div class={styles.root}>
      <div class={styles.block}>
        <Stepper steps={STEPS} current={current()} onStepClick={setCurrent} linear={false} />
        <div class={styles.actions}>
          <Button variant="secondary" disabled={current() === 0} onClick={() => setCurrent(current() - 1)}>
            {ts('library.navigation.demos.stepper.back')}
          </Button>
          <Button disabled={current() === LAST_STEP} onClick={() => setCurrent(current() + 1)}>
            {ts('library.navigation.demos.stepper.next')}
          </Button>
        </div>
      </div>
      <div class={styles.block}>
        <p class={styles.caption}>{ts('library.navigation.demos.stepper.caption')}</p>
        <Stepper steps={STEPS.slice(0, 3)} current={FAILED_STEP} errorAt={FAILED_STEP} orientation="vertical" />
      </div>
    </div>
  );
};
