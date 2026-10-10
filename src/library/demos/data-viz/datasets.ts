import type { ChartDatum, ChartSeries, DonutDatum, HeatmapPoint, RadarAxis, RadarSeries } from '@jankrajewskiit/ui';

const MS_PER_DAY = 86_400_000;
const MONTH_COUNT = 12;
const SUNDAY = 0;
const SATURDAY = 6;
const monthFormat = new Intl.DateTimeFormat('en', { month: 'short' });
const dayFormat = new Intl.DateTimeFormat('en', { weekday: 'short', day: 'numeric', month: 'short' });

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;
const FREE_SESSIONS = [12, 18, 15, 22, 28, 9, 6] as const;
const PAID_SESSIONS = [4, 7, 6, 9, 12, 3, 2] as const;
const REVENUE_CURRENT = [12400, 13100, 12900, 15200, 16800, 16100, 18400, 19900, 21300, 22800, 23600, 25100] as const;
const REVENUE_PREVIOUS = [9800, 10400, 11200, 11000, 12600, 13300, 13900, 14100, 15800, 16400, 17200, 17900] as const;

export const PLAN_SERIES: ChartSeries[] = [
  { key: 'free', label: 'Free' },
  { key: 'paid', label: 'Paid' },
];

export const REVENUE_SERIES: ChartSeries[] = [
  { key: 'current', label: 'Last 12 months' },
  { key: 'previous', label: 'Previous 12 months' },
];

export const ACCOUNTS_BY_PLAN: DonutDatum[] = [
  { label: 'Team', value: 1240 },
  { label: 'Business', value: 860 },
  { label: 'Starter', value: 540 },
  { label: 'Enterprise', value: 210 },
];

export const SKILL_AXES: RadarAxis[] = [
  { key: 'craft', label: 'Craft' },
  { key: 'systems', label: 'Systems' },
  { key: 'research', label: 'Research' },
  { key: 'writing', label: 'Writing' },
  { key: 'lead', label: 'Leadership' },
  { key: 'delivery', label: 'Delivery' },
];

export const SKILL_PROFILES: RadarSeries[] = [
  { label: 'Anna', values: { craft: 5, systems: 4.5, research: 3, writing: 4, lead: 3.5, delivery: 4 } },
  { label: 'Role target', values: { craft: 4, systems: 4, research: 4, writing: 3.5, lead: 4, delivery: 4 } },
];

export const HIRING_FUNNEL = [
  { label: 'Applied', value: 1840 },
  { label: 'Screened', value: 920 },
  { label: 'Interviewed', value: 310 },
  { label: 'Offered', value: 84 },
  { label: 'Hired', value: 61 },
];

export const formatEuroThousands = (value: number): string => `€${(value / 1000).toFixed(1)}k`;

export const isoDay = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

export const formatDay = (isoDate: string): string => dayFormat.format(new Date(`${isoDate}T00:00:00`));

export const recentMonths = (now: Date): string[] =>
  Array.from({ length: MONTH_COUNT }, (_, i) =>
    monthFormat.format(new Date(now.getFullYear(), now.getMonth() - (MONTH_COUNT - 1 - i), 1)),
  );

export const weekdayData = (): ChartDatum[] =>
  WEEKDAYS.map((label, i) => ({ label, free: FREE_SESSIONS[i] ?? 0, paid: PAID_SESSIONS[i] ?? 0 }));

export const revenueData = (now: Date): ChartDatum[] =>
  recentMonths(now).map((label, i) => ({
    label,
    current: REVENUE_CURRENT[i] ?? 0,
    previous: REVENUE_PREVIOUS[i] ?? 0,
  }));

export const activityData = (weeks: number, now: Date): HeatmapPoint[] =>
  Array.from({ length: weeks * 7 }, (_, i) => {
    const date = new Date(now.getTime() - i * MS_PER_DAY);
    const weekend = date.getDay() === SUNDAY || date.getDay() === SATURDAY;
    const wave = Math.abs(Math.sin(i * 1.7) * Math.cos(i / 5));
    return { date: isoDay(date), value: weekend ? Math.round(wave * 3) : Math.round(wave * 14) };
  });
