import type { DateRange, RangePreset } from '@jankrajewskiit/ui';
import { addDays, startOfDay } from '@jankrajewskiit/ui';

const DAYS_PER_WEEK = 7;
const DAYS_PER_MONTH = 30;

export const today = (): Date => startOfDay(new Date());

export const daysFromToday = (days: number): Date => addDays(today(), days);

const upcoming = (days: number): DateRange => ({ start: today(), end: daysFromToday(days) });

export const UPCOMING_PRESETS: RangePreset[] = [
  { label: 'Next 7 days', range: () => upcoming(DAYS_PER_WEEK - 1) },
  { label: 'Next 14 days', range: () => upcoming(2 * DAYS_PER_WEEK - 1) },
  { label: 'Next 30 days', range: () => upcoming(DAYS_PER_MONTH - 1) },
];

export const isWeekend = (date: Date): boolean => date.getDay() === 0 || date.getDay() === 6;
