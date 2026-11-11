import { useI18n } from '@jankrajewskiit/i18n';
import type { PromptAttachment } from '@jankrajewskiit/ui';
import { PromptInput } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, Show } from 'solid-js';

import { createPromptSuggestions, PROMPT_ATTACHMENTS, PROMPT_REPLY_DELAY_MS } from './chatSamples';
import styles from './PromptInputDemo.module.css';

interface SentPrompt {
  text: string;
  attachmentCount: number;
}

export const PromptInputDemo = () => {
  const { ts } = useI18n();
  const suggestions = createPromptSuggestions(ts);
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
        label={ts('library.patterns.promptInput.label')}
        placeholder={ts('library.patterns.promptInput.placeholder')}
        maxRows={5}
        suggestions={suggestions}
        attachments={attachments()}
        onAttach={attach}
        onRemoveAttachment={remove}
        loading={generating()}
        onSubmit={submit}
        onStop={stop}
      />
      <p class={styles.status} role="status">
        <Show when={sent()} fallback={ts('library.patterns.promptInput.idle')}>
          {(prompt) => (
            <>
              <Show when={generating()}>{ts('library.patterns.promptInput.generating')}</Show>
              <Show when={stopped()}>{ts('library.patterns.promptInput.stopped')}</Show>
              <Show when={!generating() && !stopped()}>{ts('library.patterns.promptInput.sent')}</Show>
              <q>{prompt().text}</q>
              <Show when={prompt().attachmentCount > 0}>
                {ts('library.patterns.promptInput.attachments', { count: prompt().attachmentCount })}
              </Show>
            </>
          )}
        </Show>
      </p>
    </div>
  );
};
