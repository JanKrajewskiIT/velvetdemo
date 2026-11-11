import type { MarketHours } from '@jankrajewskiit/ui';

export const MARKETS: readonly MarketHours[] = [
  { code: 'XETRA', timeZone: 'Europe/Berlin', open: '09:00', close: '17:30' },
  { code: 'NYSE', timeZone: 'America/New_York', open: '09:30', close: '16:00' },
  { code: 'CRYPTO', timeZone: 'UTC', alwaysOpen: true },
];
