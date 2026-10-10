import type { MarkerProps, Tone } from '@jankrajewskiit/ui';
import { Glyph, Grid, Marker, Rail, RailItem, SectionLabel, Stack, Text } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import styles from './StepsDemo.module.css';

interface Step {
  title: string;
  detail: string;
  appearance: NonNullable<MarkerProps['appearance']>;
  tone?: Tone;
  ring?: boolean;
  line?: 'done' | 'dashed';
  icon?: string;
  number?: string;
  dot?: boolean;
}

const PROGRESS: readonly Step[] = [
  {
    title: 'Ordered',
    detail: 'Confirmed 3 days ago',
    appearance: 'solid',
    tone: 'success',
    icon: 'check',
    line: 'done',
  },
  {
    title: 'Packed',
    detail: 'Left the warehouse 2 days ago',
    appearance: 'solid',
    tone: 'success',
    icon: 'check',
    line: 'done',
  },
  { title: 'Shipped', detail: 'With the courier', appearance: 'solid', ring: true, number: '3' },
  { title: 'Delivered', detail: 'Expected tomorrow', appearance: 'outline', number: '4', line: 'dashed' },
];

const EVENTS: readonly Step[] = [
  { title: 'Invoice sent', detail: '2 hours ago', appearance: 'soft', tone: 'info', icon: 'mail' },
  { title: 'Payment received', detail: '1 hour ago', appearance: 'soft', tone: 'success', icon: 'circle-check' },
  {
    title: 'Address needs review',
    detail: '40 minutes ago',
    appearance: 'soft',
    tone: 'warning',
    icon: 'triangle-alert',
  },
  { title: 'Note added', detail: 'Just now', appearance: 'soft', dot: true },
];

const StepItem = (props: { step: Step }) => (
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
        {props.step.title}
      </Text>
      <Text variant="caption" tone="tertiary" as="span">
        {props.step.detail}
      </Text>
    </div>
  </RailItem>
);

export const StepsDemo = () => (
  <Grid min={220} gap={5}>
    <Stack gap={2}>
      <SectionLabel>Marker and rail — steps</SectionLabel>
      <Rail aria-label="Order progress">
        <For each={PROGRESS}>{(step) => <StepItem step={step} />}</For>
      </Rail>
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Marker and rail — events</SectionLabel>
      <Rail aria-label="Activity" line={false}>
        <For each={EVENTS}>{(step) => <StepItem step={step} />}</For>
      </Rail>
    </Stack>
  </Grid>
);
