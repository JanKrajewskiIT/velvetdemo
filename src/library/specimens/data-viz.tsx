import { DonutChart, FunnelChart, Gauge, type GaugeThreshold, LineChart, RadarChart } from '@jankrajewskiit/ui';

import type { dataVizEn } from '../../i18n/library/data-viz';
import { BarChartDemo } from '../demos/data-viz/BarChartDemo';
import { ComparisonDemo } from '../demos/data-viz/ComparisonDemo';
import {
  ACCOUNTS_BY_PLAN,
  formatEuroThousands,
  HIRING_FUNNEL,
  REVENUE_SERIES,
  revenueData,
  SKILL_AXES,
  SKILL_PROFILES,
} from '../demos/data-viz/datasets';
import { GanttDemo } from '../demos/data-viz/GanttDemo';
import { HeatmapDemo } from '../demos/data-viz/HeatmapDemo';
import { LineScaleDemo } from '../demos/data-viz/LineScaleDemo';
import { SeriesPaletteDemo } from '../demos/data-viz/SeriesPaletteDemo';
import { SparklineStatsDemo } from '../demos/data-viz/SparklineStatsDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './data-viz.module.css';

const UTILISATION_THRESHOLDS: GaugeThreshold[] = [
  { value: 70, tone: 'warning' },
  { value: 90, tone: 'danger' },
];

export const dataVizSpecimens: readonly Specimen<SpecimenIdOf<typeof dataVizEn>>[] = [
  {
    id: 'data-viz-bar-chart',
    span: 6,
    render: () => <BarChartDemo />,
  },
  {
    id: 'data-viz-donut-chart',
    span: 6,
    render: () => (
      <div class={styles.centred}>
        <DonutChart data={ACCOUNTS_BY_PLAN} size={200} centerLabel="Accounts" label="Accounts by plan" />
      </div>
    ),
  },
  {
    id: 'data-viz-line-chart',
    span: 8,
    render: () => (
      <LineChart
        data={revenueData(new Date())}
        series={REVENUE_SERIES}
        format={formatEuroThousands}
        label="Monthly revenue"
      />
    ),
  },
  {
    id: 'data-viz-line-scale',
    span: 12,
    render: () => <LineScaleDemo />,
  },
  {
    id: 'data-viz-sparkline',
    span: 4,
    render: () => <SparklineStatsDemo />,
  },
  {
    id: 'data-viz-heatmap',
    span: 8,
    render: () => <HeatmapDemo />,
  },
  {
    id: 'data-viz-radar-chart',
    span: 4,
    render: () => (
      <RadarChart
        axes={SKILL_AXES}
        series={SKILL_PROFILES}
        max={5}
        size={280}
        label="Skill profile against role target"
      />
    ),
  },
  {
    id: 'data-viz-funnel-chart',
    span: 6,
    render: () => <FunnelChart data={HIRING_FUNNEL} label="Hiring funnel" />,
  },
  {
    id: 'data-viz-gauge',
    span: 6,
    render: () => (
      <div class={styles.gauges}>
        <Gauge value={42} unit="%" label="Disk" caption="420 of 1,000 GB" thresholds={UTILISATION_THRESHOLDS} />
        <Gauge value={78} unit="%" label="Memory" caption="12.5 of 16 GB" thresholds={UTILISATION_THRESHOLDS} />
        <Gauge value={94} unit="%" label="Error budget used" caption="this month" thresholds={UTILISATION_THRESHOLDS} />
      </div>
    ),
  },
  {
    id: 'data-viz-comparison',
    span: 8,
    render: () => <ComparisonDemo />,
  },
  {
    id: 'data-viz-series-palette',
    span: 4,
    render: () => <SeriesPaletteDemo />,
  },
  {
    id: 'data-viz-gantt',
    span: 12,
    render: () => <GanttDemo />,
  },
];
