import type { metricsEn } from '../../i18n/library/metrics';
import { MetricGroupDemo } from '../demos/data/MetricGroupDemo';
import { UsageMeterDemo } from '../demos/data/UsageMeterDemo';
import { ComparisonDemo } from '../demos/data-viz/ComparisonDemo';
import { SkillBarDemo } from '../demos/data-viz/SkillBarDemo';
import { StatDemo } from '../demos/data-viz/StatDemo';
import { ContributionBarDemo } from '../demos/finance/ContributionBarDemo';
import { DeltaDemo } from '../demos/finance/DeltaDemo';
import { MoneyDemo } from '../demos/finance/MoneyDemo';
import { ValueShiftDemo } from '../demos/finance/ValueShiftDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const metricSpecimens: readonly Specimen<SpecimenIdOf<typeof metricsEn>>[] = [
  { id: 'metrics-stat', span: 6, render: () => <StatDemo /> },
  { id: 'metrics-skill-bar', span: 6, render: () => <SkillBarDemo /> },
  { id: 'money', span: 6, render: () => <MoneyDemo /> },
  { id: 'price-change', span: 6, render: () => <DeltaDemo /> },
  { id: 'value-shift', span: 6, render: () => <ValueShiftDemo /> },
  { id: 'contribution-bar', span: 6, render: () => <ContributionBarDemo /> },
  { id: 'data-metric-group', span: 6, render: () => <MetricGroupDemo /> },
  { id: 'data-usage-meter', span: 6, render: () => <UsageMeterDemo /> },
  { id: 'data-viz-comparison', span: 12, render: () => <ComparisonDemo /> },
];
