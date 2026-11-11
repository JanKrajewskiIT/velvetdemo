import type { useI18n } from '@jankrajewskiit/i18n';
import type { ChatFeedback, ChatRole, ChatSource, PromptAttachment } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

export interface ChatEntry {
  id: number;
  role: ChatRole;
  content: string;
  time: string;
  sources?: ChatSource[];
  feedback: ChatFeedback;
}

export const CHAT_ASSISTANT_NAME = 'Velvet Assistant';
export const CHAT_REPLY_DELAY_MS = 1200;

export const createChatSeed = (ts: Ts): readonly ChatEntry[] => [
  {
    id: 1,
    role: 'system',
    content: ts('library.patterns.chat.seed.system'),
    time: '10:02',
    feedback: null,
  },
  {
    id: 2,
    role: 'user',
    content: ts('library.patterns.chat.seed.question'),
    time: '10:03',
    feedback: null,
  },
  {
    id: 3,
    role: 'assistant',
    content: ts('library.patterns.chat.seed.answer'),
    time: '10:03',
    sources: [
      { title: ts('library.patterns.chat.sources.reviewNotes') },
      { title: ts('library.patterns.chat.sources.accessibility') },
    ],
    feedback: null,
  },
];

export interface ChatReply {
  content: string;
  sources?: ChatSource[];
}

export const createChatReplies = (ts: Ts): readonly ChatReply[] => [
  {
    content: ts('library.patterns.chat.replies.focusOrder'),
    sources: [{ title: ts('library.patterns.chat.sources.reviewNotes') }],
  },
  {
    content: ts('library.patterns.chat.replies.contrast'),
    sources: [
      { title: ts('library.patterns.chat.sources.accessibility') },
      { title: ts('library.patterns.chat.sources.colourTokens') },
    ],
  },
  {
    content: ts('library.patterns.chat.replies.emptySummary'),
  },
];

export const createPromptSuggestions = (ts: Ts): string[] => [
  ts('library.patterns.promptInput.suggestions.summarise'),
  ts('library.patterns.promptInput.suggestions.accessibility'),
  ts('library.patterns.promptInput.suggestions.followUp'),
];

export const PROMPT_ATTACHMENTS: readonly PromptAttachment[] = [
  { id: 'notes', name: 'review-notes.pdf', size: '184 KB' },
  { id: 'mockup', name: 'checkout-mockup.png', size: '2.1 MB', icon: 'image' },
  { id: 'tokens', name: 'colour-tokens.json', size: '12 KB' },
];
export const PROMPT_REPLY_DELAY_MS = 2000;
