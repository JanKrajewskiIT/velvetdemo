import { useI18n } from '@jankrajewskiit/i18n';
import type { NotificationItem } from '@jankrajewskiit/ui';
import { Button, NotificationCenter, NotificationList } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './NotificationsDemo.module.css';

type Ts = ReturnType<typeof useI18n>['ts'];

const makeItems = (ts: Ts): readonly NotificationItem[] => [
  {
    id: 1,
    title: 'Deploy finished',
    body: 'velvet-ui is live in production.',
    time: ts('library.feedback.demos.notifications.minutesAgo', { count: 2 }),
    unread: true,
    tone: 'success',
  },
  {
    id: 2,
    title: 'Storage almost full',
    body: 'You have used 92% of your quota.',
    time: ts('library.data.list.hoursAgo', { count: 1 }),
    unread: true,
    tone: 'warning',
  },
  {
    id: 3,
    title: 'New comment',
    body: 'Anna replied to your review.',
    time: ts('library.data.relative.yesterday'),
    icon: 'message-square',
  },
];

export const NotificationsDemo = () => {
  const { ts } = useI18n();
  const [items, setItems] = createSignal<readonly NotificationItem[]>(makeItems(ts));

  const markRead = (target: NotificationItem) =>
    setItems((list) => list.map((item) => (item.id === target.id ? { ...item, unread: false } : item)));
  const markAllRead = () => setItems((list) => list.map((item) => ({ ...item, unread: false })));

  return (
    <div class={styles.demo}>
      <div class={styles.header}>
        <span class={styles.title}>{ts('library.feedback.demos.notifications.inbox')}</span>
        <div class={styles.tools}>
          <Button size="xs" variant="ghost" onClick={() => setItems(makeItems(ts))}>
            {ts('library.feedback.demos.notifications.reset')}
          </Button>
          <NotificationCenter items={items()} onItemClick={markRead} onMarkAllRead={markAllRead} />
        </div>
      </div>
      <NotificationList items={items()} onItemClick={markRead} />
    </div>
  );
};
