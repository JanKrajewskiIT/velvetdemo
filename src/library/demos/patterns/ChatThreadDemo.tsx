import type { ChatFeedback } from '@jankrajewskiit/ui';
import { ChatMessage, ChatThread, PromptInput } from '@jankrajewskiit/ui';
import { createSignal, For, onCleanup, Show } from 'solid-js';

import {
  CHAT_ASSISTANT_NAME,
  CHAT_REPLIES,
  CHAT_REPLY_DELAY_MS,
  CHAT_SEED,
  CHAT_USER_NAME,
  type ChatEntry,
} from './chatSamples';
import styles from './ChatThreadDemo.module.css';

const formatTime = (): string => new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

const authorOf = (entry: ChatEntry): string | undefined => {
  if (entry.role === 'assistant') return CHAT_ASSISTANT_NAME;
  if (entry.role === 'user') return CHAT_USER_NAME;
  return undefined;
};

export const ChatThreadDemo = () => {
  const [entries, setEntries] = createSignal<readonly ChatEntry[]>(CHAT_SEED);
  const [replying, setReplying] = createSignal(false);
  let nextId = CHAT_SEED.length + 1;
  let replyIndex = 0;
  let timer: number | undefined;

  const append = (entry: Omit<ChatEntry, 'id' | 'time' | 'feedback'>) => {
    setEntries((current) => [...current, { ...entry, id: nextId++, time: formatTime(), feedback: null }]);
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
      const reply = CHAT_REPLIES[replyIndex % CHAT_REPLIES.length];
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
      <ChatThread height={360} label="Design review conversation">
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
        label="Message to Velvet Assistant"
        placeholder="Ask about the design review…"
        maxRows={4}
        loading={replying()}
        onSubmit={submit}
        onStop={stopReply}
      />
    </div>
  );
};
