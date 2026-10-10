import type { NotificationItem } from '@jankrajewskiit/ui';
import { Button, NotificationCenter, NotificationList } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './NotificationsDemo.module.css';

const INITIAL_ITEMS: readonly NotificationItem[] = [
  {
    id: 1,
    title: 'Deploy finished',
    body: 'velvet-ui is live in production.',
    time: '2 min ago',
    unread: true,
    tone: 'success',
  },
  {
    id: 2,
    title: 'Storage almost full',
    body: 'You have used 92% of your quota.',
    time: '1 h ago',
    unread: true,
    tone: 'warning',
  },
  { id: 3, title: 'New comment', body: 'Anna replied to your review.', time: 'Yesterday', icon: 'message-square' },
];

export const NotificationsDemo = () => {
  const [items, setItems] = createSignal<readonly NotificationItem[]>(INITIAL_ITEMS);

  const markRead = (target: NotificationItem) =>
    setItems((list) => list.map((item) => (item.id === target.id ? { ...item, unread: false } : item)));
  const markAllRead = () => setItems((list) => list.map((item) => ({ ...item, unread: false })));

  return (
    <div class={styles.demo}>
      <div class={styles.header}>
        <span class={styles.title}>Inbox</span>
        <div class={styles.tools}>
          <Button size="xs" variant="ghost" onClick={() => setItems(INITIAL_ITEMS)}>
            Reset
          </Button>
          <NotificationCenter items={items()} onItemClick={markRead} onMarkAllRead={markAllRead} />
        </div>
      </div>
      <NotificationList items={items()} onItemClick={markRead} />
    </div>
  );
};
