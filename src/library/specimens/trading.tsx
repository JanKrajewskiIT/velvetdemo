import type { tradingEn } from '../../i18n/library/trading';
import { TradingChartDemo } from '../demos/trading/TradingChartDemo';
import { TradingDataDemo } from '../demos/trading/TradingDataDemo';
import { TradingMetricsDemo } from '../demos/trading/TradingMetricsDemo';
import { TradingPollingDemo } from '../demos/trading/TradingPollingDemo';
import { TradingSubscriptionDemo } from '../demos/trading/TradingSubscriptionDemo';
import { TradingToolbarDemo } from '../demos/trading/TradingToolbarDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const tradingSpecimens: readonly Specimen<SpecimenIdOf<typeof tradingEn>>[] = [
  { id: 'trading-chart', span: 12, render: () => <TradingChartDemo /> },
  { id: 'trading-toolbar', span: 12, render: () => <TradingToolbarDemo /> },
  { id: 'trading-metrics', span: 6, render: () => <TradingMetricsDemo /> },
  { id: 'trading-data', span: 6, render: () => <TradingDataDemo /> },
  { id: 'trading-polling', span: 12, render: () => <TradingPollingDemo /> },
  { id: 'trading-subscription', span: 12, render: () => <TradingSubscriptionDemo /> },
];
