import type { TimelineItem } from '@jankrajewskiit/ui';

import { formatDayFromToday, isoDayFromToday } from './dates';

const day = (daysFromToday: number) => ({
  time: formatDayFromToday(daysFromToday),
  datetime: isoDayFromToday(daysFromToday),
});

export const makeHistoryItems = (): TimelineItem[] => [
  {
    id: 'created',
    title: 'Invoice created',
    ...day(-14),
    icon: 'file-text',
    tone: 'brand',
    description: 'Drafted from the March usage report.',
  },
  {
    id: 'sent',
    title: 'Sent to customer',
    ...day(-12),
    icon: 'send',
    tone: 'info',
    badge: { label: 'Delivered', icon: 'check', tone: 'success' },
    meta: [
      { icon: 'mail', label: 'billing@acme.example' },
      { icon: 'clock', label: '09:14' },
    ],
  },
  {
    id: 'reminder',
    title: 'Payment reminder',
    ...day(-3),
    icon: 'mail',
    tone: 'warning',
    description: 'Automatic reminder, three days before the due date.',
  },
  {
    id: 'paid',
    title: 'Payment received',
    ...day(-1),
    icon: 'check',
    tone: 'success',
    badge: { label: 'Paid', tone: 'success' },
  },
];

export const makeFeedItems = (): TimelineItem[] => [
  { id: 'comment', title: 'Marek commented on the pricing page', time: '12 min ago', icon: 'message-square' },
  { id: 'upload', title: 'Anna uploaded brand-guidelines.pdf', time: '1 h ago', icon: 'upload' },
  { id: 'invite', title: 'Ewa was invited as a viewer', time: '3 h ago', icon: 'user-plus' },
  { id: 'branch', title: 'Piotr opened branch release/2.4', time: 'Yesterday', icon: 'git-branch' },
  { id: 'lock', title: 'Workspace access policy updated', time: 'Yesterday', icon: 'lock', tone: 'warning' },
];

export const makePipelineItems = (): TimelineItem[] => [
  {
    id: 'received',
    title: 'Application received',
    ...day(-9),
    icon: 'inbox',
    status: 'done',
    description: 'Submitted through the careers page.',
  },
  {
    id: 'screen',
    title: 'Phone screen',
    ...day(-6),
    status: 'done',
    badge: { label: 'Passed', icon: 'check', tone: 'success' },
    meta: [
      { icon: 'clock', label: '30 min' },
      { icon: 'phone', label: 'Remote' },
    ],
  },
  {
    id: 'interview',
    title: 'Technical interview',
    ...day(2),
    icon: 'users',
    status: 'current',
    description: 'Pair programming with the platform team.',
    meta: [{ icon: 'map-pin', label: 'Warsaw office' }],
  },
  { id: 'offer', title: 'Offer', icon: 'briefcase', status: 'upcoming' },
];
