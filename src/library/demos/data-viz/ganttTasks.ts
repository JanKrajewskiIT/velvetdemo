import { addDays, type GanttTask, startOfDay } from '@jankrajewskiit/ui';

export const makeGanttTasks = (): GanttTask[] => {
  const today = startOfDay(new Date());
  const day = (offset: number) => addDays(today, offset);
  return [
    { id: 'research', name: 'User research', group: 'Design', start: day(-6), end: day(-3), progress: 100 },
    {
      id: 'wireframes',
      name: 'Wireframes',
      group: 'Design',
      start: day(-2),
      end: day(1),
      progress: 70,
      dependsOn: 'research',
    },
    {
      id: 'api',
      name: 'API endpoints',
      group: 'Build',
      start: day(0),
      end: day(6),
      progress: 40,
      dependsOn: 'wireframes',
    },
    { id: 'ui', name: 'Interface', group: 'Build', start: day(2), end: day(9), progress: 20, dependsOn: 'wireframes' },
    { id: 'docs', name: 'Documentation', group: 'Launch', start: day(6), end: day(11), progress: 10 },
    {
      id: 'qa',
      name: 'Quality review',
      group: 'Launch',
      start: day(10),
      end: day(12),
      progress: 0,
      dependsOn: ['api', 'ui'],
    },
    { id: 'release', name: 'Release', group: 'Launch', start: day(14), milestone: true, dependsOn: ['qa', 'docs'] },
  ];
};
