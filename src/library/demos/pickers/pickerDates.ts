import type { useI18n } from '@jankrajewskiit/i18n';
import type { DateRange, RangePreset } from '@jankrajewskiit/ui';
import { addDays, startOfDay } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

const DAYS_PER_WEEK = 7;
const DAYS_PER_MONTH = 30;

export const today = (): Date => startOfDay(new Date());

export const daysFromToday = (days: number): Date => addDays(today(), days);

const upcoming = (days: number): DateRange => ({ start: today(), end: daysFromToday(days) });

export const upcomingPresets = (ts: Ts): RangePreset[] => [
  { label: ts('library.pickers.data.presets.next7Days'), range: () => upcoming(DAYS_PER_WEEK - 1) },
  { label: ts('library.pickers.data.presets.next14Days'), range: () => upcoming(2 * DAYS_PER_WEEK - 1) },
  { label: ts('library.pickers.data.presets.next30Days'), range: () => upcoming(DAYS_PER_MONTH - 1) },
];

export const isWeekend = (date: Date): boolean => date.getDay() === 0 || date.getDay() === 6;
