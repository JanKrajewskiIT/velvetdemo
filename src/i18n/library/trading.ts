import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const tradingEn = defineDictionary({
  title: 'Trading',
  blurb: 'Candlestick charts, technical indicators and offline market feeds from Velvet Data.',
  controls: {
    previous: 'Previous candle',
    next: 'Next candle',
    rows: 'Visible candles',
    window: '{count} candles in the current window',
    indicators: 'Active indicators: {indicators}',
    volume: 'Window volume: {value}',
    none: 'none',
    pause: 'Pause feed',
    resume: 'Resume feed',
    restart: 'Restart feed',
    fail: 'Simulate failure',
    injectedFailure: 'The offline transport was interrupted. Restart to reconnect.',
    offline: 'Deterministic offline data. No market service or WebSocket server is contacted.',
    updates: '{count} candles retained; at most {limit}.',
    support: 'Support',
    resistance: 'Resistance',
  },
  status: { idle: 'Paused', pending: 'Connecting', live: 'Live', error: 'Disconnected' },
  specimens: {
    'trading-chart': { name: 'TradingViewChart', subtitle: 'Controlled interval, volume, SMA/EMA and price levels' },
    'trading-toolbar': {
      name: 'TradingViewChartToolbar',
      subtitle: 'Standalone controls with a working candle window, indicator toggles and fit',
    },
    'trading-metrics': { name: 'TradingViewChartMetrics', subtitle: 'Localized OHLC and volume for a selected candle' },
    'trading-data': { name: 'TradingViewChartData', subtitle: 'An accessible data table with a controlled row count' },
    'trading-polling': {
      name: 'useTradingViewPollingFeed',
      subtitle: 'Offline polling, bounded history and error recovery',
    },
    'trading-subscription': {
      name: 'useTradingViewWsFeed',
      subtitle: 'Simulated push subscription with pause, reconnect and disposal',
    },
  },
});

export const tradingPl: TranslationOf<typeof tradingEn> = {
  title: 'Trading',
  blurb: 'Wykresy świecowe, wskaźniki techniczne i strumienie danych offline z Velvet Data.',
  controls: {
    previous: 'Poprzednia świeca',
    next: 'Następna świeca',
    rows: 'Widoczne świece',
    window: '{count} świec w bieżącym oknie',
    indicators: 'Aktywne wskaźniki: {indicators}',
    volume: 'Wolumen okna: {value}',
    none: 'brak',
    pause: 'Wstrzymaj strumień',
    resume: 'Wznów strumień',
    restart: 'Uruchom strumień ponownie',
    fail: 'Symuluj awarię',
    injectedFailure: 'Transport offline został przerwany. Uruchom ponownie, aby przywrócić połączenie.',
    offline: 'Deterministyczne dane offline. Przykład nie łączy się z serwisem rynkowym ani serwerem WebSocket.',
    updates: 'Zachowano {count} świec; maksymalnie {limit}.',
    support: 'Wsparcie',
    resistance: 'Opór',
  },
  status: { idle: 'Wstrzymany', pending: 'Łączenie', live: 'Aktywny', error: 'Rozłączony' },
  specimens: {
    'trading-chart': { name: 'TradingViewChart', subtitle: 'Kontrolowany interwał, wolumen, SMA/EMA i poziomy ceny' },
    'trading-toolbar': {
      name: 'TradingViewChartToolbar',
      subtitle: 'Osobny pasek z działającym oknem świec, przełączaniem wskaźników i dopasowaniem',
    },
    'trading-metrics': { name: 'TradingViewChartMetrics', subtitle: 'Lokalizowane OHLC i wolumen wybranej świecy' },
    'trading-data': { name: 'TradingViewChartData', subtitle: 'Dostępna tabela danych z kontrolowaną liczbą wierszy' },
    'trading-polling': {
      name: 'useTradingViewPollingFeed',
      subtitle: 'Odpytywanie offline, ograniczona historia i odzyskiwanie po awarii',
    },
    'trading-subscription': {
      name: 'useTradingViewWsFeed',
      subtitle: 'Symulowana subskrypcja push z wstrzymaniem, ponownym połączeniem i sprzątaniem',
    },
  },
};
