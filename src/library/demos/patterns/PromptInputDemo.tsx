import type { PromptAttachment } from '@jankrajewskiit/ui';
import { PromptInput } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, Show } from 'solid-js';

import { PROMPT_ATTACHMENTS, PROMPT_REPLY_DELAY_MS, PROMPT_SUGGESTIONS } from './chatSamples';
import styles from './PromptInputDemo.module.css';

interface SentPrompt {
  text: string;
  attachmentCount: number;
}

const SUGGESTIONS = [...PROMPT_SUGGESTIONS];

export const PromptInputDemo = () => {
  const [attachments, setAttachments] = createSignal<PromptAttachment[]>([]);
  const [sent, setSent] = createSignal<SentPrompt | null>(null);
  const [generating, setGenerating] = createSignal(false);
  const [stopped, setStopped] = createSignal(false);
  let timer: number | undefined;

  const finish = () => {
    window.clearTimeout(timer);
    timer = undefined;
    setGenerating(false);
  };

  const submit = (text: string, files: PromptAttachment[]) => {
    if (generating()) return;
    setSent({ text, attachmentCount: files.length });
    setAttachments([]);
    setStopped(false);
    setGenerating(true);
    timer = window.setTimeout(finish, PROMPT_REPLY_DELAY_MS);
  };

  const stop = () => {
    finish();
    setStopped(true);
  };

  const attach = () => {
    const attached = new Set(attachments().map((file) => file.id));
    const next = PROMPT_ATTACHMENTS.find((file) => !attached.has(file.id));
    if (next) setAttachments((current) => [...current, next]);
  };

  const remove = (target: PromptAttachment) => {
    setAttachments((current) => current.filter((file) => file.id !== target.id));
  };

  onCleanup(() => window.clearTimeout(timer));

  return (
    <div class={styles.root}>
      <PromptInput
        label="Prompt for Velvet Assistant"
        placeholder="Describe what you need…"
        maxRows={5}
        suggestions={SUGGESTIONS}
        attachments={attachments()}
        onAttach={attach}
        onRemoveAttachment={remove}
        loading={generating()}
        onSubmit={submit}
        onStop={stop}
      />
      <p class={styles.status} role="status">
        <Show when={sent()} fallback="Nothing sent yet. Press Enter to send, Shift+Enter for a new line.">
          {(prompt) => (
            <>
              <Show when={generating()}>Generating a reply to: </Show>
              <Show when={stopped()}>Stopped. Last prompt: </Show>
              <Show when={!generating() && !stopped()}>Sent: </Show>
              <q>{prompt().text}</q>
              <Show when={prompt().attachmentCount > 0}> with {prompt().attachmentCount} attachment(s)</Show>
            </>
          )}
        </Show>
      </p>
    </div>
  );
};
