import { useI18n } from '@jankrajewskiit/i18n';
import { DonutChart, FunnelChart, Gauge, type GaugeThreshold, LineChart, RadarChart } from '@jankrajewskiit/ui';

import type { dataVizEn } from '../../i18n/library/data-viz';
import { BarChartDemo } from '../demos/data-viz/BarChartDemo';
import { ChartLegendDemo } from '../demos/data-viz/ChartLegendDemo';
import { ChartTooltipDemo } from '../demos/data-viz/ChartTooltipDemo';
import {
  ACCOUNTS_BY_PLAN,
  createHiringFunnel,
  createRevenueSeries,
  createSkillAxes,
  createSkillProfiles,
  formatEuroThousands,
  revenueData,
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
    id: 'data-viz-legend',
    span: 6,
    render: () => <ChartLegendDemo />,
  },
  {
    id: 'data-viz-tooltip',
    span: 6,
    render: () => <ChartTooltipDemo />,
  },
  {
    id: 'data-viz-bar-chart',
    span: 6,
    render: () => <BarChartDemo />,
  },
  {
    id: 'data-viz-donut-chart',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.centred}>
          <DonutChart
            data={ACCOUNTS_BY_PLAN}
            size={200}
            centerLabel={t('library.dataViz.specimens.data-viz-donut-chart.centerLabel')}
            label={t('library.dataViz.specimens.data-viz-donut-chart.label')}
          />
        </div>
      );
    },
  },
  {
    id: 'data-viz-line-chart',
    span: 8,
    render: () => {
      const { t, ts, locale } = useI18n();
      return (
        <LineChart
          data={revenueData(new Date(), locale())}
          series={createRevenueSeries(ts)}
          format={formatEuroThousands}
          label={t('library.dataViz.specimens.data-viz-line-chart.label')}
        />
      );
    },
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
    render: () => {
      const { t, ts } = useI18n();
      return (
        <RadarChart
          axes={createSkillAxes(ts)}
          series={createSkillProfiles(ts)}
          max={5}
          size={280}
          label={t('library.dataViz.specimens.data-viz-radar-chart.label')}
        />
      );
    },
  },
  {
    id: 'data-viz-funnel-chart',
    span: 6,
    render: () => {
      const { t, ts } = useI18n();
      return (
        <FunnelChart data={createHiringFunnel(ts)} label={t('library.dataViz.specimens.data-viz-funnel-chart.label')} />
      );
    },
  },
  {
    id: 'data-viz-gauge',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.gauges}>
          <Gauge
            value={42}
            unit="%"
            label={t('library.dataViz.specimens.data-viz-gauge.diskLabel')}
            caption={t('library.dataViz.specimens.data-viz-gauge.diskCaption')}
            thresholds={UTILISATION_THRESHOLDS}
          />
          <Gauge
            value={78}
            unit="%"
            label={t('library.dataViz.specimens.data-viz-gauge.memoryLabel')}
            caption={t('library.dataViz.specimens.data-viz-gauge.memoryCaption')}
            thresholds={UTILISATION_THRESHOLDS}
          />
          <Gauge
            value={94}
            unit="%"
            label={t('library.dataViz.specimens.data-viz-gauge.errorBudgetLabel')}
            caption={t('library.dataViz.specimens.data-viz-gauge.errorBudgetCaption')}
            thresholds={UTILISATION_THRESHOLDS}
          />
        </div>
      );
    },
  },
  {
    id: 'data-viz-series-palette',
    span: 6,
    render: () => <SeriesPaletteDemo />,
  },
  {
    id: 'data-viz-gantt',
    span: 12,
    render: () => <GanttDemo />,
  },
];
