import type { metricsEn } from '../../i18n/library/metrics';
import { SkillBarDemo } from '../demos/data-viz/SkillBarDemo';
import { StatDemo } from '../demos/data-viz/StatDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const metricSpecimens: readonly Specimen<SpecimenIdOf<typeof metricsEn>>[] = [
  { id: 'metrics-stat', span: 6, render: () => <StatDemo /> },
  {
    id: 'metrics-skill-bar',
    span: 6,
    render: () => <SkillBarDemo />,
  },
];
