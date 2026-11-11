const MS_PER_DAY = 86_400_000;
const fromToday = (days: number): Date => new Date(Date.now() + days * MS_PER_DAY);

export const formatDayFromToday = (days: number, locale: string): string =>
  new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' }).format(fromToday(days));

export const isoDayFromToday = (days: number): string => {
  const date = fromToday(days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};
