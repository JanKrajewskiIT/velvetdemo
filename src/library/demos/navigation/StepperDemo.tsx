import { Button, Stepper } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { STEPS } from './navigationData';
import styles from './StepperDemo.module.css';

const LAST_STEP = STEPS.length - 1;
const FAILED_STEP = 2;

export const StepperDemo = () => {
  const [current, setCurrent] = createSignal(1);

  return (
    <div class={styles.root}>
      <div class={styles.block}>
        <Stepper steps={STEPS} current={current()} onStepClick={setCurrent} linear={false} />
        <div class={styles.actions}>
          <Button variant="secondary" disabled={current() === 0} onClick={() => setCurrent(current() - 1)}>
            Back
          </Button>
          <Button disabled={current() === LAST_STEP} onClick={() => setCurrent(current() + 1)}>
            Next
          </Button>
        </div>
      </div>
      <div class={styles.block}>
        <p class={styles.caption}>Vertical, with a step that failed validation</p>
        <Stepper steps={STEPS.slice(0, 3)} current={FAILED_STEP} errorAt={FAILED_STEP} orientation="vertical" />
      </div>
    </div>
  );
};
