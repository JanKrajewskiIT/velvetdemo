import type { Comment } from '@jankrajewskiit/ui';
import { CommentThread } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 1,
    author: 'Jan Dabrowski',
    role: 'Recruiter',
    time: '3h',
    body: 'Strong portfolio. I would move her straight to the technical interview.',
    likes: 2,
    replies: [
      {
        id: 11,
        author: 'Ada Kowalska',
        time: '2h',
        body: '@Jan agreed. I can take it on Thursday.',
        likes: 1,
        liked: true,
      },
      { id: 12, author: 'Ola Nowak', time: '2h', body: 'Thursday works for the panel too.' },
      { id: 13, author: 'Jan Dabrowski', time: '1h', body: 'Booked for 14:00. Invite sent.' },
    ],
  },
  {
    id: 2,
    author: 'Ada Kowalska',
    time: '40m',
    body: 'Reminder: check the GraphQL gap before the call.\nThe take-home did not cover it.',
    edited: true,
  },
];

export const CommentThreadDemo = () => {
  const [comments, setComments] = createSignal<Comment[]>(INITIAL_COMMENTS);

  return <CommentThread currentUser="Ada Kowalska" comments={comments()} onChange={setComments} />;
};
