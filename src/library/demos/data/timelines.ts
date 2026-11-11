import type { useI18n } from '@jankrajewskiit/i18n';
import type { TimelineItem } from '@jankrajewskiit/ui';

import { formatDayFromToday, isoDayFromToday } from './dates';

type Ts = ReturnType<typeof useI18n>['ts'];

const day = (locale: string, daysFromToday: number) => ({
  time: formatDayFromToday(daysFromToday, locale),
  datetime: isoDayFromToday(daysFromToday),
});

export const makeHistoryItems = (ts: Ts, locale: string): TimelineItem[] => [
  {
    id: 'created',
    title: ts('library.data.history.created.title'),
    ...day(locale, -14),
    icon: 'file-text',
    tone: 'brand',
    description: ts('library.data.history.created.description'),
  },
  {
    id: 'sent',
    title: ts('library.data.history.sent.title'),
    ...day(locale, -12),
    icon: 'send',
    tone: 'info',
    badge: { label: ts('library.data.history.delivered'), icon: 'check', tone: 'success' },
    meta: [
      { icon: 'mail', label: 'billing@acme.example' },
      { icon: 'clock', label: '09:14' },
    ],
  },
  {
    id: 'reminder',
    title: ts('library.data.history.reminder.title'),
    ...day(locale, -3),
    icon: 'mail',
    tone: 'warning',
    description: ts('library.data.history.reminder.description'),
  },
  {
    id: 'paid',
    title: ts('library.data.history.paid.title'),
    ...day(locale, -1),
    icon: 'check',
    tone: 'success',
    badge: { label: ts('library.data.cellStack.paid'), tone: 'success' },
  },
];

export const makeFeedItems = (ts: Ts): TimelineItem[] => [
  {
    id: 'comment',
    title: ts('library.data.feed.comment'),
    time: ts('library.data.feed.minutesAgo', { count: 12 }),
    icon: 'message-square',
  },
  {
    id: 'upload',
    title: ts('library.data.feed.upload'),
    time: ts('library.data.list.hoursAgo', { count: 1 }),
    icon: 'upload',
  },
  {
    id: 'invite',
    title: ts('library.data.feed.invite'),
    time: ts('library.data.list.hoursAgo', { count: 3 }),
    icon: 'user-plus',
  },
  {
    id: 'branch',
    title: ts('library.data.feed.branch'),
    time: ts('library.data.relative.yesterday'),
    icon: 'git-branch',
  },
  {
    id: 'lock',
    title: ts('library.data.feed.lock'),
    time: ts('library.data.relative.yesterday'),
    icon: 'lock',
    tone: 'warning',
  },
];

export const makePipelineItems = (ts: Ts, locale: string): TimelineItem[] => [
  {
    id: 'received',
    title: ts('library.data.pipeline.received.title'),
    ...day(locale, -9),
    icon: 'inbox',
    status: 'done',
    description: ts('library.data.pipeline.received.description'),
  },
  {
    id: 'screen',
    title: ts('library.data.stages.phoneScreen'),
    ...day(locale, -6),
    status: 'done',
    badge: { label: ts('library.data.timeline.passed'), icon: 'check', tone: 'success' },
    meta: [
      { icon: 'clock', label: ts('library.data.pipeline.duration') },
      { icon: 'phone', label: ts('library.data.pipeline.remote') },
    ],
  },
  {
    id: 'interview',
    title: ts('library.data.pipeline.technicalInterview.title'),
    ...day(locale, 2),
    icon: 'users',
    status: 'current',
    description: ts('library.data.pipeline.technicalInterview.description'),
    meta: [{ icon: 'map-pin', label: ts('library.data.pipeline.warsawOffice') }],
  },
  { id: 'offer', title: ts('library.data.pipeline.offer'), icon: 'briefcase', status: 'upcoming' },
];
