import type { colorEn } from '../../i18n/library/color';
import { BackgroundsDemo } from '../demos/color/BackgroundsDemo';
import { CategoricalDemo } from '../demos/color/CategoricalDemo';
import { DataVizDemo } from '../demos/color/DataVizDemo';
import { OnColorDemo } from '../demos/color/OnColorDemo';
import { StatusRolesDemo } from '../demos/color/StatusRolesDemo';
import { TextBorderRolesDemo } from '../demos/color/TextBorderRolesDemo';
import { RAMP_STEPS, TokenRamp } from '../demos/color/TokenRamp';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './color.module.css';

const NEUTRAL_STEPS = [
  '0',
  '25',
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '850',
  '900',
  '925',
  '950',
  '1000',
] as const;

export const colorSpecimens: readonly Specimen<SpecimenIdOf<typeof colorEn>>[] = [
  {
    id: 'color-ramps',
    span: 12,
    render: () => (
      <div class={styles.stack}>
        <TokenRamp prefix="--velvet" steps={RAMP_STEPS} current="700" />
        <TokenRamp prefix="--neutral" steps={NEUTRAL_STEPS} />
      </div>
    ),
  },
  {
    id: 'color-backgrounds',
    span: 8,
    render: () => <BackgroundsDemo />,
  },
  {
    id: 'color-foreground-border',
    span: 4,
    render: () => <TextBorderRolesDemo />,
  },
  {
    id: 'color-status-roles',
    span: 8,
    render: () => <StatusRolesDemo />,
  },
  {
    id: 'color-on-color',
    span: 4,
    render: () => <OnColorDemo />,
  },
  {
    id: 'color-status-ramps',
    span: 12,
    render: () => (
      <div class={styles.stack}>
        <TokenRamp prefix="--success" steps={RAMP_STEPS} />
        <TokenRamp prefix="--warning" steps={RAMP_STEPS} />
        <TokenRamp prefix="--danger" steps={RAMP_STEPS} />
        <TokenRamp prefix="--info" steps={RAMP_STEPS} />
      </div>
    ),
  },
  {
    id: 'color-categorical',
    span: 8,
    render: () => <CategoricalDemo />,
  },
  {
    id: 'color-data-viz',
    span: 4,
    render: () => <DataVizDemo />,
  },
];
