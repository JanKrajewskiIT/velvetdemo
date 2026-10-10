import type { spaceLayoutEn } from '../../i18n/library/space-layout';
import { BreakpointsDemo } from '../demos/space/BreakpointsDemo';
import { ContainersDemo } from '../demos/space/ContainersDemo';
import { DensityPanel } from '../demos/space/DensityPanel';
import { LayoutRhythmDemo } from '../demos/space/LayoutRhythmDemo';
import { ShellAnatomyDemo } from '../demos/space/ShellAnatomyDemo';
import { SpaceScaleDemo } from '../demos/space/SpaceScaleDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './space-layout.module.css';

export const spaceLayoutSpecimens: readonly Specimen<SpecimenIdOf<typeof spaceLayoutEn>>[] = [
  {
    id: 'space-scale',
    span: 12,
    render: () => <SpaceScaleDemo />,
  },
  {
    id: 'space-density',
    span: 12,
    render: () => (
      <div class={styles.pair}>
        <DensityPanel density="comfortable" />
        <DensityPanel density="compact" />
      </div>
    ),
  },
  {
    id: 'space-breakpoints',
    span: 6,
    render: () => <BreakpointsDemo />,
  },
  {
    id: 'space-containers',
    span: 6,
    render: () => <ContainersDemo />,
  },
  {
    id: 'space-app-shell',
    span: 8,
    render: () => <ShellAnatomyDemo />,
  },
  {
    id: 'space-grid-rhythm',
    span: 4,
    render: () => <LayoutRhythmDemo />,
  },
];
