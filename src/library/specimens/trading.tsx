import type { tradingEn } from '../../i18n/library/trading';
import { ContextSwitcherDemo } from '../demos/trading/ContextSwitcherDemo';
import { InstrumentHeaderDemo } from '../demos/trading/InstrumentHeaderDemo';
import { KillSwitchDemo } from '../demos/trading/KillSwitchDemo';
import { MarketSessionClockDemo } from '../demos/trading/MarketSessionClockDemo';
import { OrderTicketDemo } from '../demos/trading/OrderTicketDemo';
import { PriceCellDemo } from '../demos/trading/PriceCellDemo';
import { StatusBarDemo } from '../demos/trading/StatusBarDemo';
import { TradingChartDemo } from '../demos/trading/TradingChartDemo';
import { TradingDataDemo } from '../demos/trading/TradingDataDemo';
import { TradingMetricsDemo } from '../demos/trading/TradingMetricsDemo';
import { TradingPollingDemo } from '../demos/trading/TradingPollingDemo';
import { TradingSubscriptionDemo } from '../demos/trading/TradingSubscriptionDemo';
import { TradingToolbarDemo } from '../demos/trading/TradingToolbarDemo';
import { WidgetGridDemo } from '../demos/trading/WidgetGridDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const tradingSpecimens: readonly Specimen<SpecimenIdOf<typeof tradingEn>>[] = [
  { id: 'trading-status-bar', span: 12, render: () => <StatusBarDemo /> },
  { id: 'trading-sessions', span: 6, render: () => <MarketSessionClockDemo /> },
  { id: 'trading-context', span: 6, render: () => <ContextSwitcherDemo /> },
  { id: 'trading-kill-switch', span: 6, render: () => <KillSwitchDemo /> },
  { id: 'trading-price', span: 6, render: () => <PriceCellDemo /> },
  { id: 'trading-instrument', span: 12, render: () => <InstrumentHeaderDemo /> },
  { id: 'trading-order', span: 6, render: () => <OrderTicketDemo /> },
  { id: 'trading-widgets', span: 12, render: () => <WidgetGridDemo /> },
  { id: 'trading-chart', span: 12, render: () => <TradingChartDemo /> },
  { id: 'trading-toolbar', span: 12, render: () => <TradingToolbarDemo /> },
  { id: 'trading-metrics', span: 6, render: () => <TradingMetricsDemo /> },
  { id: 'trading-data', span: 6, render: () => <TradingDataDemo /> },
  { id: 'trading-polling', span: 12, render: () => <TradingPollingDemo /> },
  { id: 'trading-subscription', span: 12, render: () => <TradingSubscriptionDemo /> },
];
