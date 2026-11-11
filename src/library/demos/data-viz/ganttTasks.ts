import type { useI18n } from '@jankrajewskiit/i18n';
import { addDays, type GanttTask, startOfDay } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

export const makeGanttTasks = (ts: Ts): GanttTask[] => {
  const today = startOfDay(new Date());
  const day = (offset: number) => addDays(today, offset);
  return [
    {
      id: 'research',
      name: ts('library.dataViz.demo.gantt.userResearch'),
      group: ts('library.dataViz.demo.gantt.design'),
      start: day(-6),
      end: day(-3),
      progress: 100,
    },
    {
      id: 'wireframes',
      name: ts('library.dataViz.demo.gantt.wireframes'),
      group: ts('library.dataViz.demo.gantt.design'),
      start: day(-2),
      end: day(1),
      progress: 70,
      dependsOn: 'research',
    },
    {
      id: 'api',
      name: ts('library.dataViz.demo.gantt.apiEndpoints'),
      group: ts('library.dataViz.demo.gantt.build'),
      start: day(0),
      end: day(6),
      progress: 40,
      dependsOn: 'wireframes',
    },
    {
      id: 'ui',
      name: ts('library.dataViz.demo.gantt.ui'),
      group: ts('library.dataViz.demo.gantt.build'),
      start: day(2),
      end: day(9),
      progress: 20,
      dependsOn: 'wireframes',
    },
    {
      id: 'docs',
      name: ts('library.dataViz.demo.gantt.documentation'),
      group: ts('library.dataViz.demo.gantt.launch'),
      start: day(6),
      end: day(11),
      progress: 10,
    },
    {
      id: 'qa',
      name: ts('library.dataViz.demo.gantt.qualityReview'),
      group: ts('library.dataViz.demo.gantt.launch'),
      start: day(10),
      end: day(12),
      progress: 0,
      dependsOn: ['api', 'ui'],
    },
    {
      id: 'release',
      name: ts('library.dataViz.demo.gantt.release'),
      group: ts('library.dataViz.demo.gantt.launch'),
      start: day(14),
      milestone: true,
      dependsOn: ['qa', 'docs'],
    },
  ];
};
