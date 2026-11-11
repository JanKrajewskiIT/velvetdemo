import { useI18n } from '@jankrajewskiit/i18n';
import type { MarkerProps, Tone } from '@jankrajewskiit/ui';
import { Glyph, Grid, Marker, Rail, RailItem, SectionLabel, Stack, Text } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import styles from './StepsDemo.module.css';

type StepKey =
  | 'library.atoms.steps.ordered'
  | 'library.atoms.steps.orderedDetail'
  | 'library.atoms.steps.packed'
  | 'library.atoms.steps.packedDetail'
  | 'library.atoms.steps.shipped'
  | 'library.atoms.steps.shippedDetail'
  | 'library.atoms.steps.delivered'
  | 'library.atoms.steps.deliveredDetail'
  | 'library.atoms.steps.invoiceSent'
  | 'library.atoms.steps.invoiceSentDetail'
  | 'library.atoms.steps.paymentReceived'
  | 'library.atoms.steps.paymentReceivedDetail'
  | 'library.atoms.steps.addressReview'
  | 'library.atoms.steps.addressReviewDetail'
  | 'library.atoms.steps.noteAdded'
  | 'library.atoms.steps.noteAddedDetail';

interface StepSpec {
  titleKey: StepKey;
  detailKey: StepKey;
  appearance: NonNullable<MarkerProps['appearance']>;
  tone?: Tone;
  ring?: boolean;
  line?: 'done' | 'dashed';
  icon?: string;
  number?: string;
  dot?: boolean;
}

const PROGRESS: readonly StepSpec[] = [
  {
    titleKey: 'library.atoms.steps.ordered',
    detailKey: 'library.atoms.steps.orderedDetail',
    appearance: 'solid',
    tone: 'success',
    icon: 'check',
    line: 'done',
  },
  {
    titleKey: 'library.atoms.steps.packed',
    detailKey: 'library.atoms.steps.packedDetail',
    appearance: 'solid',
    tone: 'success',
    icon: 'check',
    line: 'done',
  },
  {
    titleKey: 'library.atoms.steps.shipped',
    detailKey: 'library.atoms.steps.shippedDetail',
    appearance: 'solid',
    ring: true,
    number: '3',
  },
  {
    titleKey: 'library.atoms.steps.delivered',
    detailKey: 'library.atoms.steps.deliveredDetail',
    appearance: 'outline',
    number: '4',
    line: 'dashed',
  },
];

const EVENTS: readonly StepSpec[] = [
  {
    titleKey: 'library.atoms.steps.invoiceSent',
    detailKey: 'library.atoms.steps.invoiceSentDetail',
    appearance: 'soft',
    tone: 'info',
    icon: 'mail',
  },
  {
    titleKey: 'library.atoms.steps.paymentReceived',
    detailKey: 'library.atoms.steps.paymentReceivedDetail',
    appearance: 'soft',
    tone: 'success',
    icon: 'circle-check',
  },
  {
    titleKey: 'library.atoms.steps.addressReview',
    detailKey: 'library.atoms.steps.addressReviewDetail',
    appearance: 'soft',
    tone: 'warning',
    icon: 'triangle-alert',
  },
  {
    titleKey: 'library.atoms.steps.noteAdded',
    detailKey: 'library.atoms.steps.noteAddedDetail',
    appearance: 'soft',
    dot: true,
  },
];

const StepItem = (props: { step: StepSpec }) => {
  const { ts } = useI18n();

  return (
    <RailItem state={props.step.line} class={styles.step}>
      <Marker
        appearance={props.step.appearance}
        tone={props.step.tone}
        ring={props.step.ring}
        dot={props.step.dot}
        gap
        aria-hidden="true"
      >
        <Show when={props.step.icon} fallback={props.step.number}>
          {(icon) => <Glyph name={icon()} />}
        </Show>
      </Marker>
      <div class={styles.body}>
        <Text variant="label" as="span">
          {ts(props.step.titleKey)}
        </Text>
        <Text variant="caption" tone="tertiary" as="span">
          {ts(props.step.detailKey)}
        </Text>
      </div>
    </RailItem>
  );
};

export const StepsDemo = () => {
  const { ts } = useI18n();

  return (
    <Grid min={220} gap={5}>
      <Stack gap={2}>
        <SectionLabel>{ts('library.atoms.steps.progressHeading')}</SectionLabel>
        <Rail aria-label={ts('library.atoms.steps.orderProgress')}>
          <For each={PROGRESS}>{(step) => <StepItem step={step} />}</For>
        </Rail>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>{ts('library.atoms.steps.eventsHeading')}</SectionLabel>
        <Rail aria-label={ts('library.atoms.steps.activity')} line={false}>
          <For each={EVENTS}>{(step) => <StepItem step={step} />}</For>
        </Rail>
      </Stack>
    </Grid>
  );
};
