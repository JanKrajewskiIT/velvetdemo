import type { motionEn } from '../../i18n/library/motion';
import { DurationTracksDemo } from '../demos/motion/DurationTracksDemo';
import { EasingTracksDemo } from '../demos/motion/EasingTracksDemo';
import { KeyframesDemo } from '../demos/motion/KeyframesDemo';
import { MotionIntentsDemo } from '../demos/motion/MotionIntentsDemo';
import { StaggerDemo } from '../demos/motion/StaggerDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const motionSpecimens: readonly Specimen<SpecimenIdOf<typeof motionEn>>[] = [
  {
    id: 'motion-durations',
    span: 6,
    render: () => <DurationTracksDemo />,
  },
  {
    id: 'motion-easing',
    span: 6,
    render: () => <EasingTracksDemo />,
  },
  {
    id: 'motion-intents',
    span: 12,
    render: () => <MotionIntentsDemo />,
  },
  {
    id: 'motion-keyframes',
    span: 8,
    render: () => <KeyframesDemo />,
  },
  {
    id: 'motion-stagger',
    span: 4,
    render: () => <StaggerDemo />,
  },
];
