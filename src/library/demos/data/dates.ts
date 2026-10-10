const MS_PER_DAY = 86_400_000;
const shortDay = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short' });

const fromToday = (days: number): Date => new Date(Date.now() + days * MS_PER_DAY);

export const formatDayFromToday = (days: number): string => shortDay.format(fromToday(days));

export const isoDayFromToday = (days: number): string => {
  const date = fromToday(days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

export const formatDaysAgo = (days: number): string => {
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  return `${days} days ago`;
};
