import { useI18n } from '@jankrajewskiit/i18n';
import type { ChatFeedback } from '@jankrajewskiit/ui';
import { ChatMessage, ChatThread, PromptInput } from '@jankrajewskiit/ui';
import { createSignal, For, onCleanup, Show } from 'solid-js';

import {
  CHAT_ASSISTANT_NAME,
  CHAT_REPLY_DELAY_MS,
  type ChatEntry,
  createChatReplies,
  createChatSeed,
} from './chatSamples';
import styles from './ChatThreadDemo.module.css';

const formatTime = (): string => new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
const HISTORY_LIMIT = 50;

export const ChatThreadDemo = () => {
  const { ts } = useI18n();
  const seed = createChatSeed(ts);
  const replies = createChatReplies(ts);
  const authorOf = (entry: ChatEntry): string | undefined => {
    if (entry.role === 'assistant') return CHAT_ASSISTANT_NAME;
    if (entry.role === 'user') return ts('library.patterns.chat.userName');
    return undefined;
  };
  const [entries, setEntries] = createSignal<readonly ChatEntry[]>(seed);
  const [replying, setReplying] = createSignal(false);
  let nextId = seed.length + 1;
  let replyIndex = 0;
  let timer: number | undefined;

  const append = (entry: Omit<ChatEntry, 'id' | 'time' | 'feedback'>) => {
    const next = { ...entry, id: nextId++, time: formatTime(), feedback: null };
    setEntries((current) => [...current.slice(-(HISTORY_LIMIT - 1)), next]);
  };

  const stopReply = () => {
    window.clearTimeout(timer);
    timer = undefined;
    setReplying(false);
  };

  const submit = (text: string) => {
    if (replying() || text === '') return;
    append({ role: 'user', content: text });
    setReplying(true);
    timer = window.setTimeout(() => {
      const reply = replies[replyIndex % replies.length];
      replyIndex += 1;
      if (reply) append({ role: 'assistant', content: reply.content, sources: reply.sources });
      stopReply();
    }, CHAT_REPLY_DELAY_MS);
  };

  const setFeedback = (id: number, feedback: ChatFeedback) => {
    setEntries((current) => current.map((entry) => (entry.id === id ? { ...entry, feedback } : entry)));
  };

  const feedbackHandler = (entry: ChatEntry) =>
    entry.role === 'assistant' ? (feedback: ChatFeedback) => setFeedback(entry.id, feedback) : undefined;

  onCleanup(() => window.clearTimeout(timer));

  return (
    <div class={styles.root}>
      <ChatThread height={360} label={ts('library.patterns.chat.label')}>
        <For each={entries()}>
          {(entry) => (
            <ChatMessage
              role={entry.role}
              author={authorOf(entry)}
              time={entry.time}
              content={entry.content}
              sources={entry.sources}
              feedback={entry.feedback}
              onFeedback={feedbackHandler(entry)}
            />
          )}
        </For>
        <Show when={replying()}>
          <ChatMessage author={CHAT_ASSISTANT_NAME} streaming />
        </Show>
      </ChatThread>
      <PromptInput
        label={ts('library.patterns.chat.promptLabel')}
        placeholder={ts('library.patterns.chat.promptPlaceholder')}
        maxRows={4}
        loading={replying()}
        onSubmit={submit}
        onStop={stopReply}
      />
    </div>
  );
};
