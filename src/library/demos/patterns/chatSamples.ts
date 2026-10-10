import type { ChatFeedback, ChatRole, ChatSource, PromptAttachment } from '@jankrajewskiit/ui';

export interface ChatEntry {
  id: number;
  role: ChatRole;
  content: string;
  time: string;
  sources?: ChatSource[];
  feedback: ChatFeedback;
}

export const CHAT_ASSISTANT_NAME = 'Velvet Assistant';
export const CHAT_USER_NAME = 'You';
export const CHAT_REPLY_DELAY_MS = 1200;

export const CHAT_SEED: readonly ChatEntry[] = [
  { id: 1, role: 'system', content: 'Design review · Checkout redesign', time: '10:02', feedback: null },
  {
    id: 2,
    role: 'user',
    content: 'Can you summarise the open points from today’s design review?',
    time: '10:03',
    feedback: null,
  },
  {
    id: 3,
    role: 'assistant',
    content:
      'Three points are still open: the contrast of the disabled button, the focus order in the address step, and the empty state of the order summary.',
    time: '10:03',
    sources: [{ title: 'Review notes, 12 Oct' }, { title: 'Accessibility checklist' }],
    feedback: null,
  },
];

export interface ChatReply {
  content: string;
  sources?: ChatSource[];
}

export const CHAT_REPLIES: readonly ChatReply[] = [
  {
    content:
      'I would start with the focus order: it blocks keyboard users, while the other two points are visual polish.',
    sources: [{ title: 'Review notes, 12 Oct' }],
  },
  {
    content:
      'The disabled button currently reaches a contrast ratio of 2.8:1. Raising the text token one step gets it above 4.5:1.',
    sources: [{ title: 'Accessibility checklist' }, { title: 'Colour tokens' }],
  },
  {
    content:
      'For the empty summary, a short message with a link back to the catalogue is enough. No illustration is needed.',
  },
];

export const PROMPT_SUGGESTIONS: readonly string[] = [
  'Summarise the review',
  'List accessibility risks',
  'Draft a follow-up message',
];

export const PROMPT_ATTACHMENTS: readonly PromptAttachment[] = [
  { id: 'notes', name: 'review-notes.pdf', size: '184 KB' },
  { id: 'mockup', name: 'checkout-mockup.png', size: '2.1 MB', icon: 'image' },
  { id: 'tokens', name: 'colour-tokens.json', size: '12 KB' },
];
export const PROMPT_REPLY_DELAY_MS = 2000;
