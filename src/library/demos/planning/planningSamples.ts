import type { CalendarEvent, KanbanCard, KanbanColumn, SchedulerEvent } from '@jankrajewskiit/ui';
import { addDays, startOfDay } from '@jankrajewskiit/ui';

const MONDAY_OFFSET = 6;
const DAYS_PER_WEEK = 7;

const atTime = (day: Date, hour: number, minutes = 0): Date =>
  new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, minutes);

export const createCalendarEvents = (): CalendarEvent[] => {
  const today = startOfDay(new Date());
  return [
    { date: today, time: '09:30', title: 'Sprint planning', description: 'Studio, second floor', tone: 'brand' },
    { date: today, time: '13:00', title: 'Vendor call', description: 'Contract renewal terms', tone: 'info' },
    { date: today, time: '16:30', title: 'Release checklist', tone: 'warning' },
    { date: addDays(today, 1), time: '10:00', title: 'Design critique', description: 'Onboarding flow', tone: 'brand' },
    { date: addDays(today, 2), title: 'Team offsite', description: 'All day', tone: 'success' },
    { date: addDays(today, 4), time: '11:00', title: 'Customer interview', tone: 'info' },
    { date: addDays(today, 4), time: '15:00', title: 'Budget review', tone: 'danger' },
    { date: addDays(today, 8), time: '09:00', title: 'Quarterly kickoff', tone: 'brand' },
    { date: addDays(today, -3), time: '14:00', title: 'Retrospective', tone: 'success' },
  ];
};

export const createDayEvents = (): SchedulerEvent[] => {
  const today = startOfDay(new Date());
  return [
    { id: 'stand-up', title: 'Stand-up', start: atTime(today, 9), end: atTime(today, 9, 30), meta: 'Room 2' },
    {
      id: 'design',
      title: 'Design review',
      start: atTime(today, 10),
      end: atTime(today, 11, 30),
      tone: 'info',
      meta: 'Studio',
    },
    { id: 'pairing', title: 'Pairing session', start: atTime(today, 10, 30), end: atTime(today, 12), tone: 'success' },
    {
      id: 'lunch',
      title: 'Lunch with finance',
      start: atTime(today, 12, 30),
      end: atTime(today, 13, 30),
      tone: 'warning',
    },
    { id: 'planning', title: 'Planning', start: atTime(today, 14), end: atTime(today, 15, 30), meta: 'Room 4' },
  ];
};

export const createWeekEvents = (): SchedulerEvent[] => {
  const today = startOfDay(new Date());
  const monday = addDays(today, -((today.getDay() + MONDAY_OFFSET) % DAYS_PER_WEEK));
  const day = (offset: number) => addDays(monday, offset);
  return [
    { id: 'mon-standup', title: 'Stand-up', start: atTime(day(0), 9), end: atTime(day(0), 9, 30) },
    {
      id: 'mon-roadmap',
      title: 'Roadmap review',
      start: atTime(day(0), 10),
      end: atTime(day(0), 11, 30),
      tone: 'info',
      meta: 'Studio',
    },
    { id: 'tue-standup', title: 'Stand-up', start: atTime(day(1), 9), end: atTime(day(1), 9, 30) },
    {
      id: 'tue-workshop',
      title: 'Research workshop',
      start: atTime(day(1), 13),
      end: atTime(day(1), 16),
      tone: 'success',
      meta: 'Room 4',
    },
    { id: 'wed-standup', title: 'Stand-up', start: atTime(day(2), 9), end: atTime(day(2), 9, 30) },
    { id: 'wed-1on1', title: 'One-to-one', start: atTime(day(2), 11), end: atTime(day(2), 11, 45), tone: 'warning' },
    {
      id: 'wed-pairing',
      title: 'Pairing',
      start: atTime(day(2), 11, 15),
      end: atTime(day(2), 12, 30),
      tone: 'success',
    },
    { id: 'thu-standup', title: 'Stand-up', start: atTime(day(3), 9), end: atTime(day(3), 9, 30) },
    {
      id: 'thu-demo',
      title: 'Stakeholder demo',
      start: atTime(day(3), 14),
      end: atTime(day(3), 15, 30),
      tone: 'danger',
      meta: 'Main hall',
    },
    { id: 'fri-standup', title: 'Stand-up', start: atTime(day(4), 9), end: atTime(day(4), 9, 30) },
    { id: 'fri-retro', title: 'Retrospective', start: atTime(day(4), 15), end: atTime(day(4), 16), tone: 'info' },
  ];
};

export const KANBAN_COLUMNS: KanbanColumn[] = [
  { id: 'backlog', title: 'Backlog', color: 'var(--status-info-solid)' },
  { id: 'doing', title: 'In progress', color: 'var(--status-warning-solid)', limit: 3 },
  { id: 'review', title: 'In review', color: 'var(--action-primary)' },
  { id: 'done', title: 'Done', color: 'var(--status-success-solid)' },
];

export const createKanbanCards = (): KanbanCard[] => [
  {
    id: 1,
    column: 'backlog',
    owner: 'Grace Hopper',
    title: 'Draft release notes',
    tag: 'Docs',
    tagTone: 'info',
    meta: 'Due Friday',
  },
  { id: 2, column: 'backlog', owner: 'Ada Lovelace', title: 'Audit colour contrast', tag: 'Design', tagTone: 'brand' },
  {
    id: 3,
    column: 'doing',
    owner: 'Alan Turing',
    title: 'Port the table to Solid',
    tag: 'Dev',
    tagTone: 'success',
    meta: '3 comments',
  },
  {
    id: 4,
    column: 'doing',
    owner: 'Margaret Hamilton',
    title: 'Fix focus ring in forced colours',
    tag: 'A11y',
    tagTone: 'warning',
  },
  {
    id: 5,
    column: 'review',
    owner: 'Barbara Liskov',
    title: 'Date picker keyboard support',
    tag: 'Dev',
    tagTone: 'success',
    meta: '2 reviewers',
  },
  { id: 6, column: 'done', owner: 'Ken Thompson', title: 'Set up the CI pipeline', tag: 'Ops', tagTone: 'neutral' },
  { id: 7, column: 'done', owner: 'Grace Hopper', title: 'Publish the token reference', tag: 'Docs', tagTone: 'info' },
];
