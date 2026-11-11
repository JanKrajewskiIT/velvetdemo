import { useI18n } from '@jankrajewskiit/i18n';
import type { Comment } from '@jankrajewskiit/ui';
import { CommentThread } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

type Ts = ReturnType<typeof useI18n>['ts'];

const createInitialComments = (ts: Ts): Comment[] => [
  {
    id: 1,
    author: 'Jan Dabrowski',
    role: ts('library.patterns.comments.recruiter'),
    time: ts('library.patterns.comments.hours', { count: 3 }),
    body: ts('library.patterns.comments.strong'),
    likes: 2,
    replies: [
      {
        id: 11,
        author: 'Ada Kowalska',
        time: ts('library.patterns.comments.hours', { count: 2 }),
        body: ts('library.patterns.comments.agreed'),
        likes: 1,
        liked: true,
      },
      {
        id: 12,
        author: 'Ola Nowak',
        time: ts('library.patterns.comments.hours', { count: 2 }),
        body: ts('library.patterns.comments.thursday'),
      },
      {
        id: 13,
        author: 'Jan Dabrowski',
        time: ts('library.patterns.comments.hours', { count: 1 }),
        body: ts('library.patterns.comments.booked'),
      },
    ],
  },
  {
    id: 2,
    author: 'Ada Kowalska',
    time: ts('library.patterns.comments.minutes', { count: 40 }),
    body: ts('library.patterns.comments.reminder'),
    edited: true,
  },
];

export const CommentThreadDemo = () => {
  const { ts } = useI18n();
  const [comments, setComments] = createSignal<Comment[]>(createInitialComments(ts));

  return <CommentThread currentUser="Ada Kowalska" comments={comments()} onChange={setComments} />;
};
