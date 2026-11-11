import type { useI18n } from '@jankrajewskiit/i18n';
import type { KanbanCard, KanbanColumn, SchedulerEvent } from '@jankrajewskiit/ui';
import { addDays, startOfDay } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

const MONDAY_OFFSET = 6;
const DAYS_PER_WEEK = 7;

const atTime = (day: Date, hour: number, minutes = 0): Date =>
  new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, minutes);

export const createDayEvents = (ts: Ts): SchedulerEvent[] => {
  const today = startOfDay(new Date());
  return [
    {
      id: 'stand-up',
      title: ts('library.planning.samples.standUp'),
      start: atTime(today, 9),
      end: atTime(today, 9, 30),
      meta: ts('library.planning.samples.room', { number: 2 }),
    },
    {
      id: 'design',
      title: ts('library.planning.samples.designReview'),
      start: atTime(today, 10),
      end: atTime(today, 11, 30),
      tone: 'info',
      meta: ts('library.planning.samples.studio'),
    },
    {
      id: 'pairing',
      title: ts('library.planning.samples.pairingSession'),
      start: atTime(today, 10, 30),
      end: atTime(today, 12),
      tone: 'success',
    },
    {
      id: 'lunch',
      title: ts('library.planning.samples.lunchWithFinance'),
      start: atTime(today, 12, 30),
      end: atTime(today, 13, 30),
      tone: 'warning',
    },
    {
      id: 'planning',
      title: ts('library.planning.samples.planning'),
      start: atTime(today, 14),
      end: atTime(today, 15, 30),
      meta: ts('library.planning.samples.room', { number: 4 }),
    },
  ];
};

export const createWeekEvents = (ts: Ts): SchedulerEvent[] => {
  const today = startOfDay(new Date());
  const monday = addDays(today, -((today.getDay() + MONDAY_OFFSET) % DAYS_PER_WEEK));
  const day = (offset: number) => addDays(monday, offset);
  const standUp = ts('library.planning.samples.standUp');
  const studio = ts('library.planning.samples.studio');
  return [
    { id: 'mon-standup', title: standUp, start: atTime(day(0), 9), end: atTime(day(0), 9, 30) },
    {
      id: 'mon-roadmap',
      title: ts('library.planning.samples.roadmapReview'),
      start: atTime(day(0), 10),
      end: atTime(day(0), 11, 30),
      tone: 'info',
      meta: studio,
    },
    { id: 'tue-standup', title: standUp, start: atTime(day(1), 9), end: atTime(day(1), 9, 30) },
    {
      id: 'tue-workshop',
      title: ts('library.planning.samples.researchWorkshop'),
      start: atTime(day(1), 13),
      end: atTime(day(1), 16),
      tone: 'success',
      meta: ts('library.planning.samples.room', { number: 4 }),
    },
    { id: 'wed-standup', title: standUp, start: atTime(day(2), 9), end: atTime(day(2), 9, 30) },
    {
      id: 'wed-1on1',
      title: ts('library.planning.samples.oneToOne'),
      start: atTime(day(2), 11),
      end: atTime(day(2), 11, 45),
      tone: 'warning',
    },
    {
      id: 'wed-pairing',
      title: ts('library.planning.samples.pairing'),
      start: atTime(day(2), 11, 15),
      end: atTime(day(2), 12, 30),
      tone: 'success',
    },
    { id: 'thu-standup', title: standUp, start: atTime(day(3), 9), end: atTime(day(3), 9, 30) },
    {
      id: 'thu-demo',
      title: ts('library.planning.samples.stakeholderDemo'),
      start: atTime(day(3), 14),
      end: atTime(day(3), 15, 30),
      tone: 'danger',
      meta: ts('library.planning.samples.mainHall'),
    },
    { id: 'fri-standup', title: standUp, start: atTime(day(4), 9), end: atTime(day(4), 9, 30) },
    {
      id: 'fri-retro',
      title: ts('library.planning.samples.retrospective'),
      start: atTime(day(4), 15),
      end: atTime(day(4), 16),
      tone: 'info',
    },
  ];
};

export const createKanbanColumns = (ts: Ts): KanbanColumn[] => [
  { id: 'backlog', title: ts('library.planning.samples.columns.backlog'), color: 'var(--status-info-solid)' },
  {
    id: 'doing',
    title: ts('library.planning.samples.columns.inProgress'),
    color: 'var(--status-warning-solid)',
    limit: 3,
  },
  { id: 'review', title: ts('library.planning.samples.columns.inReview'), color: 'var(--action-primary)' },
  { id: 'done', title: ts('library.planning.samples.columns.done'), color: 'var(--status-success-solid)' },
];

export const createKanbanCards = (ts: Ts): KanbanCard[] => [
  {
    id: 1,
    column: 'backlog',
    owner: 'Grace Hopper',
    title: ts('library.planning.samples.cards.draftReleaseNotes'),
    tag: ts('library.planning.samples.tags.docs'),
    tagTone: 'info',
    meta: ts('library.planning.samples.dueFriday'),
  },
  {
    id: 2,
    column: 'backlog',
    owner: 'Ada Lovelace',
    title: ts('library.planning.samples.cards.auditContrast'),
    tag: ts('library.planning.samples.tags.design'),
    tagTone: 'brand',
  },
  {
    id: 3,
    column: 'doing',
    owner: 'Alan Turing',
    title: ts('library.planning.samples.cards.portTable'),
    tag: ts('library.planning.samples.tags.dev'),
    tagTone: 'success',
    meta: ts('library.planning.samples.comments', { count: 3 }),
  },
  {
    id: 4,
    column: 'doing',
    owner: 'Margaret Hamilton',
    title: ts('library.planning.samples.cards.fixFocusRing'),
    tag: ts('library.planning.samples.tags.a11y'),
    tagTone: 'warning',
  },
  {
    id: 5,
    column: 'review',
    owner: 'Barbara Liskov',
    title: ts('library.planning.samples.cards.dateKeyboard'),
    tag: ts('library.planning.samples.tags.dev'),
    tagTone: 'success',
    meta: ts('library.planning.samples.reviewers', { count: 2 }),
  },
  {
    id: 6,
    column: 'done',
    owner: 'Ken Thompson',
    title: ts('library.planning.samples.cards.setupCi'),
    tag: ts('library.planning.samples.tags.ops'),
    tagTone: 'neutral',
  },
  {
    id: 7,
    column: 'done',
    owner: 'Grace Hopper',
    title: ts('library.planning.samples.cards.publishTokens'),
    tag: ts('library.planning.samples.tags.docs'),
    tagTone: 'info',
  },
];
